import React, { useEffect } from "react";
import { ColorPicker } from "material-ui-color";
import "../styles.css";

function ColorPickerProvider({ setMainColor, mainColor }) {
  const colorRef = React.useRef(null);

  useEffect(() => {
    const item = colorRef.current.children[0]; // corresponding DOM node
    const button = item.children[0];
    button?.classList?.remove("jss2");
    button?.classList?.remove("jss4");
    button?.classList?.remove("jss3");
    button?.classList?.add("color-button-style");
    item.class = "";
    item.className = "";
  }, [colorRef]);
  return (
    <div
      className="color-pick"
      style={{
        width: "203px",
        height: "34px",
      }}
      ref={colorRef}
    >
      <ColorPicker value={mainColor} onChange={setMainColor} />
    </div>
  );
}

export default ColorPickerProvider;
