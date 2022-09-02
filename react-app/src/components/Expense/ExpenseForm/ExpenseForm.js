import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {

    const [titleValue, setTitleValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [dateValue, setDateValue] = useState('');

    const titleValueChangeHandler = (event) => {
        setTitleValue(event.target.value);
    }

    const priceValueChangeHandler = (event) => {
        setPriceValue(event.target.value);
    }

    const dateValueChangeHandler = (event) => {
        setDateValue(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: titleValue,
            amount: +priceValue,
            date: new Date(dateValue)
        };

        //console.log(expenseData);
        props.onSaveNewExpense(expenseData);

        // clearing the fields here
        setTitleValue('');
        setPriceValue('');
        setDateValue('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={titleValue} onChange={titleValueChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input type='number' min='0.01' step='0.01' value={priceValue} onChange={priceValueChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2019-01-01' step='2022-01-01' value={dateValue} onChange={dateValueChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;