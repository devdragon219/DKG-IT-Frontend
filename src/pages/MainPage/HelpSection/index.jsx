import {
  CommentOutlined,
  InfoCircleOutlined,
  HighlightOutlined,
  UserOutlined,
} from "@ant-design/icons";

import React from "react";
import { FloatButton } from "antd";

const HelpSection = () => (
  <FloatButton.Group
    trigger="click"
    type="primary"
    style={{ right: 24, fontSize: "30px" }}
    icon={<InfoCircleOutlined />}
  >
    <FloatButton
      tooltip={<div>Suggest Feature</div>}
      icon={<HighlightOutlined />}
      onClick={() => {
        window.open(
          "https://docs.google.com/forms/d/e/1FAIpQLSePXmdgLk74vbkgRMECoxvKH0L0o-RNcUbqULHxiXnU4pRnSg/viewform",
          "_blank"
        );
      }}
    />
    <FloatButton
      tooltip={<div>Current State Feedback</div>}
      icon={<CommentOutlined />}
      onClick={() => {
        window.open(
          "https://docs.google.com/forms/d/e/1FAIpQLSfk2fifRT9H9VLh7TrTXNZ3HEX7vVNfmmK68JL_A51w15nU6g/viewform",
          "_blank"
        );
      }}
    />
    <FloatButton
      tooltip={<div>User Guide</div>}
      icon={<UserOutlined />}
      onClick={() => {
        window.open(
          "https://platform.dkv.global/admin-panel/user-guide/",
          "_blank"
        );
      }}
    />
  </FloatButton.Group>
);

export default HelpSection;
