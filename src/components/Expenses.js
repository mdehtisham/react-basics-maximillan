import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter"
import './Expenses.css'
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020');

    const hadleFilterChange = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter(e => e.date.getFullYear() == filteredYear)

    let expenseContent = <p className="no-data-found" align="center">No Expenses found.</p>
    if(filteredExpenses.length > 0){
        expenseContent = filteredExpenses.map(expense => {
            return  <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}></ExpenseItem>
        })
    }

    return (
        <div className="expenses">
            <ExpensesFilter onChangeFilter={hadleFilterChange}  selected={filteredYear}></ExpensesFilter>
            <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
            {expenseContent}
        </div>
    )
}

export default Expenses;