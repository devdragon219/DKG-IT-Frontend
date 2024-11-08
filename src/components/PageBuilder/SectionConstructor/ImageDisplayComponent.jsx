import React from "react";

export default function ImageDisplayComponent({ image }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <img
        src={image?.[0]?.url}
        alt={image?.[0]?.name}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}
