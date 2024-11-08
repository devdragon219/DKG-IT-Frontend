import React, { useCallback, useMemo, useState } from "react";
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
import RectColorResp from "../../components/RectColorResp";

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
  handleClickFrameOpen,
  getGraphBoxColor,
  layout,
  setLayout,
  pagesData,
  setPagesData,
  handleFrameClickOpen,
  getWithBox,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentLayout = layout[currentPage - 1];
  const [removeItemID, setremoveItemID] = useState(null);
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

  const addNewItem = useCallback(() => {
    const keys = currentLayout.map((el) => {
      return el.i.split("-")?.[0];
    });
    const freeKeys = graphNames.filter((item) => !keys.includes(item));
    const newItem = {
      x: 0,
      y: 0,
      w: 3,
      h: 7,
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

  const setBox = (key, currentPage) => {
    const color = getGraphBoxColor(key, currentPage);
    const isBox = getWithBox(key, currentPage);

    return isBox
      ? `-5px -5px ${color}, 5px 5px ${color}, -5px 5px ${color}, 5px -5px ${color}`
      : "";
  };

  const renderComponent = useCallback(
    (itemName, index) => {
      if (!isPageVisible(itemName, currentPage)) {
        return isEditMode ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Button
              variant="contained"
              size="small"
              onClick={() => handleClickOpen(itemName)}
            >
              Add single rect
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => handleClickFrameOpen(itemName)}
            >
              Add Frame
            </Button>
          </div>
        ) : null;
      }

      return (
        <>
          <LazyComponent
            data={getGraphData(itemName, currentPage)}
            componentName={getGraphType(itemName, currentPage)}
            isEditMode={isEditMode}
          />
        </>
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      isPageVisible,
      currentPage,
      getGraphData,
      getGraphType,
      isEditMode,
      handleClickOpen,
    ]
  );

  return (
    <>
      <DeleteDialog
        open={openDeleteDialog}
        handleClose={closeDeleteDialogClick}
        handleSubmit={submitDelete}
      />
      {isEditMode ? (
        <Button
          disabled={currentLayout.length >= graphNames.length}
          size="small"
          variant="contained"
          onClick={addNewItem}
          style={{
            position: "absolute",
            top: "-20px",
            left: "50px",
            transform: "translate(-50%, 0)",
            zIndex: 100,
          }}
        >
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
      >
        {currentLayout?.map((item, index) => {
          const key = item.i.split("-")?.[0];
          const data = getGraphData(key, currentPage);

          return getGraphType(key, currentPage) === "KeyIndicatorsResp" ? (
            <div
              key={`${key}-${currentPage}-${getGraphType(key, currentPage)}`}
              data-grid={item}
              className={isEditMode ? "" : classes.mainSubSection}
              style={{ width: "100%", height: "100%" }}
            >
              <RectColorResp
                shadowColor={data?.shadowColor?.css?.backgroundColor}
                title={data?.title}
                backgroundColor={data?.backgroundColor?.css?.backgroundColor}
                titleColor={data?.titleColor?.css?.backgroundColor}
                className={isEditMode ? "" : classes.mainSubSection}
                link={data?.URL}
                isEditMode={isEditMode}
              />
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
            </div>
          ) : (
            <div
              key={`${key}-${currentPage}-${getGraphType(key, currentPage)}`}
              data-grid={item}
              className={isEditMode ? "" : classes.mainSubSection}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {data?.title}

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
                        if (
                          getGraphType(key, currentPage) ===
                            "KeyIndicatorsFrame" ||
                          getGraphType(key, currentPage) ===
                            "TreeMapWithChildren"
                        ) {
                          handleFrameClickOpen(key);
                        } else {
                          handleClickOpen(key);
                        }
                      }}
                    />
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
                  alignItems: "center",
                  boxShadow: setBox(key, currentPage),
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

const CenteredBox = ({ onClick, color }) => (
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
    <AddCircleIcon sx={{ fontSize: 55, color: color ? color : "#d6d6d6" }} />
  </Box>
);

const EditButton = ({ onClick }) => (
  <Tooltip title="Edit" onClick={onClick}>
    <IconButton
      sx={{ position: "absolute", bottom: "5px", left: "5px", zIndex: 1000 }}
    >
      <EditIcon />
    </IconButton>
  </Tooltip>
);

const RemoveButton = ({ onClick }) => (
  <Tooltip title="Remove" onClick={onClick}>
    <IconButton
      sx={{ position: "absolute", bottom: "5px", left: "45px", zIndex: 1000 }}
    >
      <DeleteIcon />
    </IconButton>
  </Tooltip>
);

export default GridLayout;
