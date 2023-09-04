const ExpenseControls = ({ setIsAddingExpense }) => {
    const onClickHandler = () => {
        setIsAddingExpense();
    };

    return (
        <>
            <button onClick={onClickHandler}>Add new expense</button>
        </>
    );
};

export default ExpenseControls;
