import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import { Skeleton } from '@mui/material';
Chart.register(...registerables);

const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#cc65fe', '#445ce2']; // Define your color palette
const COLORS_LENGTH = COLORS.length;

const WagesPieChart = ({ incomingData }) => {
	const chartRef = useRef(null); // Create a ref for the canvas

	useEffect(() => {
		const chartContainer = chartRef.current.getContext('2d');

		let currentLabels = [];
		let currentData = [];
		let backgroundColors = [];

		let keys = Object.keys(incomingData);
		for (let i = 0; i < keys.length; i++) {
			currentLabels.push(keys[i] + "(%)");
			currentData.push(incomingData[keys[i]]);
			backgroundColors.push(COLORS[i % COLORS_LENGTH]);
		}

		var data = {
			labels: currentLabels,
			datasets: [{
				data: currentData,
				backgroundColor: backgroundColors
			}]
		};

		var chartConfig = {
			type: 'polarArea',
			data: data,
			options: {
				responsive: true,
				maintainAspectRatio: false,
				responsiveAnimationDuration: 500,
				plugins: {
					legend: {
						position: 'bottom',
						labels: {
							font: {
								size: 10
							},
							color: '#d0d2d6'
						}
					}
				},
				elements: {
					line: {
						borderWidth: 3
					}
				},
				scales: {
					r: {
						angleLines: {
							color: '#d0d2d6'
						},
						grid: {
							color: '#d0d2d6',
							fill: 'black'
						},
						pointLabels: {
							color: '#d0d2d6',
						},
						ticks: {
							color: 'black',
							z: 1
						}
					}
				}
			}
		};

		const wagesChart = new Chart(chartContainer, chartConfig);

		return () => {
			wagesChart.destroy(); // Cleanup the chart if the component unmounts
		};
	}, [incomingData]); // Re-run when incomingData changes

	return (
		<div className="row">
			<div className="col-lg-12 customizer-styling-direction pr-2">
				<p className="font-weight-bold">Portfolio Weights Distribution</p>
				<div className="col-md-12 mb-1">
					<canvas ref={chartRef} id="wages_chart"></canvas>
				</div>
			</div>
		</div>
	);
};

export default WagesPieChart;
