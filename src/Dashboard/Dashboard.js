import React from 'react'
import './dashboard.css'
import Watchlist from './Components/Watchlist/Watchlist'
import Navbar from './Components/Navbar/Navbar'
import Status from './Components/Status/Status'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className='dashboard-body'>
        <Watchlist />
        <Status />
      </div>
    </div>
  )
}

export default Dashboard