import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import TOPO_JSON from "/assets/topojson/UkMapTopo.json?url";
import { makeStyles } from "@mui/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  Switch,
  TextField,
  Button,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import ColorPickerProvider from "./ColorPickerProvider";
import DeleteIcon from "@mui/icons-material/Delete";

const useStyles = makeStyles(() => ({
  legendItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  colorBox: {
    width: 20,
    height: 20,
    marginRight: 10,
    border: "1px solid #000",
  },
}));

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    padding: "10px",
    border: "1px solid black",
    fontSize: "20px",
    borderRadius: "5px",
  },
}));

const UkMapConstructor = (props) => {
  let dataProps = props?.data?.originalData;
  const classes = useStyles();
  const { isEditMode } = props;

  const [backgroundColor, setBackgroundColor] = useState(
    dataProps?.backgroundColor || "#FFFFFF"
  );

  const [selectedRegionColor, setSelectedRegionColor] = useState("#98C3DE");

  const [colors, setColors] = useState(
    dataProps?.colors || {
      Wales: "#98C3DE",
      Scotland: "#98C3DE",
      "Northern Ireland": "#98C3DE",
      "South West": "#98C3DE",
      "South East": "#98C3DE",
      London: "#98C3DE",
      "East of England": "#98C3DE",
      "West Midlands": "#98C3DE",
      "East Midlands": "#98C3DE",
      "North West": "#98C3DE",
      "North East": "#98C3DE",
      "Yorkshire and The Humber": "#98C3DE",
    }
  );

  const [borderEnabled, setBorderEnabled] = useState(
    dataProps?.borderEnabled || false
  );

  const [title, setTitle] = useState(dataProps?.title || "");

  const [legendItems, setLegendItems] = useState(dataProps?.legendItems || []);
  const [legendColor, setLegendColor] = useState("");
  const [legendText, setLegendText] = useState("");

  const handleColorChange = (newColor) => {
    setBackgroundColor(newColor?.css?.backgroundColor);
  };

  const handleRegionColorChange = (region, newColor) => {
    setColors((prevColors) => ({
      ...prevColors,
      [region]: newColor.css.backgroundColor,
    }));
  };

  const handleBorderChange = () => {
    setBorderEnabled(!borderEnabled);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  //   const handleAddLegendItem = () => {
  //     const legendColor = "#FFFFFF";
  //     const legendText = "Legend Text";
  //     const newLegendItem = { color: legendColor, text: legendText };
  //     setLegendItems([...legendItems, newLegendItem]);
  //   };

  const handleAddLegendItem = () => {
    if (legendColor && legendText) {
      const newLegendItem = { color: legendColor, text: legendText };
      setLegendItems([...legendItems, newLegendItem]);
      setLegendColor("");
      setLegendText("");
    }
  };

  const handleDeleteLegendItem = (index) => {
    const updatedLegendItems = [...legendItems];
    updatedLegendItems.splice(index, 1);
    setLegendItems(updatedLegendItems);
  };

  useEffect(() => {
    window.onmessage = function (e) {
      if (e?.data?.originalData) {
        setBackgroundColor(e.data.originalData.backgroundColor);
        setColors(e.data.originalData.colors);
        setBorderEnabled(e.data.originalData.borderEnabled);
        setTitle(e.data.originalData.title);
        setLegendItems(e.data.originalData.legendItems);
      }
    };
  }, []);

  useEffect(() => {
    window.top.postMessage(
      {
        backgroundColor: backgroundColor,
        type: "backgroundColor",
      },
      "*"
    );
  }, [backgroundColor]);

  useEffect(() => {
    window.top.postMessage(
      {
        colors: colors,
        type: "colors",
      },
      "*"
    );
  }, [colors]);

  useEffect(() => {
    window.top.postMessage(
      {
        borderEnabled: borderEnabled,
        type: "borderEnabled",
      },
      "*"
    );
  }, [borderEnabled]);

  useEffect(() => {
    window.top.postMessage(
      {
        title: title,
        type: "title",
      },
      "*"
    );
  }, [title]);

  useEffect(() => {
    window.top.postMessage(
      {
        legendItems: legendItems,
        type: "legendItems",
      },
      "*"
    );
  }, [legendItems]);

  return (
    <>
      {isEditMode ? (
        <Box style={{ padding: "10px", display: "flex" }}>
          <Typography style={{ alignContent: "center" }}>
            Background Color:
          </Typography>
          <ColorPickerProvider
            setMainColor={handleColorChange}
            mainColor={backgroundColor}
          ></ColorPickerProvider>
          <Typography style={{ alignContent: "center" }}>
            Region Color:
          </Typography>
          <ColorPickerProvider
            setMainColor={(newColor) =>
              setSelectedRegionColor(newColor.css.backgroundColor)
            }
            mainColor={selectedRegionColor}
          ></ColorPickerProvider>
          <Typography style={{ alignContent: "center" }}>Borders:</Typography>
          <Switch onChange={handleBorderChange} />
          <TextField
            size="small"
            label="Title"
            value={title}
            onChange={handleTitleChange}
          />
          <Box style={{ paddingTop: "0", padding: "10px", display: "flex" }}>
            <TextField
              size="small"
              label="Legend Color"
              value={legendColor}
              onChange={(e) => setLegendColor(e.target.value)}
            />
            <TextField
              size="small"
              label="Legend Text"
              value={legendText}
              onChange={(e) => setLegendText(e.target.value)}
            />
            <Button onClick={handleAddLegendItem}>Add Legend Item</Button>
          </Box>
        </Box>
      ) : (
        ""
      )}

      <Typography
        sx={{
          color: "#000",
          textAlign: "center",
          padding: "20px 0px 0px 0px",
          fontSize: "30px",
          position: "absolute",
          top: "10",
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "20%",
          transform: "translate(-50%, 0)",
        }}
      >
        {legendItems.map((item, index) => (
          <ListItem
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0",
            }}
          >
            <div
              style={{
                width: 30,
                height: 20,
                borderRadius: "4px",
                marginRight: 10,
                backgroundColor: item.color,
              }}
            />
            <ListItemText primary={item.text} />
            {isEditMode && (
              <IconButton onClick={() => handleDeleteLegendItem(index)}>
                <DeleteIcon />
              </IconButton>
            )}
          </ListItem>
        ))}
      </Box>
      <ComposableMap
        width={100}
        height={70}
        projection="geoAzimuthalEqualArea"
        style={{
          backgroundColor: backgroundColor,
        }}
        projectionConfig={{
          rotate: [3.247494628352, -55, 0],
          scale: 300,
        }}
      >
        <Geographies geography={TOPO_JSON} style={{ cursor: "grab" }}>
          {({ geographies }) =>
            geographies.map((geo, index) => {
              const regionName = geo.properties.AREANM;
              return (
                <HtmlTooltip title={geo.properties.AREANM}>
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: colors[regionName] || "#98C3DE",
                        outline: "none",
                      },
                      hover: {
                        fill: colors[regionName] || "#98C3DE",
                        outline: "none",
                        filter: "brightness(90%)",
                      },
                      pressed: {
                        fill: colors[regionName] || "#98C3DE",
                        outline: "none",
                      },
                      cursor: "grab",
                    }}
                    stroke="white"
                    strokeWidth={borderEnabled ? "0.1" : "0"}
                    onClick={() => {
                      if (isEditMode) {
                        handleRegionColorChange(regionName, {
                          css: { backgroundColor: selectedRegionColor },
                        });
                      }
                    }}
                  />
                </HtmlTooltip>
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default UkMapConstructor;
