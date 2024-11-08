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
import { mockData } from "./mockData";

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

const UKSvg = () => {
  const hoverColor = mockData?.originalData?.colors;

  const colors = mockData?.originalData?.colors;
  const classes = useStyles();

  return (
    <>
      <ComposableMap
        width={650}
        height={650}
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [3.247494628352, -54.8, 0],
          scale: 3700,
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

export default UKSvg;
