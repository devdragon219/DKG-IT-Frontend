import {
  IdcardOutlined,
  PlusOutlined,
  FileTextOutlined,
  FileImageOutlined,
  InsertRowAboveOutlined,
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
      tooltip={<div>Add Section</div>}
      icon={<InsertRowAboveOutlined />}
      onClick={() => {
        openDialog("Section");
      }}
    />
    <FloatButton
      tooltip={<div>Text</div>}
      icon={<FileTextOutlined />}
      onClick={() => {
        openDialog("TextComponent");
      }}
    />
    <FloatButton
      tooltip={<div>iFrame</div>}
      icon={<FileImageOutlined />}
      onClick={() => {
        openDialog("iFrame");
      }}
    />
    <FloatButton
      tooltip={<div>Card Component</div>}
      icon={<IdcardOutlined />}
      onClick={() => {
        openDialog("ToolCardComponent");
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
