import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { TOPO_JSON } from "./topojson";
import { makeStyles } from "@mui/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { scaleLinear } from "d3-scale";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles({
  item: {
    stroke: "black",
    strokeWidth: "0.2",
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

const FloridaMapTopo = (props) => {
  const { backgroundColor, markers, colors, title, hoverColor } =
    props?.data?.originalData;

  const classes = useStyles();
  const [colorIndex, setColorIndex] = useState([]);

  const selectedTheme = props.selectedTheme;
  const colorScale = scaleLinear()
    .domain([0, 100])
    .range(["white", selectedTheme ? selectedTheme.barColor1 : "#abcfe4"]);

  useEffect(() => {
    const randomArray = [];

    for (let i = 0; i < 67; i++) {
      var randomNumber = Math.floor(Math.random() * 100);
      randomArray.push(randomNumber);
    }
    setColorIndex(randomArray);
  }, []);

  const getFillColor = (colors, geo, index) => {
    return colors?.[geo?.properties?.county]
      ? colors?.[geo?.properties?.county]
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
          }}
        >
          {props?.mapTitle ? props?.mapTitle : title}
        </Typography>
      </Box>
      <ComposableMap
        width={270}
        height={450}
        projection="geoAzimuthalEqualArea"
        style={{
          backgroundColor: backgroundColor,
        }}
        projectionConfig={{
          rotate: [83.66, -27.78, 0],
          scale: 2100,
        }}
      >
        <Geographies geography={TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo, index) => {
              return (
                <HtmlTooltip title={geo.properties.county}>
                  <Geography
                    key={geo.rsmKey}
                    style={{
                      default: {
                        fill: getFillColor(colors, geo, index),
                        outline: "none",
                      },
                      hover: {
                        fill: hoverColor ? hoverColor : "#3b729f",
                        outline: "none",
                        // cursor: "pointer",
                      },
                      pressed: {
                        fill: hoverColor ? hoverColor : "#3b729f",
                        outline: "none",
                      },
                    }}
                    geography={geo}
                    className={classes.item}
                    onClick={() => {
                      if (props?.handleClick) {
                        props?.handleClick(geo?.properties?.county);
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

export default FloridaMapTopo;
