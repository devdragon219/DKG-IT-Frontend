import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import TOPO_JSON from "/assets/topojson/TurkeyMap.json?url";
import { makeStyles } from "@mui/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { scaleLinear } from "d3-scale";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

//const colorScale = scaleLinear()
// .domain([320, 350])
// .range(["#abcfe4", "#0069a8"]);

const useStyles = makeStyles({
  item: {
    stroke: "white",
    strokeWith: "30",
  },
});

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

const TurkeyMap = (props) => {
  const { backgroundColor, markers, colors, title, fontColor, hoverColor } =
    props?.data?.originalData;
  const classes = useStyles();
  const [colorIndex, setColorIndex] = useState([]);

  const selectedTheme = props.selectedTheme;
  const colorScale = scaleLinear()
    .domain([2, 100])
    .range(["white", selectedTheme ? selectedTheme.barColor1 : "#0069a8"]);

  useEffect(() => {
    const randomArray = [];

    for (let i = 0; i < 90; i++) {
      var randomNumber = Math.floor(Math.random() * 100);
      randomArray.push(randomNumber);
    }
    setColorIndex(randomArray);
  }, []);

  const getFillColor = (colors, geo, index) => {
    return colors?.[geo?.properties?.woe_name]
      ? colors?.[geo?.properties?.woe_name]
      : colorScale(colorIndex[index]);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: backgroundColor,
        }}
      >
        <Typography
          sx={{
            color: "#0c5393",
            textAlign: "center",
            padding: "20px 0px 0px 0px",
            fontSize: "20px",
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translate(-50%, 0)",
          }}
        >
          {props?.mapTitle ? props?.mapTitle : title}
        </Typography>
      </Box>
      <ComposableMap
        width={1600}
        height={1500}
        projection="geoAzimuthalEqualArea"
        style={{
          backgroundColor: backgroundColor,
          marginTop: props?.mapTitle ? "40px" : "",
        }}
        projectionConfig={{
          rotate: [-35.5, -38.81, 0],
          scale: 5800,
        }}
      >
        <Geographies geography={TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo, index) => {
              return (
                <HtmlTooltip title={geo.properties.woe_name}>
                  <Geography
                    key={geo.rsmKey}
                    style={{
                      default: {
                        fill: getFillColor(colors, geo, index),
                        outline: "0px",
                      },
                      hover: {
                        fill: hoverColor ? hoverColor : "#3b729f",
                        outline: "0px",
                        // cursor: "pointer",
                      },
                      pressed: {
                        fill: hoverColor ? hoverColor : "#3b729f",
                        outline: "black",
                      },
                    }}
                    geography={geo}
                    className={classes.item}
                    onClick={() => {
                      if (props?.handleClick) {
                        props?.handleClick(geo?.properties?.woe_name);
                      }
                    }}
                  />
                </HtmlTooltip>
              );
            })
          }
        </Geographies>

        {markers.map(
          ({
            name,
            coordinates,
            markerOffset,
            fontColor,
            radius,
            tooltip,
            fontSize,
          }) => (
            <Marker key={name} coordinates={coordinates}>
              <HtmlTooltip title={tooltip}>
                <circle
                  r={radius}
                  fill="#F00"
                  stroke="#fff"
                  strokeWidth={1}
                  // style={{ cursor: "pointer" }}
                />
              </HtmlTooltip>
              <text
                textAnchor="middle"
                y={markerOffset}
                style={{
                  fontFamily: "system-ui",
                  fill: fontColor ? fontColor : "red",
                  fontSize: fontSize ? fontSize : "10px",
                }}
              >
                {name}
              </text>
            </Marker>
          )
        )}
      </ComposableMap>
    </>
  );
};

export default TurkeyMap;