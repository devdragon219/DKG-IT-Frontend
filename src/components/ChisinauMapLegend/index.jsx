import React, { useState, useEffect } from "react";
import {
  useMapContext,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

import { TOPO_JSON } from "./topojson";
import { makeStyles } from "@mui/styles";
import { scaleLinear } from "d3-scale";
import ListLogoFilter from "./ListLogoFilter";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { ConnectorElbow, Annotation } from "react-annotation";
import LegendIcons from "./LegendIcons";
import { useMemo } from "react";
import DialogMap from "./DialogMap";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

const useStyles = makeStyles({
  item: {
    stroke: "black",
    strokeWidth: "0.1",
  },
});

const useStylesAnotation = makeStyles({
  animatedItem: {
    visibility: "visible",
    animation: `$myEffect 500ms ease-in`,
  },
  animatedItemExiting: {
    opacity: 0,
    visibility: "hidden",
  },
  connector: {
    "& .connector": {
      strokeWidth: 0.4,
    },
  },
  contentBox: {
    // borderRight: "0.3px solid #083763",
    fontSize: "6px",
    padding: "3px",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    position: "relative",
    "& :before": {
      content: "''",
      width: "5px",
      height: "100%",
      borderRight: "0.3px solid #083763",
      borderTop: "0.3px solid #083763",
      borderBottom: "0.3px solid #083763",
      position: "absolute",
      top: 0,
      right: 0,
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
});

const CustomPoint = ({ data, geoData, hoverArea, name }) => {
  const classes = useStylesAnotation();
  const { projection } = useMapContext();
  const [x, y] = projection(data);

  return (
    <g
      className={
        hoverArea === name ? classes.animatedItem : classes.animatedItemExiting
      }
    >
      <Annotation
        x={x}
        y={y}
        ny={220}
        nx={199.8}
        color={"#083763"}
        strokeWidth={0.1}
        className={classes.connector}
      >
        <ConnectorElbow />
      </Annotation>
      <foreignObject width={100} height={100} y={170} x={100.241}>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            color: "#083763",
          }}
        >
          <span className={classes.contentBox}>
            <span style={{ marginBottom: "3px", fontSize: "7px" }}>{name}</span>
            <div style={{ marginTop: "5px" }}>
              {geoData.logos.map((el, index) => {
                return (
                  <>
                    <img
                      src={el}
                      alt="logo"
                      width={"15px"}
                      height={"15px"}
                      style={{
                        objectFit: "contain",
                        marginRight: "5px",
                      }}
                    />
                    {(index + 1) % 3 === 0 ? <br /> : <></>}
                  </>
                );
              })}

              <br />
            </div>
            <span
              style={{
                fontSize: "5px",
              }}
            >
              {geoData.description}
            </span>
          </span>
        </div>
      </foreignObject>
    </g>
  );
};

const ChisinauMapLegend = (props) => {
  const { backgroundColor, title, hoverColor, legend, areaDescription } =
    props?.data?.originalData;
  const width = props.width || 450;
  const height = props.height || 250;
  const classes = useStyles();
  const [hoverArea, setHoverArea] = useState("Chisinau");
  const [colorIndex, setColorIndex] = useState([]);
  const [logoLists, setLogoLists] = useState(legend?.logoLists || []);
  const [open, setOpen] = React.useState(false);
  const [fullScreen, setFullScreen] = React.useState(false);
  const selectedTheme = props.selectedTheme;

  const colorScale = scaleLinear()
    .domain([0, 100])
    .range(["white", selectedTheme ? selectedTheme.barColor1 : "#abcfe4"]);

  const areasList = Object.keys(areaDescription || {});

  const areaWithCoordinates = useMemo(() => {
    const newList = JSON.parse(JSON.stringify(areaDescription));

    areasList.forEach((el) => {
      const area = TOPO_JSON.objects["boundary-polygon-lvl7"].geometries.find(
        (element) => {
          return element.properties.woe_name === el;
        }
      );

      newList[el].coordinates = [
        area.properties.longitude,
        area.properties.latitude,
      ];
    });

    return newList;
  }, [areaDescription, areasList]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const colors = props?.data?.originalData?.colors;

  useEffect(() => {
    const randomArray = [];

    for (let i = 0; i < 40; i++) {
      var randomNumber = Math.floor(Math.random() * 100);
      randomArray.push(randomNumber);
    }
    setColorIndex(randomArray);
  }, []);

  const getFillColor = (colors, geo, index) => {
    if (geo?.properties?.woe_name === hoverArea) {
      return hoverColor;
    }

    return colors?.[geo?.properties?.woe_name]
      ? colors?.[geo?.properties?.woe_name]
      : colorScale(colorIndex[index]);
  };

  return (
    <>
      <DialogMap
        width={width}
        height={400}
        backgroundColor={backgroundColor}
        getFillColor={getFillColor}
        colors={colors}
        hoverColor={hoverColor}
        classes={classes}
        setHoverArea={setHoverArea}
        legend={legend}
        logoLists={logoLists}
        areasList={areasList}
        areaWithCoordinates={areaWithCoordinates}
        hoverArea={hoverArea}
        open={fullScreen}
        setLogoLists={setLogoLists}
        setFullScreen={setFullScreen}
      />
      <ListLogoFilter
        open={open}
        handleClose={handleClose}
        initialData={logoLists}
        setLogoLists={setLogoLists}
        setOpen={setOpen}
      />

      <div
        style={{
          color: "#083763",
          position: "absolute",
          left: "10px",
          top: "10px",
        }}
      >
        <IconButton
          onClick={() => {
            setFullScreen(true);
          }}
        >
          <Tooltip title={"Full Screen"}>
            <OpenInFullIcon
              style={{
                color: "#083763",
                fontSize: "23px",
              }}
            />
          </Tooltip>
        </IconButton>
        <span
          style={{
            fontSize: "10px",
          }}
        >
          Full Screen
        </span>
      </div>

      <div
        style={{
          color: "#083763",
          fontSize: "35px",
          position: "absolute",
          right: "10px",
          bottom: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: "10px",
          }}
        >
          Filters
        </span>
        <IconButton
          onClick={() => {
            handleClickOpen();
          }}
        >
          <Tooltip title={"Filters"}>
            <FilterAltIcon
              style={{
                color: "#083763",
                fontSize: "24px",
              }}
            />
          </Tooltip>
        </IconButton>
      </div>
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
            left: "50%",
            transform: "translate(-50%, 0)",
            top: "0",
          }}
        >
          {props?.mapTitle ? props?.mapTitle : title}
        </Typography>
      </Box>
      <ComposableMap
        width={width}
        height={height}
        projection="geoAzimuthalEqualArea"
        style={{
          backgroundColor: backgroundColor,
        }}
        projectionConfig={{
          rotate: [-28.85, -46.99, 0],
          scale: 120000,
        }}
      >
        <Geographies geography={TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo, index) => {
              const colorToApply = selectedTheme
                ? selectedTheme.barColor1
                : hoverColor
                ? hoverColor
                : "#3b729f";

              return (
                <Geography
                  key={geo.rsmKey}
                  style={{
                    default: {
                      fill: getFillColor(colors, geo, index),
                      outline: "none",
                    },
                    hover: {
                      fill: colorToApply,
                      outline: "none",
                      cursor: "pointer",
                    },
                    pressed: {
                      fill: colorToApply,
                      outline: "none",
                    },
                  }}
                  geography={geo}
                  className={classes.item}
                  onClick={() => {
                    setHoverArea(geo?.properties?.woe_name);
                  }}
                />
              );
            })
          }
        </Geographies>

        {legend?.list.map(
          ({ iconNames, name, color, fontColor, coordinates }) => {
            return (
              <LegendIcons
                iconNames={iconNames}
                name={name}
                color={color}
                legend={legend}
                fontColor={fontColor}
                coordinates={coordinates}
                logoLists={logoLists}
              />
            );
          }
        )}

        <Geographies geography={TOPO_JSON}>
          {({ _geographies }) => {
            return areasList.map((geoName) => {
              return (
                <CustomPoint
                  data={areaWithCoordinates[geoName]?.coordinates}
                  hoverArea={hoverArea}
                  geoData={areaWithCoordinates[geoName]}
                  name={geoName}
                />
              );
            });
          }}
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default ChisinauMapLegend;
