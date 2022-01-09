import ExpenseItem from "./ExpenseItem"

function Expenses(props){

    return (
        <div>
            {props.expenses.map(expense => {
                return  <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}></ExpenseItem>
            })}
        </div>
    )
}

export default Expenses;