import ChartBar from "./ChartBar";
import './Chart.css'
const Chart = props => {
    let dataPointValues = props.dataPoints.map(v => v.value)
    let totalMax = Math.max(...dataPointValues)
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => <ChartBar value={dataPoint.value} 
            maxValue={totalMax} label={dataPoint.label} key={dataPoint.label}></ChartBar>)}
        </div>
    )
}

export default Chart;