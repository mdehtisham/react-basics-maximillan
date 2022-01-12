import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(null)
    const [date, setDate] = useState('')

    const titleChangeHandler = (e) => { 
        setTitle(e.target.value)
    }
    const amountChangeHandler = (e) => { 
        setAmount(e.target.value)
    }
    const dateChangeHandler = (e) => { 
        setDate(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const expenseData = {
            title, amount, date: new Date(date)
        }
        console.log(expenseData, 'expenseData')
        props.onSaveExpenseData(expenseData)
        setTitle('');
        setAmount('');
        setDate('')
    }
    return <form onSubmit={handleSubmit}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={title} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" value={amount} onChange={amountChangeHandler} min='0.01' step='0.01' />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" value={date} onChange={dateChangeHandler} />
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expenses</button>

            </div>
        </div>
    </form>
}

export default ExpenseForm