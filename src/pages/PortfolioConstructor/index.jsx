import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import './css/jquery-ui.css';
import './css/nouislider.min.css';
import './css/ext-component-sliders.css';
import './css/palette-noui.css';
import './css/app.css';
import './css/dark-layout.css';
import Analysis from "./Section/Analysis";
import PortfolioChart from "./Section/Charts/PortfolioChart";
import DailyNetReturnsChart from "./Section/Charts/DailyNetChart";
import StockDataChart from "./Section/Charts/StockDataChart";
import HedgeBox from "./Section/HedgeBox";
import FinancialLayout from "../../components/FinancialToolLayout";
import FinDataPage from "../../components/FinancialToolLayout/Section/DataPage";
import { portfolioConfig } from "../../components/PortfolioConstructor/config";
import { getItemBySlug } from "../../store/item";
import WidgetsList from "../../components/WidgetsList";
import { PORTFOLIO_CONSTRUCTION_TOOL } from "../../constants/diagram";

const PortfolioConstructor = () => {
	const PORTFOLIO_CHART = 'Portfolio Chart';
	const FUTURE_CHART = 'Future Chart';
	const DAILY_INCOME_PERCENT_CHART = 'Daily Income percentage Chart';

	const [portfolioData, setPortfolioData] = React.useState({});
	const [current, setCurrent] = React.useState('preview');
	const [docURL, setDocURL] = React.useState(null);
	const [isDOCConnected, setIsDOCConnected] = React.useState(false);
	const [data, setData] = React.useState(portfolioConfig.data);
	const [selectedKey, setSelectedKey] = React.useState("key1");
	const [selectedComps, setSelectedComps] = React.useState([]);
	const [detail, setDetail] = React.useState({
		purchaseDate: null,
		sellDate: null,
		comps: [],
		tickers: '',
		amount: 0,
		risk: 0.0,
		profit: 0.0,
		portType: "equal_weights",
		customWid: ""
	})

	const { data: editData } = useSelector((state) => state.item);
	const { slug, type } = useParams()
	const dispatch = useDispatch()

	React.useEffect(() => {
		if (slug) {
			dispatch(getItemBySlug(slug));
		}
	}, [slug])

	React.useEffect(() => {
		console.log('editData', editData)
		if (editData) {
			const { configs } = editData;
			const { data, docURL, isDOCConnected, isMultiple, portfolio } = configs;
			let temp = []
			data.comps.map((comp) => {
				let compObj = {
					ticker: comp.split(':')[0],
					name: comp.split(':')[1],
					page: ''
				}
				temp.push(compObj)
			})
			setSelectedComps(temp);
			setPortfolioData(portfolio);
			let tickers = '';
			for (let i = 0; i < data.comps.length; i++) {
				tickers += data.comps[i] + (i === data.comps.length - 1 ? '' : ',');
			}
			setDetail({
				purchaseDate: data.purchaseDate,
				sellDate: data.sellDate,
				comps: tickers.split(','),
				tickers: tickers,
				amount: data.amount,
				risk: data.risk,
				profit: data.profit,
				portType: data.portType,
				customWid: data.customWid
			})
			setDocURL(docURL);
			setIsDOCConnected(isDOCConnected);
		}
	}, [editData])

	React.useEffect(() => {
		console.log(selectedComps)
	}, [selectedComps])

	const renderSwitch = React.useMemo(() => {
		switch (current) {
			case "preview":
				return (
					<div className="p-3 d-flex flex-column dark-layout" style={{ gap: '10px', backgroundColor: '#161d31', color: '#b4b7bd' }}>
						<Analysis
							setPortfolioData={setPortfolioData}
							setDetail={setDetail}
							selectedComps={selectedComps}
							setSelectedComps={setSelectedComps}
							detail={detail}
						/>
						<PortfolioChart
							incomingData={portfolioData?.[PORTFOLIO_CHART]}
							futureData={portfolioData?.[FUTURE_CHART]}
						/>
						<div className="card card-congratulation-medal size-for-summary">
						</div>
						<HedgeBox />
						<DailyNetReturnsChart incomingData={portfolioData?.[DAILY_INCOME_PERCENT_CHART]} />
						<StockDataChart companies={detail?.comps} purchaseDate={detail?.purchaseDate} sellDate={detail?.sellDate} />
					</div>
				);
			case "data":
				return (
					<FinDataPage
						data={data}
						setData={setData}
						isDOCConnected={isDOCConnected}
						setIsDOCConnected={setIsDOCConnected}
						docURL={docURL}
						setDocURL={setDocURL}
						isMultiple={false}
						selectedKey={selectedKey}
						setSelectedKey={setSelectedKey}
						columnLabels={portfolioConfig.columnLabels}
						setSelectedComps={setSelectedComps}
						setCurrent={setCurrent}
					/>
				);
			case "createdList":
				return <WidgetsList type={PORTFOLIO_CONSTRUCTION_TOOL} />;
		}
	}, [current, isDOCConnected, data, selectedComps, portfolioData, detail, docURL, selectedKey, editData]);


	return (
		<FinancialLayout
			current={current}
			setCurrent={setCurrent}
			diagramType={PORTFOLIO_CONSTRUCTION_TOOL}
			data={detail}
			docURL={docURL}
			isDOCConnected={isDOCConnected}
			isMultiple={false}
			slug={slug}
			type={type}
			portfolio={portfolioData}
		>
			{renderSwitch}
		</FinancialLayout>
	);
}

export default PortfolioConstructor;