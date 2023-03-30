import React, { useState } from 'react'
import './watchlistcard.css'
import Form from '../../Form/Form'
import { Link } from 'react-router-dom'

const WatchlistCard = ({element}) => {
  const [trigger, setTrigger] = useState(false)
  const CompanyData = element["Company Data"];
  const CompanyName = CompanyData['2. name'];
  const QuoteData = element['Global Quote'];
  const ChangePercentage = QuoteData['10. change percent'];
  const Price = QuoteData['05. price'];
  return (
    <div className='watchlist-card'>
      <div className='watchlist-card-content'>
        <div className='watchlist-card-company-name'>{CompanyName}</div>
        <div className='watchlist-card-percentage'>{ChangePercentage}</div>
        <div classname='watchlist-card-price'>{Price}</div>
      </div>
      <div className='watchlist-card-buttons'>
        <button onClick={() => {setTrigger(true)}} className='watchlist-card-button buy'>BUY</button>
        <button onClick={() => {setTrigger(true)}} className='watchlist-card-button sell'>SELL</button>
        <Link to={`/details/${CompanyData['1. symbol']}`} className='watchlist-card-button graph'>DETAILS</Link>
      </div>
      <Form trigger={trigger} setTrigger={setTrigger} data={element} />
    </div>
  )
}

export default WatchlistCard