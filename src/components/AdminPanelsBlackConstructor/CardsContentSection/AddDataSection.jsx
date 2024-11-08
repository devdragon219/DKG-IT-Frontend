import { PlusOutlined, InsertRowAboveOutlined } from "@ant-design/icons";

import React from "react";
import { FloatButton } from "antd";

const AddDataSection = ({ openDialog }) => (
  <FloatButton.Group
    trigger="click"
    type="primary"
    style={{ right: 24, fontSize: "30px" }}
    icon={<PlusOutlined />}
  >
    <FloatButton
      tooltip={<div>Add Section</div>}
      icon={<InsertRowAboveOutlined />}
      onClick={() => {
        openDialog("Section");
      }}
    />
  </FloatButton.Group>
);

export default AddDataSection;
