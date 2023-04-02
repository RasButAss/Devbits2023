import React,{ useState, useEffect, useRef } from 'react'
import './formpopup.css'
import close from './close.png'

const Form = ({trigger, setTrigger, data}) => {
  const companySymbol = data.stock_id;
  const [formData, setFormData] = useState([]);
  const didFetchQuote = useRef(true)
  if(trigger) {
    async function getQuoteData(companySymbol) {
      try {
        const data = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${companySymbol}&apikey=8MLLEHJ2IYQ8P50O`)
        return await data.json()
      } catch (err) {
        console.log("No quote data");
        return err;
      }
    }
    if(didFetchQuote.current) {
      getQuoteData(companySymbol).then((data) => {'Global Quote' in data ? setFormData(data['Global Quote']) : console.log(data)})
      didFetchQuote.current = false;
    }
  }
  const[price, setPrice] = useState(null);
  const[changePercentage, setChangePercentage] = useState(null);

  useEffect(() => {
    if(formData) {
      setPrice(formData['05. price']);
      setChangePercentage(formData['10. change percent']);
    }
    console.log(formData);
  },[formData])
  const [orderType, setOrderType] = useState('market')
  const date = new Date();
  const [buy,setBuy] = useState(true)

  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);
  const [userInfo, setUserInfo] = useState({})
  useEffect(() => {
    fetch('https://prachi003.pythonanywhere.com/get_user_info?' + new URLSearchParams({
      user_id: sessionStorage.getItem("user_id")
    })).then(res => res.json()).then(res => setUserInfo(res))
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    if((Number(quantity)*Number(price)) <= userInfo.info.balance) {
      const currentTime = date.toJSON()
      if(buy){
        fetch('https://prachi003.pythonanywhere.com/buy', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user_id: Number(sessionStorage.getItem("user_id")),stock_id: companySymbol,entry_price: Number(price),quantity: Number(quantity),time:currentTime })
      }).then(res => res.json()).then(res => console.log(res)).then(() => {window.location.reload()});
      } else {
        fetch('https://prachi003.pythonanywhere.com/sell', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user_id: sessionStorage.getItem("user_id"),stock_id: companySymbol,exit_price: Number(price),quantity: Number(quantity),time:currentTime })
      }).then(res => res.json()).then(res => console.log(res)).then(() => {window.location.reload()})
      }
      setTrigger(false);
    } else {
      setError(true);
    }
  }
  
  return (trigger) ? (
    <div className='form-popup'>
      <div className='form-popup-inner'>
        <form onSubmit={handleSubmit}>
        <div className='form-popup-close-div'>
          <button className='form-popup-close-btn' onClick={() => {setTrigger(false)}}><img src={close} /></button>
        </div>
        <div className='form-popup-company-details'>
          <div className='company-name-form'>{companySymbol}</div>
          <div>{price}</div>
          <div>{changePercentage}</div>
        </div>
        <div className='form-popup-buysell-container'>
            <div className='form-popup-buysell-btn buy-btn' onClick={() => {setBuy(true)}} style={buy ? {backgroundColor: "black", color: "green"}: null}>buy</div>
            <div className='form-popup-buysell-btn sell-btn' onClick={() => {setBuy(false)}} style={!buy ? {backgroundColor: "black", color: "red"}: null}>sell</div>
        </div>
        <div className='form-popup-checkbox-order'>
          <div className='market-order'>
          <input type="checkbox" id="market" name="market" value="market" onClick={() => {setOrderType('market')}} />
          <label for="market">Market</label><br />
          </div>
        </div>
        <div className='form-popup-quantity'>
          <label for='quantity'>Quantity</label>
          <input type="text" id="quantity" name="quantity" onChange={(e) => {setQuantity(e.target.value)}} value={quantity} />
        </div>
          <button className='form-popup-confirm-btn confirm-btn' type='submit'>confirm</button>
        </form>
        {error ? <p>Hey hey hey ... Easy there</p>: null}
      </div>
    </div>
  ) : null;
}

export default Form