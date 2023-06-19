import React from "react";
import ChartBar from './ChartBar';
import './Chart.css'

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); //12 dataPoints/months
  const totalMaximum = Math.max(...dataPointValues); // receives 12 args as an array

  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  )
}

export default Chart;