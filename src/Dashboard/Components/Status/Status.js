import React from 'react'
import './status.css'

const Status = () => {
  return (
    <div className='dashboard-status-main-div'>
      <div class="dashboard-table-wrapper">
        <div>Order Date</div>
        <div>Instrument</div>
        <div>Order Type</div>
        <div>Quantity</div>
        <div>Entry Price</div>
        <div>Investment</div>
        <div>Target</div>
        <div>StopLoss</div>
        <div>LTP</div>
        <div>Fee/Taxes</div>
        <div>Profit/Loss</div>
        <div>Exit</div>

        {/*Add row divs*/}
        <div class='dashboard-table-row'>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>Hello</div>
        </div>
      </div>

    </div>
  )
}

export default Status