import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (prop)=>{

    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        prop.onSaveExpenseData(expenseData)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense