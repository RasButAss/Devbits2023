import React, { useState, useEffect } from 'react'
import './search.css'
import search from './search.svg'

const Search = ({ setWatchlistData }) => {

  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([])
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  async function getQuoteData(companySymbol) {
    try {
      const data = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${companySymbol}&apikey=8MLLEHJ2IYQ8P50O`)
      return await data.json()
    } catch (err) {
      console.log("No quote data");
      return err;
    }
  }

  function handleOnclick(event) {
    // const companyData = JSON.parse(event.target.dataset.value)
    // console.log(event);
    // console.log(companyData); 
    fetch('https://prachi003.pythonanywhere.com/buy', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user_id: 1,stock_id: 1,entry_price: 123,quantity: 12,time:'123' })
  }).then(res => res.json()).then(res => console.log(res))
    // getQuoteData(companyData['1. symbol']).then((data) => {'Global Quote' in data ? setWatchlistData((prevData) => {return [...prevData,{...data, ...{'Company Data': companyData}}]}) : console.log(data)})
    setSearchResults([]);
  }
  function handleSearchSubmit(e) {
    e.preventDefault();
    async function getSearchData(value) {
      try {
        const data = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=8MLLEHJ2IYQ8P50O`);
        return await data.json()
      } catch (err) {
        console.log("No more search results");
        return err;
      }
    }
    getSearchData(value).then((data) => { 'bestMatches' in data ? setSearchResults(data.bestMatches) : setSearchResults([]) });
  }
  return (
    <div className='search-main-div'>
      <form onSubmit={handleSearchSubmit} className='search-form'>
        <input type="text" id="watchlist-search" name="watchlist-search" className='watchlist-search' placeholder='Search' value={value} onChange={(e) => { handleChange(e) }} />
        <button className="search-btn" type='submit' value='submit'><img src={search} /></button>
      </form>
      <div className='search-dropdown-div'>
        {searchResults.map((element, index) => {
          return (<div className='search-dropdown-row' key={index} onClick={handleOnclick} data-value={JSON.stringify(element)} >{element['2. name']}  {element['1. symbol']}</div>)
        })}
      </div>
    </div>
  )
}

export default Search