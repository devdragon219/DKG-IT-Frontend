import React from "react";
import { Chrono } from "react-chrono";

import "./style.css";

const TimeLine = (props) => {
  const data = props?.data.originalData.data;
  const isVertical = props?.data.originalData.isVertical;
  const colors = props?.data.originalData.colors;

  return isVertical ? (
    <div style={{ width: "100%", height: "100vh", fontFamily: "Roboto" }}>
      <Chrono
        items={data}
        mode="VERTICAL_ALTERNATING"
        slideShow
        verticalBreakPoint="300px"
        theme={colors}
      />
    </div>
  ) : (
    <div style={{ width: "800px", height: "500px", fontFamily: "Roboto" }}>
      <Chrono
        items={data}
        mode="HORIZONTAL"
        cardPositionHorizontal="TOP"
        slideShow
        theme={colors}
      />
    </div>
  );
};

export default TimeLine;
