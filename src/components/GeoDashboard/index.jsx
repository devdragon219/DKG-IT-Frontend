import React, { useState, useEffect, useMemo } from "react";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Unstable_Grid2";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MacroPanel from "./Components/MacroPanel";
import { makeStyles } from "@mui/styles";
import { themeData } from "./theme";
import { ThemeProvider } from 'styled-components';

import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

import AddGraphModal from "./Components/AddGraphModal";
import LazyComponent from "./LazyComponent";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Tooltip } from "@mui/material";
import ColorPickerProvider from "./Components/ColorPickerProvider";

import { useDispatch } from "react-redux";
import { setMockData } from "../../store/item";


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
    '&.Mui-selected': {
      backgroundColor: "rgba(255,255,255, 0.4) !important",
      fontWeight: 600
    }
  },
  container: {
    height: "100%",
  },
  mainContainer: {
    height: "100%",
  },
  mainSubSection: {
    borderRadius: "5px",
    margin: "0 !important",
    boxShadow: "0px 0px 12px 0px rgba(194,194,194,1)",
    animation: `$myEffect 500ms ease-in`,
  },
  mainSubSection_3: {
    borderRadius: "5px",
    margin: "0 !important",
    boxShadow: "0px 0px 12px 0px rgba(194,194,194,1)",
    flex: "1 !important",
    padding: "25px 10px !important",
    animation: `$myEffect 500ms ease-in`,
  },
  mainSubSection_1: {
    display: "flex",
    flexDirection: "column !important",
    gap: "20px !important",
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
}));

function GeoDashboard({ isEditMode, data }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = React.useState(false);
  const [editedGraph, setEditedGraph] = useState(null);

  const dataProps = data?.originalData;
  const themeDefault = themes.custom;

  const [dataSet, setDataSet] = useState(dataProps?.settings);

  const updateDataSet = (updatedColors) => {
    setDataSet((prevDataSet) => ({ ...prevDataSet, ...updatedColors }));
  };

  useEffect(() => {
    updatePageData(dataSet, currentPage-1);
    //handleSubmit(pagesData);
  }, [dataSet]);


  useEffect(() => {
    if (dataProps?.settings) {
      updateDataSet(dataProps.settings);
    }
  }, [dataProps?.settings]);

  const handlePageChange = (_event, page) => {
    setCurrentPage(page);
  };

  const [pagesData, setPagesData] = useState(
    data?.originalData?.data || [
      {
        macro_panel: {
          type: null,
          data: null,
        },
        graph_one: {
          type: null,
          data: null,
        },
        graph_two: {
          type: null,
          data: null,
        },
        graph_three: {
          type: null,
          data: null,
        },
        graph_fore: {
          type: null,
          data: null,
        },
        pageTheme: {
          theme: dataSet,
        },
      },
    ]
  );

  const addPage = () => {
    setPagesData((prevPagesData) => [
      ...prevPagesData,
      {
        graph_one: {
          type: null,
          data: null,
        },
        graph_two: {
          type: null,
          data: null,
        },
        graph_three: {
          type: null,
          data: null,
        },
        graph_fore: {
          type: null,
          data: null,
        },
        pageTheme: {
          theme: themeDefault,
        },
      },
    ]);
    setCurrentPage(pagesData.length + 1);
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

  const handleSubmit = () => {
    const newpagesData = JSON.parse(JSON.stringify(pagesData));
    newpagesData[currentPage - 1].pageTheme = {
      theme: dataSet,
    };

    console.log("newpagesData GeoDashboard", newpagesData);

    setPagesData(newpagesData);

    dispatch(
      setMockData(
        JSON.stringify({
        originalData: { data: newpagesData },
       })
      )
    );
  };

  const setObj = pagesData[currentPage-1].pageTheme.theme  || (themeDefault || {});

  const removePage = (index) => {
    const newData = [...pagesData];
    newData.splice(index, 1);
    setPagesData(newData);

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
    return pagesData[page - 1]?.[selectedGraph]?.data;
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

  return (
  <ThemeProvider theme={setObj}>
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginBottom: "10px",
      }}
    >
    </Box>
    {isEditMode ? (
      <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginBottom: "10px",
        justifyContent: "space-between"
      }}>
        <ColorPickerProvider onUpdateColors={updateDataSet}/>
        <Button
          size="normal"
          color="primary"
          onClick={() => handleSubmit()}
        >
          Update before creation
        </Button>
      </Box>

    ) : null}
    <Box
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
            }}
            key={`macro_panel-${currentPage}`}
          >
            <MacroPanel
              data={getGraphData("macro_panel", currentPage)}
              currentPage={currentPage}
              handleClickOpen={() => handleClickOpen("macro_panel")}
              backgroundHeader={setObj.backgroundHeader}
            />
          </Grid>

          <Grid item sx={{ flexGrow: 1 }}>
            <Grid container spacing={3} sx={{ p: "0", height: "100%", m: "0" }}>
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
                  <Grid
                    container
                    style={{
                      width: "100%",
                      height: "100%",
                      m: "0",
                      minHeight: "600px",
                    }}
                    justifyContent={"space-between"}
                    alignItems="stretch"
                  >
                    <Grid
                      item
                      xs={12}
                      md={3.9}
                      className={classes.mainSubSection}
                      key={`graph_one-${currentPage}-${getGraphType(
                        "graph_one",
                        currentPage
                      )}`}
                      sx={{
                        bgcolor: "#fff",
                        padding: "0px !important",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                      }}
                    >
                      <Box
                        style={{
                          width: "100%",
                        }}
                      >
                        {isPageVisible("graph_one", currentPage) ? (
                          <LazyComponent
                            selectedTheme={setObj}
                            data={getGraphData("graph_one", currentPage)}
                            componentName={getGraphType(
                              "graph_one",
                              currentPage
                            )}
                          />
                        ) : isEditMode ? (
                          <Box
                            style={{
                              with: "100%",
                              height: "100%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              cursor: "pointer",
                            }}
                          >
                            <AddCircleIcon
                              style={{ fontSize: "55px", color: "#d6d6d6" }}
                              onClick={() => handleClickOpen("graph_one")}
                            />
                          </Box>
                        ) : (
                          <></>
                        )}
                        {isPageVisible("graph_one", currentPage) &&
                        isEditMode ? (
                          <div
                            style={{
                              position: "absolute",
                              bottom: "5px",
                              left: "5px",
                            }}
                          >
                            <Tooltip
                              title={"Edit"}
                              onClick={() => handleClickOpen("graph_one")}
                            >
                              <IconButton>
                                <EditIcon />
                              </IconButton>
                            </Tooltip>
                          </div>
                        ) : null}
                      </Box>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={3.9}
                      className={classes.mainSubSection_1}
                    >
                      <Grid
                        item
                        xs={12}
                        className={classes.mainSubSection_3}
                        key={`graph_two-${currentPage}-${getGraphType(
                          "graph_two",
                          currentPage
                        )}`}
                        sx={{
                          bgcolor: "#fff",
                          padding: "0px !important",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          position: "relative",
                        }}
                      >
                        <Box
                          style={{
                            width: "100%",
                          }}
                        >
                          {isPageVisible("graph_two", currentPage) ? (
                            <LazyComponent
                              selectedTheme={setObj}
                              data={getGraphData("graph_two", currentPage)}
                              componentName={getGraphType(
                                "graph_two",
                                currentPage
                              )}
                            />
                          ) : isEditMode ? (
                            <Box
                              style={{
                                with: "100%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                              }}
                            >
                              <AddCircleIcon
                                style={{ fontSize: "55px", color: "#d6d6d6" }}
                                onClick={() => handleClickOpen("graph_two")}
                              />
                            </Box>
                          ) : (
                            <></>
                          )}
                          {isPageVisible("graph_two", currentPage) &&
                          isEditMode ? (
                            <div
                              style={{
                                position: "absolute",
                                bottom: "5px",
                                left: "5px",
                              }}
                            >
                              <Tooltip
                                title={"Edit"}
                                onClick={() => handleClickOpen("graph_two")}
                              >
                                <IconButton>
                                  <EditIcon />
                                </IconButton>
                              </Tooltip>
                            </div>
                          ) : null}
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        className={classes.mainSubSection_3}
                        key={`graph_three-${currentPage}-${getGraphType(
                          "graph_three",
                          currentPage
                        )}`}
                        sx={{
                          bgcolor: "#fff",
                          padding: "0px !important",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          position: "relative",
                        }}
                      >
                        <Box
                          style={{
                            width: "100%",
                          }}
                        >
                          {isPageVisible("graph_three", currentPage) ? (
                            <LazyComponent
                              selectedTheme={setObj}
                              data={getGraphData("graph_three", currentPage)}
                              componentName={getGraphType(
                                "graph_three",
                                currentPage
                              )}
                            />
                          ) : isEditMode ? (
                            <Box
                              style={{
                                with: "100%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                              }}
                            >
                              <AddCircleIcon
                                style={{ fontSize: "55px", color: "#d6d6d6" }}
                                onClick={() => handleClickOpen("graph_three")}
                              />
                            </Box>
                          ) : (
                            <></>
                          )}
                          {isPageVisible("graph_three", currentPage) &&
                          isEditMode ? (
                            <div
                              style={{
                                position: "absolute",
                                bottom: "5px",
                                left: "5px",
                              }}
                            >
                              <Tooltip
                                title={"Edit"}
                                onClick={() => handleClickOpen("graph_three")}
                              >
                                <IconButton>
                                  <EditIcon />
                                </IconButton>
                              </Tooltip>
                            </div>
                          ) : null}
                        </Box>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={3.9}
                      className={classes.mainSubSection}
                      key={`graph_fore-${currentPage}-${getGraphType(
                        "graph_fore",
                        currentPage
                      )}`}
                      sx={{
                        bgcolor: "#fff",
                        padding: "0px !important",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                      }}
                    >
                      <Box
                        style={{
                          width: "100%",
                        }}
                      >
                        {isPageVisible("graph_fore", currentPage) ? (
                          <LazyComponent
                            selectedTheme={setObj}
                            data={getGraphData("graph_fore", currentPage)}
                            componentName={getGraphType(
                              "graph_fore",
                              currentPage
                            )}
                          />
                        ) : isEditMode ? (
                          <Box
                            style={{
                              with: "100%",
                              height: "100%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              cursor: "pointer",
                            }}
                          >
                            <AddCircleIcon
                              style={{ fontSize: "55px", color: "#d6d6d6" }}
                              onClick={() => handleClickOpen("graph_fore")}
                            />
                          </Box>
                        ) : (
                          <></>
                        )}
                        {isPageVisible("graph_fore", currentPage) &&
                        isEditMode ? (
                          <div
                            style={{
                              position: "absolute",
                              bottom: "5px",
                              left: "5px",
                            }}
                          >
                            <Tooltip
                              title={"Edit"}
                              onClick={() => handleClickOpen("graph_fore")}
                            >
                              <IconButton>
                                <EditIcon />
                              </IconButton>
                            </Tooltip>
                          </div>
                        ) : null}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <AppBar
              position="static"
              sx={{
                padding: "8px",
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
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                 <IconButton
                    size="normal"
                    color="primary"
                    variant="contained"
                    onClick={() => addPage()}
                  >
                    <AddIcon
                      style={{ fontSize: "26px", color: "#fff" }}
                    />
                  </IconButton>
                  {pagesData.length > 1 ? (
                    <IconButton
                      sx={{
                          marginLeft: "15px",
                        }
                      }
                      size="normal"
                      color="primary"
                      variant="contained"
                      onClick={() => removePage(currentPage - 1)}
                    >
                      <DeleteIcon
                        style={{ fontSize: "26px", color: "#fff" }}
                      />
                    </IconButton>
                  ) : (
                    <></>
                  )}
                </div>
              ) : (
                <></>
              )}

              <Pagination
                classes={{ ul: classes.pagination }}
                count={pagesData.length}
                page={currentPage}
                onChange={handlePageChange}
                type="start-ellipsis"
                renderItem={(item) => (
                  <PaginationItem
                    className={classes.paginationItem}
                    {...item}
                    sx={{ color: "white" }}
                  />
                )}
              />
            </AppBar>
          </Grid>
        </Grid>
      </div>
    </Box>
  </ThemeProvider>
  );
}

export default GeoDashboard;
