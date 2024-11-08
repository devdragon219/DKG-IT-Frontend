import React, { useEffect, useState, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const IncomeStatementAnalysisChart = ({ incomingData }) => {
	const chartRef = useRef(null);
	const chartInstanceRef = useRef(null);

	useEffect(() => {
		if (!incomingData || !chartRef.current) return;

		const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#cc65fe', '#445ce2']; // Define your color palette
		const COLORS_LENGTH = COLORS.length;

		const backgroundColors = COLORS.map((color, index) => COLORS[index % COLORS_LENGTH]);

		const dataSet = Object.keys(incomingData.param_value).map((key, index) => ({
			label: key,
			backgroundColor: backgroundColors[index],
			borderColor: backgroundColors[index],
			data: incomingData.param_value[key][0],
		}));

		const data = {
			labels: incomingData.year,
			datasets: dataSet
		};

		const options = {
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
						text: `${incomingData.income_param} (In Millions)`,
						font: {
							size: 14
						}
					},
					stacked: true,
					ticks: {
						callback: function (value) {
							if (!(0 <= value && value <= 1)) {
								value = value / 1000000;
								return value;
							}
						},
						color: '#B2B5BB'
					}
				},
				x: {
					title: {
						color: '#B2B5BB',
						display: true,
						font: {
							size: 14
						}
					},
					stacked: true,
					ticks: {
						color: '#B2B5BB'
					}
				}
			}
		};

		if (chartInstanceRef.current) {
			chartInstanceRef.current.destroy(); // Destroy previous chart instance if exists
		}

		chartInstanceRef.current = new Chart(chartRef.current, {
			type: 'bar',
			data: data,
			options: options
		});

		// Cleanup function to destroy chart instance on component unmount
		return () => {
			if (chartInstanceRef.current) {
				chartInstanceRef.current.destroy();
			}
		};
	}, [incomingData]); // Redraw chart if incomingData changes

	return (
		<div>
			<canvas id="income_analysis_chart" className="canvas-sizing" ref={chartRef} ></canvas>
		</div>
	);
};


const IncomeStateChart = ({ income, time, tickers, purchaseDate, sellDate }) => {

	const END_POINT = 'https://platform.dkv.global/dashboards/api';
	const [incomeData, setIncomeData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${END_POINT}/income-analysis/?income_field=${income}&time_period_fields=${time}&tickers=${tickers}&purchaseDate=${purchaseDate}&sellDate=${sellDate}`);
				const msg = await response.json();
				if (!msg.error) {
					console.log("income data", msg['Income_statement'])
					setIncomeData(msg['Income_statement'])
				}
			} catch (error) {
				console.error('Error fetching stock data for', income, error);
			}
		};
		fetchData()
	}, [income, time, tickers, purchaseDate, sellDate])

	return (
		<IncomeStatementAnalysisChart incomingData={incomeData} />
	)
}

export default IncomeStateChart;