import React, { useState } from "react";
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
import { Box, MenuItem, Select, Typography } from "@mui/material";
import { LONDON_MAP } from "../LondonMap/topo"
import { LONDON_CENTER_MAP } from "../LondonMap/topo_center";

const colorScale = scaleLinear()
  .domain([320, 350])
  .range(["#5ccbe4", "#344f64"]);

const useStyles = makeStyles({
  item: {
    stroke: "white",
    strokeWidth: "0.5",
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

const LondonMapExtDark = (props) => {
  const {
    backgroundColor,
    markers = [],
    colors,
    title,
    fontColor,
    hoverColor,
  } = props?.data?.originalData;
  const classes = useStyles();
  console.log("props===>", props)

  const [mapType, setMapType] = useState("1");

  return (
    <>
      <Box
        sx={{
          backgroundColor: backgroundColor,
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: fontColor ? fontColor : "black",
              textAlign: "center",
              fontSize: "22px",
              lineHeight: "20px"
            }}
          >
            {console.log("fontColor==>",fontColor)}
            {props?.mapTitle ? props?.mapTitle : title}
          </Typography>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={mapType}
            label=""
            onChange={(event) => setMapType(event.target.value)}
            sx={{backgroundColor: "white"}}
          >
            <MenuItem value={1}>London</MenuItem>
            <MenuItem value={2}>Center of London</MenuItem>
          </Select>
        </Box>
      </Box>
      <ComposableMap
        width={450}
        height={450}
        projection="geoAzimuthalEqualArea"
        style={{
          backgroundColor: backgroundColor,
          margin: "auto 0"
        }}
        projectionConfig={{
          rotate: mapType === 2 ? [0.15, -51.5, 0] : [0.09, -51.45, 0],
          scale: mapType === 2 ? 108000 : 50150,
        }}
      >
        <Geographies geography={mapType === 2 ? LONDON_CENTER_MAP : LONDON_MAP}>
          {({ geographies }) =>
            geographies.map((geo) => {
              return (
                <HtmlTooltip title={geo.id}>
                  <Geography
                    key={geo.rsmKey}
                    style={{
                      default: {
                        fill: colors?.[geo.id]
                          ? colors?.[geo.id]
                          : colorScale(geo.id),
                        outline: "none",
                        strokeWidth: "0.2px",
                        stroke: "black",
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
                        props?.handleClick(geo.id);
                      }
                    }}
                  />
                </HtmlTooltip>
              );
            })
          }
        </Geographies>

        {!!props.showMarkers &&
          markers.map(({ coordinates, tooltip, markerColor }) => (
            <Marker key={tooltip} coordinates={coordinates}>
              <HtmlTooltip title={tooltip}>
                {/* <g id="surface1" fill="none" transform="translate(-12, -24)">
                  <path
                    style={{
                      stroke: "none",
                      fillRule: "nonzero",
                      fill: markerColor ? markerColor : "#ff0000",
                      fillOpacity: "1",
                    }}
                    d="M 12.5 0 C 7.714844 0 3.824219 3.890625 3.824219 8.675781 C 3.824219 13.28125 11.695312 24.039062 12.03125 24.496094 L 12.34375 24.921875 C 12.378906 24.972656 12.4375 25 12.5 25 C 12.5625 25 12.621094 24.972656 12.65625 24.921875 L 12.96875 24.496094 C 13.304688 24.039062 21.175781 13.28125 21.175781 8.675781 C 21.175781 3.890625 17.285156 0 12.5 0 Z M 12.5 5.566406 C 14.214844 5.566406 15.605469 6.960938 15.605469 8.675781 C 15.605469 10.390625 14.214844 11.785156 12.5 11.785156 C 10.785156 11.785156 9.390625 10.390625 9.390625 8.675781 C 9.390625 6.960938 10.785156 5.566406 12.5 5.566406 Z M 12.5 5.566406 "
                  />
                </g> */}
                <circle
                  r="3px"
                  fill="#F00"
                  stroke="#fff"
                  strokeWidth={1}
              />
              </HtmlTooltip>
            </Marker>
          ))}
      </ComposableMap>
    </>
  );
};

export default LondonMapExtDark;

export const LondonMapDark = ({ data }) => {
  const width = data.originalData.width || "40%";
  const showMarkers = data.originalData.showMarkers;
  const backgroundColor = data.originalData.backgroundColor || "#fff";

  return (
    <div style={{ width, margin: "auto", padding: "25px", backgroundColor: backgroundColor }}>
      <LondonMapExtDark data={data} showMarkers={showMarkers} />
    </div>
  );
};
