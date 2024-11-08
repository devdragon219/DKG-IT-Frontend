import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { getNodeByID } from "../utils";

import "suneditor/dist/css/suneditor.min.css";

const DescriptionModal = ({ open, setDescriptionID, nodes, descriptionID }) => {
  const [data, setData] = useState("");
  const handleOk = () => {
    setDescriptionID(null);
  };
  const handleCancel = () => {
    setDescriptionID(null);
  };

  useEffect(() => {
    const node = getNodeByID(nodes, descriptionID);

    setData(node?.data?.nodeDescription);
  }, [descriptionID, nodes]);

  return (
    <Modal
      open={open}
      title="Details"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[]}
      style={{
        transform: "translate(0px, -50%)",
        top: "50%",
        right: "30px",
        width: "520px",
        position: "absolute",
        maxHeight: "800px",
        margin: 0,
      }}
    >
      <div
        className="sun-editor-editable"
        style={{
          height: "100%",
        }}
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
    </Modal>
  );
};
export default DescriptionModal;
