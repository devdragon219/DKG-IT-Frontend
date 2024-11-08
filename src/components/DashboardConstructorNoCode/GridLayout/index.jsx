import React, { useCallback, useMemo, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { makeStyles } from "@mui/styles";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import "../styles.css";
import { AddToolModal } from "./AddToolModal";
import { LINKS_CONSTS } from "../../../constants/links";
import LazyComponent from "./LazyComponent";
import DeleteDialog from "../../GeoDashboardV2/Components/DeleteDialog";
import { BREAKPOINTS } from "./constants";
const ResponsiveGridLayout = WidthProvider(Responsive);

const useStyles = makeStyles(() => ({
  mainSubSection: {
    animation: `$myEffect 500ms ease-in`,
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

const GridLayout = ({
  layouts,
  setLayouts,
  currentBreakpoint,
  setCurrentBreakpoint,
  isEditMode,
  currentPage,
  setSelectedTool,
  selectedTool,
  pagesData,
  setPagesData,
  setGridWidth,
}) => {
  const classes = useStyles();

  const [isVisible, setIsVisible] = useState(false);
  const [manualChanged, setManualChanged] = useState(false);
  const [removeItemID, setremoveItemID] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);

  const onLayoutChange = (_currentLayout, allLayouts) => {
    if (!manualChanged) {
      return;
    }
    const newLayouts = { ...allLayouts };

    if (isEditMode) {
      setLayouts((prevState) => {
        const tempState = [...prevState];
        tempState[currentPage - 1] = newLayouts;

        return tempState;
      });

      setManualChanged(false);
    }
  };

  const onBreakpointChange = (newBreakpoint) => {
    setCurrentBreakpoint(newBreakpoint);
  };

  const isPageVisible = (selectedGraph, page) => {
    return (
      pagesData[page - 1]?.[selectedGraph]?.type &&
      pagesData[page - 1]?.[selectedGraph]?.data
    );
  };

  const getGraphType = (selectedGraph, page) => {
    return pagesData[page - 1]?.[selectedGraph]?.type;
  };

  const getGraphData = (selectedGraph, page) => {
    return pagesData[page - 1]?.[selectedGraph]?.data;
  };

  const getItem = (selectedGraph, page) => {
    return pagesData[page - 1]?.[selectedGraph];
  };

  const editedItem = useMemo(() => {
    if (isPageVisible(selectedTool, currentPage)) {
      return getItem(selectedTool, currentPage);
    }

    return null;
  }, [selectedTool, pagesData, currentPage]);

  const removeItem = useCallback(
    (itemId) => {
      const tempLayouts = { ...layouts };
      BREAKPOINTS.forEach((breakpoint) => {
        const selectedItem = layouts[currentBreakpoint];
        tempLayouts[breakpoint] = selectedItem.filter((item) => {
          return item.i.split("-")?.[0] !== itemId;
        });
      });

      const newData = JSON.parse(JSON.stringify(pagesData));

      delete newData[currentPage - 1][itemId];

      setPagesData(newData);
      setLayouts((prevState) => {
        const tempState = [...prevState];
        tempState[currentPage - 1] = tempLayouts;

        return tempState;
      });
    },
    [currentPage, layouts, setLayouts, pagesData]
  );

  const closeDeleteDialogClick = () => {
    setremoveItemID(null);
    setOpenDeleteDialog(false);
  };

  const submitDelete = () => {
    removeItem(removeItemID);
    setOpenDeleteDialog(false);
    setremoveItemID(null);
  };

  const openDeleteDialogClick = (key) => {
    setremoveItemID(key);
    setOpenDeleteDialog(true);
  };

  const addNewItem = useCallback(() => {
    const key = uuidv4().replace(/-/g, "");
    
    const newItem = {
      x: 0,
      y: 0,
      w: 4,
      h: 3,
      i: key,
    };

    const tempLayouts = JSON.parse(JSON.stringify(layouts));
    BREAKPOINTS.forEach((breakpoint) => {
      tempLayouts[breakpoint].push(newItem);
    });

    setLayouts((prevState) => {
      const tempState = [...prevState];
      tempState[currentPage - 1] = tempLayouts;

      return tempState;
    });
  }, [layouts, currentPage]);

  const renderComponent = useCallback(
    (key, index) => {
      if (!isPageVisible(key, currentPage)) {
        return isEditMode ? (
          <CenteredBox
            onClick={() => {
              setIsVisible(true);

              setSelectedTool(key);
            }}
          />
        ) : null;
      }
      const diagramType = getGraphType(key, currentPage);

      return (
        <>
          <LazyComponent
            data={getGraphData(key, currentPage)}
            path={LINKS_CONSTS?.[diagramType]?.lazyImport}
            diagramType={diagramType}
          />
        </>
      );
    },
    [currentPage, isEditMode, pagesData]
  );

  return (
    <div
      style={{ maxHeight: "calc(100vh - 140px)", overflow: "scroll" }}
      key={`wadawd-${currentPage}`}
    >
      {isEditMode && currentBreakpoint === "lg" ? (
        <Button
          size="large"
          onClick={addNewItem}
          style={{
            position: "absolute",
            bottom: "-10px",
            left: "50px",
            transform: "translate(-45%, 5%)",
            zIndex: 10,
            color: "#fff",
          }}
        >
          <IconButton size="large" variant="contained">
            <AddCircleIcon style={{ fontSize: "32px", color: "#fff" }} />
          </IconButton>
          Add item
        </Button>
      ) : (
        <></>
      )}
      <DeleteDialog
        open={openDeleteDialog}
        handleClose={closeDeleteDialogClick}
        handleSubmit={submitDelete}
      />
      <AddToolModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        editedItem={editedItem}
        selectedTool={selectedTool}
      />
      <ResponsiveGridLayout
        className="layout"
        isDraggable={!!isEditMode}
        isResizable={!!isEditMode}
        layouts={layouts}
        breakpoints={{ lg: 700, sm: 100 }}
        cols={{ lg: 12, sm: 2 }}
        rowHeight={30}
        onWidthChange={(width) => {
          setGridWidth(width);
        }}
        onLayoutChange={onLayoutChange}
        onBreakpointChange={onBreakpointChange}
        onResize={() => {
          setManualChanged(true);
        }}
        onDrag={() => {
          setManualChanged(true);
        }}
        measureBeforeMount={false}
      >
        {layouts[currentBreakpoint].map((item, index) => {
          const key = item.i.split("-")?.[0];

          return (
            <div
              key={`${key}-${currentPage}-${getGraphType(key, currentPage)}`}
              data-grid={item}
              className={isEditMode ? "" : classes.mainSubSection}
              style={{
                display: "flex",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              {isEditMode ? (
                <>
                  <RemoveButton
                    onClick={() => {
                      openDeleteDialogClick(key);
                    }}
                  />
                  {getGraphType(key, currentPage) ? (
                    <EditButton
                      onClick={() => {
                        setIsVisible(true);
                        setSelectedTool(key);
                      }}
                    />
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <></>
              )}

              {renderComponent(key, index)}
            </div>
          );
        })}
      </ResponsiveGridLayout>
    </div>
  );
};

const EditButton = ({ onClick }) => (
  <Tooltip title="Edit" onClick={onClick}>
    <IconButton
      sx={{
        position: "absolute",
        bottom: "5px",
        left: "5px",
        zIndex: 1000,
        background: "white",
      }}
    >
      <EditIcon />
    </IconButton>
  </Tooltip>
);

const RemoveButton = ({ onClick }) => (
  <Tooltip title="Remove" onClick={onClick}>
    <IconButton
      sx={{
        position: "absolute",
        bottom: "5px",
        left: "45px",
        zIndex: 1000,
        background: "white",
      }}
    >
      <DeleteIcon />
    </IconButton>
  </Tooltip>
);

const CenteredBox = ({ onClick }) => (
  <Box
    sx={{
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    }}
    onDoubleClick={onClick}
  >
    <AddCircleIcon sx={{ fontSize: 55, color: "#d6d6d6" }} />
  </Box>
);

export default GridLayout;
