import styles from "./card.module.css";
const Card = (props) => {
  const classes = props.className;

  return (
    <div
      className={`${styles.card} ${
        classes == "expense-item" ? styles["expense-item"] : styles["date-item"]
      } `}
    >
      {props.children}
    </div>
  );
};
export default Card;
