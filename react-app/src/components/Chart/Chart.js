import './Chart.css';
import ChartBar from './ChartBar';

function Chart(props) {

    const expenseArray = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxExpenseTotal = Math.max(...expenseArray);

    return (
        <div className='chart'>
            {
                props.dataPoints.map(
                    dataPoint =>
                        <ChartBar
                            key={dataPoint.label}
                            value={dataPoint.value}
                            maxValue={maxExpenseTotal} 
                            label={dataPoint.label}
                            />
                )
            }
        </div>
    );
}

export default Chart;