import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import { useState } from 'react';



function ExpenseItem(props){
    const [title, setTitle] = useState(props.title)
    function handleClick(){
        setTitle('Updated')
    }
    return (<div className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
            <button onClick={handleClick}>change title</button>
        </div>
    </div>)
}

export default ExpenseItem;