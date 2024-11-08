import React, { useState, useEffect } from "react";
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
import AddCircleIcon from "@mui/icons-material/AddCircle";
import getIconComponent from "../../../getIconComponent/getIconComponent"


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

const MacroPanel = (props) => {
  const data = props?.data?.originalData;
  const [hoveredBlock, setHoveredBlock] = useState(null);
  const classes = useStyles();
  const backgroundHeader = props.backgroundHeader;

  const handleMouseOver = (block) => {
    setHoveredBlock(block);
  };

  const handleMouseOut = () => {
    setHoveredBlock(null);
  };

  const [visibleSlides, setVisibleSlides] = useState(calculateVisibleSlides());

  function calculateVisibleSlides() {
    const screenWidth = window.innerWidth;
    const slideWidth = 250;
    return Math.floor(screenWidth / slideWidth);
  }

  useEffect(() => {
    function handleResize() {
      setVisibleSlides(calculateVisibleSlides());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          position: "relative",
          width: "100%",
          background: backgroundHeader,
          boxShadow: "none",
          color: "#fff",
          padding: "10px 40px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}
      >
        {data?.macroBlocks ? (
          <div
            className={classes.sliderContainer}
            style={{ padding: "0", margin: "0", overflow: "inherit" }}
          >
            <CarouselProvider
              visibleSlides={visibleSlides}
              totalSlides={data?.macroBlocks.length}
              naturalSlideWidth={250}
              naturalSlideHeight={90}
            >
              <Slider>
                {data?.macroBlocks.map((block, index) => {
                  const Icon = getIconComponent(block?.iconName);
                  
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
                      }}
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
                            width: "200px",
                          }}
                        >
                          <span
                            onMouseOver={() => handleMouseOver(block)}
                            onMouseOut={handleMouseOut}
                            style={{
                              borderRadius: "50%",
                              width: "40px",
                              height: "40px",
                            }}
                          >
                            <g transform={`translate(0, 0`}>
                              <svg width="40px" height="40px">
                                <rect
                                  width="100%"
                                  height="100%"
                                  rx="50%"
                                  ry="50%"
                                  fill={
                                    block.fontColor ? block.fontColor : "none"
                                  }
                                  fill-opacity="15%"
                                />
                                <Icon size={30} x="5" y="5" />
                              </svg>
                            </g>
                          </span>

                          <Typography
                            variant="body1"
                            style={{ width: "110px", margin: "0" }}
                          >
                            <div
                              style={{
                                display: "flex",
                                width: "110px",
                                flexDirection: "column",
                                marginLeft: "10px",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "12px",
                                  marginButom: "10px",
                                }}
                              >
                                {block.text}
                              </span>
                              <span
                                style={{ fontSize: "14px", fontWeight: "700" }}
                              >
                                {block.infoMain}
                              </span>
                            </div>
                          </Typography>
                        </div>

                        {hoveredBlock === block && block.description && (
                          <Box
                            className={classes.descriptionBox}
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "center",
                              alignItems: "center",
                              flexWrap: "nowrap",
                            }}
                          >
                            <g
                              transform={`translate(0, 0`}
                              style={{ marginRight: "15px" }}
                            >
                              <svg width="32px" height="32px" fill="none">
                                <rect
                                  width="100%"
                                  height="100%"
                                  fill={
                                    block.fontColor ? block.fontColor : "none"
                                  }
                                />
                                <svg
                                  width="32px"
                                  height="32px"
                                  fill="black"
                                  dangerouslySetInnerHTML={{
                                    __html: block.iconSVG,
                                  }}
                                ></svg>
                              </svg>
                            </g>
                            <Typography variant="body1" gutterBottom>
                              {block.description}
                            </Typography>
                          </Box>
                        )}
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
        ) : (
          <AddCircleIcon
            style={{ fontSize: "55px", color: "#d6d6d6", cursor: "pointer" }}
            onClick={props.handleClickOpen}
          />
        )}
      </AppBar>
    </Box>
  );
};

export default MacroPanel;
