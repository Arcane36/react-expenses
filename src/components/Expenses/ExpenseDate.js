import "./ExpenseDate.css";
import Card from "../UI/Card";

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("cs-CZ", { month: "long" });
  const day = date.toLocaleString("cs-CZ", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </Card>
  );
};

export default ExpenseDate;
