import ChartBar from "./ChartBar";
import './Chart.css'
const Chart = props => {
    let dataPointValues = props.dataPoints.map(v => v.value)
    let totalMaximum = Math.max(...dataPointValues)
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => {
            return <ChartBar
             value={dataPoint.value} 
             maxValue={totalMaximum} 
             label={dataPoint.label} 
             key={dataPoint.label} 
             />
            })}
        </div>
    )
}

export default Chart;