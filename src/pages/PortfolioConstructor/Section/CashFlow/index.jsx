import React, { useState } from "react";
import {
	FormControl,
	Select,
	MenuItem,
	InputLabel,
	Stack
} from "@mui/material";

const CashFlowBox = ({ cash, period, setCash, setPeriod, children }) => {
	const CASH_LIST = [
		{ name: "Capital Expenditure", value: 'capital_expenditure' },
		{ name: "Total Cash from Financing Activities", value: 'total_cash_from_finance_activity' },
		{ name: "Total Cash from Operating Activities", value: 'total_cash_from_operating_activity' }
	]

	const PERIOD_LIST = [
		{ name: "Yearly", value: 'yearly' },
		{ name: "Quarterly", value: 'quarterly' },

	]

	return (
		<div id="last_graph" className="card card-congratulation-medal sizing">
			<div className="card-body">
				<div className="row">
					<div className="col-lg-12 customizer-styling-direction px-2">
						<div className="row">
							<p className="font-weight-bold col-4">Cash Flow Analysis</p>
							<p className="col-3"></p>
							<Stack direction={"row"} spacing={2}>
								<FormControl>
									<InputLabel id="select-cash-label">Cash</InputLabel>
									<Select
										labelId="select-cash-label"
										id="select-cash"
										value={cash}
										label="cash"
										onChange={(event) => {
											setCash(event.target.value);
											console.log(event.target.value);
										}}
										size="small"
									>
										{CASH_LIST.map((cash, index) => (
											<MenuItem key={cash.value + index} value={cash.value}>{cash.name}</MenuItem>
										))}
									</Select>
								</FormControl>
								<FormControl>
									<InputLabel id="select-cash-period">Period</InputLabel>
									<Select
										labelId="select-cash-period"
										id="select-cash-period"
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

export default CashFlowBox;