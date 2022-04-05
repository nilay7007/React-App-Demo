import styles from "./date.module.css";
import Card from "../card/card";
const DateItem = (props) => {
  const month = props.date.toLocaleString("default", { month: "long" });
  const date = props.date.getDate();
  const year = props.date.getFullYear();
  return (
    <div className={styles.dateBorder}>
      <Card className="date-item">
        <div>{date}</div>
        <div>{month}</div>
        <div>
          <b>{year}</b>
        </div>
      </Card>
    </div>
  );
};
export default DateItem;
