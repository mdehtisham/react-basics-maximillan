import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

 const NewExpense = (props) => {
    //  const [expenseData, setExpenseData] = useState({})

     const handleExpenseDataSave = (receivedExpenseData) => {
        //  setExpenseData({...receivedExpenseData, id: Math.random().toString()})
        const expenseData = {...receivedExpenseData, id: Math.random().toString()}
        props.onAddExpense(expenseData)
         console.log('expense from parent', expenseData)
     }
    return <div className='new-expense'>  
        <ExpenseForm onSaveExpenseData={handleExpenseDataSave}></ExpenseForm>
    </div>
}

export default NewExpense;