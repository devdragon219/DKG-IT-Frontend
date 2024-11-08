import React from "react";
import { Button, Input, Modal, Switch, Tooltip, Upload, notification } from "antd";
import {
	DownloadOutlined,
	QuestionCircleOutlined,
	UploadOutlined,
} from "@ant-design/icons";
import Spreadsheet from "react-spreadsheet";
import axios from "axios";
// import { convertJsonToCsv, downloadCsv, handleCSVInputChange } from "../utils";
import { useMemo, useState } from "react";
import { Stack } from "@mui/material";

const HELP_LINK =
	"https://docs.google.com/document/d/e/2PACX-1vTR25FjsMEvlliI03rVT4Y3xKrc4PSyJGMzueOcLWAqbhQ90cGz0cWVY1nu-nlm324vNk10UNwfIPzi/pub";

const FinDataPage = ({
	data,
	setData,
	isDOCConnected,
	setIsDOCConnected,
	docURL,
	setDocURL,
	isMultiple,
	selectedKey,
	columnLabels,
	setSelectedComps,
	setCurrent
}) => {
	const [open, setOpen] = useState(false);
	const [tempURL, setTempURL] = useState(docURL);

	const [api, contextHolder] = notification.useNotification();

	const openNotificationWithIcon = () => {
		api["error"]({
			message: "The URL is not valid",
			description: "Please check the puted Google doc URL",
		});
	};


	React.useEffect(() => {
		if (docURL && isDOCConnected) {
			let csvURL = docURL;
			if (docURL.includes('/edit')) {
				csvURL = docURL.replace('/edit', '/export?format=csv');
			} else {
				csvURL = `${docURL}/export?format=csv`;
			}
			axios
				.get(csvURL)
				.then((response) => {
					setData(csvToJson(response.data, true));
					setDocURL("")
				})
				.catch((error) => {
					openNotificationWithIcon();
					setDocURL("")
				});
		}
	}, [docURL, isDOCConnected]);


	const addRow = () => {
		if (isMultiple && data?.[selectedKey]) {
			const newRow = new Array(data?.[selectedKey][0].length).fill({
				value: "",
			});

			const datas = {
				...data,
				[selectedKey]: [...data[selectedKey], newRow],
			};

			setData(datas);
		}

		const newRow = new Array(data[0].length).fill({ value: "" });
		setData([...data, newRow]);
	};

	const csvToJson = (csvString, isGoogleDoc) => {
		const rows = csvString.split("\n");

		const transformedArray = rows.map((row) => {
			const cells = row.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g) || [];

			return cells.map((cell) => {
				const cleanedCell = cell.replace(/^"|"$/g, "").trim();

				return {
					value: cleanedCell,
					readOnly: isGoogleDoc,
				};
			});
		});

		// Return the transformed array
		return transformedArray;
	}

	const handleCSVInputChange = (file, setData) => {
		const reader = new FileReader();

		reader.onload = (e) => {
			const csvData = e.target.result;

			const jsonData = csvToJson(csvData);

			setData(jsonData);
		};

		reader.readAsText(file);
	};


	const addColumn = () => {
		if (isMultiple && data?.[selectedKey]) {
			const newData = data[selectedKey].map((row) => [...row, { value: "" }]);

			const datas = {
				...data,
				[selectedKey]: newData,
			};

			setData(datas);
		}

		const newData = data.map((row) => [...row, { value: "" }]);
		setData(newData);
	};

	const convertJsonToCsv = (json) => {
		const csvRows = [];
		json.forEach((row) => {
			const values = row.map((cell) => `"${cell.value}"`);
			csvRows.push(values.join(","));
		});
		return csvRows.join("\n");
	};

	const downloadCsv = (csv, filename) => {
		const blob = new Blob([csv], { type: "text/csv" });
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.setAttribute("hidden", "");
		a.setAttribute("href", url);
		a.setAttribute("download", filename);
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	};

	const handleDownload = () => {
		const csv = convertJsonToCsv(data);
		downloadCsv(csv, "data.csv");
	};

	const handleClick = () => {
		setSelectedComps([]);
		console.log('bbb', data);
		const _temp = [];
		data.map((row) => {
			if (row[0] && row[1]) {
				const newValue = {
					name: row[1]?.value || "",
					ticker: row[0]?.value || "",
					page: ''
				};

				if (!_temp.some(item => item.name === newValue.name && !_temp.some(item => item.name == "Company Name") && item.ticker === newValue.ticker)) {
					_temp.push(newValue);
				}
			}
		});
		console.log('temp', _temp)
		setSelectedComps([..._temp])
		setCurrent('preview')
	};

	const onChangeSheet = (newData) => {
		if (isMultiple && data?.[selectedKey]) {
			const datas = {
				...data,
				[selectedKey]: newData,
			};

			setData(datas);
			return;
		}

		console.log('newData', newData)

		setData(newData);
	};

	const spreadsheetData = useMemo(() => {
		if (isMultiple && data?.[selectedKey]) {
			return data[selectedKey];
		}

		return data;
	}, [data, selectedKey]);

	return (
		<div className="p-5">
			{contextHolder}
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					height: "100%",
				}}
			>
				<div
					style={{
						width: "100%",
						height: "70vh",
					}}
				>
					<Modal
						title="ADD URL"
						open={open}
						onOk={() => {
							setOpen(false);
							setDocURL(tempURL);
						}}
						onCancel={() => {
							setOpen(false);
						}}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
							}}
						>
							<Input
								placeholder="URL"
								value={tempURL}
								onChange={(e) => setTempURL(e?.target?.value)}
								style={{
									marginRight: "10px",
								}}
							/>
							<Tooltip title="How to get URL ?">
								<Button
									type="primary"
									shape="circle"
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
									onClick={() => {
										window.open(HELP_LINK, "_blank");
									}}
									icon={<QuestionCircleOutlined />}
								/>
							</Tooltip>
						</div>
					</Modal>
					<div
						style={{
							marginBottom: "10px",
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<div>
							<Button
								onClick={addRow}
								style={{
									marginRight: "10px",
								}}
							>
								Add Row
							</Button>
						</div>
						<div
							style={{
								marginBottom: "10px",
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<div
								style={{
									marginRight: "5px",
									color: 'black'
								}}
							>
								<span>Connect Google DOC</span>
								<Switch
									value={isDOCConnected}
									disabled={isMultiple}
									onChange={(e) => {
										setIsDOCConnected(e);
									}}
									style={{
										marginLeft: "10px",
									}}
								/>
							</div>
							{isDOCConnected ? (
								<Button
									type="primary"
									disabled={isMultiple}
									onClick={() => {
										setOpen(true);
									}}
								>
									Add Link to DOC
								</Button>
							) : (
								<Upload
									accept=".csv"
									beforeUpload={(file) => {
										handleCSVInputChange(file, setData);
										return false;
									}}
									disabled={isMultiple}
									showUploadList={false}
								>
									<Button
										type="primary"
										icon={<UploadOutlined />}
										disabled={isMultiple}
									>
										Upload CSV
									</Button>
								</Upload>
							)}
							<Button
								type="primary"
								icon={<DownloadOutlined />}
								onClick={handleDownload}
								disabled={isMultiple}
								style={{
									marginLeft: "10px",
								}}
							>
								Download CSV
							</Button>
						</div>
					</div>

					<Stack
						direction={'column'}
						spacing={2}
					>
						<Spreadsheet
							data={spreadsheetData}
							onChange={onChangeSheet}
							columnLabels={columnLabels}
							style={{ border: "1px solid black" }}
							readOnly={true}
						/>
						<button
							className="btn btn-primary"
							id="reset_btn"
							onClick={handleClick}
							style={{ width: '130px' }}
						>
							Get Portfolio
						</button>
					</Stack>
				</div>
			</div>
		</div>
	);
};

export default FinDataPage;
