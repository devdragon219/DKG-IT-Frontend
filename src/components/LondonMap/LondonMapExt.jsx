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
import { LONDON_MAP } from "./topo";
import { LONDON_CENTER_MAP } from "./topo_center";

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

const LondonMapExt = (props) => {
  const {
    backgroundColor,
    markers = [],
    colors,
    title,
    fontColor,
    hoverColor,
    mapMarker,
  } = props?.data?.originalData;
  const classes = useStyles();

  const [mapType, setMapType] = useState("1");
  //const selectedTheme = props.selectedTheme;
  //const colorScale = scaleLinear().domain([0, 300]).range(["white", selectedTheme ? selectedTheme.barColor1 : "#abcfe4"]);

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
              color: "#0c5393",
              textAlign: "center",
              fontSize: "22px",
              lineHeight: "20px",
            }}
          >
            {props?.mapTitle ? props?.mapTitle : title}
          </Typography>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={mapType}
            style={{
              color: "#0c5393",
            }}
            label=""
            onChange={(event) => setMapType(event.target.value)}
          >
            <MenuItem
              value={1}
              style={{
                color: "#0c5393",
              }}
            >
              London
            </MenuItem>
            <MenuItem
              style={{
                color: "#0c5393",
              }}
              value={2}
            >
              Central London
            </MenuItem>
          </Select>
        </Box>
      </Box>
      <ComposableMap
        width={450}
        height={450}
        projection="geoAzimuthalEqualArea"
        style={{
          backgroundColor: backgroundColor,
          margin: "auto 0",
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
                        strokeWidth: "1px !important",
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
          markers.map(({ coordinates, tooltip, markerColor, markerOffset }) => (
            <Marker key={tooltip} coordinates={coordinates}>
              <HtmlTooltip title={tooltip}>
                {mapMarker ? (
                  <g
                    fill="none"
                    stroke="#FF5533"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(-12, -24)"
                  >
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                  </g>
                ) : (
                  <circle r="5px" fill="#00F" stroke="#fff" strokeWidth={2} />
                )}
              </HtmlTooltip>
            </Marker>
          ))}
      </ComposableMap>
    </>
  );
};

export default LondonMapExt;
