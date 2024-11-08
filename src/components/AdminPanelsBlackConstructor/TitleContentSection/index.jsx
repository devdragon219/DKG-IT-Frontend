/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useCallback, useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import AddDataSection from "./AddDataSection";
import AddTitleDataModal from "../Modals/AddTitleDataModal";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";

const TitleContentSection = ({ titleData, setTitleData, isEditMode }) => {
  const [isTitleContentSectionModalOpen, setIsTitleContentSectionModalOpen] =
    useState(false);

  const [cardsContent, setCardsContent] = useState([]);
  const [editData, setEditData] = useState(null);

  const openDialog = useCallback((type) => {
    if (type === "TitleContentSection") {
      setIsTitleContentSectionModalOpen(true);
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

      setIsTitleContentSectionModalOpen(true);
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
      setTitleData(newCardsContent);
    },
    [cardsContent]
  );

  useEffect(() => {
    if (titleData?.length > 0) {
      setCardsContent(titleData);
    }
  }, [titleData]);

  const addSection = (data) => {
    if (editData?.key) {
      const newCardsContent = JSON.parse(JSON.stringify(cardsContent));
      const editIndex = newCardsContent.findIndex(
        (el) => el?.id === editData?.key
      );

      newCardsContent[editIndex] = { ...data, id: editData?.key };
      setCardsContent(newCardsContent);
      setTitleData(newCardsContent);

      setEditData(null);

      return;
    }
    const item = {
      ...data,
      id: uuidv4(),
    };

    setCardsContent([...cardsContent, item]);
    setTitleData([...cardsContent, item]);
  };

  return (
    <div>
      {cardsContent.map((el) => {
        return (
          <div
            key={el.id}
            style={{
              fontSize: "1.5rem",
              fontWeight: 500,
              color: "rgb(207, 210, 214)",
            }}
          >
            <div>{el.title}</div>
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
      <AddTitleDataModal
        isTitleContentSectionModalOpen={isTitleContentSectionModalOpen}
        setIsTitleContentSectionModalOpen={setIsTitleContentSectionModalOpen}
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
        right: "1000px",
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
        right: "1205px",
        zIndex: 1000,
        background: "white",
      }}
    >
      <DeleteIcon />
    </IconButton>
  </Tooltip>
);

export default TitleContentSection;
