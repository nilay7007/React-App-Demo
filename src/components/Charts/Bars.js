import "./Bars.css";
const Bars = (props) => {
  let percentage = (props.value / props.maxvalue) * 100 + "%";
  console.log(percentage);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="bar0" style={{ height: percentage }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};
export default Bars;
