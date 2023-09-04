import "./NewExpense.scss";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense, toggleExpenseState }) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        onAddExpense(enteredExpenseData);
        toggleExpenseState();
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} toggleExpenseState={toggleExpenseState} />
        </div>
    );
};
export default NewExpense;
