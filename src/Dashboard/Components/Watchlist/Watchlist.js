import React, { useState , useEffect } from 'react'
import './watchlist.css'
import WatchlistCard from './WatchlistCard/WatchlistCard'
import Search from '../Search/Search'

export default function Watchlist() {
  const [watchlistData, setWatchlistData] = useState([])
  
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

