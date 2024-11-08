import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const DailyNetReturnsChart = ({ incomingData }) => {
	const chartRef = useRef(null);

	useEffect(() => {
		if (!incomingData) return; // Ensure the ref and data are loaded

		const barCtx = chartRef.current.getContext('2d');
		const backgroundGradient = barCtx.createLinearGradient(0, 0, 0, 600);
		backgroundGradient.addColorStop(0, '#FE6EEA');
		backgroundGradient.addColorStop(1, '#4C4CE2');
		console.log("incoming!", incomingData)

		let backgroundColors = incomingData["Return Percentage"].map(() => backgroundGradient);

		const data = {
			labels: incomingData["Return Percentage"],
			datasets: [{
				label: 'Frequency',
				backgroundColor: backgroundColors,
				borderColor: backgroundColors,
				data: incomingData["Frequency"],
			}]
		};

		const chartConfig = {
			type: 'bar',
			data: data,
			options: {
				plugins: {
					legend: {
						labels: {
							font: {
								size: 14
							},
							color: '#B2B5BB'
						}
					}
				},
				responsive: true,
				maintainAspectRatio: false,
				scales: {
					y: {
						title: {
							color: '#B2B5BB',
							display: true,
							text: "Frequency",
							font: {
								size: 14
							}
						},
						ticks: {
							color: '#B2B5BB'
						}
					},
					x: {
						title: {
							color: '#B2B5BB',
							display: true,
							text: "return , %",
							font: {
								size: 14
							}
						},
						ticks: {
							color: '#B2B5BB'
						}
					}
				}
			}
		};

		const chartInstance = new Chart(barCtx, chartConfig);

		return () => {
			chartInstance.destroy(); // Cleanup the chart on component unmount
		};
	}, [incomingData]); // Effect dependencies

	return (
		<div className="card card-congratulation-medal sizing">
			<div className="card-body">
				<div className="row">
					<div className="col-lg-12 customizer-styling-direction px-2">
						<p className="font-weight-bold">Daily Income Percentage Chart</p>
						<div className="col-md-12 mb-1">
							<canvas ref={chartRef} id="daily_net_returns_chart"></canvas>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DailyNetReturnsChart;
