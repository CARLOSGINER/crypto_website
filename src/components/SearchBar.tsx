import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default function SearchBar() {
    return (
        <div className="tokenSelection_wrap">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="Search for Crypto here..."/>
                <button type ="submit" className ="searchButton">
                <FontAwesomeIcon icon={faSearch}/>
                </button>
            </div>
        </div>
    )
}
