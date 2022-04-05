import React, { useState } from "react";
import styles from "./NewExpense.module.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const submitHanlder = (data) => {
    props.onNewExpense(data);
  };
  return (
    <div className="new-expense">
      <div className={styles["new-expense1"]}>
        <button>Add New Expense</button>
      </div>
      <ExpenseForm onSubmit={submitHanlder} />
    </div>
  );
};

export default NewExpense;
