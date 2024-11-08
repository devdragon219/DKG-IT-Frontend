import React from 'react'
import './css/select2.min.css'
import {
	Autocomplete,
	TextField,
	CircularProgress,
	Box,
	Card,
	Grid,
	Typography
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import TableSection from './section/TableSection';
import SectionButton from './section/SectionButton';
import { Row } from 'antd';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});


const DashboardCompetitors = () => {

	const [loadings, setLoadings] = React.useState({
		companies: false,
		portfolio: false,
		portfolio_competitors_investors: false,
		portfolio_competitors: false,
		investors: false,
		competitors: false,
		competitors_investors: false
	});
	const [comp, setComp] = React.useState(null);
	const [companyInfo, setCompanyInfo] = React.useState({});
	const [relatedLists, setRelatedLists] = React.useState([]);
	const [companies, setCompanies] = React.useState([]);
	const [section, setSection] = React.useState('Companies');

	const DASH_SLUG = 'longevity-investment';
	const END_POINT = 'https://platform.dkv.global/dashboards/api';

	React.useEffect(() => {
		console.log(section);
		setCompanies([]);
	}, [section])

	React.useEffect(() => {
		getCompInfo(comp)
	}, [comp])

	const getCompInfo = async (comp) => {
		if (comp) {
			setLoadings({
				companies: true,
				portfolio: true,
				portfolio_competitors_investors: true,
				portfolio_competitors: true,
				investors: true,
				competitors: true,
				competitors_investors: true
			});
			const slug = comp.slug;
			await showCompanyInfo(slug);
			if (section === 'Investors') {
				await showCompanyRelatedList(slug, 'portfolio', 'portfolio-list');
				await showCompanyRelatedList(slug, 'portfolio_competitors_investors', 'portfolio-competitors-investors-list');
				await showCompanyRelatedList(slug, 'portfolio_competitors', 'portfolio-competitors-list');
				// Handle visibility of related lists based on the section
				// This can be handled via state or conditional rendering in JSX
			} else {
				await showCompanyRelatedList(slug, 'investors', 'investors-list');
				await showCompanyRelatedList(slug, 'competitors', 'competitors-list');
				await showCompanyRelatedList(slug, 'competitors_investors', 'competitors-investors-list');
				// Handle visibility of related lists based on the section
			}
		}
	}

	const getCompanies = async () => {
		setLoadings(prevLoadings => ({ ...prevLoadings, companies: true }));
		try {
			const response = await fetch(`${END_POINT}/companies-list/?section=${section}&dashboard=${DASH_SLUG}&per_page=300`);
			const msg = await response.json();
			const data = msg["data"];
			console.log('companies', data)
			setCompanies(data)
			setComp(data[0])
		} catch (error) {
			console.error('Error fetching companies:', error);
		} finally {
			setLoadings(prevLoadings => ({ ...prevLoadings, companies: false }));
		}
	}

	const getCompany = async (name) => {
		setLoadings(prevLoadings => ({ ...prevLoadings, companies: true }));
		let filterParams = { section: section, dashboard: DASH_SLUG };
		let searchQuery = name;
		if (name) {
			searchQuery = name;
		}
		if (searchQuery?.trim() !== '') {
			filterParams['title'] = searchQuery;
		}
		try {
			const response = await fetch(`${END_POINT}/companies-list/?section=${section}&dashboard=${DASH_SLUG}&q=${searchQuery}`);
			const msg = await response.json();
			const data = msg["data"];
			console.log('data', data)
			setCompanies(data);
		} catch (error) {
			console.error('Error fetching companies:', error);
		} finally {
			setLoadings(prevLoadings => ({ ...prevLoadings, companies: false }));
		}
	}

	const showCompanyInfo = async (slug) => {
		try {
			const response = await fetch(`${END_POINT}/company-details/?slug=${slug}`)
				.then(response => response.json())
				.then(msg => {
					console.log('company info', msg)
					setCompanyInfo({
						title: msg.title,
						description: msg.fields.description.value.slice(0, 500),
						logo: msg.fields.logo && msg.fields.logo.value > ''
							? `https://platform.dkv.global/files/${msg.fields.logo.value}`
							: '/assets/default_company_image.png'
					});
				})
		} catch (error) {
			console.error('Error fetching company info:', error);
		}
	};

	const showCompanyRelatedList = async (slug, mode, containerId) => {
		try {
			setLoadings(prevLoadings => ({ ...prevLoadings, [mode]: true }));
			const response = await fetch(`${END_POINT}/get-company-competitors/?company=${slug}&dashboard=${DASH_SLUG}&mode=${mode}`)
				.then(response => response.json())
				.then(msg => {
					console.log("response", msg)
					setRelatedLists((prevLists) => ({
						...prevLists,
						[mode]: msg.companies
					}));
				})
		} catch (error) {
			console.error(`Error fetching ${mode} list:`, error);
		} finally {
			setLoadings(prevLoadings => ({ ...prevLoadings, [mode]: false }));
		}
	};

	function debounce(func, wait) {
		let timeout;

		return function executedFunction(...args) {
			const later = () => {
				clearTimeout(timeout);
				func(...args);
			};

			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
		};
	};

	const debouncedInput = debounce((event, newInputValue) => {
		getCompany(newInputValue);
	}, 600);

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Box className='dark-layout' sx={{ p: 5, minHeight: '100vh', bgcolor: "#161d31" }}>
				<Grid container spacing={5}>
					<Grid item xs={12} md={12} xl={12}>
						<Card className="card-statistics" sx={{ backgroundColor: '#283046', p: 5 }}>
							<Box className="card-body statistics-body">
								<Row>
									<Grid item xs={12} sm={6} xl={6} sx={{ mb: 2, mbXl: 0 }}>
										<Box className="media">
											<Box className="media-body my-auto">
												<Autocomplete
													fullWidth
													value={comp}
													loading={loadings.companies}
													onChange={(event, newValue) => {
														console.log('na', newValue)
														setComp(newValue)
													}}
													id="select-companies"
													options={companies}
													getOptionLabel={(option) => option.title}
													filterSelectedOptions
													onInputChange={debouncedInput}
													renderInput={(params) => (
														<TextField
															{...params}
															label="Company Name"
															placeholder="Type Company's Name"
															// error={errors.companies}
															InputProps={
																{
																	...params.InputProps,
																	endAdornment: (
																		<React.Fragment>
																			{loadings.companies ? <CircularProgress color="inherit" size={20} /> : null}
																			{params.InputProps.endAdornment}
																		</React.Fragment>
																	)
																}
															}
														/>
													)}
												/>
											</Box>
										</Box>
									</Grid>
									<Grid item xs={12} sm={5} xl={5} sx={{ mb: 2, mbXl: 0 }}>
										<Box className="media" sx={{ height: "100%" }}>
											<Box className="media-body my-auto">
												<Box className="btn-group px-4">
													<SectionButton
														select={setSection}
													/>
												</Box>
											</Box>
										</Box>
									</Grid>
								</Row>
								<br />
								{companyInfo.logo && (
									<Grid container>
										<Grid item lg={2} id="main-logo-div">
											<img id="main-logo" alt="avatar" style={{ width: "70%" }} className="cursor-pointer" src={companyInfo.logo} />
										</Grid>
										<Grid item lg={2} id="predicted-competitors" sx={{ display: "none", ml: "-2rem", mt: "1rem" }}>
											{/* Content for predicted competitors */}
										</Grid>
										<Grid item lg={10} id="company-description-div">
											<Typography variant="h4" id="company_title">{companyInfo.title}</Typography>
											<Typography className="card-text" id="company_description" sx={{ color: '#b4b7bd' }}>{companyInfo.description}</Typography>
										</Grid>
									</Grid>
								)}
							</Box>
						</Card>
					</Grid>
				</Grid>
				{section === 'Companies' && (
					<div className="row match-height mt-5" id="company_related_lists">
						<TableSection
							title={'Investors'}
							lists={relatedLists.investors}
							setComp={setComp}
							loading={loadings.investors}
						/>
						<TableSection
							title={'Competitors'}
							lists={relatedLists.competitors}
							setComp={setComp}
							loading={loadings.competitors}
						/>
						<TableSection
							title={'Investors of Competitors'}
							lists={relatedLists.competitors_investors}
							setComp={setComp}
							loading={loadings.competitors_investors}
						/>
					</div>
				)}

				{section === 'Investors' && (
					<div className="row match-height mt-5" id="company_related_lists">
						<TableSection
							title={'Portfolio'}
							lists={relatedLists.portfolio}
							setComp={setComp}
							loading={loadings.portfolio}
						/>
						<TableSection
							title={'Competitors'}
							lists={relatedLists.portfolio_competitors_investors}
							setComp={setComp}
							loading={loadings.portfolio_competitors_investors}
						/>
						<TableSection
							title={'Portfolio of Competitors'}
							lists={relatedLists.portfolio_competitors}
							setComp={setComp}
							loading={loadings.portfolio_competitors}
						/>
					</div>
				)}

			</Box>
		</ThemeProvider>
	)
}

export default DashboardCompetitors