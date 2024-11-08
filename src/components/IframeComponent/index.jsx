import React from "react";

export default function IframeComponent({ data }) {
  return (
    <iframe
      title="AdminCreatorIftame"
      style={{
        width: "100%",
        height: "100%",
        border: "none",
        borderRadius: "5px",
      }}
      src={data.data}
    />
  );
}
