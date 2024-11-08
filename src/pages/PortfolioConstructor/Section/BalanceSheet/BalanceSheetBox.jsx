import React from "react";
import {
	FormControl,
	Select,
	MenuItem,
	InputLabel,
	Stack
} from "@mui/material";

const BalanceSheetBox = ({ balanceSheet, setBalanceSheet, balancePeriod, setBalancePeriod, children }) => {

	const BALANCE_LIST = [
		{ name: "Total Liability", value: 'total_liability' },
		{ name: "Total Stockholder Equity", value: 'total_stockholder_equity' },
		{ name: "Total Assets", value: 'total_assets' },
		{ name: "Cash", value: 'cash' }
	]

	const PERIOD_LIST = [
		{ name: "Yearly", value: 'yearly' },
		{ name: "Quarterly", value: 'quarterly' },

	]

	return (
		<div id="balance_sheet_analysis_div" className="card card-congratulation-medal sizing">
			<div className="card-body">
				<div className="row">
					<div className="col-lg-12 customizer-styling-direction px-2">
						<div className="row">
							<p className="font-weight-bold col-4">Balance Sheet Analysis</p>
							<p className="col-3"></p>
							<Stack direction={"row"} spacing={2}>
								<FormControl>
									<InputLabel id="select-balance-label">Balance</InputLabel>
									<Select
										labelId="select-balance-label"
										id="select-balance"
										value={balanceSheet}
										label="Balance"
										onChange={(event) => {
											setBalanceSheet(event.target.value);
											console.log(event.target.value);
										}}
										size="small"
									>
										{BALANCE_LIST.map((balance, index) => (
											<MenuItem key={balance.value + index} value={balance.value}>{balance.name}</MenuItem>
										))}
									</Select>
								</FormControl>
								<FormControl>
									<InputLabel id="select-balance-period">Period</InputLabel>
									<Select
										labelId="select-balance-period"
										id="select-balance-period"
										value={balancePeriod}
										label="Period"
										onChange={(event) => {
											setBalancePeriod(event.target.value);
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

export default BalanceSheetBox;