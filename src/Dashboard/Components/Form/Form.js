import React,{ useState } from 'react'
import './formpopup.css'
import close from './close.png'

const Form = ({trigger, setTrigger, data}) => {
  // const CompanyData = data["Company Data"];
  // const CompanyName = CompanyData['2. name'];
  const QuoteData = data['Global Quote'];
  const ChangePercentage = QuoteData['10. change percent'];
  const Price = QuoteData['05. price'];
  const CompanySymbol = QuoteData['01. symbol']
  // const Currency = CompanyData['8. currency'];
  const [orderType, setOrderType] = useState('market')
  const date = new Date();
  const [buy,setBuy] = useState(true)

  const [quantity, setQuantity] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentTime = date.toJSON()
    if(buy){
      fetch('https://prachi003.pythonanywhere.com/buy', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user_id: Number(sessionStorage.getItem("user_id")),stock_id: CompanySymbol,entry_price: Number(Price),quantity: Number(quantity),time:currentTime })
    }).then(res => res.json()).then(res => console.log(res))
    } else {
      fetch('https://prachi003.pythonanywhere.com/sell', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user_id: sessionStorage.getItem("user_id"),stock_id: CompanySymbol,exit_price: Price,quantity: quantity,time:currentTime })
    }).then(res => res.json()).then(res => console.log(res))
    }
    setTrigger(false);
  }
  
  return (trigger) ? (
    <div className='form-popup'>
      <div className='form-popup-inner'>
        <form onSubmit={handleSubmit}>
        <div className='form-popup-close-div'>
          <button className='form-popup-close-btn' onClick={() => {setTrigger(false)}}><img src={close} /></button>
        </div>
        <div className='form-popup-company-details'>
          <div className='company-name-form'>{CompanySymbol}</div>
          <div>{Price}</div>
          <div>{ChangePercentage}</div>
        </div>
        <div className='form-popup-buysell-container'>
            <div className='form-popup-buysell-btn buy-btn' onClick={() => {setBuy(true)}}>buy</div>
            <div className='form-popup-buysell-btn sell-btn' onClick={() => {setBuy(false)}}>sell</div>
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
      </div>
    </div>
  ) : null;
}

export default Form