import React, { useState, useEffect, useRef } from 'react';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const StockDataChart = ({ companies, purchaseDate, sellDate }) => {
	const [stockData, setStockData] = useState([]);
	const chartRef = useRef(null);
	const [chartInstance, setChartInstance] = useState(null);

	const END_POINT = 'https://platform.dkv.global/dashboards/api';

	useEffect(() => {
		if (!companies.length || !purchaseDate || !sellDate) return;

		setStockData([]);
		companies.forEach(company => {
			const fetchData = async (id) => {
				try {
					const response = await fetch(`${END_POINT}/investment/historical_data/?ticker=${id}&purchaseDate=${purchaseDate}&sellDate=${sellDate}`);
					const msg = await response.json();
					if (!msg.error) {
						setStockData(prev => [...prev, {
							label: id.split(':')[1],
							data: msg.price,
							backgroundColor: 'rgba(0, 0, 0, 0)',  // Set to transparent; use borderColor for line charts
							borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random color for each dataset
							borderWidth: 2,
							date: msg.dates
						}]);
					}
				} catch (error) {
					console.error('Error fetching stock data for', id, error);
				}
			};

			if (company != [])
				fetchData(company);
		});
	}, [companies, purchaseDate, sellDate]);

	useEffect(() => {
		if (!chartRef.current || !stockData.length) {
			chartInstance?.destroy();
			setChartInstance(null);
			return;
		}

		const ctx = chartRef.current.getContext('2d');
		const data = {
			labels: Array.from(new Set(stockData.flatMap(ds => ds.date.map(point => point)))),  // Assuming `date` field exists in data
			datasets: stockData
		};

		const newChart = new Chart(ctx, {
			type: 'line', // Changed to line chart
			data,
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
				maintainAspectRatio: false
			}
		});

		return () => {
			newChart.destroy();
		};
	}, [stockData]);

	return (
		<div className="card card-congratulation-medal sizing">
			<div className="card-body">
				<div className="row">
					<div className="col-lg-12 customizer-styling-direction px-2">
						<p className="font-weight-bold">Selected Companies Stock Data</p>
						<div className="col-md-12 mb-1">
							<canvas ref={chartRef} className="canvas-sizing" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StockDataChart;
