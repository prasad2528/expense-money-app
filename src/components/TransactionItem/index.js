import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDelete = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="item-card">
      <p className="title-box">{title}</p>
      <p className="amount-box">Rs {amount}</p>
      <p className="type-box">{type}</p>

      <button
        data-testid="delete"
        type="button"
        className="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
