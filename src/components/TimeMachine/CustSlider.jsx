import React from "react";
import Slider from "@mui/material/Slider";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  slider: {
    "& .MuiSlider-mark": {},
  },
});

function CustomSlider({ years, setYear, startPoint = 0, config }) {
  const classes = useStyles();
  return (
    <Slider
      className={classes.slider}
      aria-label="Restricted values"
      step={null}
      size="small"
      defaultValue={years[startPoint]}
      min={years[0]}
      max={years[years.length - 1]}
      valueLabelDisplay="auto"
      style={{
        color: config?.mainColor || "#1976d2", //
        padding: "3px 0",
      }}
      sx={{
        "& .MuiSlider-mark": {
          color: config?.markColor,
          height: `${config?.markRadius}px`,
          width: `${config?.markRadius}px`,
          borderRadius: "50%",
        },
        "& .MuiSlider-markActive": {
          backgroundColor: config?.markActiveColor,
          opacity: 1,
        },
        "& .MuiSlider-thumb": {
          height: `${config?.thumbRadius}px`,
          width: `${config?.thumbRadius}px`,
        },
        "& .MuiSlider-markLabel": {
          fontSize: config?.labelFontSize,
          top: config?.position === "top" ? "30px" : "-40px",
        },
      }}
      marks={years.map((year, index) => {
        const label = index === 0 || index === years.length - 1 ? year : "";
        return {
          label: `${label}`,
          value: year,
        };
      })}
      onChange={(_e, value) => {
        setYear(value);
      }}
    />
  );
}

export default CustomSlider;
