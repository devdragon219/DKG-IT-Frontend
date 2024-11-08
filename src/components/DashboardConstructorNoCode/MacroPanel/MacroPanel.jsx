import React, { useMemo } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import IconByName from "./IconByName";

const useStyles = makeStyles((theme) => ({
  descriptionBox: {
    position: "absolute",
    width: "150px",
    backgroundColor: "white",
    color: "black",
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2))",
    zIndex: 1,
  },
  sliderContainer: {
    overflow: "hidden",
    width: "100%",
    position: "relative",
  },
  slider: {
    display: "flex",
    transition: "transform 0.3s ease-in-out",
  },
  slide: {
    width: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
  },
  slideInteractive: {
    width: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    transition: "transform .2s",
  },
  button: {
    background: "transparent",
    border: "none",
    fontSize: "24px !important",
    cursor: "pointer",
    position: "absolute !important",
    color: "#fff !important",
    top: 0,
    bottom: 0,
    "&[disabled]": {
      display: "none",
    },
  },
  prev: {
    left: "-30px",
  },
  next: {
    right: "-30px",
  },
}));

const MacroPanel = ({ data, macroPanelConfig, gridWidth }) => {
  const classes = useStyles();
  const slideWidth = 350;

  const {
    iconColor,
    iconBackgroundColor,
    iconTextSize,
    iconInfoSize,
    mainColor1,
    mainColor2,
  } = macroPanelConfig;

  const visibleSlides = useMemo(() => {
    return Math.floor(gridWidth / slideWidth);
  }, [gridWidth]);

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          position: "relative",
          width: "100%",
          height: "80px",
          boxShadow: "none",
          background: `linear-gradient(-30deg, ${mainColor1} 0%, ${mainColor2} 40%, ${mainColor1} 50%)`,
          color: "#fff",
          padding: "10px 40px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}
      >
        <div
          className={classes.sliderContainer}
          style={{ padding: "0", margin: "0", overflow: "inherit" }}
        >
          <CarouselProvider
            visibleSlides={visibleSlides}
            totalSlides={data.length}
            naturalSlideWidth={slideWidth}
            naturalSlideHeight={90}
          >
            <Slider>
              {data.map((block, index) => {
                return (
                  <Slide
                    className={classes.slide}
                    index={index}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "nowrap",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedKey(index)}
                  >
                    <div
                      key={index}
                      style={{
                        position: "relative",
                        marginLeft: "8px",
                        marginRight: "8px",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "300px",
                        }}
                      >
                        <span
                          style={{
                            borderRadius: "50%",
                            width: "40px",
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: iconBackgroundColor,
                          }}
                        >
                          <IconByName
                            iconName={block.logo}
                            fontSize="40px"
                            color={iconColor}
                          />
                        </span>

                        <Typography
                          variant="body1"
                          style={{
                            fontFamily: "system-ui",
                            width: `${
                              data?.widthBlock ? data.widthBlock - 130 : 220
                            }px`,
                            margin: "0",
                            fontWeight: "600",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              width: `${
                                data?.widthBlock ? data.widthBlock - 130 : 220
                              }px`,
                              flexDirection: "column",
                              marginLeft: "10px",
                            }}
                          >
                            <span
                              style={{
                                fontSize: iconTextSize
                                  ? `${iconTextSize}px`
                                  : "14px",
                                marginButom: "10px",
                              }}
                            >
                              {block.text}
                            </span>
                            <span
                              style={{
                                fontSize: iconInfoSize
                                  ? `${iconInfoSize}px`
                                  : "14px",
                              }}
                            >
                              {block.infoMain}
                            </span>
                          </div>
                        </Typography>
                      </div>
                    </div>
                  </Slide>
                );
              })}
            </Slider>

            <ButtonBack className={`${classes.button} ${classes.prev}`}>
              <ChevronLeftIcon />
            </ButtonBack>

            <ButtonNext className={`${classes.button} ${classes.next}`}>
              <ChevronRightIcon />
            </ButtonNext>
          </CarouselProvider>
        </div>
      </AppBar>
    </Box>
  );
};

export default MacroPanel;
