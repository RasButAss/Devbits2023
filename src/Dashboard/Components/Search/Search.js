import React, {useState, useEffect} from 'react'
import './search.css'

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
  
  useEffect(() => {
    async function getSearchData(value) {
      try {
        const data = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=8MLLEHJ2IYQ8P50O`);
        return await data.json()
      } catch(err) {
        console.log("No more search results");
        return err;
      }
    }
    getSearchData(value).then((data) => {'bestMatches' in data ? setSearchResults(data.bestMatches): setSearchResults([])});
    // console.log(searchResults);
  },[value])
  function handleOnclick(element) {
    const companyData = JSON.parse(element.target.dataset.value)
    // console.log(companyData); 
    getQuoteData(companyData['1. symbol']).then((data) => {'Global Quote' in data ? setWatchlistData((prevData) => {return [...prevData,{...data, ...{'Company Data': companyData}}]}) : console.log(data)})
    setSearchResults([]);
  }
  return (
    <div>
      <input type="text" id="watchlist-search" name="watchlist-search" className='watchlist-search' placeholder='Search' value={value} onChange={(e) => {handleChange(e)}} />
      <div className='search-dropdown-div'>
        {searchResults.map((element,index) => {
          return (<div className='search-dropdown-row' key={index} onClick={handleOnclick} data-value={JSON.stringify(element)} >{element['2. name']}  {element['1. symbol']}</div>)
        })}
      </div>
    </div>
  )
}

export default Search