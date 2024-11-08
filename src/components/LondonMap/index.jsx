import React from "react";
import LondonMapExt from "./LondonMapExt"

export const LondonMap = ({ data, selectedTheme }) => {
  const width = data.originalData.width || "40%";
  const showMarkers = data.originalData.showMarkers;
  const backgroundColor = data.originalData.backgroundColor || "#fff";

  return (
    <div
      style={{
        width,
        margin: "auto",
        padding: "25px",
        backgroundColor: backgroundColor,
      }}
    >
      <LondonMapExt data={data} selectedTheme={selectedTheme} showMarkers={showMarkers} />
    </div>
  );
};

export default LondonMap;
