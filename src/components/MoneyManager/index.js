import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTyoeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTyoeOptions[0].optionId,
  }

  onDeleteTransaction = id => {
    const {transactionList} = this.state
    const updatedTransaction = transactionList.filter(
      eachTransaction => eachTransaction.id !== id,
    )
    this.setState({transactionList: updatedTransaction})
  }

  onAddNewTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTyoeOptions.find(
      eachOption => eachOption.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTyoeOptions[0].optionId,
    }))
    console.log(newTransaction)
    console.log('Updated State:', this.state)
  }

  // Add this line to check the new transaction object
  // Add this line to check the updated state

  getExpenses = () => {
    const {transactionList} = this.state
    let expenseAmmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTyoeOptions[1].displayText) {
        expenseAmmount += eachTransaction.amount
      }
    })
    return expenseAmmount
  }

  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTyoeOptions[0].displayText) {
        incomeAmmount += eachTransaction.amount
      }
    })
    return incomeAmmount
  }

  getBalance = () => {
    const {transactionList} = this.state
    console.log(transactionList)
    let balanceAmmount = 0
    let incomeAmmount = 0
    let expenseAmmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTyoeOptions[0].displayText) {
        incomeAmmount += eachTransaction.amount
      } else {
        expenseAmmount += eachTransaction.amount
      }
    })
    balanceAmmount = incomeAmmount - expenseAmmount
    return balanceAmmount
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  render() {
    const {titleInput, amountInput, optionId, transactionList} = this.state
    const balanceAmmount = this.getBalance()
    const incomeAmmount = this.getIncome()
    const expenseAmmount = this.getExpenses()
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="money-manager-card">
            <h1 className="money-manager-heading">Hi, Richard</h1>
            <p className="description">
              Welcome back to Your <span>Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            balanceAmmount={balanceAmmount}
            incomeAmmount={incomeAmmount}
            expenseAmmount={expenseAmmount}
          />
          <div className="main-container">
            <form className="form-section" onSubmit={this.onAddNewTransaction}>
              <h3>Add Transaction</h3>
              <div>
                <label htmlFor="title">Title</label>
                <br />
                <input
                  type="text"
                  id="title"
                  onChange={this.onChangeTitle}
                  value={titleInput}
                  placeholder="TITLE"
                />
                <div>
                  <label htmlFor="amount">Amount</label>
                  <br />
                  <input
                    type="text"
                    id="amount"
                    onChange={this.onChangeAmount}
                    value={amountInput}
                    placeholder="AMOUNT"
                  />
                </div>
                <div>
                  <label htmlFor="type">Type</label>
                  <br />
                  <select
                    id="type"
                    onChange={this.onChangeOptionId}
                    value={optionId}
                  >
                    {transactionTyoeOptions.map(eachOption => (
                      <option
                        key={eachOption.optionId}
                        value={eachOption.optionId}
                      >
                        {eachOption.displayText}
                      </option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="button">
                  Add
                </button>
              </div>
            </form>
            <div className="transaction-card">
              <h3>History</h3>
              <ul className="transaction-list">
                <li className="title-card">
                  <p>Title</p>
                  <p>Amount</p>
                  <p>Type</p>
                </li>
                {transactionList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    onDeleteTransaction={this.onDeleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
