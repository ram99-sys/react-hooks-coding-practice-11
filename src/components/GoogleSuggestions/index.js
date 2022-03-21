import {useState} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

const GoogleSuggestions = props => {
  const [searchInput, setSearchInput] = useState('')

  const onChangeSearchInput = event => {
    setSearchInput(event.target.value)
  }

  const getRequestedSearch = suggestion => {
    setSearchInput(suggestion)
  }

  const {suggestionsList} = props
  const filteredSearchResults = suggestionsList.filter(eachSearch =>
    eachSearch.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
  )

  return (
    <div className="bg-container">
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo-sizing"
        />
        <div className="search-bar-container">
          <div className="suggestions-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon-alignment"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search Google"
              value={searchInput}
              onChange={onChangeSearchInput}
            />
          </div>
          <ul className="list-container">
            {filteredSearchResults.map(eachSuggestionItem => (
              <SuggestionItem
                key={eachSuggestionItem.id}
                suggestionDetails={eachSuggestionItem}
                getRequestedSearch={getRequestedSearch}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default GoogleSuggestions
