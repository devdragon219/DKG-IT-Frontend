import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { makeStyles } from "@mui/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { KUWAIT_TOPO_JSON } from "./topojson";
import { SAUDI_ARABIA_TOPO_JSON } from "./topojson";
import { BAHRAIN_TOPO_JSON } from "./topojson";
import { QATAR_TOPO_JSON } from "./topojson";
import { UAE_TOPO_JSON } from "./topojson";
import { OMAN_TOPO_JSON } from "./topojson";

const useStyles = makeStyles({
  iran: {
    strokeWith: "10",
    fill: "#0168a8",
    cursor: "pointer",
    "&:hover": {
      fill: "#3b729f !important",
    },
  },
  iraq: {
    fill: "#4c96c3",
    strokeWith: "10",
    cursor: "pointer",
    "&:hover": {
      fill: "#3b729f !important",
    },
  },
  kuwait: {
    fill: "#8fbeda",
    strokeWith: "10",
    cursor: "pointer",
    "&:hover": {
      fill: "#3b729f !important",
    },
  },
  "saudi-arabia": {
    fill: "#398bbc",
    strokeWith: "10",
    cursor: "pointer",
    "&:hover": {
      fill: "#3b729f !important",
    },
  },
  bahrain: {
    fill: "#398bbc",
    strokeWith: "10",
    cursor: "pointer",
    "&:hover": {
      fill: "#3b729f !important",
    },
  },
  qatar: {
    fill: "#abcfe4",
    strokeWith: "10",
    cursor: "pointer",
    "&:hover": {
      fill: "#3b729f !important",
    },
  },
  uae: {
    fill: "#8fbeda",
    strokeWith: "10",
    cursor: "pointer",
    "&:hover": {
      fill: "#3b729f !important",
    },
  },
  oman: {
    fill: "#abcfe4",
    strokeWith: "10",
    cursor: "pointer",
    "&:hover": {
      fill: "#3b729f !important",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    "& svg": {
      color: "red",
      "& .paths": {
        outline: "none",
        "&:hover": {
          fill: "grey",
        },
      },
    },
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

const names = ["KUWAIT", "SAUDI ARABIA", "BAHRAIN", "QATAR", "UAE", "OMAN"];

const GulfMap = (props) => {
  const {
    backgroundColor = "transparent",
    title,
    fontColor,
    labels,
    onClick,
  } = props?.data?.originalData;
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
            color: "#0c5393",
            textAlign: "center",
            padding: "20px 0px 0px 0px",
            fontSize: "30px",
          }}
        >
          {props?.mapTitle ? props?.mapTitle : title}
        </Typography>
      </Box>

      <ComposableMap
        width={1500}
        height={1500}
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-47, -24, 0],
          scale: 3500,
        }}
      >
        {[
          KUWAIT_TOPO_JSON,
          SAUDI_ARABIA_TOPO_JSON,
          BAHRAIN_TOPO_JSON,
          QATAR_TOPO_JSON,
          UAE_TOPO_JSON,
          OMAN_TOPO_JSON,
        ].map((data, index) => (
          <HtmlTooltip title={labels?.length ? labels[index] : names[index]}>
            <Geographies
              geography={data}
              className={classes[data.name]}
              onClick={() => onClick(data.name)}
            >
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    style={{
                      default: {
                        stroke: "1",
                        outline: "none",
                      },
                      hover: {
                        outline: "none",
                      },
                      pressed: {
                        outline: "none",
                      },
                    }}
                    geography={geo}
                    onClick={() => {
                      if (props?.handleClick) {
                        props?.handleClick(geo?.properties?.woe_name);
                      }
                    }}
                  />
                ))
              }
            </Geographies>
          </HtmlTooltip>
        ))}
      </ComposableMap>
    </>
  );
};

export default GulfMap;
