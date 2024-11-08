import React from "react";
import {
  AppstoreOutlined,
  BgColorsOutlined,
  CommentOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";
import { FloatButton } from "antd";

const FloatButtonGroup = ({
  showDrawer,
  ref4,
  isMultiple,
  setCustomizeSettingsKey,
  customizeSettings,
}) => {
  const keys = Object.keys(customizeSettings);

  keys.sort((a, b) => Number(a[a.length - 1]) - Number(b[b.length - 1]));
  return (
    <>
      {isMultiple ? (
        <FloatButton.Group
          trigger="hover"
          type="primary"
          className="create-float-button"
          style={{ right: 41 }}
          icon={<BgColorsOutlined />}
          ref={ref4}
        >
          {keys.map((el, index) => {
            if (el === "main") {
              return (
                <FloatButton
                  icon={<AppstoreOutlined />}
                  onClick={() => {
                    setCustomizeSettingsKey(el);
                    showDrawer();
                  }}
                  tooltip={<div>Open Main Style</div>}
                />
              );
            }
            return (
              <FloatButton
                onClick={() => {
                  setCustomizeSettingsKey(el);
                  showDrawer();
                }}
                tooltip={<div>Open Item {index}</div>}
              />
            );
          })}
        </FloatButton.Group>
      ) : (
        <FloatButton
          icon={<BgColorsOutlined />}
          tooltip={<div>Open Customize</div>}
          onClick={showDrawer}
          className="create-float-button"
          ref={ref4}
          style={{ right: 41 }}
        />
      )}
    </>
  );
};
export default FloatButtonGroup;
