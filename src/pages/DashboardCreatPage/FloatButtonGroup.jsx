import React from "react";
import { BgColorsOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

const FloatButtonGroup = ({ showDrawer }) => {
  return (
    <>
      <FloatButton
        icon={<BgColorsOutlined />}
        tooltip={<div>Open Customize</div>}
        onClick={showDrawer}
        className="create-float-button"
        style={{ right: 21, bottom: 21 }}
      />
    </>
  );
};
export default FloatButtonGroup;
