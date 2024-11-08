import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const PortfolioChart = ({ incomingData, futureData }) => {
	const chartRef = useRef(null);  // Use useRef to reference the canvas where the chart will be drawn

	useEffect(() => {
		if (!incomingData || !futureData) {
			console.log("Data not available yet");
			return; // Exit the effect if any data is null or undefined
		}

		const chartContainer = chartRef.current.getContext('2d');
		let colours = [];

		// Add colours for existing data points
		incomingData["Dates"].forEach(() => colours.push('#FF4996'));

		// Merge future data and add colours
		futureData["Dates"].slice(1).forEach((date, index) => {
			incomingData["Dates"].push(date);
			incomingData["percentage_increase"].push(futureData["values"][index + 1]);
			colours.push('#4C4CE2');
		});

		const data = {
			labels: incomingData["Dates"],
			datasets: [{
				label: 'Selected Portfolio',
				backgroundColor: colours,
				borderColor: colours,
				data: incomingData["percentage_increase"],
			}]
		};

		const chartConfig = {
			type: 'line',
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
							display: true,
							text: "Net Return, percent",
							color: '#B2B5BB',
							font: {
								size: 14
							}
						},
						ticks: {
							color: '#B2B5BB'
						}
					},
					x: {
						ticks: {
							color: '#B2B5BB'
						}
					}
				}
			}
		};

		const ukChart = new Chart(chartContainer, chartConfig);

		return () => {
			ukChart.destroy(); // Cleanup the chart if the component unmounts
		};
	}, [incomingData, futureData]); // Depend on incomingData and futureData

	return (
		<div className="card card-congratulation-medal size-first-graph">
			<div className="card-body">
				<div className="row" style={{
					height: "100%"
				}}>
					<div className="col-lg-12 customizer-styling-direction px-2">
						< p className="font-weight-bold">Portfolio Chart</p>
						<div className="col-md-12 mb-1 size-first-canvas" style={{
							height: "95%"
						}}>
							<canvas ref={chartRef} id="portfolio_chart"></canvas>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioChart;
