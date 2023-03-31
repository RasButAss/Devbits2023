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
  const didFetch = useRef(true)
  useEffect(() => {
    async function getCompanyNews(id) {
      const data = await fetch(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${id}&sort=LATEST&apikey=8MLLEHJ2IYQ8P50O`)
      const results = await data.json();
      setCompanyNews('feed' in results ? results['feed'] : []);
    }
    async function getCompanyOverview(id) {
      const data = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${id}&apikey=8MLLEHJ2IYQ8P50O`)
      const results = await data.json();
      setCompanyOverview('Symbol' in results ? results : {});
    }
    if (didFetch.current) {
      getCompanyOverview(id)
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
          <div><strong>Sector : </strong>{companyOverview['Sector']}</div>
          <div><strong>Industry : </strong>{companyOverview['Industry']}</div>
          <div><strong>Exchange : </strong>{companyOverview['Exchange']}</div>
          <div><strong>Country : </strong>{companyOverview['Country']}</div>
          <div></div>
        </div>
        <div className='company-key-stats'>
          <h2>Key Stats</h2>
          <div><strong>Market capitalization : </strong> {companyOverview['MarketCapitalization']} {companyOverview['Currency']}</div>
          <div><strong>Price to Earning Ratio : </strong> {companyOverview['PERatio']}</div>
          <div><strong>Dividends Yield : </strong> {companyOverview['DividendYield']}</div>
          <div><strong>Basic EPS : </strong> {companyOverview['EPS']}</div>
          <div><strong>Dividend Per share : </strong> {companyOverview['DividendPerShare']}</div>
          <div><strong>Return on Assets : </strong> {companyOverview['ReturnOnAssetsTTM']}</div>
        </div>
        <div className='details-graph'>
          <TradingViewWidget
            symbol={id}
            theme={Themes.DARK}
            autosize={false}
            height={window.innerHeight}
            width={window.innerWidth-200}
          />
        </div>
        <div className='card-container-details'>
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