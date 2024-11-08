import React, { useState } from "react";

import Grid from "@mui/material/Unstable_Grid2";

import Box from "@mui/material/Box";

import { makeStyles } from "@mui/styles";

import AddGraphModal from "./Components/AddGraphModal";
import GridLayout from "./GridLayout";
import AddGraphPathModal from "./Components/AddGraphPathModal";

const useStyles = makeStyles(() => ({
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paginationItem: {
    color: "white !important",
  },
  container: {
    height: "100%",
  },
  mainContainer: {
    height: "100%",
  },
}));

function FrameConstructor({ isEditMode, data }) {
  const classes = useStyles();
  const [currentPage] = useState(1);
  const [open, setOpen] = React.useState(false);
  const [openFrame, setOpenFrame] = React.useState(false);
  const [editedGraph, setEditedGraph] = useState(null);

  const [layout, setLayout] = useState(data?.originalData?.layout || [[]]);

  const [pagesData, setPagesData] = useState(data?.originalData?.data || [{}]);

  const handleClickOpen = (graph, page = 1) => {
    setEditedGraph(graph);
    setOpen(true);
  };

  const handleFrameClickOpen = (graph, page = 1) => {
    setEditedGraph(graph);
    setOpenFrame(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickFrameOpen = (graph, page = 1) => {
    setEditedGraph(graph);
    setOpenFrame(true);
  };

  const handleFrameClose = () => {
    setOpenFrame(false);
  };

  const getGraphData = (selectedGraph, page) => {
    return pagesData[page - 1]?.[selectedGraph]?.data;
  };

  const isGraphBlure = (selectedGraph, page) => {
    return pagesData[page - 1]?.[selectedGraph]?.blured;
  };

  const getGraphBoxColor = (selectedGraph, page) => {
    return pagesData[page - 1]?.[selectedGraph]?.shadowColor;
  };

  const getWithBox = (selectedGraph, page) => {
    return pagesData[page - 1]?.[selectedGraph]?.withBox;
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
    <Box
      sx={{
        width: "100%",
        fontFamily: "system-ui",
      }}
    >
      <AddGraphPathModal
        open={openFrame}
        handleClose={handleFrameClose}
        setOpen={setOpenFrame}
        editedGraph={editedGraph}
        setPagesData={setPagesData}
        pagesData={pagesData}
        page={currentPage - 1}
        layout={layout}
      />
      <AddGraphModal
        open={open}
        handleClose={handleClose}
        setOpen={setOpen}
        editedGraph={editedGraph}
        setPagesData={setPagesData}
        pagesData={pagesData}
        page={currentPage - 1}
        layout={layout}
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
                  <GridLayout
                    isPageVisible={isPageVisible}
                    currentPage={currentPage}
                    getGraphData={getGraphData}
                    getGraphType={getGraphType}
                    isGraphBlure={isGraphBlure}
                    getGraphBoxColor={getGraphBoxColor}
                    isEditMode={!!isEditMode}
                    handleClickOpen={handleClickOpen}
                    handleClickFrameOpen={handleClickFrameOpen}
                    layout={layout || []}
                    setLayout={setLayout}
                    pagesData={pagesData || []}
                    setPagesData={setPagesData}
                    handleFrameClickOpen={handleFrameClickOpen}
                    getWithBox={getWithBox}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}

export default FrameConstructor;
