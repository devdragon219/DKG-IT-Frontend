import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { ColorPicker, createColor } from "material-ui-color";

function ColorPickerProvider({ onUpdateColors}) {  
  const [mainColor, setMainColor] = useState(createColor("#0c5393"));
  const [secondColor, setSecondColor] = useState(createColor("#398bbc"));

  const сhangeMainColor = (newValue) => {
    setMainColor(newValue);
    transformColors(newValue, secondColor);
  };

  const сhangeSecondColor  = (newValue) => {
    setSecondColor(newValue);
    transformColors(mainColor, newValue);
  };

  const transformColors = (mainColor, secondColor) => {
    const selectedMainColor = mainColor.hex ? `#${mainColor.hex}` : '#0c5393'; 
    const selectedSecondColor = secondColor.hex ? `#${secondColor.hex}` : '#398bbc';
  
    const transformedColors = {
        "backgroundHeader": `linear-gradient(-30deg, ${selectedMainColor} 0%, ${selectedSecondColor} 40%, ${selectedMainColor} 50%)`,
        "backgroundFooter": `linear-gradient(90deg, ${selectedSecondColor} 0%, ${selectedMainColor} 100%)`,
        "textColor": "white",
        "barColor1": selectedSecondColor,
        "barColor2": selectedMainColor
    };

    onUpdateColors(transformedColors);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        fontFamily: "system-ui",
        marginBottom: "10px"
      }}
    >
      <ColorPicker value={mainColor} onChange={сhangeMainColor} />
      <ColorPicker value={secondColor} onChange={сhangeSecondColor} />
      
    </Box>
  );
}

export default ColorPickerProvider;
