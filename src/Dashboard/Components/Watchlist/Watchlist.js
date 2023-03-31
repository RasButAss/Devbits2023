import React, { useState, useEffect, useRef } from 'react'
import './watchlist.css'
import WatchlistCard from './WatchlistCard/WatchlistCard'
import Search from '../Search/Search'
import axios from 'axios'

export default function Watchlist() {
  const [watchlistData, setWatchlistData] = useState([])

  useEffect(() => {
    fetch('https://prachi003.pythonanywhere.com/get_user_watchlist?' + new URLSearchParams({ 
    })).then(res => res.json()).then(res => console.log(res))
  },[])

  useEffect(() => {
    console.log(watchlistData);
  }, [watchlistData])
  return (
    <div className='watchlist-main-div'>
      <Search setWatchlistData={setWatchlistData} />
      {watchlistData.map((element) => {
        return (<><WatchlistCard element={element} /></>)
      })}
    </div>
  )
}

