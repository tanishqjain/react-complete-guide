import { useState } from "react";

import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {

  //This function here is used initialize state change for a prop element
  const [title, setTitle] = useState(props.title);

  function clickHandler(){
    setTitle('Updated!')
    console.log(title);
  }

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;
