import React, { useState, useEffect, useRef, createContext } from 'react'
import './details.css'
import { useParams } from 'react-router-dom'
import Navbar from '../Landing/Componenets/Navbar/Navbar'
import NewsCard from '../News/NewsCard/NewsCard'
import TradingViewWidget, { Themes } from 'react-tradingview-widget'

const CompanyId = createContext();

const Details = () => {
  const { id } = useParams()
  const [companyOverview, setCompanyOverview] = useState({})
  const [companyNews, setCompanyNews] = useState([])
  const [companyTimeSeries, setCompanyTimeSeries] = useState([])
  const didFetch = useRef(true)
  useEffect(() => {
    async function getCompanyNews(id) {
      const data = await fetch(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${id}&sort=LATEST&apikey=8MLLEHJ2IYQ8P50O`)
      const results = await data.json();
      setCompanyNews('feed' in results ? results['feed'] : []);
    }
    async function getCompanyTimeSeries(id) {
      const data = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${id}&outputsize=full&apikey=8MLLEHJ2IYQ8P50O`)
      const results = await data.json();
      const newarr = []
      if ('Time Series (Daily)' in results) {
        for (const key in results['Time Series (Daily)']) {
          const timeSeries = results['Time Series (Daily)']
          const each = timeSeries[key]
          const newarrele = {
            date: new Date(key),
            open: +each['1. open'],
            high: +each['2. high'],
            low: +each['3. low'],
            close: +each['4. close'],
            volume: +each['6. volume'],
            adj_close: +each['5. adjusted close']
          }
          newarr.push(newarrele)
        }
        setCompanyTimeSeries(newarr)
      }
    }
    async function getCompanyOverview(id) {
      const data = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${id}&apikey=8MLLEHJ2IYQ8P50O`)
      const results = await data.json();
      setCompanyOverview('Symbol' in results ? results : {});
    }
    if (didFetch.current) {
      getCompanyOverview(id)
      getCompanyTimeSeries(id)
      getCompanyNews(id)
      didFetch.current = false;
    }
  }, [])

  return (
    <div className='details-main-div'>
      <Navbar />
      <div className='company-details-content'>
        <div className='company-details-header'>
          <div className='company-details-heading'>
            <h1>{companyOverview['Name']}</h1>
          </div>
        </div>
        <div className='company-overview'>
          <h2>About</h2>
          <p>{companyOverview['Description']}</p>
        </div>
        <div className='company-quick-overview'>
          <div>Sector : {companyOverview['Sector']}</div>
          <div>Industry : {companyOverview['Industry']}</div>
          <div>Exchange : {companyOverview['Exchange']}</div>
          <div>Country : {companyOverview['Country']}</div>
          <div></div>
        </div>
        <div className='company-key-stats'>
          <h2>Key Stats</h2>
          <div>Market capitalization : {companyOverview['MarketCapitalization']} {companyOverview['Currency']}</div>
          <div>Price to Earning Ratio : {companyOverview['PERatio']}</div>
          <div>Dividends Yield : {companyOverview['DividendYield']}</div>
          <div>Basic EPS : {companyOverview['EPS']}</div>
          <div>Dividend Per share : {companyOverview['DividendPerShare']}</div>
          <div>Return on Assets : {companyOverview['ReturnOnAssetsTTM']}</div>
        </div>
        <TradingViewWidget
          symbol={id}
          theme={Themes.DARK}
        />
        <div className='card-container'>
          {companyNews.slice(0, 6).map((element, index) => {
            return <NewsCard key={index} imgurl={element['banner_image']} heading={element['title']} summary={element['summary']} redirect={element['url']} />
          })
          }
        </div>
      </div>
    </div>
  )
}

export default Details