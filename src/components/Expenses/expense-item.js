import styles from "./expense-item.module.css";
import DateItem from "./date";
import Card from "../card/card";
const ExpenseItem = (props) => {
  let item = props.item;
  return (
    <Card className="expense-item">
      <DateItem date={item.date} />
      <div className={styles.title}>
        <b>{item.title}</b>
      </div>
      <div className={styles.amount}>$ {item.amount}</div>
    </Card>
  );
};
export default ExpenseItem;
