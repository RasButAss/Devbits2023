import React, {useEffect, useState} from 'react'
import './statusnav.css'

const StatusNav = ({setPage, page}) => {
  const activatedButton = {
    backgroundColor: 'white',
    color: 'black',
  }
  const [userInfo, setUserInfo] = useState({})
  useEffect(() => {
    fetch('https://prachi003.pythonanywhere.com/get_user_info?' + new URLSearchParams({
      user_id: sessionStorage.getItem("user_id")
    })).then(res => res.json()).then(res => setUserInfo(res))
  },[])
  useEffect(() => {
    console.log(userInfo.info)
  },[userInfo])
  return (
    <div className='statusnav-main-div'>
      <div className="statusnav-links">
        <button style={page === 'buy' ? activatedButton : null} onClick={() => setPage('buy')}>Buy</button>
        <button style={page === 'sell' ? activatedButton : null} onClick={() => setPage('sell')}>Sell</button>
        <button style={page === 'history' ? activatedButton : null} onClick={() => setPage('history')}>History</button>
        <button style={page === 'graph' ? activatedButton : null} onClick={() => setPage('graph')}>Graph</button>
      </div>
      <div className="statusnav-pnl-data">
        <p>Holdings: {'info' in userInfo ? userInfo.info.holdings:null}</p>
        <p>Balance : {'info' in userInfo ? userInfo.info.balance:null}</p>
      </div>
    </div>
  )
}

export default StatusNav