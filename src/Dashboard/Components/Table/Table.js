import React, {useState, useEffect} from 'react'
import './table.css'

const Table = ({page, data}) => {
  
  return (
    <div>
      <div class="dashboard-table-wrapper">
        <div>Order Date</div>
        <div>Instrument</div>
        <div>Order Type</div>
        <div>Quantity</div>
        <div>Entry Price</div>
        <div>Investment</div>
        <div>LTP</div>
        <div>Profit/Loss</div>
        <div className="exit-table-header">Exit</div>

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
        </div>
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
        </div>
      </div>
    </div>
  )
}

export default Table