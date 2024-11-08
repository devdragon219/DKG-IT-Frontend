import { Button, Input, Modal, Switch, Tooltip, Upload } from "antd";
import Spreadsheet from "react-spreadsheet";
import {
  DownloadOutlined,
  QuestionCircleOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { convertJsonToCsv, downloadCsv, handleCSVInputChange } from "../utils";
import { useMemo, useState } from "react";
import SpreadsheetTabs from "./SpreadsheetTabs";
import SelectedDataSettingsForm from "./SelectedDataSettingsForm";

const HELP_LINK =
  "https://docs.google.com/document/d/e/2PACX-1vTR25FjsMEvlliI03rVT4Y3xKrc4PSyJGMzueOcLWAqbhQ90cGz0cWVY1nu-nlm324vNk10UNwfIPzi/pub";

const DataPage = ({
  data,
  setData,
  dataSettingsConfig,
  setDataSettings,
  dataSettings,
  isDOCConnected,
  setIsDOCConnected,
  docURL,
  setDocURL,
  isMultiple,
  selectedKey,
  setSelectedKey,
  setCustomizeSettings,
  customizeSettings,
}) => {
  const [open, setOpen] = useState(false);
  const [tempURL, setTempURL] = useState(docURL);

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

  const handleDownload = () => {
    const csv = convertJsonToCsv(data);
    downloadCsv(csv, "data.csv");
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

    setData(newData);
  };

  const spreadsheetData = useMemo(() => {
    if (isMultiple && data?.[selectedKey]) {
      return data[selectedKey];
    }

    return data;
  }, [data, selectedKey]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div
          style={{
            width: "75%",
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
              <Button onClick={addColumn}>Add Column</Button>
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
          {isMultiple && (
            <SpreadsheetTabs
              data={data}
              setSelectedKey={setSelectedKey}
              selectedKey={selectedKey}
              setCustomizeSettings={setCustomizeSettings}
              setData={setData}
              setDataSettings={setDataSettings}
              customizeSettings={customizeSettings}
              dataSettings={dataSettings}
            />
          )}

          <div
            style={{
              overflow: "scroll",
              height: "100%",
            }}
          >
            <Spreadsheet
              data={spreadsheetData}
              onChange={onChangeSheet}
              style={{ border: "1px solid black" }}
              readOnly={true}
            />
          </div>
        </div>
        <div
          style={{
            width: "23%",
            padding: "10px",
          }}
          key={selectedKey}
        >
          <SelectedDataSettingsForm
            data={data}
            dataSettingsConfig={dataSettingsConfig}
            setDataSettings={setDataSettings}
            dataSettings={dataSettings}
            isMultiple={isMultiple}
            selectedKey={selectedKey}
          />
        </div>
      </div>
    </div>
  );
};

export default DataPage;
