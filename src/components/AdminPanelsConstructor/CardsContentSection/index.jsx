/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useCallback, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Section from "./Section";
import { v4 as uuidv4 } from "uuid";
import AddDataSection from "./AddDataSection";
import AddSectionToolModal from "../Modals/AddSectionTool";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";

const CardsContentSection = ({
  sectionKey,
  contentData,
  setContentData,
  isEditMode,
  rightSidebar,
}) => {
  const [isAddSectionToolModalOpen, setIsAddSectionToolModalOpen] =
    useState(false);

  const [cardsContent, setCardsContent] = useState([]);
  const [editData, setEditData] = useState(null);

  const openDialog = useCallback((type) => {
    if (type === "Section") {
      setIsAddSectionToolModalOpen(true);
    }
  }, []);

  const openEditDialog = useCallback(
    (key) => {
      const data = cardsContent.find((el) => el?.id === key);

      setEditData({
        data: data.data,
        key,
        title: data.title,
      });

      setIsAddSectionToolModalOpen(true);
    },
    [cardsContent]
  );

  const deleteItem = useCallback(
    (key) => {
      const newCardsContent = JSON.parse(JSON.stringify(cardsContent));
      const editIndex = newCardsContent.findIndex(
        (el) => el?.id === editData?.key
      );

      newCardsContent.splice(editIndex, 1);

      setCardsContent(newCardsContent);
      setContentData({
        ...contentData,
        [sectionKey]: newCardsContent,
      });
    },
    [cardsContent]
  );

  useEffect(() => {
    if (contentData[sectionKey]) {
      setCardsContent(contentData[sectionKey]);
    }
  }, [contentData]);

  const addSection = (data) => {
    if (editData?.key) {
      const newCardsContent = JSON.parse(JSON.stringify(cardsContent));
      const editIndex = newCardsContent.findIndex(
        (el) => el?.id === editData?.key
      );

      newCardsContent[editIndex] = { ...data, id: editData?.key };
      setCardsContent(newCardsContent);
      setContentData({
        ...contentData,
        [sectionKey]: newCardsContent,
      });

      setEditData(null);

      return;
    }
    const item = {
      ...data,
      id: uuidv4(),
    };

    setCardsContent([...cardsContent, item]);
    setContentData({
      ...contentData,
      [sectionKey]: [...cardsContent, item],
    });
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const newCardsContent = Array.from(cardsContent);
    const [movedItem] = newCardsContent.splice(result.source.index, 1);
    newCardsContent.splice(result.destination.index, 0, movedItem);

    setCardsContent(newCardsContent);
    setContentData({
      ...contentData,
      [sectionKey]: newCardsContent,
    });
  };

  return (
    <div>
      {isEditMode ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable-sections">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {cardsContent.map((el, index) => (
                  <Draggable key={el.id} draggableId={el.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          position: "relative",
                          ...provided.draggableProps.style,
                        }}
                      >
                        <Section tools={el} rightSidebar={rightSidebar} />
                        <RemoveButton
                          onClick={() => {
                            deleteItem(el.id);
                          }}
                        />
                        <EditButton
                          onClick={() => {
                            openEditDialog(el.id);
                          }}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        cardsContent.map((el) => (
          <div key={el.id} style={{ position: "relative" }}>
            <Section tools={el} rightSidebar={rightSidebar} />
          </div>
        ))
      )}

      <AddSectionToolModal
        isAddSectionToolModalOpen={isAddSectionToolModalOpen}
        setIsAddSectionToolModalOpen={setIsAddSectionToolModalOpen}
        dataSource={editData ? editData : []}
        setDataSource={addSection}
        setEditData={setEditData}
      />
      {isEditMode ? <AddDataSection openDialog={openDialog} /> : <></>}
    </div>
  );
};

const EditButton = ({ onClick }) => (
  <Tooltip title="Edit" onClick={onClick}>
    <IconButton
      sx={{
        position: "absolute",
        top: "10px",
        right: "50px",
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
        top: "10px",
        right: "5px",
        zIndex: 1000,
        background: "white",
      }}
    >
      <DeleteIcon />
    </IconButton>
  </Tooltip>
);

export default CardsContentSection;
