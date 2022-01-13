import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter"
import './Expenses.css'
import { useState } from "react";

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020');

    const hadleFilterChange = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    return (
        <div className="expenses">
            <ExpensesFilter onChangeFilter={hadleFilterChange}  selected={filteredYear}></ExpensesFilter>
            {props.expenses.map(expense => {
                return  <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}></ExpenseItem>
            })}
        </div>
    )
}

export default Expenses;