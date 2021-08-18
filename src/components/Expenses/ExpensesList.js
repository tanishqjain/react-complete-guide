import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return <h2 className='expenses-list__fallback'>Expenses Not Found</h2>
  }

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((filteredExpense) => (
      <ExpenseItem
        key={filteredExpense.id}
        title={filteredExpense.title}
        amount={filteredExpense.amount}
        date={filteredExpense.date}
      />
      ))}
    </ul>
  );
};

export default ExpensesList;
