import React from 'react'
import './watchlistcard.css'

const WatchlistCard = () => {
  return (
    <div className='watchlist-card'>
      <div className='watchlist-card-content'>
        <div className='watchlist-card-company-name'>COMPANY</div>
        <div className='watchlist-card-percentage'>2.3%</div>
        <div classname='watchlist-card-price'>12345</div>
      </div>
      <div className='watchlist-card-buttons'>
        <button className='watchlist-card-button buy'>B</button>
        <button className='watchlist-card-button sell'>S</button>
        <button className='watchlist-card-button graph'>D</button>
      </div>
    </div>
  )
}

export default WatchlistCard