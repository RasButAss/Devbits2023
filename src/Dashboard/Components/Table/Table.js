import React, {useState, useEffect} from 'react'
import './table.css'

const Table = ({page}) => {
  const [data, setData] = useState([])
  useEffect(() => {
    if(page === 'buy') {
      fetch('https://prachi003.pythonanywhere.com/get_user_buys?' + new URLSearchParams({
        user_id: Number(sessionStorage.getItem("user_id"))
      })).then(res => res.json()).then(res => setData(res))
    } else if (page === 'sell') {
      fetch('https://prachi003.pythonanywhere.com/get_user_sale?' + new URLSearchParams({
        user_id: Number(sessionStorage.getItem("user_id"))
      })).then(res => res.json()).then(res => setData(res))
    } else if (page === 'history') {
      fetch('https://prachi003.pythonanywhere.com/get_user_buys?' + new URLSearchParams({
        user_id: Number(sessionStorage.getItem("user_id"))
      })).then(res => res.json()).then(res => setData(res))
    }
  },[])
  
  useEffect(() => {
    console.log(data);
  },[data])
  return (
    <div>
      <div class="dashboard-table-wrapper">
        <div>Order Date</div>
        <div>Instrument</div>
        <div>Order Type</div>
        <div>Quantity</div>
        <div>Entry Price</div>
        <div className='exit-table-header'>Investment</div>

        {/*Add row divs*/}
        {data.map((e) => {
          return (
          <div class='dashboard-table-row'>
            <div>{e.time}</div>
            <div>{e.stock_id}</div>
            <div>{page}</div>
            <div>{e.quantity}</div>
            <div>{e.entry_price}</div>
            <div>{e.entry_price * e.quantity}</div>
          </div>
          )
        })}
        </div>
    </div>
  )
}

export default Table