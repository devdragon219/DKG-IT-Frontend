/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useCallback, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import RGL, { WidthProvider } from "react-grid-layout";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { v4 as uuidv4 } from "uuid";

import AddDataSection from "./AddDataSection";
import LazyComponent from "../LazyComponent";

import "./style.css";
import AddCardComponentModal from "../Modals/AddCardComponentModal";

const ReactGridLayout = WidthProvider(RGL);

const useStyles = makeStyles(() => ({
  noShadow: {
    boxShadow: "none !important",
    // borderRadius: "0px !important",
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

const GridContentSection = ({ gridData, setGridData, isEditMode }) => {
  const [layout, setLayout] = useState([]);
  const [editData, setEditData] = useState(null);

  const [isCardComponentOpen, setIsCardComponentOpen] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    if (gridData.length > 0) {
      setLayout(gridData);
    }
  }, [gridData]);

  const setNewLayout = (newLayout) => {
    const newLayouts = newLayout.map((el, index) => {
      if (layout?.[index]) {
        const { data, type, itemConfig } = layout[index];
        return { ...el, data, type, itemConfig };
      }

      return { ...el };
    });

    setLayout(newLayouts);

    setGridData(newLayouts);
  };

  const addItem = useCallback(
    (type, data, hasShadow) => {
      let maxY = -1;
      layout.forEach((item) => {
        const bottomY = item.y + item.h;
        if (bottomY > maxY) {
          maxY = bottomY;
        }
      });

      const newItem = {
        x: 0,
        y: maxY,
        w: 3,
        h: 6,
        i: uuidv4(),
        data: data,
        type: type,
        itemConfig: {
          shadow: hasShadow,
        },
      };

      setLayout([...layout, newItem]);
      setGridData([...layout, newItem]);
    },
    [layout]
  );

  const editItem = useCallback(
    (key, data, hasShadow) => {
      const newLayout = JSON.parse(JSON.stringify(layout));
      const editIndex = newLayout.findIndex((el) => el?.i === key);
      newLayout[editIndex].data = data;
      newLayout[editIndex].itemConfig.shadow = hasShadow;

      setLayout(newLayout);
      setGridData(newLayout);
      setEditData(null);
    },
    [layout]
  );

  const deleteItem = useCallback(
    (key) => {
      const newLayout = JSON.parse(JSON.stringify(layout));
      const editIndex = newLayout.findIndex((el) => el?.i === key);

      newLayout.splice(editIndex, 1);

      setLayout(newLayout);
      setGridData(newLayout);
    },
    [layout]
  );

  const openDialog = useCallback(
    (type) => {
      if (type === "KeyCardComponent") {
        setIsCardComponentOpen(true);
      }
    },
    [layout]
  );

  const openEditDialog = useCallback(
    (type, key, itemConfig) => {
      const data = layout.find((el) => el?.i === key)?.data;
      setEditData({
        data,
        key,
        itemConfig,
      });

      if (type === "KeyCardComponent") {
        setIsCardComponentOpen(true);
      }
    },
    [layout]
  );

  return (
    <div
      style={{
        position: "relative",
        minHeight: "120px",
        border: "1px solid rgb(40, 48, 69)",
        boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 12px",
        borderRadius: "8px",
        marginBottom: "20px",
        backgroundColor: "rgb(40, 48, 69)",
      }}
    >
      <AddCardComponentModal
        isCardComponentOpen={isCardComponentOpen}
        setIsCardComponentOpen={setIsCardComponentOpen}
        addItem={addItem}
        editData={editData}
        editItem={editItem}
        setEditData={setEditData}
      />

      <ReactGridLayout
        rowHeight={30}
        layout={layout}
        isDraggable={isEditMode}
        isResizable={isEditMode}
        onLayoutChange={setNewLayout}
      >
        {layout?.map((item) => {
          const key = item.i;

          const isShadow = false;

          return (
            <div
              key={`${key}`}
              data-grid={{ ...item }}
              className={
                isShadow === true || isShadow === undefined
                  ? ""
                  : classes.noShadow
              }
              style={{
                justifyContent: "center",
                overflow: "hidden",
                padding: "10px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                {isEditMode ? (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      zIndex: 199,
                      position: "absolute",
                    }}
                  ></div>
                ) : (
                  <></>
                )}

                <LazyComponent componentName={item.type} data={item.data} />
              </div>
              {isEditMode ? (
                <>
                  <RemoveButton
                    onClick={() => {
                      deleteItem(item.i);
                    }}
                  />
                  <EditButton
                    onClick={() => {
                      openEditDialog(item.type, item.i, item?.itemConfig);
                    }}
                  />
                </>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </ReactGridLayout>
      {isEditMode ? <AddDataSection openDialog={openDialog} /> : <></>}
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
      <EditIcon
        style={{
          fontSize: "10px",
        }}
      />
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
      <DeleteIcon
        style={{
          fontSize: "10px",
        }}
      />
    </IconButton>
  </Tooltip>
);

export default GridContentSection;
