import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
const clickHandler = ()=>{
  console.log("click")
}

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item_price">${props.amount}</div>
      <div className="expense-item_location">{props.location}</div>
      <button onClick={clickHandler}>change title</button>
    </div>
    
  );
}

export default ExpenseItem;
