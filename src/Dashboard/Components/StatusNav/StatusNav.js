import React from 'react'
import './statusnav.css'

const StatusNav = ({setPage, page}) => {
  const activatedButton = {
    backgroundColor: 'white',
    color: 'black',
  }
  return (
    <div className='statusnav-main-div'>
      <div className="statusnav-links">
        <button style={page === 'active' ? activatedButton : null} onClick={() => setPage('active')}>Active Positions</button>
        <button style={page === 'pending' ? activatedButton : null} onClick={() => setPage('pending')}>Pending Orders</button>
        <button style={page === 'history' ? activatedButton : null} onClick={() => setPage('history')}>Day's History</button>
      </div>
      <div className="statusnav-pnl-data">
        <p>P/L (Today) : 0.00</p>
        <p>P/L (Active Positions) : 0.00</p>
      </div>
    </div>
  )
}

export default StatusNav