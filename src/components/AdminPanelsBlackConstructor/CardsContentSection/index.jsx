/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useCallback, useEffect, useState } from "react";

import Section from "./Section";
import { v4 as uuidv4 } from "uuid";
import AddDataSection from "./AddDataSection";
import AddSectionToolModal from "../Modals/AddSectionTool";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";

const CardsContentSection = ({ contentData, setContentData, isEditMode }) => {
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
      setContentData(newCardsContent);
    },
    [cardsContent]
  );

  useEffect(() => {
    if (contentData.length > 0) {
      setCardsContent(contentData);
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
      setContentData(newCardsContent);

      setEditData(null);

      return;
    }
    const item = {
      ...data,
      id: uuidv4(),
    };

    setCardsContent([...cardsContent, item]);
    setContentData([...cardsContent, item]);
  };

  return (
    <div>
      {cardsContent.map((el) => {
        return (
          <div
            key={el.id}
            style={{
              position: "relative",
            }}
          >
            <Section tools={el} />
            {isEditMode ? (
              <>
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
              </>
            ) : (
              <></>
            )}
          </div>
        );
      })}

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
