/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Switch,
} from "@mui/material";
import { Col, ColorPicker, Row, Space } from "antd";
import FormInput from "../FormInput";
import { pathToLoadCsvFile } from "../../constants/routes";
import { setMockData } from "../../store/item";
import { useDispatch } from "react-redux";
import { createBrickData, csvToJson } from "./utils";
import HallOfFameV2 from "../HallOfFameV2";
import DownloadButton from "./DownloadButton";

const HallOfFameDataWrapperV2 = ({ isEditMode, data }) => {
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
  const [titleSize, setTitleSize] = useState(
    data?.originalData?.titleSize || 35
  );

  const [gridWidth, setGridWidth] = useState(
    data?.originalData?.gridWidth || 1280
  );
  const [gridHeight, setGridHeight] = useState(
    data?.originalData?.gridHeight || 720
  );

  const [fontSize, setFontSize] = useState(data?.originalData?.fontSize || 13);
  const [imgHeight, setImgHeight] = useState(
    data?.originalData?.imgHeight || 85
  );

  const [csvHeaders, setCsvHeaders] = useState(
    data?.originalData?.csvHeaders || []
  );
  const [cardTitleField, setCardTitleField] = useState(
    data?.originalData?.cardTitleField || null
  );
  const [cardSubTitle1Field, setCardSubTitleField1] = useState(
    data?.originalData?.cardSubTitle1Field || null
  );
  const [cardSubTitleField2, setCardSubTitleField2] = useState(
    data?.originalData?.cardSubTitleField2 || null
  );
  const [modalDescription, setModalDescription] = useState(
    data?.originalData?.modalDescription || null
  );

  const [initialTransform, setInitialTransform] = useState(
    data?.originalData?.initialTransform || null
  );

  const [logoSize, setLogoSize] = useState(data?.originalData?.logoSize || 0);

  const [linkSize, setLinkSize] = useState(data?.originalData?.linkSize || 0);

  const [linkData, setLinkData] = useState(
    data?.originalData?.linkData || "https://tools.dkv.global/"
  );

  const [titleTopSpace, setTitleTopSpace] = useState(
    data?.originalData?.titleTopSpace || 0
  );

  const handleCSVInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const csvData = e.target.result;
      const jsonData = csvToJson(csvData);
      let headers = Object.keys(jsonData);

      const indexLogo = headers.indexOf("logo");

      if (indexLogo !== -1) {
        headers.splice(indexLogo, 1);
      }

      if (headers.includes("name")) {
        setCardTitleField("name");
      }
      if (headers.includes("fields")) {
        setCardSubTitleField1("fields");
      }
      if (headers.includes("countries")) {
        setCardSubTitleField2("countries");
      }
      if (headers.includes("description")) {
        setModalDescription("description");
      }

      setCsvHeaders(headers);
      setJsonData(jsonData);
    };

    reader.readAsText(file);
  };

  useEffect(() => {
    if (jsonData && Object.keys(jsonData).length > 0) {
      const cardTitle = jsonData?.[cardTitleField]
        ? jsonData?.[cardTitleField]
        : [];
      const cardSubTitle1 = jsonData?.[cardSubTitle1Field]
        ? jsonData?.[cardSubTitle1Field]
        : [];
      const cardSubTitle2 = jsonData?.[cardSubTitleField2]
        ? jsonData?.[cardSubTitleField2]
        : [];

      const modalDescriptionCont = jsonData?.[modalDescription]
        ? jsonData?.[modalDescription]
        : [];

      const res = createBrickData(
        cardTitle,
        cardSubTitle1,
        cardSubTitle2,
        jsonData.logo,
        modalDescriptionCont,
        numCols
      );

      setBricksData(res);
    }
  }, [
    jsonData,
    cardTitleField,
    cardSubTitle1Field,
    cardSubTitleField2,
    modalDescription,
    numCols,
  ]);

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
      setTitleSize(data?.originalData?.titleSize);
      setGridWidth(data?.originalData?.gridWidth);
      setGridHeight(data?.originalData?.gridHeight);
      setInitialTransform(data?.originalData?.initialTransform);
      setFontSize(data?.originalData?.fontSize);
      setCsvHeaders(data?.originalData?.csvHeaders);
      setCardTitleField(data?.originalData?.cardTitleField);
      setCardSubTitleField1(data?.originalData?.cardSubTitle1Field);
      setCardSubTitleField2(data?.originalData?.cardSubTitleField2);
      setModalDescription(data?.originalData?.modalDescription);
      setLogoSize(data?.originalData?.logoSize);
      setLinkSize(data?.originalData?.linkSize);
      setLinkData(data?.originalData?.linkData);
      setTitleTopSpace(data?.originalData?.titleTopSpace);
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
              titleSize,
              gridHeight,
              gridWidth,
              initialTransform,
              fontSize,
              bricksData,
              jsonData,
              cardTitleField,
              cardSubTitle1Field,
              cardSubTitleField2,
              modalDescription,
              csvHeaders,
              logoSize,
              linkSize,
              linkData,
              titleTopSpace,
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
    titleSize,
    gridWidth,
    gridHeight,
    initialTransform,
    fontSize,
    bricksData,
    jsonData,
    cardTitleField,
    cardSubTitle1Field,
    cardSubTitleField2,
    modalDescription,
    csvHeaders,
    logoSize,
    linkSize,
    linkData,
    titleTopSpace,
    isEditMode,
  ]);

  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        marginBottom: isEditMode ? "20px" : "0px",
      }}
    >
      {isEditMode ? (
        <>
          <Grid container spacing={2} style={{ marginBottom: "20px" }}>
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
                href={pathToLoadCsvFile("hallOfFameConstructorV2")}
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
            <Grid item xs={3}>
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
            <Grid item xs={3}>
              <span>IMG Height (%)</span>
              <Slider
                aria-label="IMGHeight"
                valueLabelDisplay="auto"
                value={imgHeight}
                onChange={(e) => setImgHeight(e.target.value)}
                step={1}
                marks
                min={10}
                max={100}
              />
            </Grid>
            <Grid item xs={2}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={isHorisontal}
                      onChange={(event) => {
                        if (event.target.checked) {
                          setImgHeight(85);
                        } else {
                          setImgHeight(50);
                        }
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
            <Grid item xs={2}>
              <FormControl
                fullWidth
                error={cardTitleField === null && csvHeaders.length > 0}
                key={`${cardTitleField}-card-title-label`}
              >
                <InputLabel id="card-title-label">Card Title:</InputLabel>
                <Select
                  labelId="card-title-label"
                  id="card-title-select"
                  value={cardTitleField}
                  label="Card Title:"
                  disabled={csvHeaders.length === 0}
                  onChange={(event) => {
                    setCardTitleField(event.target.value);
                  }}
                >
                  {csvHeaders.map((el) => {
                    return <MenuItem value={el}>{el}</MenuItem>;
                  })}
                </Select>
                {cardTitleField === null && csvHeaders.length > 0 ? (
                  <FormHelperText>Select Title</FormHelperText>
                ) : (
                  <></>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormControl
                fullWidth
                key={`${cardSubTitle1Field}-card-subtitle1-label`}
              >
                <InputLabel id="card-subtitle1-label">
                  Card SubTitle 1:
                </InputLabel>
                <Select
                  labelId="card-subtitle1-label"
                  id="card-subtitle1-select"
                  value={cardSubTitle1Field}
                  label="Card SubTitle 1:"
                  disabled={csvHeaders.length === 0}
                  onChange={(event) => {
                    setCardSubTitleField1(event.target.value);
                  }}
                >
                  {csvHeaders.map((el) => {
                    return <MenuItem value={el}>{el}</MenuItem>;
                  })}
                  <MenuItem value={null}>
                    <em>None</em>
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormControl
                fullWidth
                key={`${cardSubTitleField2}-card-subtitle2-label`}
              >
                <InputLabel id="card-subtitle2-label">
                  Card SubTitle 2:
                </InputLabel>
                <Select
                  labelId="card-subtitle2-label"
                  id="card-subtitle2-select"
                  value={cardSubTitleField2}
                  disabled={csvHeaders.length === 0}
                  label="Card SubTitle 2:"
                  onChange={(event) => {
                    setCardSubTitleField2(event.target.value);
                  }}
                >
                  {csvHeaders.map((el) => {
                    return <MenuItem value={el}>{el}</MenuItem>;
                  })}
                  <MenuItem value={null}>
                    <em>None</em>
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormControl
                fullWidth
                key={`${modalDescription}-modal-description-label`}
              >
                <InputLabel id="modal-description-label">
                  Modal Description:
                </InputLabel>
                <Select
                  labelId="modal-description-label"
                  id="modal-description-select"
                  value={modalDescription}
                  disabled={csvHeaders.length === 0}
                  label="Modal Description:"
                  onChange={(event) => {
                    setModalDescription(event.target.value);
                  }}
                >
                  {csvHeaders.map((el) => {
                    return <MenuItem value={el}>{el}</MenuItem>;
                  })}
                  <MenuItem value={null}>
                    <em>None</em>
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <span>Title Font Size</span>
              <Slider
                aria-label="Temperature"
                valueLabelDisplay="auto"
                value={titleSize}
                onChange={(e) => setTitleSize(e.target.value)}
                step={1}
                marks
                min={20}
                max={100}
              />
            </Grid>
            <Grid item xs={4}>
              <span>Grid Height</span>
              <Slider
                aria-label="Temperature"
                valueLabelDisplay="auto"
                value={gridHeight}
                onChange={(e) => setGridHeight(e.target.value)}
                step={20}
                marks
                min={600}
                max={1280}
              />
            </Grid>
            <Grid item xs={4}>
              <span>Grid Width</span>
              <Slider
                aria-label="Temperature"
                valueLabelDisplay="auto"
                value={gridWidth}
                onChange={(e) => setGridWidth(e.target.value)}
                step={20}
                marks
                min={1000}
                max={1880}
              />
            </Grid>
            <Grid item xs={2}>
              <DownloadButton />
            </Grid>
            <Grid item xs={2}>
              <FormInput
                value={linkData}
                label={"Link:"}
                handleChange={(e) => {
                  setLinkData(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <span>Logo Size</span>
              <Slider
                aria-label="Temperature"
                valueLabelDisplay="auto"
                value={logoSize}
                onChange={(e) => setLogoSize(e.target.value)}
                step={1}
                marks
                min={0}
                max={100}
              />
            </Grid>
            <Grid item xs={4}>
              <span>Link Size</span>
              <Slider
                aria-label="Temperature"
                valueLabelDisplay="auto"
                value={linkSize}
                onChange={(e) => setLinkSize(e.target.value)}
                step={1}
                marks
                min={0}
                max={50}
              />
            </Grid>
            <Grid item xs={4}>
              <span>Title Top Space</span>
              <Slider
                aria-label="Temperature"
                valueLabelDisplay="auto"
                value={titleTopSpace}
                onChange={(e) => setTitleTopSpace(e.target.value)}
                step={1}
                marks
                min={0}
                max={50}
              />
            </Grid>
          </Grid>
        </>
      ) : (
        <></>
      )}

      {bricksData ? (
        <HallOfFameV2
          width={gridWidth}
          height={gridHeight}
          title={title}
          textColor={textColor}
          borderColor={borderColor}
          backgroundColor={backgroundColor}
          numCols={numCols}
          horisontal={isHorisontal}
          gapSize={gapSize}
          fontSize={fontSize}
          bricksData={bricksData}
          imgHeight={imgHeight}
          initialTransform={initialTransform}
          setInitialTransform={setInitialTransform}
          isEditMode={isEditMode}
          titleSize={titleSize}
          linkData={linkData}
          logoSize={logoSize}
          linkSize={linkSize}
          titleTopSpace={titleTopSpace}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default HallOfFameDataWrapperV2;
