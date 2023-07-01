import React from "react";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart({ chartData }) {
  return (
	<div className="chart-container">
		<Doughnut
			data={chartData}
			options={{
				plugins: {
				title: {
					display: false
				}
				}
			}}
		/>
	</div>
  );
}
export default DoughnutChart;