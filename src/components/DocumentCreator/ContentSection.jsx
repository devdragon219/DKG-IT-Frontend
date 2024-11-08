/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-build-classic-base64-upload";
// import { MediaEmbed } from "@ckeditor/ckeditor5-media-embed";

import EditIcon from "@mui/icons-material/Edit";

import "./style.css";

const useStyles = makeStyles({
  wrap: {},
  notEditMode: { display: "none !important" },
});

const ContentSection = ({
  introductionData,
  setIntroductionData,
  selectedIntroductionData = "",
  selectedItem,
  isEditMode,
}) => {
  const classes = useStyles();
  const [editMode, setEditMode] = useState(
    !selectedIntroductionData && isEditMode
  );

  return (
    <div>
      {editMode ? (
        <CKEditor
          config={{
            mediaEmbed: { previewsInData: true },
          }}
          editor={ClassicEditor}
          data={selectedIntroductionData}
          onBlur={(_event, editor) => {
            const data = editor.getData();

            setIntroductionData({
              ...introductionData,
              [selectedItem]: data,
            });
          }}
        />
      ) : (
        <div
          className="ck-content"
          dangerouslySetInnerHTML={{ __html: selectedIntroductionData }}
        ></div>
      )}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
          marginTop: "10px",
        }}
      >
        <Button
          onClick={() => {
            setEditMode(!editMode);
          }}
          variant={editMode ? "contained" : "outlined"}
          className={isEditMode ? "" : classes.notEditMode}
        >
          {editMode ? (
            ""
          ) : (
            <EditIcon
              style={{
                fontSize: "17px",
                marginRight: "5px",
              }}
            />
          )}

          {editMode ? "SAVE" : "EDIT"}
        </Button>
      </div>
    </div>
  );
};

export default ContentSection;
