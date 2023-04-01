import React, { useState, useEffect } from 'react'
import './search.css'
import search from './search.svg'

const Search = () => {

  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([])
  const handleChange = (e) => {
    setValue(e.target.value);
  }


  function handleOnclick(event) {
    const companySymbol = event.target.dataset.value
    fetch('https://prachi003.pythonanywhere.com/add_to_watchlist', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user_id: sessionStorage.getItem("user_id"), stock_id: String(companySymbol)})
    }).then(res => res.json()).then(res => console.log(res)).then(() => {window.location.reload()})
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
          return (<div className='search-dropdown-row' key={index} onClick={handleOnclick} data-value={element['1. symbol']} >{element['2. name']}  {element['1. symbol']}</div>)
        })}
      </div>
    </div>
  )
}

export default Search