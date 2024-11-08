import React, { useState, useRef, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
	AreaChartOutlined,
	OrderedListOutlined,
	TableOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Tour, Breadcrumb, Button, Modal, Input } from "antd";
import { editItem, publishItem } from "../../store/list";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";
import { getName } from "../../constants/names";
import { v4 as uuidv4 } from "uuid";
import UserName from "../layout/UserName";
import { LoginButton } from "../layout/LoginButton";
import LogoutButton from "../layout/LogoutButton";

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const { Header, Content } = Layout

const FinancialLayout = ({
	children,
	current,
	setCurrent,
	diagramType,
	data,
	docURL,
	isDOCConnected,
	isMultiple,
	slug,
	type,
	portfolio
}) => {

	const [openTour, setOpenTour] = useState(false);
	const [openName, setOpenName] = useState(false);
	const [visName, setVisName] = useState('');

	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);

	const dispatch = useDispatch();
	const { name } = useSelector((state) => state.user);

	const onTopNavClick = (e) => {
		setCurrent(e.key);
	}

	const onSave = () => {
		if (slug) {
			dispatch(
				editItem({
					title: visName,
					slug: slug,
					is_staff: true,
					diagram_type: diagramType,
					source: {
						configs: {
							data,
							docURL,
							isDOCConnected,
							isMultiple,
							portfolio
						},
					},
				})
			).then((res) => {
				console.log(res);
				window.confirm(`${visName} successfully saved!`)
			})
				.catch((err) => {
					console.log('err', err);
					window.confirm("Something's wrong. Please try again")
				})

			return;
		}

		dispatch(
			publishItem({
				title: visName,
				slug: uuidv4(),
				is_staff: true,
				diagram_type: diagramType,
				source: {
					configs: {
						data,
						docURL,
						isDOCConnected,
						isMultiple,
						portfolio
					},
				},
			})
		).then((res) => {
			console.log(res);
			window.confirm(`${visName} successfully published!`)
		})
			.catch((err) => {
				console.log('err', err);
				window.confirm("Something's wrong. Please try again")
			})
	}

	useEffect(() => {
		setTimeout(() => {
			if (ref1?.current) {
				setOpenTour(true);
			}
		}, [1500]);
	}, [ref1]);

	const steps = [
		{
			title: "Preview",
			description: "Preview your visualisation",
			cover: <img alt="tour.png" src="/assets/prevPort.webp" />,
			target: () => ref1.current?.parentElement,
		},
		{
			title: "Data",
			description: "Add your data",
			cover: <img alt="tour.png" src="/assets/DataVis.webp" />,
			target: () => ref2.current?.parentElement,
		},
		{
			title: "Created List",
			description: "Check your Created List",
			cover: <img alt="tour.png" src="/assets/listVis.webp" />,
			target: () => ref3.current?.parentElement,
		}
	];

	const items = [
		{
			key: "preview",
			label: "Analysis",
			icon: <AreaChartOutlined ref={ref1} />,
		},
		{
			key: "data",
			label: "Data",
			icon: <TableOutlined ref={ref2} />,
		},
		{
			key: "createdList",
			label: "Created List",
			icon: <OrderedListOutlined ref={ref3} />,
		},
	];

	const getItemsNav = () => {
		return items
	}

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			{!slug && (
				<Tour
					open={openTour}
					onClose={() => setOpenTour(false)}
					steps={steps}
				/>
			)}
			<Modal
				title="PORTFOLIO NAME"
				open={openName}
				onOk={() => {
					onSave();
					setOpenName(false);
				}}
				onCancel={() => {
					setOpenName(false);
				}}
				footer={[
					<Button
						key="back"
						onClick={() => {
							setOpenName(false);
						}}
					>
						Cancel
					</Button>,
					<Button
						key="submit"
						type="primary"
						onClick={() => {
							onSave();
							setOpenName(false);
						}}
					>
						PUBLISH
					</Button>,
				]}
			>
				<Input
					placeholder="Name"
					value={visName}
					onChange={(e) => setVisName(e?.target?.value)}
				/>
			</Modal>
			{!slug && (
				<Header
					style={{
						display: "flex",
						alignItems: "center",
						padding: '5px 10px',
					}}
				>
					<Link
						to={'/'}
						style={{
							background: "#fff",
							padding: "2px 8px",
							height: "100%",
							display: "flex",
							alignItems: "center",
						}}
					>
						<img
							src={"/assets/Logo.webp"}
							alt="Logo"
							height={46}
							style={{ display: "block" }}
						/>
					</Link>
					<Menu
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={["preview"]}
						onClick={onTopNavClick}
						selectedKeys={[current]}
						items={getItemsNav()}
						style={{
							flex: 1,
							minWidth: 0,
							justifyContent: "center",
						}}
					/>
					<div
						style={{
							fontFamily: "Arial, Helvetica, sans-serif",
							marginLeft: "auto",
							textAlign: "right",
						}}
					>
						<UserName />
						<LoginButton />
						<LogoutButton />
					</div>
				</Header>
			)}
			{type !== "view" && (
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Breadcrumb
						style={{
							margin: "16px 10px",
						}}
					>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>
							{getName(diagramType)} Creation Page.
						</Breadcrumb.Item>
					</Breadcrumb>
					<div>
						{!type && (
							<Button
								variant="contained"
								component="label"
								color="primary"
								onClick={() => {
									if (Object.keys(portfolio).length === 0) {
										window.confirm("Please get portfolio at first!")
										return;
									}
									if (!name) {
										window.confirm("Please login at first!")
										return;
									}
									console.log('port', portfolio)
									setOpenName(true)
								}}
								style={{
									marginRight: "10px",
								}}
							>
								PUBLISH
							</Button>
						)}
						{type === "edit" && (
							<Button
								variant="contained"
								component="label"
								color="primary"
								onClick={() => {
									onSave();
								}}
								style={{
									marginRight: "10px",
								}}
							>
								SAVE
							</Button>
						)}
					</div>
				</div>
			)}
			<Content>
				{children}
			</Content>
		</ThemeProvider>
	);
}

export default FinancialLayout;