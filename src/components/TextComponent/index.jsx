import React from "react";

import "suneditor/dist/css/suneditor.min.css";

export default function TextComponent({ data }) {
  return (
    <div
      className="sun-editor-editable"
      dangerouslySetInnerHTML={{ __html: data.data }}
    ></div>
  );
}
