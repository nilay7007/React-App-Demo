import "./Charts.css";
import Bars from "./Bars";
const Charts = (props) => {
  let data = [
    { name: "Jan", value: 0 },
    { name: "Feb", value: 0 },
    { name: "Mar", value: 0 },
    { name: "APR", value: 0 },
    { name: "May", value: 0 },
    { name: "Jun", value: 0 },
    { name: "Jul", value: 0 },
    { name: "Aug ", value: 0 },
    { name: "Sept", value: 0 },
    { name: "Oct", value: 0 },
    { name: "Nov", value: 0 },
    { name: "Dec", value: 0 },
  ];
  let amounts = props.data.map((data) => {
    return data.amount;
  });
  for (let i = 0; i < props.data.length; i++) {
    let month = props.data[i].date.getMonth();
    data[month].value = props.data[i].amount;
  }
  let maxValue = Math.max(...amounts);

  return (
    <div className="bar">
      {data.map((data) => {
        return (
          <Bars maxvalue={maxValue} value={data.value} label={data.name} />
        );
      })}
    </div>
  );
};
export default Charts;
