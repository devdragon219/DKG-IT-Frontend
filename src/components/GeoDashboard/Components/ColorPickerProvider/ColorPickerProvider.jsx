import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { ColorPicker, createColor } from 'material-ui-color';


function ColorPickerProvider({ onUpdateColors}) {  
 
  const [mainColor, setMainColor] = useState(createColor("transparent"));

  useEffect(() => { 
    сhangeMainColor(mainColor);
    transformColors(mainColor, secondColor);
  }, [mainColor]);

  const [secondColor, setSecondColor] = useState(createColor("transparent"));

  useEffect(() => { 
    сhangeSecondColor(secondColor);
    transformColors(mainColor, secondColor);
   }, [secondColor]);

  const сhangeMainColor = (value) => {
    setMainColor(value);
  };

  const сhangeSecondColor = (value) => {
    setSecondColor(value);
  };

  const transformColors = () => {
    const selectedMainColor = mainColor.hex ? `#${mainColor.hex}` : '#fff'; 
    const selectedSecondColor = secondColor.hex ? `#${secondColor.hex}` : '#fff';
  
    const transformedColors = {
        "backgroundHeader": `linear-gradient(-30deg, ${selectedMainColor} 0%, ${selectedSecondColor} 40%, ${selectedMainColor} 50%)`,
        "backgroundFooter": `linear-gradient(90deg, ${selectedSecondColor} 0%, ${selectedMainColor} 100%)`,
        "textColor": "white",
        "barColor1": selectedSecondColor,
        "barColor2": selectedMainColor,
        "radarSettings": {
            "backgroundColor": `rgba(${parseInt(mainColor.rgb[0])}, ${parseInt(mainColor.rgb[1])}, ${parseInt(mainColor.rgb[2])}, 0.2)`,
            "borderColor": selectedMainColor,
            "pointBackgroundColor": selectedMainColor,
            "pointBorderColor": "#fff",
            "pointHoverBackgroundColor": "#fff",
            "pointHoverBorderColor": selectedMainColor
        }
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
