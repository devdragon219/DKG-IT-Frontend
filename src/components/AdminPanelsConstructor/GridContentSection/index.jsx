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

import AddTextModal from "../Modals/AddTextModal";
import AddIframeModal from "../Modals/AddIframeModal";
import AddImageModal from "../Modals/AddImageModal";
import AddSectionModal from "../Modals/AddSectionModal";

import "./style.css";
import AddCardComponentModal from "../Modals/AddCardComponentModal";

const ReactGridLayout = WidthProvider(RGL);

const useStyles = makeStyles(() => ({
  noShadow: {
    boxShadow: "none !important",
    borderRadius: "0px !important",
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

const GridContentSection = ({
  sectionKey,
  contentData,
  setContentData,
  isEditMode,
  rightSidebar,
}) => {
  const [layout, setLayout] = useState([]);
  const [editData, setEditData] = useState(null);
  const [isTextModalOpen, setIsTextModalOpen] = useState(false);
  const [isIframeModalOpen, setIsIframeModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isCardComponentOpen, setIsCardComponentOpen] = useState(false);
  const [isAddSectionToolModalOpen, setIsAddSectionToolModalOpen] =
    useState(false);

  const classes = useStyles();

  useEffect(() => {
    if (contentData[sectionKey]) {
      setLayout(contentData[sectionKey]);
    }
  }, [contentData]);

  const setNewLayout = (newLayout) => {
    const newLayouts = newLayout.map((el, index) => {
      if (layout?.[index]) {
        const { data, type, itemConfig } = layout[index];
        return { ...el, data, type, itemConfig };
      }

      return { ...el };
    });

    setLayout(newLayouts);

    setContentData({
      ...contentData,
      [sectionKey]: newLayouts,
    });
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
        w: 6,
        h: 6,
        i: uuidv4(),
        data: data,
        type: type,
        itemConfig: {
          shadow: hasShadow,
        },
      };

      setLayout([...layout, newItem]);
      setContentData({
        ...contentData,
        [sectionKey]: [...layout, newItem],
      });
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
      setContentData({
        ...contentData,
        [sectionKey]: newLayout,
      });
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
      setContentData({
        ...contentData,
        [sectionKey]: newLayout,
      });
    },
    [layout]
  );

  const openDialog = useCallback(
    (type) => {
      if (type === "TextComponent") {
        setIsTextModalOpen(true);
      }

      if (type === "iFrame") {
        setIsIframeModalOpen(true);
      }

      if (type === "image") {
        setIsImageModalOpen(true);
      }

      if (type === "ToolCardComponent") {
        setIsCardComponentOpen(true);
      }

      if (type === "Section") {
        setIsAddSectionToolModalOpen(true);
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
      if (type === "TextComponent") {
        setIsTextModalOpen(true);
      }

      if (type === "IframeComponent") {
        setIsIframeModalOpen(true);
      }

      if (type === "image") {
        setIsImageModalOpen(true);
      }

      if (type === "ToolCardComponent") {
        setIsCardComponentOpen(true);
      }

      if (type === "Section") {
        setIsAddSectionToolModalOpen(true);
      }
    },
    [layout]
  );

  return (
    <div>
      <AddSectionModal
        isAddSectionToolModalOpen={isAddSectionToolModalOpen}
        setIsAddSectionToolModalOpen={setIsAddSectionToolModalOpen}
        addItem={addItem}
        editData={editData ? editData : []}
        editItem={editItem}
        setEditData={setEditData}
      />
      <AddTextModal
        isTextModalOpen={isTextModalOpen}
        setIsTextModalOpen={setIsTextModalOpen}
        addItem={addItem}
        editData={editData}
        editItem={editItem}
        setEditData={setEditData}
      />
      <AddIframeModal
        isIframeModalOpen={isIframeModalOpen}
        setIsIframeModalOpen={setIsIframeModalOpen}
        addItem={addItem}
        editData={editData}
        editItem={editItem}
        setEditData={setEditData}
      />
      <AddCardComponentModal
        isCardComponentOpen={isCardComponentOpen}
        setIsCardComponentOpen={setIsCardComponentOpen}
        addItem={addItem}
        editData={editData}
        editItem={editItem}
        setEditData={setEditData}
      />
      <AddImageModal
        isImageModalOpen={isImageModalOpen}
        setIsImageModalOpen={setIsImageModalOpen}
        addItem={addItem}
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

          const isShadow = item?.itemConfig?.shadow;
          const configField = Object.keys(item).indexOf("itemConfig");

          return (
            <div
              key={`${key}`}
              data-grid={{ ...item }}
              className={isShadow ? "" : classes.noShadow}
              style={{
                justifyContent: "center",
                overflow: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
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

                <LazyComponent
                  componentName={item.type}
                  data={{ data: item.data, rightSidebar }}
                />
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

export default GridContentSection;
