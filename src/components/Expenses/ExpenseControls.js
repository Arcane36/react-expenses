import Card from "../UI/Card";

const ExpenseControls = ({ toggleExpenseState }) => {
    return (
        <Card className='new-expense'>
            <button
                onClick={() => {
                    toggleExpenseState();
                }}
            >
                Add new expense
            </button>
        </Card>
    );
};

export default ExpenseControls;
