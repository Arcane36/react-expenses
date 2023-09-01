import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

import "./Expenses.css";

const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const onFiltered = (year) => {
        setFilteredYear(year);
        console.log(year);
    };

    return (
        <>
            <Card className='expenses'>
                <ExpensesFilter selectedYear={filteredYear} onFiltered={onFiltered} />
                {expenses.map((expense) => (
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                ))}
            </Card>
        </>
    );
};

export default Expenses;
