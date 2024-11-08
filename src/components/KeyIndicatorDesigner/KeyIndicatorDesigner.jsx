import { Box, Grid } from "@mui/material";
import FormInput from "../../components/FormInput";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setMockData } from "../../store/item";

export const keyIndicatorDesignerData = {
  originalData: {
    title: "Longevity Governance Index of the United Kingdom: 67.47 (15th)",
    backgroundColor: "transparent",
    titleColor: "#fff",
    indicators: [
      {
        header: "DEMOGRAPHY",
        value: "24th place",
      },
      {
        header: "ECOLOGY",
        value: "19th place",
      },
      {
        header: "ECONOMY",
        value: "19th place",
      },
      {
        header: "GOVCARE",
        value: "13th place",
      },
      {
        header: "HEALTH",
        value: "68th place",
      },
      {
        header: "SOCIETY",
        value: "13th place",
      },
    ],
  },
};

export function KeyIndicatorDesigner(props) {
  const dataProps = props?.data?.originalData || {};
  const borderStyle = props?.data?.originalData?.borderStyle;
  const twoRows = props?.data?.originalData?.twoRows;
  const dispatch = useDispatch();

  const title = dataProps.title || "";
  const indicators = dataProps.indicators || [];

  const [bgColor, setBgColor] = useState(dataProps?.backgroundColor);
  const [titleColor, setTitleColor] = useState(dataProps?.titleColor);

  useEffect(() => {
    setBgColor(dataProps?.backgroundColor || "#293046");
    setTitleColor(dataProps?.titleColor || "#D0D2D6");
  }, [dataProps?.backgroundColor, dataProps?.titleColor]);

  const handleBlur = () => {
    const data = {
      ...props?.data,
      originalData: { ...dataProps, backgroundColor: bgColor, titleColor },
    };

    dispatch(setMockData(JSON.stringify(data)));
  };

  return (
    <Grid
      sx={{
        backgroundColor: dataProps?.backgroundColor,
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        padding: { md: "0 10px", lg: "0 18px" },
        color: "#D0D2D6",
        fontFamily: "Montserrat, Helvetica, Arial, serif",
      }}
    >
      {props.isEditMode && (
        <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
          <FormInput
            type="color"
            style={{ width: "50%" }}
            label="Background color"
            onChange={(e) => setBgColor(e.target.value)}
            onBlur={handleBlur}
            value={bgColor}
          />
          <FormInput
            type="color"
            style={{ width: "50%" }}
            label="Title color"
            onChange={(e) => setTitleColor(e.target.value)}
            onBlur={handleBlur}
            value={titleColor}
          />
        </div>
      )}
      {title && (
        <div
          style={{
            color: props?.isDarkTheme ? "rgb(208, 210, 214)" : "#0c5393",
            textAlign: "center",
            fontSize: "1.2rem",
          }}
        >
          {title}
        </div>
      )}

      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {indicators.map(({ header, value, textColor, borderStyle }, index) => {
          const textStyle = whichGradient(index + 1);
          const borderColor = whichBorder(index + 1);

          return (
            <div
              style={{
                border: `1px solid ${borderStyle ? borderStyle : borderColor}`,
                borderRadius: "10px",
                padding: "20px 5px",
                width: "calc(80% / 3)",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "5px",
                flex: twoRows ? "1 1 calc(50% - 7.5px)" : 1,
              }}
            >
              <div
                style={{
                  fontSize: dataProps.headerFontSize
                    ? dataProps.headerFontSize
                    : "18px",

                  textAlign: "center",
                  ...(dataProps?.textColor
                    ? { color: dataProps?.textColor }
                    : textStyle),
                }}
              >
                {header}
              </div>
              <div
                style={{
                  fontSize: dataProps.valueFontSize
                    ? dataProps.valueFontSize
                    : "18px",

                  ...(dataProps?.textColor
                    ? { color: dataProps?.textColor }
                    : textStyle),
                  fontWeight: "normal",
                }}
              >
                {value}
              </div>
            </div>
          );
        })}
      </div>
    </Grid>
  );
}

const whichBorder = (index) => {
  if (Math.ceil(index / 3) % 2) {
    return "#3F40B9";
  }

  return "#e18614";
};

const whichGradient = (index) => {
  if (Math.ceil(index / 3) % 2) {
    return {
      background: "-webkit-linear-gradient(#5447C6, #DB64DC)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      "background-image": "linear-gradient(60deg, #5447C6, #DB64DC)",
      "font-weight": "bold",
    };
  }

  return {
    background: "-webkit-linear-gradient(#E45180, #F38661)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    "background-image": "linear-gradient(60deg, #E45180, #F38661)",
    "font-weight": "bold",
  };
};

export default KeyIndicatorDesigner;
