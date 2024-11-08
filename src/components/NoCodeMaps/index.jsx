import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

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

const NoCodeMaps = ({ data }) => {
  const [topoJson, setTopoJson] = useState(null);
  const {
    markers,
    type,
    mainColor,
    mainColor2,
    hover,
    lineColor,
    lineWidth,
    title,
    titleSize,
    titleColor,
  } = data?.originalData;
  const [colors, setColors] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    if (topoJson && mainColor) {
      const length =
        topoJson.objects[Object.keys(topoJson.objects)[0]].geometries.length;
      const colorScale = scaleLinear()
        .domain([0, 100])
        .range([mainColor, mainColor2]);

      const generatedColors = Array.from({ length }, (_, i) =>
        colorScale(Math.random() * 100)
      );

      setColors(generatedColors);
    }
  }, [topoJson, mainColor, mainColor2]);

  useEffect(() => {
    if (type) {
      fetch(`/assets/topojson/${type}.json`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => setTopoJson(data))
        .catch((error) => console.error("Error loading the JSON file:", error));
    }
  }, [type]);

  const getCountryName = (geo) => {
    return geo?.properties?.name;
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box>
        <Typography
          sx={{
            color: titleColor,
            textAlign: "center",
            padding: "5px 0px 0px 0px",
            fontSize: `${titleSize}em`,
          }}
        >
          {title}
        </Typography>
      </Box>
      {topoJson !== null ? (
        <ComposableMap
          width={topoJson.projectionConfig.width}
          height={topoJson.projectionConfig.height}
          style={{
            fontFamily: "system-ui",
            backgroundColor: "white",
          }}
          projection={
            topoJson?.projectionConfig?.projection
              ? topoJson.projectionConfig.projection
              : "geoAzimuthalEqualArea"
          }
          projectionConfig={{
            scale: topoJson?.projectionConfig?.zoom,
            ...topoJson.projectionConfig,
          }}
        >
          <Geographies geography={topoJson} key={`awdawd${colors.length}`}>
            {({ geographies }) =>
              geographies.map((geo, index) => (
                <HtmlTooltip title={getCountryName(geo)}>
                  <Geography
                    key={`${geo.rsmKey}-${colors[index]}`}
                    style={{
                      default: {
                        stroke: lineColor,
                        strokeWidth: lineWidth,
                        fill: colors[index],
                        outline: "none",
                      },
                      hover: {
                        fill: hover,
                        outline: "none",
                      },
                      pressed: {
                        fill: hover,
                        outline: "none",
                      },
                    }}
                    geography={geo}
                    // style={{}}
                    // className={classes.item}
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
                  style={{
                    fontFamily: "system-ui",
                    fill: fontColor ? fontColor : "red",
                    fontSize: `${fontSize}px`,
                  }}
                >
                  {name}
                </text>
              </Marker>
            )
          )}
        </ComposableMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NoCodeMaps;
