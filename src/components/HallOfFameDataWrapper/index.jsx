/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import {
  Button,
  FormControlLabel,
  FormGroup,
  Grid,
  Slider,
  Switch,
} from "@mui/material";
import { Col, ColorPicker, Row, Space } from "antd";
import FormInput from "../FormInput";
import HallOfFame from "../HallOfFame";
import { pathToLoadCsvFile } from "../../constants/routes";
import { setMockData } from "../../store/item";
import { useDispatch } from "react-redux";

function createBrickData(names, fields, countries, logos, numCols) {
  const bricksData = [];
  let brickIndex = 0;

  for (let row = 0; brickIndex < names.length; row++) {
    const isOffsetRow = row % 2 === 1;
    const colsInRow = isOffsetRow ? numCols - 1 : numCols;

    for (let col = 0; col < colsInRow; col++) {
      if (names?.[brickIndex]) {
        bricksData.push({
          name: names[brickIndex],
          field: fields[brickIndex],
          country: countries[brickIndex],
          logo: logos[brickIndex],
          row: row,
          col: col,
        });

        brickIndex++;
      }
    }
  }

  return bricksData;
}

const HallOfFameDataWrapper = ({ isEditMode, data }) => {
  const dispatch = useDispatch();
  const [jsonData, setJsonData] = useState(
    data?.originalData?.jsonData || null
  );
  const [bricksData, setBricksData] = useState(
    data?.originalData?.bricksData || null
  );
  const [isHorisontal, setIsHorisontal] = useState(
    data?.originalData?.isHorisontal || true
  );
  const [backgroundColor, setBackgroundColor] = useState(
    data?.originalData?.backgroundColor || "#1D3556"
  );
  const [borderColor, setBorderColor] = useState(
    data?.originalData?.borderColor || "#fff"
  );
  const [title, setTitle] = useState(
    data?.originalData?.title || "Your Title Here"
  );
  const [textColor, setTextColor] = useState(
    data?.originalData?.textColor || "#fff"
  );
  const [numCols, setNumCols] = useState(data?.originalData?.numCols || 4);
  const [gapSize, setGapSize] = useState(data?.originalData?.gapSize || 0);
  const [fontSize, setFontSize] = useState(data?.originalData?.fontSize || 13);

  useEffect(() => {
    if (jsonData?.name) {
      const res = createBrickData(
        jsonData.name,
        jsonData.fields,
        jsonData.countries,
        jsonData.logo,
        numCols
      );

      setBricksData(res);
    }
  }, [numCols, jsonData]);

  function csvToJson(csv) {
    const lines = csv.split("\n");
    const headers = lines[0].split(",");
    const result = {};

    headers.forEach((header) => {
      result[header.trim()] = [];
    });

    lines.slice(1).forEach((line) => {
      const values = line.split(",");

      values.forEach((value, index) => {
        const header = headers?.[index]?.trim();
        if (result?.[header]) {
          result[header].push(value.trim());
        }
      });
    });

    return result;
  }

  const handleCSVInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const csvData = e.target.result;
      const jsonData = csvToJson(csvData);

      const res = createBrickData(
        jsonData.name,
        jsonData.fields,
        jsonData.countries,
        jsonData.logo,
        numCols
      );

      setJsonData(jsonData);
      setBricksData(res);
    };

    reader.readAsText(file);
  };

  useEffect(() => {
    if (!isEditMode && data?.originalData) {
      setBricksData(data?.originalData?.bricksData);
      setIsHorisontal(data?.originalData?.isHorisontal);
      setBackgroundColor(data?.originalData?.backgroundColor);
      setBorderColor(data?.originalData?.borderColor);
      setTitle(data?.originalData?.title);
      setTextColor(data?.originalData?.textColor);
      setNumCols(data?.originalData?.numCols);
      setGapSize(data?.originalData?.gapSize);
      setFontSize(data?.originalData?.fontSize);
    }
  }, [data, isEditMode]);

  useEffect(() => {
    if (isEditMode) {
      dispatch(
        setMockData(
          JSON.stringify({
            originalData: {
              title,
              textColor,
              borderColor,
              backgroundColor,
              numCols,
              isHorisontal,
              gapSize,
              fontSize,
              bricksData,
              jsonData,
            },
          })
        )
      );
    }
  }, [
    title,
    textColor,
    borderColor,
    backgroundColor,
    numCols,
    isHorisontal,
    gapSize,
    fontSize,
    bricksData,
    jsonData,
    isEditMode,
  ]);

  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        marginBottom: "10px",
      }}
    >
      {isEditMode ? (
        <>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Button variant="contained" component="label" color="primary">
                Upload CSV
                <input
                  type="file"
                  id={"uploadJson"}
                  accept={".csv"}
                  hidden
                  onChange={handleCSVInputChange}
                />
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                size="normal"
                color="primary"
                variant="contained"
                href={pathToLoadCsvFile("hallOfFameConstructor")}
                download
                target="_blank"
              >
                Download Example
              </Button>
            </Grid>
            <Grid item xs={4}>
              <span>Number Cols</span>
              <Slider
                aria-label="Temperature"
                valueLabelDisplay="auto"
                value={numCols}
                onChange={(e) => setNumCols(e.target.value)}
                step={1}
                marks
                min={4}
                max={30}
              />
            </Grid>
            <Grid item xs={4}>
              <span>Gap Size</span>
              <Slider
                aria-label="Temperature"
                valueLabelDisplay="auto"
                value={gapSize}
                onChange={(e) => setGapSize(e.target.value)}
                step={10}
                marks
                min={0}
                max={100}
              />
            </Grid>
            <Grid item xs={4}>
              <span>Font Size</span>
              <Slider
                aria-label="FontSize"
                valueLabelDisplay="auto"
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
                step={0.5}
                marks
                min={2}
                max={40}
              />
            </Grid>
            <Grid item xs={2}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={isHorisontal}
                      onChange={(event) => {
                        setIsHorisontal(event.target.checked);
                      }}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label="Is Horisontal"
                />
              </FormGroup>
            </Grid>
            <Grid item xs={2}>
              <Row align="middle">
                <Space>
                  <span>Background Color:</span>
                  <Col>
                    <ColorPicker
                      value={backgroundColor}
                      onChange={(_e, d) => {
                        setBackgroundColor(d);
                      }}
                    />
                  </Col>
                </Space>
              </Row>
            </Grid>
            <Grid item xs={2}>
              <Row align="middle">
                <Space>
                  <span>Border Color:</span>
                  <Col>
                    <ColorPicker
                      value={borderColor}
                      onChange={(_e, d) => {
                        setBorderColor(d);
                      }}
                    />
                  </Col>
                </Space>
              </Row>
            </Grid>
            <Grid item xs={2}>
              <Row align="middle">
                <Space>
                  <span>Text Color:</span>
                  <Col>
                    <ColorPicker
                      value={textColor}
                      onChange={(_e, d) => {
                        setTextColor(d);
                      }}
                    />
                  </Col>
                </Space>
              </Row>
            </Grid>
            <Grid item xs={2}>
              <FormInput
                value={title}
                label={"Title:"}
                handleChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Grid>
          </Grid>
        </>
      ) : (
        <></>
      )}

      {bricksData ? (
        <HallOfFame
          width={1280}
          height={720}
          title={title}
          textColor={textColor}
          borderColor={borderColor}
          backgroundColor={backgroundColor}
          numCols={numCols}
          horisontal={isHorisontal}
          gapSize={gapSize}
          fontSize={fontSize}
          bricksData={bricksData}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default HallOfFameDataWrapper;
