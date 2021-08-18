import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function getSelectedYear(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() == filteredYear;
  });

  return (
    <div className="expenses">
      <ExpensesFilter onSelectingYear={getSelectedYear} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </div>
  );
}

export default Expenses;
