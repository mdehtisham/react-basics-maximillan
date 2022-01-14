import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const dummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses)
  const [allExpenses, setAllExpenses] = useState([...expenses])

  const addExpenseHandler = expense => {
    // setExpenses([...expenses, expense]) // We should not update the state like this, is the state is depending on the previous state
    // We should use function for this, like below
    setExpenses(prevExpense => [expense, ...prevExpense])
    setAllExpenses(prevExpense => [expense, ...prevExpense])
  }
  const handleDateChangeFilter = year => {
    console.log('year', year)
    console.log('all expenses', allExpenses)
    console.log('expenses', expenses)
    setExpenses(allExpenses.filter(e => e.date.getFullYear() == year))
  }

  return (
    <div className="App"> 
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} onDateChange={handleDateChangeFilter}></Expenses>
    </div>
  );
}

export default App;
