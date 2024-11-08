import {
  IdcardOutlined,
  PlusOutlined,
  FileTextOutlined,
  FileImageOutlined,
} from "@ant-design/icons";

import React from "react";
import { FloatButton } from "antd";

const AddDataSection = ({ openDialog }) => (
  <FloatButton.Group
    trigger="click"
    type="primary"
    style={{
      right: 24,
      top: "10px",
      position: "absolute",
    }}
    icon={<PlusOutlined />}
  >
    <FloatButton
      tooltip={<div>Card Component</div>}
      icon={<IdcardOutlined />}
      onClick={() => {
        openDialog("HeaderButtonComponent");
      }}
    />
    {/* <FloatButton
      tooltip={<div>Image</div>}
      icon={<FileJpgOutlined />}
      onClick={() => {
        openDialog("image");
      }}
    /> */}
  </FloatButton.Group>
);

export default AddDataSection;
