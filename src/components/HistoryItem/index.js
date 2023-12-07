import './index.css'

const HistoryItem = props => {
  const {historydetails, deleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historydetails

  const deleteHistoryItem = () => {
    deleteItem(id)
  }

  return (
    <li className="history-item">
      <p className="time">{timeAccessed}</p>
      <div className="logo-domain">
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>

      <button data-testid="delete" type="button" onClick={deleteHistoryItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
