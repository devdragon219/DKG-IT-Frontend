import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import TOPO_JSON from "/assets/topojson/GlobalMap.json?url";
import { makeStyles } from "@mui/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { scaleLinear } from "d3-scale";
import { styled } from "@mui/material/styles";

import countriesJson from "./countriesJson.json";

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

const GlobalMap = (props) => {
  const {
    backgroundColor,
    colors,
    markers,
    title,
    hoverColor,
    countryNames,
    titleConfig,
    projectionConfig,
    emtyCountries,
    markerColor,
  } = props?.data?.originalData;
  const classes = useStyles();

  const [colorIndex, setColorIndex] = useState([]);

  const selectedTheme = props.selectedTheme;
  const colorScale = scaleLinear()
    .domain([0, 100])
    .range(["white", selectedTheme ? selectedTheme.barColor1 : "#abcfe4"]);

  useEffect(() => {
    const randomArray = [];

    for (let i = 0; i < 200; i++) {
      var randomNumber = Math.floor(Math.random() * 100);
      randomArray.push(randomNumber);
    }
    setColorIndex(randomArray);
  }, []);

  const getFillColor = (colors, geo, index) => {
    if (emtyCountries) {
      // Customization for LONGEVITY API - IT will ONLY change colors for Longevity API
      return colors?.[geo?.properties?.name]
        ? colors?.[geo?.properties?.name]
        : emtyCountries;
    }

    return colors?.[geo?.properties?.name]
      ? colors?.[geo?.properties?.name]
      : colorScale(colorIndex[index]);
  };

  const getCountryName = (geo) => {
    const countryId = geo?.id;
    const countryName = countryId ? countryNames?.[countryId] : undefined;

    // Check if countryName is defined and not null
    if (countryName !== undefined && countryName !== null) {
      return countryName;
    } else {
      const alternativeCountryNames = countriesJson; //json file imported

      return alternativeCountryNames[countryId] || geo?.properties?.name;
    }
  };

  return (
    <>
      <ComposableMap
        width={900}
        height={600}
        style={{
          fontFamily: "system-ui",
          backgroundColor: backgroundColor,
        }}
        projectionConfig={{
          center: [17, 10],
          scale: 200,
          ...projectionConfig,
        }}
      >
        {title && (
          <text
            x={titleConfig?.x || "45%"}
            y={titleConfig?.y || "7%"}
            fill={titleConfig?.fill || "black"}
            fontSize={titleConfig?.fontSize || "1em"}
          >
            {props?.mapTitle ? props?.mapTitle : title}
          </text>
        )}
        <Geographies geography={TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo, index) => (
              <HtmlTooltip title={getCountryName(geo)}>
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
                      props?.handleClick(geo?.properties?.name);
                    }
                  }}
                />
              </HtmlTooltip>
            ))
          }
        </Geographies>
        {markers?.map(
          ({
            name,
            coordinates,
            markerOffset,
            markerOffsetX,
            fontColor,
            radius,
            tooltip,
            fontSize,
            markerColor,
          }) => (
            <Marker key={name} coordinates={coordinates}>
              <HtmlTooltip title={tooltip}>
                <circle
                  r={radius}
                  fill={markerColor ? markerColor : "#F00"}
                  stroke="#fff"
                  strokeWidth={1}
                  // style={{ cursor: "pointer" }}
                />
              </HtmlTooltip>
              <text
                textAnchor="middle"
                y={markerOffset}
                x={markerOffsetX ? markerOffsetX : 0}
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

export default GlobalMap;
