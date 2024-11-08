import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import TOPO_JSON from "/assets/topojson/GlobalMapStatsV2.json?url";
import { makeStyles } from "@mui/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { scaleLinear } from "d3-scale";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

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

const GlobalMap = (props) => {
  const { backgroundColor, colors, title, hoverColor, fontSize, countryNames } =
    props?.data?.originalData;
  const classes = useStyles();

  const [colorIndex, setColorIndex] = useState([]);

  const colorScale = scaleLinear().domain([0, 100]).range(["white", "#abcfe4"]);

  useEffect(() => {
    const randomArray = [];

    for (let i = 0; i < 200; i++) {
      var randomNumber = Math.floor(Math.random() * 100);
      randomArray.push(randomNumber);
    }
    setColorIndex(randomArray);
  }, []);

  const getFillColor = (colors, geo, index) => {
    return colors?.[geo?.properties?.name]
      ? colors?.[geo?.properties?.name]
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
            fontSize: fontSize ? fontSize : "1em",
            marginBottom: "10px",
            lineHeight: "20px",
          }}
        >
          {props?.mapTitle ? props?.mapTitle : title}
        </Typography>
      </Box>
      <ComposableMap
        projectionConfig={{ scale: 210 }}
        width={920}
        height={660}
        style={{ marginRight: "20px" }}
      >
        <Geographies geography={TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo, index) => (
              <HtmlTooltip
                title={countryNames[geo?.id] || geo?.properties?.name}
              >
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
      </ComposableMap>
    </>
  );
};

export default GlobalMap;
