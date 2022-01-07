import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import SBstyle from '../styles/searchBar.module.css';
import axios from 'axios';

function SearchBar(
    { placeholder,handleCoinSelection,showDropdown,toogleShowDropdown,toogleRepeated }:
    { placeholder:any,handleCoinSelection:any,showDropdown:any,toogleShowDropdown:any,toogleRepeated:any}) {

  const [filteredData, setFilteredData] = useState([] as any[]);
  const [wordEntered, setWordEntered] = useState("");


  const handleFilter = async (event:any) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const options:any = {
      method: 'GET',
      url: 'https://stock-data-yahoo-finance-alternative.p.rapidapi.com/v6/finance/autocomplete',
      params: {query: searchWord, lang: 'en'},
      headers: {
        'x-rapidapi-host': 'stock-data-yahoo-finance-alternative.p.rapidapi.com',
        'x-rapidapi-key': '31b063a22amsh21c752170e3beeep1f4046jsn4f0ce84b4d68'
      }
    };

    const response:any = await axios.request(options)


    const newFilter:string[] = response.data.ResultSet.Result.map((each:any)=>{
      return {
        name:each.name,
        symbol:each.symbol
      }
    }) 

    console.log(newFilter)

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
    toogleShowDropdown()
    toogleRepeated();
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };



  return (
  
    <div className={SBstyle['search']}>
      <div className={SBstyle['searchInputs']}>
        <input 
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className={SBstyle["searchIcon"]}>
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {(filteredData.length !== 0 && showDropdown) && (
        <div className={SBstyle["dataResult"]}>
          {filteredData.map((stock, index) => {
            return (
              <div data-value={stock.symbol} key={index} className={SBstyle["dataItem"]} onClick={handleCoinSelection}>
                <p data-value={stock.symbol} >{stock.name} </p>
                <p data-value={stock.symbol} style = {{margin:"0 8px 0 0"}}>{stock.symbol} </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
