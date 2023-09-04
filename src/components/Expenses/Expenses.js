import { useState } from "react";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

import "./Expenses.css";

const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const onFiltered = (year) => {
        setFilteredYear(year);
    };

    const filteredExpenses = expenses.filter((expense) => filteredYear === expense.date.getFullYear().toString());

    return (
        <>
            <Card className='expenses'>
                <ExpensesFilter selectedYear={filteredYear} onFiltered={onFiltered} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </>
    );
};

export default Expenses;
