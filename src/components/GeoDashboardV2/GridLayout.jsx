import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LazyComponent from "./LazyComponent";
import DeleteDialog from "./Components/DeleteDialog";
import { makeStyles } from "@mui/styles";
import "./styles.css";
import { useDispatch } from "react-redux";
import { setMockData } from "../../store/item";

const ReactGridLayout = WidthProvider(RGL);

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
  isPageVisible,
  currentPage,
  getGraphData,
  getGraphType,
  isGraphBlure,
  isEditMode,
  handleClickOpen,
  layout,
  setLayout,
  pagesData,
  setPagesData,
  selectedKey,
  setCurrentPage,
  setObj,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [removeItemID, setremoveItemID] = useState(null);
  const gridRefItem = useRef();
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);

  const openDeleteDialogClick = (key) => {
    setremoveItemID(key);
    setOpenDeleteDialog(true);
  };

  const closeDeleteDialogClick = () => {
    setremoveItemID(null);
    setOpenDeleteDialog(false);
  };

  const submitDelete = () => {
    removeItem(removeItemID);
    setOpenDeleteDialog(false);
    setremoveItemID(null);
  };

  const graphNames = useMemo(
    () => [
      "graph_one",
      "graph_two",
      "graph_three",
      "graph_fore",
      "graph_five",
      "graph_six",
      "graph_seven",
      "graph_eight",
    ],
    []
  );

  const currentLayout = useMemo(() => {
    return layout[currentPage - 1];
  }, [layout, currentPage]);

  const addNewItem = useCallback(() => {
    const keys = currentLayout.map((el) => {
      return el.i.split("-")?.[0];
    });
    const freeKeys = graphNames.filter((item) => !keys.includes(item));
    const newItem = {
      x: 0,
      y: 0,
      w: 4,
      h: 3,
      i: freeKeys[0],
    };
    const updatedLayout = [...currentLayout, newItem].map((item) =>
      item.x === 0 && item.y === 0 ? { ...item, y: item.y + 1 } : item
    );

    const newLayouts = [...layout];
    newLayouts[currentPage - 1] = updatedLayout;
    setLayout(newLayouts);
  }, [currentLayout, currentPage, setLayout]);

  const removeItem = useCallback(
    (itemId) => {
      const updatedLayout = currentLayout.filter((item) => {
        return item.i.split("-")?.[0] !== itemId;
      });
      const newLayouts = [...layout];
      newLayouts[currentPage - 1] = updatedLayout;

      const newData = JSON.parse(JSON.stringify(pagesData));

      newData[currentPage - 1][itemId] = {
        type: null,
        data: null,
        blured: false,
      };

      setPagesData(newData);
      setLayout(newLayouts);

      dispatch(
        setMockData(
          JSON.stringify({
            originalData: { data: newData, layout: newLayouts },
          })
        )
      );
    },
    [currentLayout, currentPage, layout, setLayout, pagesData]
  );

  const setNewLayout = (newLayout) => {
    const newLayouts = [...layout];

    newLayouts[currentPage - 1] = newLayout;
    setLayout(newLayouts);
    if (isEditMode) {
      dispatch(
        setMockData(
          JSON.stringify({
            originalData: { data: pagesData, layout: newLayouts },
          })
        )
      );
    }
  };

  const renderComponent = useCallback(
    (itemName, index) => {
      if (!isPageVisible(itemName, currentPage)) {
        return isEditMode ? (
          <CenteredBox onClick={() => handleClickOpen(itemName)} />
        ) : null;
      }

      return (
        <>
          <LazyComponent
            selectedTheme={setObj}
            data={getGraphData(itemName, currentPage)}
            componentName={getGraphType(itemName, currentPage)}
          />
        </>
      );
    },
    [
      isPageVisible,
      currentPage,
      getGraphData,
      getGraphType,
      isEditMode,
      handleClickOpen,
      setObj,
    ]
  );
  // useEffect(() => {
  //   console.log(gridRefItem);
  // }, [gridRefItem]);
  return (
    <>
      <DeleteDialog
        open={openDeleteDialog}
        handleClose={closeDeleteDialogClick}
        handleSubmit={submitDelete}
      />
      {isEditMode ? (
        <Button
          size="large"
          disabled={currentLayout?.length >= graphNames?.length}
          onClick={addNewItem}
          style={{
            position: "absolute",
            bottom: "0",
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

      <ReactGridLayout
        rowHeight={30}
        layout={currentLayout}
        isDraggable={isEditMode}
        isResizable={isEditMode}
        onLayoutChange={setNewLayout}
        // innerRef={gridRefItem}
      >
        {currentLayout?.map((item, index) => {
          const key = item.i.split("-")?.[0];

          return (
            <div
              key={`${key}-${currentPage}-${getGraphType(
                key,
                currentPage
              )}-${selectedKey}`}
              data-grid={item}
              className={isEditMode ? "" : classes.mainSubSection}
              style={{
                display: "flex",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              {isGraphBlure(key, currentPage) ? (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    borderRadius: "5px",
                    opacity: 0.85,
                    zIndex: 101,
                    position: "absolute",
                    right: 0,
                    top: 0,
                    justifyContent: "center",
                    fontSize: "25px",
                    alignItems: "center",
                    color: "#083763",
                  }}
                >
                  Coming soon
                </div>
              ) : (
                <></>
              )}
              {isEditMode ? (
                <>
                  <RemoveButton
                    onClick={() => {
                      openDeleteDialogClick(key);
                    }}
                  />
                  {getGraphType(key, currentPage) ? (
                    <EditButton onClick={() => handleClickOpen(key)} />
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <></>
              )}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  filter: isGraphBlure(key, currentPage) ? "blur(3px)" : "",
                }}
              >
                {renderComponent(key, index)}
              </div>
            </div>
          );
        })}
      </ReactGridLayout>
    </>
  );
};

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

export default GridLayout;
