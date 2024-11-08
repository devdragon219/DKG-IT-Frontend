import { useEffect, useState } from "react";

import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

import { Checkbox, Modal } from "antd";
import API from "./../../../../API";
import { getIMGAPIurl } from "../../../../constants/routes.js";

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

const AddTextModal = ({
  isTextModalOpen,
  setIsTextModalOpen,
  addItem,
  editData,
  editItem,
  setEditData,
}) => {
  const [data, setData] = useState("");
  const [hasShadow, setHasShadow] = useState(true);

  useEffect(() => {
    if (editData?.key) {
      setData(editData.data);
      setHasShadow(editData?.itemConfig?.shadow);
    } else {
      setData("");
      setHasShadow(true);
    }
  }, [editData]);

  return (
    <>
      <Modal
        title="Add Text"
        open={isTextModalOpen}
        onOk={() => {
          if (editData?.key) {
            editItem(editData?.key, data, hasShadow);
            setIsTextModalOpen(false);
            setData("");
            setHasShadow(true);
            return;
          }
          addItem("TextComponent", data, hasShadow);
          setIsTextModalOpen(false);
          setData("");
          setHasShadow(true);
        }}
        width={1000}
        onCancel={() => {
          setIsTextModalOpen(false);
          setEditData(null);
        }}
        centered
      >
        <Checkbox
          checked={hasShadow}
          onChange={() => {
            setHasShadow(!hasShadow);
          }}
        >
          Has Shadow Box
        </Checkbox>
        <SunEditor
          setContents={data}
          onImageUploadBefore={handleImageUploadBefore}
          onChange={(value) => {
            setData(value);
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
      </Modal>
    </>
  );
};

export default AddTextModal;
