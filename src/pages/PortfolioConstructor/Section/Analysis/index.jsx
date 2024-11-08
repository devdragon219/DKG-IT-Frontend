import {
	FormControlLabel,
	Button,
	Autocomplete,
	TextField,
	CircularProgress,
	FormControl,
	FormLabel,
	RadioGroup,
	Radio,
	Modal,
	Box,
	Typography,
	Stack
} from "@mui/material";
import { DatePicker, Form } from "antd";
import React, { useEffect } from "react";
import { Chart, registerables } from "chart.js";
import WagesPieChart from "../Charts/WagesChart";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

Chart.register(...registerables);

const END_POINT = 'https://platform.dkv.global/dashboards/api'
const NET_INCOME = "Net Income";
const NET_INCOME_PERCENT = "Net Income %";
const WAGES_PIE_CHART = "Wages pie char";

const CompanyList = ({ setSelectedComps, selectedComps, reset, addHedge, isHedge, errors, _loading, disabled }) => {

	const fixedComps = []
	const [loading, setLoading] = React.useState(true);
	const [companies, setCompanies] = React.useState([
		{ name: "", ticker: "", page: "" },
	])
	const [isModal, setIsModal] = React.useState(false);
	const [newSymbol, setNewSymbol] = React.useState('');
	const [newCom, setNewCom] = React.useState('');
	const [isClicked, setIsClicked] = React.useState(false);

	const ModalStyle = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};

	useEffect(() => {
		getCompanyList();
	}, [])

	const getCompanyList = async () => {
		await fetch(`${END_POINT}/get-stock-companies`)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				let _companies = []
				for (let i = 0; i < data.length; i++) {
					const { name, ticker, page } = data[i];
					if (!_companies.some(company => company.name === name)) {
						_companies.push({ name, ticker, page });
					}
				}
				setCompanies(_companies);
				setLoading(false);
			})
	}

	const getNewStock = () => {
		const newValue = [{
			name: newCom,
			ticker: newSymbol,
			page: ''
		}]
		setIsClicked(true);
		if (!newSymbol || !newCom) return;

		setSelectedComps([
			...fixedComps,
			...newValue.filter((option) => fixedComps.indexOf(option) === -1)
		])
		setIsClicked(false);
		setIsModal(false);
	}

	return (
		<div className="col-xl-4 col-md-6 col-12">
			<div className="card card-congratulation-medal">
				<div className="card-body">
					<div className="row px-2">
						<Autocomplete
							fullWidth
							multiple
							value={selectedComps}
							loading={loading}
							disabled={disabled}
							onChange={(event, newValue) => {
								setSelectedComps([
									...fixedComps,
									...newValue.filter((option) => fixedComps.indexOf(option) === -1)
								])
							}}
							id="select-companies"
							options={companies}
							getOptionLabel={(option) => option.name}
							filterSelectedOptions
							renderInput={(params) => (
								<TextField
									{...params}
									label="Select Company"
									placeholder="Companies"
									error={errors.companies}
									InputProps={
										{
											...params.InputProps,
											endAdornment: (
												<React.Fragment>
													{loading ? <CircularProgress color="inherit" size={20} /> : null}
													{params.InputProps.endAdornment}
												</React.Fragment>
											)
										}
									}
								/>
							)}
						/>
						<div className="col-md-12 customizer-styling-direction mt-3">
							<button className="btn btn-primary" id="reset_btn" onClick={reset} style={{ width: '130px' }}>
								{_loading ? <CircularProgress style={{ color: 'white' }} size={20} /> : "Get Portfolio"}
							</button>
							{/* <button className="btn btn-primary ml-3" id="reset_btn" onClick={() => setIsModal(!isModal)} style={{ width: '130px' }}>
								Add New Stock
							</button> */}
						</div>
					</div>
				</div >
			</div >
			<Modal
				open={isModal}
				onClose={() => setIsModal(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={ModalStyle}>
					<Typography id="modal-modal-title" variant="h6" component="h2" textAlign={"center"}>
						Add New Stock Symbol
					</Typography>
					<Stack direction={'column'} spacing={3} sx={{ marginTop: '15px' }}>
						<p className="font-weight-bold">Symbol</p>
						<TextField
							id="stock-symbol"
							label="Symbol"
							type="string"
							InputLabelProps={{
								shrink: true,
							}}
							onChange={(event) => {
								setNewSymbol(event.target.value);
							}}
							error={isClicked && !newSymbol}
						/>
						<p className="font-weight-bold">Company Name</p>
						<TextField
							id="company-name"
							label="Name"
							type="string"
							InputLabelProps={{
								shrink: true,
							}}
							onChange={(event) => {
								setNewCom(event.target.value);
							}}
							error={isClicked && !newCom}
						/>
						<Stack direction={'row'} spacing={2} justifyContent={'center'} alignItems={'center'} >
							<Button
								onClick={() => {
									getNewStock()
								}}>
								<Typography>Add</Typography>
							</Button>
							<Button
								onClick={() => {
									setIsClicked(false);
									setIsModal(false);
								}}
							>
								<Typography>Cancel</Typography>
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Modal>
		</div >
	)
}


const Analysis = ({ setPortfolioData, setDetail, selectedComps, setSelectedComps, detail }) => {

	const { slug, type } = useParams();
	const [isHedge, setIsHedge] = React.useState(false);
	const { data: editData } = useSelector((state) => state.item);

	const [purchaseDate, setPurchaseDate] = React.useState(null);
	const [sellDate, setSellDate] = React.useState(null);
	const [amount, setAmount] = React.useState(0);
	const [risk, setRisk] = React.useState(0.0);
	const [profit, setProfit] = React.useState(0.0);
	const [portType, setPortType] = React.useState('equal_weights');
	const [customWid, setCustomWid] = React.useState('');
	const [netIncome, setNetIncome] = React.useState('');
	const [netPercent, setNetPercent] = React.useState('');
	const [wagesChartData, setWagesChartData] = React.useState({});
	const [isClicked, setIsClicked] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const [errors, setErrors] = React.useState({
		companies: false,
		amount: false,
		purchaseDate: false,
		sellDate: false,
		risk: false,
		profit: false
	});

	const PORTFOLIO_TYPES = [
		{ label: "Equally weighted", value: "equal_weights" },
		{ label: "Growth optimal portfolio(EF)", value: "growth_optimal_ef" },
		{ label: "Minimum variance", value: "min_variance" },
		{ label: "Sharpe ratio-based", value: "sharpe_ratio" },
		{ label: "Market capitalization-weighted", value: "market_cap" },
		{ label: "Custom", value: "custom" }
	]

	const handleHedge = () => {
		setIsHedge(!isHedge);
	}

	useEffect(() => {
		if (editData) {
			const { configs } = editData;
			const { data, portfolio } = configs;
			setAmount(data.amount);
			setPortType(data.portType);
			setCustomWid(data.customWid);
			setPurchaseDate(data.purchaseDate);
			setSellDate(data.sellDate);
			setProfit(data.profit);
			setRisk(data.risk);
			setNetIncome(portfolio[NET_INCOME]);
			setNetPercent(portfolio[NET_INCOME_PERCENT]);
			setWagesChartData(portfolio[WAGES_PIE_CHART])
		}
	}, [editData])

	useEffect(() => {
		if (!isClicked) return;
		validate()
	}, [selectedComps, amount, purchaseDate, sellDate, risk, profit])

	const validate = () => {
		const errorFields = {
			companies: selectedComps.length === 0,
			amount: amount <= 0,
			purchaseDate: !purchaseDate || new Date(purchaseDate) > new Date(),
			sellDate: !sellDate || new Date(sellDate) > new Date(),
			risk: risk <= 0,
			profit: profit <= 0
		};
		setErrors(errorFields);
		return Object.values(errorFields).some(error => error);
	}


	const handleSubmit = () => {
		setIsClicked(true);
		if (validate()) return;
		let tickers = '';
		for (let i = 0; i < selectedComps.length; i++) {
			tickers += selectedComps[i].ticker + ':' + selectedComps[i].name + (i === selectedComps.length - 1 ? '' : ',');
		}

		setLoading(true);
		setDetail({
			purchaseDate: purchaseDate,
			sellDate: sellDate,
			comps: tickers.split(','),
			tickers: tickers,
			portType: portType,
			amount: amount,
			profit: profit,
			risk: risk,
			customWid: customWid
		})
		fetch(`${END_POINT}/investment?tickers=${tickers}&purchaseDate=${purchaseDate}&sellDate=${sellDate}&amount=${amount}&risk_percentage=${risk}&profit_percentage=${profit}&portfolio_type=${portType}&custom_weights=${customWid}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			}
		})
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setLoading(false);
				if (data.message) {
					alert(data.message)
				} else {
					setPortfolioData(data);
					setNetIncome(data[NET_INCOME]);
					setNetPercent(data[NET_INCOME_PERCENT]);
					setWagesChartData(data[WAGES_PIE_CHART])
				}
			})
			.catch(error => {
				console.error('Error:', error);
				setLoading(false);
			});
	}


	return (
		<div className="row match-height">
			<CompanyList
				selectedComps={selectedComps}
				setSelectedComps={setSelectedComps}
				isHedge={isHedge}
				addHedge={handleHedge}
				reset={handleSubmit}
				errors={errors}
				_loading={loading}
				disabled={type === 'view'}
			/>
			<div className="col-xl-4 col-md-6 col-12">
				<div className="card card-congratulation-medal">
					<div className="card-body">
						<div className="row">
							<div className="col-lg-12 customizer-styling-direction px-2">
								<p className="font-weight-bold">Purchase Date</p>
								<div className="col-md-12 mb-1">
									<Form.Item
										validateStatus={errors.purchaseDate ? 'error' : ''}
										help={errors.purchaseDate ? 'Please select a valid date!' : ''}
									>
										<DatePicker
											size="large"
											disabled={type === 'view'}
											onChange={(newValue) => {
												console.log('data', newValue.toDate())
												setPurchaseDate(newValue?.toDate().toLocaleDateString('en-CA'))
											}}
											label="Purchase Date"
										/>
									</Form.Item>
								</div>
							</div>
							<div className="col-lg-12 customizer-styling-direction px-2">
								<p className="font-weight-bold">Sell Date</p>
								<div className="col-md-12 mb-1">
									<Form.Item
										validateStatus={errors.sellDate ? 'error' : ''}
										help={errors.sellDate ? 'Please select a valid date!' : ''}
									>
										<DatePicker
											size="large"
											disabled={type === 'view'}
											onChange={(newValue) => {
												setSellDate(newValue?.toDate().toLocaleDateString('en-CA'))
											}}
											label="Sell Date"
										/>
									</Form.Item>
								</div>
							</div>
							<div className="col-lg-12 customizer-styling-direction px-2">
								<p className="font-weight-bold">Amount</p>
								<div className="col-md-12 mb-1">
									<TextField
										id="stock-amount"
										label="Amount"
										type="number"
										value={amount}
										disabled={type === 'view'}
										onChange={(event) => {
											setAmount(event.target.value);
										}}
										error={errors.amount}
									/>
								</div>
							</div>
							<div className="col-lg-12 customizer-styling-direction px-2">
								<p className="font-weight-bold">R-Value</p>
								<div className="row">
									<div className="col-md-1">
									</div>
									<div className="col-md-11 row">
										<div className="col-md-6">
											<p className="font-weight">Risk %</p>
											<TextField
												id="stock-risk"
												label="Number"
												type="number"
												value={risk}
												disabled={type === 'view'}
												InputLabelProps={{
													shrink: true,
												}}
												onChange={(event) => {
													setRisk(event.target.value);
												}}
												error={errors.risk}
											/>
										</div>
										<div className="col-md-6">
											<p className="font-weight">Profit %</p>
											<TextField
												id="stock-profit"
												label="Number"
												type="number"
												InputLabelProps={{
													shrink: true,
												}}
												disabled={type === 'view'}
												value={profit}
												onChange={(event) => {
													setProfit(event.target.value);
												}}
												error={errors.profit}
											/>
										</div>
									</div>
								</div>
							</div>
							<FormControl
								className="mt-2 px-2"
							>
								<FormLabel id="portfolio-type" className="font-weight-bold">Portfolio Type</FormLabel>
								<RadioGroup
									aria-labelledby="portfolio-type"
									name="portfolio-type"
									value={portType}
									onChange={(event) => {
										setPortType(event.target.value)
									}}
								>
									{PORTFOLIO_TYPES.map((portfolio, index) => (
										<FormControlLabel disabled={type === 'view'} value={portfolio.value} control={<Radio />} label={portfolio.label} key={index} />
									))}
								</RadioGroup>
							</FormControl>
						</div>
					</div>
				</div>
			</div>
			<div className="col-xl-4 col-md-12 col-12">
				<div className="card card-congratulation-medal">
					<div className="card-body">
						<div className="row">
							<div className="col-lg-6 customizer-styling-direction px-2">
								<p className="font-weight-bold">Net Income</p>
								<div className="col-md-12 mb-1">
									<input className="form-control input" type="text" id="net_income" value={netIncome} style={{ width: "7rem" }} readOnly />
								</div>
							</div>
							<div className="col-lg-6 customizer-styling-direction px-2">
								<p className="font-weight-bold">Net Income %</p>
								<div className="col-md-12 mb-1">
									<input className="form-control input" type="text" id="net_income_percent" value={netPercent} style={{ width: "7rem" }} readOnly />
								</div>
							</div>
						</div>
						<WagesPieChart incomingData={wagesChartData} />
					</div>
				</div>
			</div >
		</div >
	)
}

export default Analysis;