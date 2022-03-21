import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, getRequestedSearch} = props
  const {suggestion} = suggestionDetails
  const onClickArrowButton = () => {
    getRequestedSearch(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-sizing"
        onClick={onClickArrowButton}
      />
    </li>
  )
}

export default SuggestionItem
