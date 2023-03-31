import React, {useState, useEffect} from 'react'
import Navbar from '../Landing/Componenets/Navbar/Navbar'
import './news.css'
import NewsCard from './NewsCard/NewsCard'

const News = () => {
  const [newsData, setNewsData] = useState([])
  useEffect(() => {
    const getNewsData = async () => {
      const results = await fetch('https://www.alphavantage.co/query?function=NEWS_SENTIMENT&sort=LATEST&apikey=8MLLEHJ2IYQ8P50O')
      const data = await results.json()
      'feed' in data ? setNewsData(data['feed']) : setNewsData([])
    }
    getNewsData();
  },[]);
  return (
    <div className="news-main-div">
      <Navbar />
      <div className='news-content-container'>
        <div className='news-main-heading'>
          <h1>Finshorts</h1>
        </div>
      </div>
      <div className='card-container'>
          {newsData.map((element, index) => {
            return <NewsCard key={index} imgurl={element['banner_image']} heading={element['title']} summary={element['summary']} redirect={element['url']} />
          })
          }
      </div>
    </div>
  )
}

export default News