import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

 const NewExpense = (props) => {
    //  const [expenseData, setExpenseData] = useState({})
    const [isEditing, setIsEditing] = useState(false)

     const handleExpenseDataSave = (receivedExpenseData) => {
        //  setExpenseData({...receivedExpenseData, id: Math.random().toString()})
        const expenseData = {...receivedExpenseData, id: Math.random().toString()}
        props.onAddExpense(expenseData)
        setIsEditing(false)
     }

     const closeEditing = () => setIsEditing(false)

     const startEditing = () => setIsEditing(true)
    return <div className='new-expense'> 
        
        {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
        {isEditing && <ExpenseForm onCloseEditing={closeEditing} onSaveExpenseData={handleExpenseDataSave}></ExpenseForm>}
    </div>
}

export default NewExpense;