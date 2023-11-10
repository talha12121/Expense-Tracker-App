import React, { useState } from "react";

export default function Amount() {
  const [transactions, setTransactions] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAmount = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const amount = +inputValue;
    if (!isNaN(amount) && amount !== 0) {
      const newTransaction = {
        id: Math.random(),
        amount: +inputValue,
      };

      setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
      setInputValue("");
    }
  };

  const income = transactions.filter((transaction) => transaction.amount > 0)
  .reduce((total, transaction) => total + transaction.amount, 0);

  const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((total, transaction) => total + transaction.amount, 0);

  const balance = transactions.reduce((total, transaction) => total + transaction.amount, 0);

  return (
    <div className="container">
      <div className="row">
        <div className="expenseBox">
          <h2>YOUR BALANCE:</h2>
          <h3 style={{ lineHeight: "0px", fontSize: "25px" }}>${balance.toFixed(2)}</h3>

          <div className="IncomeExpense">
            <div className="IncomeExpenseOne">
              <div style={{ overflow: "auto" }}>
                <h4 className="incomeHead">INCOME</h4>
                <h2 style={{ lineHeight: "10px", textAlign: "center" }}>
                  ${income.toFixed(2)}
                </h2>
              </div>
            </div>
            <div className="IncomeExpenseTwo"></div>
            <div className="IncomeExpenseThree">
              <div style={{ overflow: "auto" }}>
                <h4 className="expenseHead">EXPENSE</h4>
                <h2 style={{ lineHeight: "10px", textAlign: "center" }}>
                  ${Math.abs(expense).toFixed(2)}
                </h2>
              </div>
            </div>
          </div>
          <div className="add_transaction">
            <div className="trans_heading">
              <h3>ADD TRANSACTION :</h3>
            </div>
            <div className="trans_input">
              <label htmlFor="Amount">Amount</label>
              <input
                id="Amount"
                type="number"
                value={inputValue}
                onChange={handleAmount}
              />
            </div>
            <div className="submitBtn_div">
              <button className="addingTransaction" onClick={handleSubmit}>
                ADD TRANSACTION :
              </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

