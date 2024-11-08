import { useEffect, useState } from "react";
import { Modal } from "antd";

import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { sortedFontOptions } from "../utils";

const TextNodeEditComponentModal = ({
  isTextNodeEditOpen,
  editedID,
  setEditedID,
  nodes,
  handlNodeChange,
}) => {
  const [data, setData] = useState("");

  const onFinish = () => {
    handlNodeChange({
      newData: { text: data },
      nodeId: editedID,
    });

    setData("");
    setEditedID(null);
  };

  useEffect(() => {
    const node = nodes.find((el) => el.id === editedID);
    if (node?.id) {
      const { data } = node;

      setData(data.text);
    } else {
      setData("");
    }
  }, [nodes, editedID]);

  return (
    <>
      <Modal
        title="Text Node Edit"
        open={isTextNodeEditOpen}
        onOk={onFinish}
        onCancel={() => {
          setData("");
          setEditedID(null);
        }}
        centered
        width={"80%"}
        key={"CardModalKey"}
      >
        <SunEditor
          setContents={data}
          onChange={setData}
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

              ["table", "horizontalRule", "link"],
              ["showBlocks"],
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

export default TextNodeEditComponentModal;
