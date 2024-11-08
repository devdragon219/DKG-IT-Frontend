import React from "react";
import {
  useMapContext,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

import { makeStyles } from "@mui/styles";

import { Dialog, Grid, IconButton, Slide, Tooltip } from "@mui/material";

import { ConnectorElbow, Annotation } from "react-annotation";

import { TOPO_JSON } from "../topojson";
import LegendIcons from "../LegendIcons";
import ListLogoFilterFullScreen from "./ListLogoFilterFullScreen";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

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
        ny={170}
        nx={99.8}
        color={"#083763"}
        strokeWidth={0.1}
        className={classes.connector}
      >
        <ConnectorElbow />
      </Annotation>
      <foreignObject width={100} height={100} y={120} x={0.24}>
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogMap = ({
  width,
  height,
  backgroundColor,
  getFillColor,
  colors,
  hoverColor,
  classes,
  setHoverArea,
  legend,
  logoLists,
  areasList,
  areaWithCoordinates,
  hoverArea,
  setLogoLists,
  open,
  setFullScreen,
}) => {
  return (
    <>
      {/* <Box
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
            top: "0",
          }}
        >
          {props?.mapTitle ? props?.mapTitle : title}
        </Typography>
      </Box> */}

      <Dialog
        fullScreen
        open={open}
        onClose={() => {}}
        TransitionComponent={Transition}
      >
        <Grid
          container
          spacing={2}
          style={{
            alignItems: "center",
            height: "100%",
            position: "relative",
          }}
        >
          <IconButton
            style={{
              color: "#083763",

              position: "absolute",
              right: "30px",
              top: "30px",
            }}
            onClick={() => {
              setFullScreen(false);
            }}
          >
            <Tooltip title={"Close"}>
              <CloseFullscreenIcon
                style={{
                  color: "#083763",
                  fontSize: "35px",
                }}
              />
            </Tooltip>
          </IconButton>
          <Grid item xs={12} sm={6} md={6} key="dawdawd">
            <ListLogoFilterFullScreen
              initialData={logoLists}
              setLogoLists={setLogoLists}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} key="dawdawdad">
            <ComposableMap
              width={width}
              height={height}
              projection="geoAzimuthalEqualArea"
              style={{
                backgroundColor: backgroundColor,
                fontFamily: "system-ui",
              }}
              projectionConfig={{
                rotate: [-28.85, -46.99, 0],
                scale: 120000,
              }}
            >
              <Geographies geography={TOPO_JSON}>
                {({ geographies }) =>
                  geographies.map((geo, index) => {
                    return (
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
                            cursor: "pointer",
                          },
                          pressed: {
                            fill: hoverColor ? hoverColor : "#3b729f",
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
                ({ iconNames, name, fontColor, coordinates, color }) => {
                  return (
                    <LegendIcons
                      iconNames={iconNames}
                      name={name}
                      legend={legend}
                      fontColor={fontColor}
                      color={color}
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
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};

export default DialogMap;
