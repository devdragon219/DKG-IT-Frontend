import React, { useState } from "react";
import { Button } from "@mui/material";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { makeStyles } from "@mui/styles";
import EditIcon from "@mui/icons-material/Edit";
import API from "../../../API";
import { getIMGAPIurl } from "../../../constants/routes";

const useStyles = makeStyles({
  wrap: {},
  notEditMode: { display: "none !important" },
});

const ContentSection = ({ data, setData, isEditMode }) => {
  const [editMode, setEditMode] = useState(isEditMode);
  const classes = useStyles();
  const sortedFontOptions = [
    "Logical",
    "Salesforce Sans",
    "Garamond",
    "Sans-Serif",
    "Serif",
    "Times New Roman",
    "Helvetica",
    "Roboto",
  ].sort();

  const handleImageUploadBefore = (files, _info, uploadHandler) => {
    const baseURL = getIMGAPIurl();
    const formData = new FormData();
    formData.append("file", files[0]);

    API.fetchImgItem({ data: formData }).then((e) => {
      const URL =
        window?.location?.port === "3000"
          ? baseURL + e?.url
          : window?.location?.origin + e?.url;

      const response = {
        result: [
          {
            url: URL,
            name: files[0].name,
            size: files[0].size,
          },
        ],
      };

      uploadHandler(response);
    });
  };

  return (
    <div>
      <div>
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
      {editMode ? (
        <div
          onMouseDown={(e) => e.stopPropagation()} // Prevent grid layout dragging
          onMouseMove={(e) => e.stopPropagation()} // Prevent grid layout dragging
          onMouseUp={(e) => e.stopPropagation()} // Prevent grid layout dragging
        >
          <SunEditor
            setContents={data}
            onImageUploadBefore={handleImageUploadBefore}
            onChange={(value) => setData(value)}
            setOptions={{
              buttonList: [
                ["undo", "redo"],
                ["font", "fontSize"],
                ["paragraphStyle", "blockquote"],
                [
                  "bold",
                  "underline",
                  "italic",
                  "strike",
                  "subscript",
                  "superscript",
                ],
                ["fontColor", "hiliteColor"],
                ["align", "list", "lineHeight"],
                ["outdent", "indent"],
                ["table", "horizontalRule", "link", "image", "video"],
                ["showBlocks"],
                ["preview", "print"],
                ["removeFormat", "fullScreen"],
              ],
              defaultTag: "div",
              minHeight: "300px",
              showPathLabel: false,
              font: sortedFontOptions,
            }}
          />
        </div>
      ) : (
        <>
          <div
            className="sun-editor-editable"
            dangerouslySetInnerHTML={{ __html: data }}
          ></div>
        </>
      )}
    </div>
  );
};

export default ContentSection;
