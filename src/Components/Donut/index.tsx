import Chart from 'react-apexcharts';
import { PieData } from '../../Models';

export  default function Donut({series , labels}:PieData){
    const options = {
      legend: {
        show: false
      },
      labels
    };
    return (
        <div className="donut">
          <Chart options={options} series={series} type="donut" width="250" />
        </div>
      );
}