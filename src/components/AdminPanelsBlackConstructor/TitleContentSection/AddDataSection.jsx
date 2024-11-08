import { PlusOutlined, InsertRowAboveOutlined } from "@ant-design/icons";

import React from "react";
import { FloatButton } from "antd";

const AddDataSection = ({ openDialog }) => (
  <FloatButton.Group
    size="small"
    trigger="click"
    type="primary"
    style={{
      left: 30,
      bottom: 720,
      fontSize: "30px",
      position: "absolute",
    }}
    icon={<PlusOutlined />}
  >
    <FloatButton
      tooltip={<div>Add Title</div>}
      icon={<InsertRowAboveOutlined />}
      onClick={() => {
        openDialog("TitleContentSection");
      }}
    />
  </FloatButton.Group>
);

export default AddDataSection;
