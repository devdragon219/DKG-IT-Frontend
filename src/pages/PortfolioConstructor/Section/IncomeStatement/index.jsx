import React from "react";
import {
	FormControl,
	Select,
	MenuItem,
	InputLabel,
	Stack
} from "@mui/material";

const IncomeStatementBox = ({ setRevenue, revenue, period, setPeriod, children }) => {

	const REVENUE_LIST = [
		{ name: "Total Revenue", value: 'total_revenue' },
		{ name: "Gross Profit", value: 'gross_profit' },
		{ name: "Net Income", value: 'net_income' },
		{ name: "Operating Income", value: 'operating_income' }

	]

	const PERIOD_LIST = [
		{ name: "Yearly", value: 'yearly' },
		{ name: "Quarterly", value: 'quarterly' },
	]

	return (
		<div id="income_statement_analysis_div" className="card card-congratulation-medal sizing">
			<div className="card-body">
				<div className="row">
					<div className="col-lg-12 customizer-styling-direction px-2">
						<div className="row">
							<p className="font-weight-bold col-4">Income Statement Analysis</p>
							<p className="col-3"></p>
							<Stack direction={"row"} spacing={2}>
								<FormControl>
									<InputLabel id="demo-simple-select-label">Revenue</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={revenue}
										label="Revenue"
										onChange={(event) => {
											setRevenue(event.target.value);
											console.log(event.target.value);
										}}
										size="small"
									>
										{REVENUE_LIST.map((revenue, index) => (
											<MenuItem key={revenue.value + index} value={revenue.value}>{revenue.name}</MenuItem>
										))}
									</Select>
								</FormControl>
								<FormControl>
									<InputLabel id="select-revenue-period">Period</InputLabel>
									<Select
										labelId="select-revenue-period"
										id="select-period"
										value={period}
										label="Period"
										onChange={(event) => {
											setPeriod(event.target.value);
											console.log(event.target.value);
										}}
										size="small"
									>
										{PERIOD_LIST.map((period, index) => (
											<MenuItem key={period.value + index} value={period.value}>{period.name}</MenuItem>
										))}
									</Select>
								</FormControl>
							</Stack>
						</div>
						<div className="col-md-12 mb-1">
							{children}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default IncomeStatementBox;