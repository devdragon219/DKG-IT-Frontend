import React, { useEffect, useState, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const CashFlowAnalysisChart = ({ incomingData }) => {
	const chartRef = useRef(null);
	const [chart, setChart] = useState(null);

	useEffect(() => {
		if (!incomingData || !chartRef.current) return;

		const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#cc65fe', '#445ce2']; // Define your color palette here
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
						text: `${incomingData.cash_flow_param} (In Millions)`,
						font: {
							size: 14
						}
					},
					stacked: true,
					ticks: {
						callback: function (value) {
							return value > 1 ? (value / 1000000).toFixed(2) : value; // Adjust value based on your data structure
						},
						color: '#B2B5BB'
					}
				},
				x: {
					stacked: true,
					ticks: {
						color: '#B2B5BB'
					}
				}
			}
		};

		if (chart) {
			chart.destroy(); // Destroy the previous chart if exists
		}

		const newChart = new Chart(chartRef.current, {
			type: 'bar',
			data: data,
			options: options
		});

		setChart(newChart);

		// Cleanup function
		return () => {
			newChart.destroy();
		};
	}, [incomingData]); // Effect dependencies

	return (
		<div>
			<canvas id="cash_flow_chart" className="canvas-sizing" ref={chartRef}></canvas>
		</div>
	);
};

const CashFlowChart = ({ cashFlow, cashPeriod, tickers, purchaseDate, sellDate }) => {
	const END_POINT = 'https://platform.dkv.global/dashboards/api';
	const [incomeData, setIncomeData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${END_POINT}/cash_flow-analysis/?cash_flow_fields=${cashFlow}&cash_flow_time_period_fields=${cashPeriod}&tickers=${tickers}&purchaseDate=${purchaseDate}&sellDate=${sellDate}`);
				const msg = await response.json();
				if (!msg.error) {
					console.log("balance data", msg['Cash_flow_statement'])
					setIncomeData(msg['Cash_flow_statement'])
				}
			} catch (error) {
				console.error('Error fetching stock data for', income, error);
			}
		};
		fetchData()
	}, [cashFlow, cashPeriod, tickers, purchaseDate, sellDate])

	return (
		<CashFlowAnalysisChart incomingData={incomeData} />
	)
}

export default CashFlowChart;