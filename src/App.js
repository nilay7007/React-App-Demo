import styles from "./App.module.css";
import ExpenseItem from "./components/Expenses/expense-item";
import NewExpense from "./components/Expenses/NewExpense.js";
import { useState } from "react";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import Charts from "./components/Charts/Charts";
const ITEMS = [
  {
    date: new Date("July 21, 2021 01:15:00"),
    title: "Roma",
    amount: 2,
  },
  {
    date: new Date("May 21, 2022 01:15:00"),
    title: "Luna",
    amount: 50,
  },
  {
    date: new Date(),
    title: "ANjali",
    amount: 25,
  },
];

function App() {
  const [items, setItems] = useState(ITEMS);
  const [selectedYear, setYear] = useState("2022");
  const submitEx = (data) => {
    setItems((prevState) => {
      return [...prevState, data];
    });
  };
  const changeHandler = (data) => {
    setYear((prevYear) => {
      return data;
    });
  };
  let msg = "";
  let temp = items.filter((item) => {
    return item.date.getFullYear() == selectedYear;
  });
  if (temp == 0) {
    msg = <p>NO MATCH FOUND</p>;
  } else {
    msg = temp.map((data) => {
      return <ExpenseItem item={data} />;
    });
  }

  return (
    <div>
      <NewExpense onNewExpense={submitEx} />

      <div className={styles["app-item"]}>
        <ExpensesFilter onChangeFilter={changeHandler} />
        <Charts data={temp} />
        {msg}
        {/* {
        // items
        //   .filter((item) => {
        //     return item.date.getFullYear() == selectedYear;
        //   })
          .map((data) => {
            return <ExpenseItem item={data} />;
          })} */}
        {/* {items.map((data) => {
          return <ExpenseItem item={data} />;
        })} */}
      </div>
    </div>
  );
}

export default App;
