import ExpenseItem from "./ExpenseItem"
import './Expenses.css'

function Expenses(props){

    return (
        <div className="expenses">
            {props.expenses.map(expense => {
                return  <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}></ExpenseItem>
            })}
        </div>
    )
}

export default Expenses;