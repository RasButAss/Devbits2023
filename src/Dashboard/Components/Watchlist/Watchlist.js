import React, { useState, useEffect, useRef } from 'react'
import './watchlist.css'
import WatchlistCard from './WatchlistCard/WatchlistCard'
import Search from '../Search/Search'

export default function Watchlist() {
  const [watchlistData, setWatchlistData] = useState([])
  // const CompanyData = []
  // res.map((e) => {
  //   fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${e.stock_id}&apikey=8MLLEHJ2IYQ8P50O`)
  //   .then((data) => {data.json()})
  //   .then((data) => {setWatchlistData((prevData) => {})})
  // })
  // setWatchlistData((prevData) => {return [...prevData, data]})}
  // fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${e.stock_id}&apikey=8MLLEHJ2IYQ8P50O`)
  //     .then((data) => {data.json()})
  //     .then((data) => {console.log(data)})
  // for(let i = 0; i < res.length; i++) {
  //   const e = res[i];
  //   fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${e.stock_id}&apikey=8MLLEHJ2IYQ8P50O`)
  //   .then((data) => {data.json()})
  //   .then((data) => {'Global Quote' in data ? setWatchlistData(data) : setWatchlistData(e.stock_id)})
  // }

  useEffect(() => {
    fetch('https://prachi003.pythonanywhere.com/get_user_watchlist?' + new URLSearchParams({ 
      user_id: sessionStorage.getItem("user_id")
    })).then(res => res.json()).then((res) => {setWatchlistData(res)})
  },[])

  useEffect(() => {
    console.log(watchlistData);
  }, [watchlistData])
  return (
    <div className='watchlist-main-div'>
      <Search />
      {watchlistData.map((element) => {
        return (<><WatchlistCard element={element} /></>)
      })}
    </div>
  )
}

