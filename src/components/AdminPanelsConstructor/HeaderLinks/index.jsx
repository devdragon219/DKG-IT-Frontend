import React from "react";
import { Radio } from "antd";

const HeaderLinks = ({ headerLinks }) => {
  return (
    <Radio.Group size="small" value={window.location.href} buttonStyle="solid">
      {headerLinks.map((el) => {
        return (
          <Radio.Button
            onClick={() => {
              window.open(el?.link, "_blank");
            }}
            value={el?.link}
          >
            {el?.name}
          </Radio.Button>
        );
      })}
    </Radio.Group>
  );
};

export default HeaderLinks;
