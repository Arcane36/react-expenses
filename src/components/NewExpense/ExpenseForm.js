import { useState } from "react";

const ExpenseForm = ({ onSaveExpenseData }) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [enteredDate, setEnteredDate] = useState(new Date());

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            id: Math.random().toString(),
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={enteredTitle} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        onChange={(e) => setEnteredAmount(e.target.value)}
                        value={enteredAmount}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2023-12-31'
                        onChange={(e) => setEnteredDate(e.target.value)}
                        value={enteredDate}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
