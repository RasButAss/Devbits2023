import React,{ useState } from 'react'
import './formpopup.css'

const Form = ({trigger, setTrigger, data}) => {
  const CompanyData = data["Company Data"];
  const CompanyName = CompanyData['2. name'];
  const QuoteData = data['Global Quote'];
  const ChangePercentage = QuoteData['10. change percent'];
  const Price = QuoteData['05. price'];
  const Currency = CompanyData['8. currency'];
  const [orderType, setOrderType] = useState('market')
  const [limitCheckboxOn, setLimitCheckboxOn] = useState(false);
  const [stopCheckboxOn, setStopCheckboxOn] = useState(false);
  const [targetCheckboxOn, setTargetCheckboxOn] = useState(false);

  const [quantity, setQuantity] = useState(null);
  const [limit, setLimit] = useState(null);
  const [stop, setStop] = useState(null);
  const [target, setTarget] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      'user' : {
      'quantity': quantity,
      'limit': limit,
      'target': target,
      'stop': stop,
      }
    }
    setTrigger(false);
  }
  
  return (trigger) ? (
    <div className='form-popup'>
      <div className='form-popup-inner'>
        <form onSubmit={handleSubmit}>
        <div className='form-popup-close-div'>
          <button className='form-popup-close-btn' onClick={() => {setTrigger(false)}}>close</button>
        </div>
        <div className='form-popup-company-details'>
          <div>{CompanyName}</div>
          <div>LTP : {Price}{Currency}</div>
        </div>
        <div className='form-popup-buysell-container'>
            <div className='form-popup-buysell-btn buy-btn'>buy</div>
            <div className='form-popup-buysell-btn sell-btn'>sell</div>
        </div>
        <div className='form-popup-checkbox-order'>
          <input type="checkbox" id="market" name="market" value="market" onClick={() => {setOrderType('market')}} />
          <label for="market">Market</label><br />
          <input type="checkbox" id="limit" name="limit" value="limit" onClick={() => {setOrderType('limit'); setLimitCheckboxOn(!limitCheckboxOn)}}  />
          <label for="limit">Limit</label><br />
          {limitCheckboxOn ? <input type="text" id="limit-input" name="limit-input" onChange={(e) => {setLimit(e.target.value)}} value={limit} /> : null}
        </div>
        <div className='form-popup-checkbox-target-stop'>
          <input type="checkbox" id="target" name="target" value="target" onClick={() => {setTargetCheckboxOn(!targetCheckboxOn)}}  />
          <label for="target">Target</label><br />
          {targetCheckboxOn ? <input type="text" id="target-input" name="target-input" onChange={(e) => {setTarget(e.target.value)}} value={target} /> : null}
          <input type="checkbox" id="stop" name="stop" value="stop" onClick={() => {setStopCheckboxOn(!stopCheckboxOn)}} />
          <label for="stop">StopLoss</label><br />
          {stopCheckboxOn ? <input type="text" id="stop-input" name="stop-input" onChange={(e) => {setStop(e.target.value)}} value={stop} /> : null}
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