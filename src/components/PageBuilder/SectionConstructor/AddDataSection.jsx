import {
  PlusOutlined,
  InsertRowAboveOutlined,
  FileImageOutlined,
  FontSizeOutlined,
} from "@ant-design/icons";

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
      tooltip={<div>Add Iframe Section</div>}
      icon={<InsertRowAboveOutlined />}
      onClick={() => {
        openDialog("Section");
      }}
    />
    <FloatButton
      tooltip={<div>Add Image Section</div>}
      icon={<FileImageOutlined />}
      onClick={() => {
        openDialog("ImageSection");
      }}
    />
    <FloatButton
      tooltip={<div>Add Content Section</div>}
      icon={<FontSizeOutlined />}
      onClick={() => {
        openDialog("ContentSection");
      }}
    />
  </FloatButton.Group>
);

export default AddDataSection;
