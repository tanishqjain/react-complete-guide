import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(prop) {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");
  const [showForm, setShowForm] = useState(false);

  function titleChangeHandler(event) {
    setEnterTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnterAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnterDate(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };

    prop.onSaveExpenseData(expenseData)
    //2-way binding emptying the fields after submit
    setEnterTitle('');
    setEnterAmount('');
    setEnterDate('');
    setShowForm(false)

  }

  function onAddExpenseClickHandler(){
    setShowForm(true)
  }

  function onCancelClickHandler(){
    setShowForm(false)
  }

  if (showForm){
    return (
      <form onSubmit={onSubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enterTitle} onInput={titleChangeHandler} />
          </div>
        </div>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enterAmount}
              onInput={amountChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enterDate}
              onInput={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={onCancelClickHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }

  else return(
    <div>
      <button onClick={onAddExpenseClickHandler}>Add Expense</button>
    </div>
  )
  
}

export default ExpenseForm;
