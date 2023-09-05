import ChartBar from "./ChartBar";
import "./Chart.scss";

const Chart = ({ dataPoints }) => {
    const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {dataPoints.map((dataPoint) => (
                <ChartBar value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} key={dataPoint.id} />
            ))}
        </div>
    );
};

export default Chart;
