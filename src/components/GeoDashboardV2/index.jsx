import React, { useCallback, useMemo, useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Unstable_Grid2";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import MacroPanel from "./Components/MacroPanel";
import { makeStyles } from "@mui/styles";

import AddGraphModal from "./Components/AddGraphModal";
import GridLayout from "./GridLayout";
import { getKeys } from "./Components/AddGraphModal/utils";

import ColorPickerProvider from "./Components/ColorPickerProvider/ColorPickerProvider";
import { ThemeProvider } from "styled-components";
import { IconButton, Typography, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { setMockData } from "../../store/item";
import { useDispatch } from "react-redux";
import { themeData } from "./theme";
import { useParams } from "react-router-dom";
import useResizeObserver from "./useResizeObserver";

const themes = themeData.originalData.data;

const useStyles = makeStyles(() => ({
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paginationItem: {
    color: "white !important",
    fontSize: "24px !important",
    "&.Mui-selected": {
      backgroundColor: "rgba(255,255,255, 0.4) !important",
      fontWeight: 600,
    },
    "& .MuiPaginationItem-icon": {
      fontSize: "24px !important",
    },
  },
  container: {
    height: "100%",
  },
  mainContainer: {
    height: "100%",
  },
}));

function GeoDashboardV2({ isEditMode, data }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const defaultColor = themes.custom;
  // Initial setup
  const initialPage = (() => {
    const pageURL = window.location.href.split("/").pop();
    if (pageURL.startsWith("page")) {
      const defaultPageNumber = parseInt(pageURL.replace("page", ""), 10);
      if (!isNaN(defaultPageNumber) && defaultPageNumber > 0) {
        return defaultPageNumber;
      }
    }
    return 1; // Default to page 1 if no valid page number found in the URL
  })();

  const [currentPage, setCurrentPage] = useState(initialPage);

  const [layout, setLayout] = useState(
    data?.originalData?.layout || [
      [
        { x: 0, y: 0, w: 4, h: 17, i: "graph_one" },
        { x: 4, y: 0, w: 4, h: 8, i: "graph_two" },
        { x: 4, y: 3, w: 4, h: 9, i: "graph_three" },
        { x: 8, y: 0, w: 4, h: 17, i: "graph_fore" },
      ],
    ]
  );

  const [pagesData, setPagesData] = useState(
    data?.originalData?.data || [
      {
        macro_panel: {
          type: null,
          data: null,
          blured: false,
        },
        graph_one: {
          type: null,
          data: null,
          blured: false,
        },
        graph_two: {
          type: null,
          data: null,
          blured: false,
        },
        graph_three: {
          type: null,
          data: null,
          blured: false,
        },
        graph_fore: {
          type: null,
          data: null,
          blured: false,
        },
        pageTheme: {
          theme: defaultColor,
        },
        pageURL: "page1",
      },
    ]
  );

  useEffect(() => {
    const pageURL = window.location.href.split("/").pop();

    // Find the matching page based on the URL
    let matchedPageIndex = pagesData.findIndex(
      (pageData) => pageData.pageURL === pageURL
    );

    // If no custom URL match, check for default pageX pattern
    if (matchedPageIndex === -1 && pageURL.startsWith("page")) {
      const defaultPageNumber = parseInt(pageURL.replace("page", ""), 10);
      if (
        !isNaN(defaultPageNumber) &&
        defaultPageNumber > 0 &&
        defaultPageNumber <= pagesData.length
      ) {
        matchedPageIndex = defaultPageNumber - 1;
      }
    }

    if (matchedPageIndex !== -1) {
      setCurrentPage(matchedPageIndex + 1);
    }
    //console.log(data);
  }, [pagesData]);

  const [open, setOpen] = React.useState(false);
  const [editedGraph, setEditedGraph] = useState(null);
  const [selectedKey, setSelectedKey] = useState(0);

  const handlePageChange = (_event, page) => {
    setCurrentPage(page);
  };

  const addPage = () => {
    setPagesData([
      ...pagesData,
      {
        graph_one: {
          type: null,
          data: null,
          blured: false,
        },
        graph_two: {
          type: null,
          data: null,
          blured: false,
        },
        graph_three: {
          type: null,
          data: null,
          blured: false,
        },
        graph_fore: {
          type: null,
          data: null,
          blured: false,
        },
        pageTheme: {
          theme: defaultColor,
        },
        pageURL: `page${pagesData.length + 1}`,
      },
    ]);
    setLayout([
      ...layout,
      [
        { x: 0, y: 0, w: 4, h: 17, i: "graph_one" },
        { x: 4, y: 0, w: 4, h: 8, i: "graph_two" },
        { x: 4, y: 3, w: 4, h: 9, i: "graph_three" },
        { x: 8, y: 0, w: 4, h: 17, i: "graph_fore" },
      ],
    ]);
    setCurrentPage(pagesData.length + 1);
  };

  const isInteractive = useMemo(() => {
    let interactive = false;
    const currentPageData = pagesData[currentPage - 1];

    const keys = Object.keys(currentPageData);

    keys.forEach((key) => {
      if (currentPageData[key]?.data) {
        const dataKeys = Object.keys(currentPageData[key]?.data);

        if (dataKeys?.length > 0 && dataKeys[0] !== "originalData") {
          interactive = true;
        }
      }
    });

    return interactive;
  }, [currentPage, pagesData]);

  const isPaginationVisible = useMemo(() => {
    const pagesLength = pagesData.length;
    if (isEditMode) {
      return true;
    }

    if (pagesLength > 1) {
      return true;
    }

    return false;
  }, [pagesData]);

  const removePage = (index) => {
    const newData = [...pagesData];
    newData.splice(index, 1);
    setPagesData(newData);

    // Adjust the page URLs for subsequent pages if they follow the default pattern
    newData.forEach((pageData, i) => {
      if (pageData.pageURL.startsWith("page")) {
        pageData.pageURL = `page${i + 1}`;
      }
    });

    const newLayout = [...layout];
    newLayout.splice(index, 1);

    setLayout(newLayout);
    setCurrentPage((prev) => Math.min(prev, newData.length));
  };

  const handleClickOpen = (graph, page = 1) => {
    setEditedGraph(graph);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getGraphData = (selectedGraph, page) => {
    if (pagesData[page - 1]?.[selectedGraph]?.binded) {
      const keys = getKeys(pagesData[page - 1]?.[selectedGraph]?.data);
      const defaultKey = pagesData[page - 1]?.[selectedGraph]?.defaultKey;

      if (keys.includes(`${selectedKey}`)) {
        return pagesData[page - 1]?.[selectedGraph]?.data?.[selectedKey];
      }
      return pagesData[page - 1]?.[selectedGraph]?.data?.[defaultKey];
    }

    return pagesData[page - 1]?.[selectedGraph]?.data;
  };

  const isGraphBlure = (selectedGraph, page) => {
    return pagesData[page - 1]?.[selectedGraph]?.blured;
  };

  const getGraphType = (selectedGraph, page) => {
    return pagesData[page - 1]?.[selectedGraph]?.type;
  };

  const isPageVisible = (selectedGraph, page) => {
    return (
      pagesData[page - 1]?.[selectedGraph]?.type &&
      pagesData[page - 1]?.[selectedGraph]?.data
    );
  };

  const currentPageURL = pagesData[currentPage - 1]?.pageURL
    ? pagesData[currentPage - 1]?.pageURL
    : "";

  const updateURLDataSet = (e) => {
    updatePageURLData(e.target.value, currentPage - 1);
    handleURLSubmit(e.target.value);
  };

  const updatePageURLData = (dataSet, pageIndex) => {
    console.log(dataSet);
    setPagesData((prevPagesData) => {
      const newPagesData = [...prevPagesData];

      if (pageIndex >= 0 && pageIndex < newPagesData.length) {
        newPagesData[pageIndex] = {
          ...newPagesData[pageIndex],
          pageURL: dataSet,
        };
      }

      return newPagesData;
    });
  };

  const handleURLSubmit = (dataSet) => {
    const newpagesData = JSON.parse(JSON.stringify(pagesData));
    newpagesData[currentPage - 1].pageURL = dataSet;
    console.log("newpagesData GeoDashboard", newpagesData);

    setPagesData(newpagesData);
    if (isEditMode) {
      dispatch(
        setMockData(
          JSON.stringify({
            originalData: { data: newpagesData, layout: layout },
          })
        )
      );
    }
  };

  const updateDataSet = (updatedColors) => {
    updatePageData(updatedColors, currentPage - 1);
    handleSubmit(updatedColors);
  };

  const updatePageData = (dataSet, pageIndex) => {
    setPagesData((prevPagesData) => {
      const newPagesData = [...prevPagesData];

      if (pageIndex >= 0 && pageIndex < newPagesData.length) {
        newPagesData[pageIndex] = {
          ...newPagesData[pageIndex],
          pageTheme: {
            theme: dataSet,
          },
        };
      }

      return newPagesData;
    });
  };

  const handleSubmit = (dataSet) => {
    const newpagesData = JSON.parse(JSON.stringify(pagesData));
    newpagesData[currentPage - 1].pageTheme = {
      theme: dataSet,
    };
    //console.log("newpagesData GeoDashboard", newpagesData);

    setPagesData(newpagesData);
    if (isEditMode) {
      dispatch(
        setMockData(
          JSON.stringify({
            originalData: { data: newpagesData, layout: layout },
          })
        )
      );
    }
  };

  const currentPageData = pagesData[currentPage - 1];
  const setObj =
    currentPageData &&
    currentPageData.pageTheme &&
    currentPageData.pageTheme.theme
      ? currentPageData.pageTheme.theme
      : defaultColor;

  //const setObj = pagesData[currentPage-1].pageTheme.theme || testColor;

  const isExploreMore = false;

  const onResize = useCallback((target) => {
    if (target) {
      window.top.postMessage(
        { height: target?.offsetHeight, type: "height" },
        "*"
      );
    }
  }, []);

  const exploreMore = () => {
    console.log("test");
  };
  const ref = useResizeObserver(onResize);
  return (
    <ThemeProvider theme={setObj}>
      {isEditMode ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            marginBottom: "10px",
            justifyContent: "space-between",
          }}
        >
          <ColorPickerProvider onUpdateColors={updateDataSet} />
          <TextField
            label="Page URL"
            value={currentPageURL}
            onChange={updateURLDataSet}
            variant="outlined"
          />
        </Box>
      ) : null}
      <Box
        ref={ref}
        sx={{
          width: "100%",
          fontFamily: "system-ui",
        }}
      >
        <AddGraphModal
          open={open}
          handleClose={handleClose}
          setOpen={setOpen}
          editedGraph={editedGraph}
          setPagesData={setPagesData}
          pagesData={pagesData}
          page={currentPage - 1}
          layout={layout}
          macroPanel={pagesData[currentPage - 1]?.macro_panel}
        />
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Grid
            container
            direction="column"
            sx={{
              flexWrap: "nowrap",
              height: "100%",
              position: "relative",
            }}
          >
            <Grid
              item
              sx={{
                width: "100%",
                display:
                  pagesData[currentPage - 1]?.macro_panel?.data === null &&
                  !isEditMode
                    ? "none"
                    : "block",
              }}
              key={`macro_panel-${currentPage}`}
            >
              <MacroPanel
                data={getGraphData("macro_panel", currentPage)}
                currentPage={currentPage}
                handleClickOpen={() => handleClickOpen("macro_panel")}
                isEditMode={!!isEditMode}
                selectedKey={selectedKey}
                setSelectedKey={setSelectedKey}
                backgroundHeader={setObj.backgroundHeader}
                isInteractive={isInteractive}
              />
            </Grid>

            <Grid item sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={3}
                sx={{ p: "0", height: "100%", m: "0" }}
              >
                <Grid
                  item
                  xs={4}
                  key={"page_1"}
                  sx={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Box className={classes.mainContainer}>
                    <GridLayout
                      isPageVisible={isPageVisible}
                      currentPage={currentPage}
                      getGraphData={getGraphData}
                      getGraphType={getGraphType}
                      isGraphBlure={isGraphBlure}
                      isEditMode={!!isEditMode}
                      handleClickOpen={handleClickOpen}
                      layout={layout || []}
                      setLayout={setLayout}
                      pagesData={pagesData || []}
                      setPagesData={setPagesData}
                      selectedKey={selectedKey}
                      setCurrentPage={setCurrentPage}
                      setObj={setObj}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            {isPaginationVisible ? (
              <Grid item>
                <AppBar
                  position="static"
                  sx={{
                    padding: "12px",
                    borderRadius: "5px",
                    position: "relative",
                    background: setObj.backgroundFooter,
                  }}
                >
                  {isEditMode ? (
                    <div
                      style={{
                        display: "flex",
                        position: "absolute",
                        right: isExploreMore ? "160px" : "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    >
                      <Button
                        size="large"
                        onClick={() => addPage()}
                        style={{
                          color: "#fff",
                        }}
                      >
                        <IconButton
                          size="normal"
                          color="#fff"
                          variant="contained"
                        >
                          <AddIcon
                            style={{ fontSize: "32px", color: "#fff" }}
                          />
                        </IconButton>
                        Add page
                      </Button>
                      {pagesData.length > 1 ? (
                        <Button
                          size="large"
                          onClick={() => removePage(currentPage - 1)}
                          style={{
                            color: "#fff",
                          }}
                        >
                          <IconButton
                            sx={{
                              marginLeft: "15px",
                            }}
                            size="normal"
                            color="primary"
                            variant="contained"
                          >
                            <DeleteIcon
                              style={{ fontSize: "32px", color: "#fff" }}
                            />
                          </IconButton>
                          Delete page
                        </Button>
                      ) : (
                        <></>
                      )}
                    </div>
                  ) : (
                    <></>
                  )}

                  {isExploreMore && (
                    <div
                      style={{
                        display: "flex",
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    >
                      <Button
                        size="large"
                        onClick={() => exploreMore()}
                        style={{
                          color: "#fff",
                        }}
                      >
                        Explore More
                      </Button>
                    </div>
                  )}

                  <Pagination
                    size="large"
                    classes={{ ul: classes.pagination }}
                    count={pagesData.length}
                    page={currentPage}
                    onChange={handlePageChange}
                    type="start-ellipsis"
                    renderItem={(item) => {
                      return (
                        <PaginationItem
                          className={classes.paginationItem}
                          slots={{
                            previous: () => (
                              <Typography
                                variant="label"
                                style={{
                                  alignItems: "center",
                                  display: "flex",
                                }}
                              >
                                <ArrowBackIcon />
                                <span style={{ marginLeft: "16px" }}>
                                  Previous
                                </span>
                              </Typography>
                            ),
                            next: () => (
                              <Typography
                                variant="label"
                                style={{
                                  alignItems: "center",
                                  display: "flex",
                                }}
                              >
                                <span style={{ marginRight: "16px" }}>
                                  Next
                                </span>
                                <ArrowForwardIcon />
                              </Typography>
                            ),
                          }}
                          {...item}
                          // page={item.page - 1}
                          sx={{ color: "white" }}
                        />
                      );
                    }}
                  />
                </AppBar>
              </Grid>
            ) : (
              <></>
            )}
          </Grid>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default GeoDashboardV2;
