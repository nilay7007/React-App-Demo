import { useState } from "react";
import styles from "./ExpenseForm.module.css";
const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setDate(event.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit({ title: title, amount: amount, date: new Date(date) });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={styles.form}>
        <div className={styles.form1}>
          <label>
            <b>Title</b>
          </label>
          <br />
          <input type="text" value={title} onChange={titleHandler} />
        </div>
        <div className={styles.form1}>
          <label>
            <b>Amount</b>
          </label>
          <br />
          <input type="number" value={amount} onChange={amountHandler} />
        </div>
        <div className={styles.form2}>
          <label>
            <b>Date</b>
          </label>
          <br />
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className={styles.buttons}>
        <button type="button">Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
