import React from "react";
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

const colorScale = scaleLinear()
  .domain([320, 350])
  .range(["#5ccbe4", "#344f64"]);

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

const UKMapStatic = (props) => {
  const { backgroundColor, title, markers, colors, fontColor, hoverColor } =
    props?.data?.originalData;

  const classes = useStyles();

  return (
    <>
      <Box
        sx={{
          backgroundColor: backgroundColor,
        }}
      >
        <Typography
          sx={{
            color: props?.isDarkTheme ? "rgb(208, 210, 214)" : "#0c5393",
            textAlign: "center",
            padding: "20px 0px 0px 0px",
            fontSize: "30px",
          }}
        >
          {props?.mapTitle ? props?.mapTitle : title}
        </Typography>
      </Box>
      <ComposableMap
        width={270}
        height={380}
        projection="geoAzimuthalEqualArea"
        style={{
          backgroundColor: backgroundColor,
        }}
        projectionConfig={{
          rotate: [3.247494628352, -54.8, 0],
          scale: 2100,
        }}
      >
        <Geographies geography={TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => {
              return (
                <HtmlTooltip title={geo.properties.AREANM}>
                  <Geography
                    key={geo.rsmKey}
                    style={{
                      default: {
                        fill: colors?.[geo?.properties?.AREANM]
                          ? colors?.[geo?.properties?.AREANM]
                          : colorScale(geo.properties.diss_me),
                        outline: "none",
                      },
                      hover: {
                        fill: colors?.[geo?.properties?.AREANM]
                          ? colors?.[geo?.properties?.AREANM]
                          : colorScale(geo.properties.diss_me),
                        outline: "none",
                      },
                      pressed: {
                        fill: colors?.[geo?.properties?.AREANM]
                          ? colors?.[geo?.properties?.AREANM]
                          : colorScale(geo.properties.diss_me),
                        outline: "none",
                      },
                    }}
                    geography={geo}
                    className={classes.item}
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

export default UKMapStatic;
