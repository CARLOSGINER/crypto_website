import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import SBstyle from '../styles/searchBar.module.css';

function SearchBar(
    { placeholder, data,handleCoinSelection,showDropdown,toogleShowDropdown,toogleRepeated }:
    { placeholder:any,data:any,handleCoinSelection:any,showDropdown:any,toogleShowDropdown:any,toogleRepeated:any}) {

  const [filteredData, setFilteredData] = useState([] as any[]);
  const [wordEntered, setWordEntered] = useState("");



  const handleFilter = (event:any) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value:any) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
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
          {filteredData.map((value, index) => {
            return (
              <div data-value={value.name} key={value.name} className={SBstyle["dataItem"]} onClick={handleCoinSelection}>
                <p data-value={value.name}>{value.name} </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
