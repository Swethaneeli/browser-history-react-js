import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="history-card-container">
      <p className="time">{timeAccessed}</p>
      <div className="title-container">
        <div className="image-title-container">
          <img src={logoUrl} alt="domain logo" className="logo-image" />
          <div className="domain-title-container">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="button"
            onClick={onDelete}
            testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete-image"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
