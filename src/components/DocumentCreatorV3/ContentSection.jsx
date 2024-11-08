/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, TextField } from "@mui/material";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

import EditIcon from "@mui/icons-material/Edit";

import "./style.css";
import API from "./../../API";
import { getIMGAPIurl } from "../../constants/routes";
import { useMemo } from "react";
import { findLabelByNodeId } from "./utils";

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
  enteredPass,
  setEnteredPass,
  passData,
  selectedItemData,
  items,
}) => {
  const classes = useStyles();
  const [editMode, setEditMode] = useState(
    !selectedIntroductionData && isEditMode
  );
  const [passwordError, setPasswordError] = useState(false);
  const [password, setPassword] = useState(null);

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

  const isPassNeeded = useMemo(() => {
    const label = findLabelByNodeId(items, selectedItem);

    if (passData?.value?.length) {
      if (passData?.value?.includes(label)) {
        if (enteredPass === false) {
          return true;
        }
        return false;
      }
    }

    return false;
  }, [selectedItemData, enteredPass]);

  return (
    <div>
      {editMode ? (
        <SunEditor
          setContents={selectedIntroductionData}
          onImageUploadBefore={handleImageUploadBefore}
          onChange={(value) => {
            setIntroductionData({
              ...introductionData,
              [selectedItem]: value,
            });
          }}
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
              // ["math"], //You must add the 'katex' library at options to use the 'math' plugin.
              // ['imageGallery'], // You must add the "imageGalleryUrl".
              ["showBlocks"],
              ["preview", "print"],
              ["removeFormat", "fullScreen"],

              // ["save", "template"],
              // '/', Line break
            ], // Or Array of button list, eg. [['font', 'align'], ['image']]
            defaultTag: "div",
            minHeight: "300px",
            showPathLabel: false,
            font: sortedFontOptions,
          }}
        />
      ) : (
        <>
          <div
            className="sun-editor-editable"
            dangerouslySetInnerHTML={{ __html: selectedIntroductionData }}
            style={{
              filter: isPassNeeded ? "blur(5px)" : "",
            }}
          ></div>
          {isPassNeeded ? (
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "50%",
                width: "250px",
                height: "177px",
                borderRadius: "5px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                transform: "translate(50%, -50%)",
                backgroundColor: "white",
              }}
            >
              <TextField
                error={passwordError}
                helperText={passwordError ? "Incorrect password." : ""}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                style={{ width: "100%" }}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div>
                <Button
                  onClick={() => {
                    if (password === passData?.password) {
                      setEnteredPass(true);
                      setPasswordError(false);
                    } else {
                      setPasswordError(true);
                    }
                  }}
                  variant={"contained"}
                >
                  OK
                </Button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
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
