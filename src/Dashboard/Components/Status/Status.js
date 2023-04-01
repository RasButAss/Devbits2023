import React, { useState, useRef, useEffect } from 'react'
import './status.css'
import Table from '../Table/Table'
import StatusNav from '../StatusNav/StatusNav'
import axios from 'axios'
import TradingViewWidget, { Themes } from 'react-tradingview-widget'

const Status = () => {
  const [page, setPage] = useState('buy');
  return (
    <div className='dashboard-status-main-div'>
      <StatusNav setPage={setPage} page={page} />
      {page === 'buy' ? <Table page='buy' /> : null}
      {page === 'sell' ? <Table page='sell' /> : null}
      {page === 'history' ? <Table page='history' /> : null}
      {page === 'graph' ? <div className='details-graph-status'>
        <TradingViewWidget
          theme={Themes.DARK}
          autosize={false}
          height={window.innerHeight- 140}
          width={window.innerWidth - 400}
        />
      </div> : null}
    </div>
  )
}

export default Status