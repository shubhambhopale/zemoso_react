import { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {

    const [showForm, updateShowForm] = useState(false);

    const saveNewExpense = (expense) => {
        const expenseItem = {
            ...expense,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseItem);
        updateShowForm(false);
    }

    const showFormHandler = () => {
        updateShowForm(true);
    }

    const closeForm = () => {
        updateShowForm(false);
    }

    return (
        <div className='new-expense'>
            {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
            {showForm && <ExpenseForm onSaveNewExpense={saveNewExpense} onCancel={closeForm} />}
        </div>
    );
}

export default NewExpense;