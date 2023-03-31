import React,{ useState } from 'react'
import './formpopup.css'
import close from './close.png'

const Form = ({trigger, setTrigger, data}) => {
  const CompanyData = data["Company Data"];
  const CompanyName = CompanyData['2. name'];
  const QuoteData = data['Global Quote'];
  const ChangePercentage = QuoteData['10. change percent'];
  const Price = QuoteData['05. price'];
  const Currency = CompanyData['8. currency'];
  const [orderType, setOrderType] = useState('market')

  const [quantity, setQuantity] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      'user' : {
      'quantity': quantity,
      'price': Number(Price),
      }
    }
    fetch('http://127.0.0.1:5000/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  }).then(res => res.json()).then(res => console.log(res))
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
          <div className='company-name-form'>{CompanyName}</div>
          <div>{Price}{Currency}</div>
          <div>{ChangePercentage}</div>
        </div>
        <div className='form-popup-buysell-container'>
            <div className='form-popup-buysell-btn buy-btn'>buy</div>
            <div className='form-popup-buysell-btn sell-btn'>sell</div>
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