/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from "react";

import AddPageToolModal from "../Modals/AddPageTool";
import AddImageModal from "../Modals/AddImageModal";
import AddDataSection from "./AddDataSection";
import ViewPageWrapper from "./ViewPageWrapper";
import ImageDisplayComponent from "./ImageDisplayComponent";
import ContentSection from "./ContentSection";
import RGL, { WidthProvider } from "react-grid-layout";
import { IconButton, Tooltip } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ReactGridLayout = WidthProvider(RGL);

const SectionConstructor = ({ isEditMode, dataSource, setDataSource }) => {
  const [layout, setLayout] = useState([]);
  const [editData, setEditData] = useState(null);
  const [isAddImageToolModalOpen, setIsAddImageToolModalOpen] = useState(false);
  const [isAddSectionToolModalOpen, setIsAddSectionToolModalOpen] =
    useState(false);

  useEffect(() => {
    if (dataSource.length > 0) {
      setLayout(dataSource);
    }
  }, [dataSource]);

  const setNewLayout = (newLayout) => {
    const newLayouts = newLayout.map((el, index) => {
      if (layout?.[index]) {
        const { data, type } = layout[index];
        return { ...el, data, type };
      }

      return { ...el };
    });

    setLayout(newLayouts);
    setDataSource(newLayouts);
  };

  const addItem = useCallback(
    (type, data) => {
      let maxY = -1;

      const newItem = {
        x: 0,
        y: maxY,
        w: 6,
        h: 6,
        i: uuidv4(),
        data: data,
        type: type,
      };

      setLayout((prevLayout) => [...prevLayout, newItem]);
      setDataSource((prevDataSource) => [...prevDataSource, newItem]);
    },
    [layout]
  );

  const editItem = useCallback(
    (key, data) => {
      const newLayout = JSON.parse(JSON.stringify(layout));
      const editIndex = newLayout.findIndex((el) => el?.i === key);
      newLayout[editIndex].data = data;

      setLayout(newLayout);
      setDataSource(newLayout);
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
      setDataSource(newLayout);
    },
    [layout]
  );

  const openDialog = useCallback(
    (type) => {
      if (type === "Section") {
        setIsAddSectionToolModalOpen(true);
      }
      if (type === "ImageSection") {
        setIsAddImageToolModalOpen(true);
      }
      if (type === "ContentSection") {
        addItem("ContentSection", "");
      }
    },
    [addItem]
  );

  const openEditDialog = useCallback(
    (type, key) => {
      const data = layout.find((el) => el?.i === key)?.data;
      setEditData({
        data,
        key,
      });

      if (type === "ImageSection") {
        setIsAddImageToolModalOpen(true);
      } else if (type === "iframeComponent") {
        setIsAddSectionToolModalOpen(true);
      }
    },
    [layout]
  );

  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        height: "100vh",
      }}
    >
      <AddPageToolModal
        isAddSectionToolModalOpen={isAddSectionToolModalOpen}
        setIsAddSectionToolModalOpen={setIsAddSectionToolModalOpen}
        addItem={addItem}
        editData={editData}
        editItem={editItem}
        setEditData={setEditData}
      />
      <AddImageModal
        isAddImageToolModalOpen={isAddImageToolModalOpen}
        setIsAddImageToolModalOpen={setIsAddImageToolModalOpen}
        addItem={addItem}
        editData={editData}
        editItem={editItem}
        setEditData={setEditData}
      />
      <ReactGridLayout
        layout={layout}
        rowHeight={50}
        isDraggable={isEditMode}
        isResizable={isEditMode}
        onLayoutChange={setNewLayout}
        compactType={null}
      >
        {layout.map((item) => {
          const key = item.i;
          return (
            <div
              style={{
                background: "none",
                boxShadow: "none",
                border: "none",
                padding: 0,
                margin: "0 8px",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                overflow: "hidden",
              }}
              key={`${key}`}
              data-grid={{ ...item }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                {item.type === "iframeComponent" ? (
                  <ViewPageWrapper slug={item?.data?.slug} />
                ) : item.type === "ImageSection" ? (
                  <ImageDisplayComponent image={item?.data?.image} />
                ) : item.type === "ContentSection" ? (
                  <ContentSection
                    data={item?.data}
                    setData={(newData) => editItem(key, newData)}
                    isEditMode={isEditMode}
                  />
                ) : null}
              </div>
              {isEditMode ? (
                <>
                  <RemoveButton
                    onClick={() => {
                      deleteItem(item.i);
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
          fontSize: "20px",
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
          fontSize: "20px",
        }}
      />
    </IconButton>
  </Tooltip>
);

export default SectionConstructor;
