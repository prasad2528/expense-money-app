import './index.css'

const MoneyDetails = props => {
  const {balanceAmmount, incomeAmmount, expenseAmmount} = props
  console.log(balanceAmmount)
  return (
    <div className="money-details-card">
      <div className="money-card card1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="text">
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {balanceAmmount}</p>
        </div>
      </div>
      <div className="money-card card2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="text">
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {incomeAmmount}</p>
        </div>
      </div>
      <div className="money-card card3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="text">
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {expenseAmmount}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
