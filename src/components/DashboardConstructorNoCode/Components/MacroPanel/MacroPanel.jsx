import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EditIcon from "@mui/icons-material/Edit";
import { diagramTypeMap } from "../../../../API/diagramsApi";

import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";
import getIconComponent from "../../../getIconComponent/getIconComponent";
import {ENV_BACKEND_URL} from "../../../../config";
import {pathAPIurl} from "../../../../constants/routes";

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
    "&:hover": {
      color: "#083763",
      transform: "scale(1.2) translateX(20px)",
    },
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
  const [macroparametersData, setmacroparametersData] = useState();
  let diagramsSrc = [];
  let monthList = [];
  let statsSrc = {};
  let statsArray = [];
  let totalCount = 0;
  let data = props?.data?.originalData;
  const apiCondition = props?.data?.originalData?.apiCondition;
  // Code for fetching data for macroparameters dashboard
  const urls = [
    `${pathAPIurl()}api/diagrams-all`,
    "https://platform.dkv.global/dashboards/api/diagrams",
  ];

  function mergeData(data) {
    const validData = data.filter((item) => item !== null);
    diagramsSrc = [].concat(...validData);
  }

  function extractMonths() {
    for (let diag of diagramsSrc) {
      let month = diag.updated_time.substr(0, 7);
      if (!monthList.includes(month)) monthList.push(month);
    }
    monthList.sort();
    monthList.reverse();
    //renderMonths();
  }

  useEffect(() => {
    if (apiCondition) {
      const fetchData = async () => {
        try {
          const promises = urls.map(async (url) => {
            try {
              const response = await fetch(url, {
                method: "GET",
                headers: {
                  Accept: "application/json",
                },
              });

              if (!response.ok) {
                throw new Error(
                  `Error fetching data from ${url}. Skipping this URL.`
                );
              }

              const data = await response.json();
              return data;
            } catch (error) {
              console.error(error.message);
              return null;
            }
          });

          Promise.all(promises).then((results) => {
            mergeData(results);
            extractMonths();
            for (let diag of diagramsSrc) {
              if (!statsSrc.hasOwnProperty(diag.diagram_type)) {
                statsSrc[diag.diagram_type] = 0;
              }
              statsSrc[diag.diagram_type]++;
            }

            for (let statKey in statsSrc) {
              statsArray.push({
                type_title: diagramTypeMap.hasOwnProperty(statKey)
                  ? diagramTypeMap[statKey]
                  : statKey,
                type_code: statKey,
                count: statsSrc[statKey],
              });
              totalCount += statsSrc[statKey];
            }
            statsArray.sort((a, b) => {
              return b.count - a.count;
            });
            setmacroparametersData({
              totalTypeOfVis: statsArray.length,
              totalNumberOfVis: totalCount,
              documentCreatorV2Count: statsArray.find(
                (item) => item.type_code === "documentCreatorV2"
              ).count,
              // geoDashboardCount: statsArray.find(
              //   (item) => item.type_code === "geoDashboardV2"
              // ).count,
            });
          });
        } catch (error) {
          console.error("Error during promise execution:", error);
        }
      };

      fetchData();
    }
  }, [statsArray]);

  data = apiCondition
    ? {
        mainNameforPage: "General Overview",
        widthBlock: 350,
        macroBlocks: [
          {
            iconName: "FiBarChart2",
            text: "Frontend Tools Implemented",
            infoMain: macroparametersData?.totalNumberOfVis,
            description11: "Share of agricultural production in GDP 12%",
            fontColor: "#fff",
          },
          {
            iconName: "FiPackage",
            text: "Frontend Tools Types",
            infoMain: 126, //macroparametersData?.totalTypeOfVis
            description11: "Of total exports 45%",
            fontColor: "#fff",
          },
          // {
          //   iconName: "FiGlobe",
          //   text: "Total Number of GeoDashboards 2.0",
          //   infoMain: macroparametersData.geoDashboardCount,
          //   description1: "Exports in 70+ countries",
          //   fontColor: "#fff",
          // },
          {
            iconName: "FiPercent",
            text: "Document Creators Implemented",
            infoMain: macroparametersData?.documentCreatorV2Count,
            description1: "International trade 82% – EU & CIS",
            fontColor: "#fff",
          },
        ],
      }
    : props?.data?.originalData;

  // End of code for fetchiing data for macroparameters dashboard

  const { setSelectedKey, selectedKey, isInteractive } = props;

  const [hoveredBlock, setHoveredBlock] = useState(null);
  const classes = useStyles();
  const backgroundHeader = props.backgroundHeader;

  const mainNameforPage = data?.mainNameforPage;

  const handleMouseOver = (block) => {
    setHoveredBlock(block);
  };

  const handleMouseOut = () => {
    setHoveredBlock(null);
  };

  const [visibleSlides, setVisibleSlides] = useState(calculateVisibleSlides());
  const [blockWidth, setBlockWidth] = useState(
    data?.widthBlock ? data.widthBlock - 130 : 220
  );

  useEffect(() => {
    if (data?.widthBlock) {
      setBlockWidth(data.widthBlock - 130);
      setVisibleSlides(calculateVisibleSlides(data.widthBlock));
    } else {
      setBlockWidth(350);
      setVisibleSlides(calculateVisibleSlides(350));
    }
  }, [data?.widthBlock]);

  useEffect(() => {
    function handleResize() {
      if (data?.widthBlock) {
        setVisibleSlides(calculateVisibleSlides(data.widthBlock));
      } else {
        setVisibleSlides(calculateVisibleSlides(350));
      }
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [data?.widthBlock, window.innerWidth]);

  function calculateVisibleSlides(widthBlock) {
    const screenWidth = window.innerWidth;
    const slideWidth = widthBlock;
    return Math.floor(screenWidth / slideWidth);
  }

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
          padding: mainNameforPage ? "10px 40px 10px 250px" : "10px 40px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}
      >
        {mainNameforPage && (
          <div
            style={{
              position: "absolute",
              width: "200px",
              left: "0",
              padding: "0 10px",
            }}
          >
            <div
              style={{
                fontWeight: 600,
                fontSize: "26px",
                textAlign: "center",
              }}
            >
              {mainNameforPage}
            </div>
          </div>
        )}

        {data?.macroBlocks ? (
          <div
            className={classes.sliderContainer}
            style={{ padding: "0", margin: "0", overflow: "inherit" }}
          >
            {props?.isEditMode ? (
              <IconButton
                sx={{
                  position: "absolute",
                  top: "-8px",
                  right: "-30px",
                  zIndex: 1000,
                  color: "white",
                }}
                onClick={props?.handleClickOpen}
              >
                <EditIcon />
              </IconButton>
            ) : (
              <></>
            )}

            <CarouselProvider
              visibleSlides={visibleSlides}
              totalSlides={data?.macroBlocks.length}
              naturalSlideWidth={data?.widthBlock || 350}
              naturalSlideHeight={90}
            >
              <Slider>
                {data?.macroBlocks.map((block, index) => {
                  const Icon = getIconComponent(block?.iconName);

                  return (
                    <Slide
                      className={
                        isInteractive ? classes.slideInteractive : classes.slide
                      }
                      index={index}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "nowrap",
                        cursor: "pointer",
                        color:
                          selectedKey === index && isInteractive
                            ? "#083763"
                            : "",
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
                                  fontSize: "14px",
                                  marginButom: "10px",
                                }}
                              >
                                {block.text}
                              </span>
                              <span style={{ fontSize: "16px" }}>
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
            onDoubleClick={props.handleClickOpen}
          />
        )}
      </AppBar>
    </Box>
  );
};

export default MacroPanel;
