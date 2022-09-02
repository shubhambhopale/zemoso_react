import { useState } from "react";
import Card from "../Common/Card";
import ExpenseChart from "./ExpenseChart";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {

    const [filterYearValue, setFilterYearValue] = useState('2020');

    const onChangeFilterHandler = (selectedYear) => {
        setFilterYearValue(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filterYearValue);

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filterYearValue} onChangeFilter={onChangeFilterHandler} />
                
                <ExpenseChart expenses={filteredExpenses} />

                {filteredExpenses.length === 0 ? <p className="error_message">No Expenses Found!</p> :
                    filteredExpenses.map(expense =>
                        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
            </Card>
        </div>
    );
}

export default Expenses;