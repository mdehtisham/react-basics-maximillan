import ChartBar from "./ChartBar";
import './Chart.css'
const Chart = props => {
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => <ChartBar value={dataPoint.value} 
            maxValue={null} label={dataPoint.label} key={dataPoint.label}></ChartBar>)}
        </div>
    )
}

export default Chart;