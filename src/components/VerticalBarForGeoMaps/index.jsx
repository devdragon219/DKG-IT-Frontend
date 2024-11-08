import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { makeStyles } from "@mui/styles";


const DEFAULT_SELECTED_THEME = {
  "name": "custom",
  "backgroundHeader": "linear-gradient(-30deg, #398bbc 0%, #0c5393 40%, #398bbc 50%)",
  "backgroundFooter": "linear-gradient(90deg, #0c5393 0%, #398bbc 100%)",
  "textColor": "black",
  "barColor1": "#0c5393",
  "barColor2": "#398bbc",
  "radarSettings": {
      "backgroundColor": "rgba(54, 162, 235, 0.2)",
      "borderColor": "#398bbc",
      "pointBackgroundColor": "#398bbc",
      "pointBorderColor": "#fff",
      "pointHoverBackgroundColor": "#fff",
      "pointHoverBorderColor": "#398bbc"
  }
}

const useStyles = makeStyles({
  tooltip: {
    backgroundColor: "white",
    borderRadius: "2px",
    fontFamily: "sans-serif",
  },
  tooltipLabel: {
    margin: 0,
  },
});

const VerticalBarForGeoMaps = (props) => {
  const { data, labels, colors, textColorAxis, fontSizeYAxis, fontWeightYAxis, fontWeightXAxis, fontSizeXAxis, legendWidth, title, titleFontSize } =
    props?.data?.originalData;
  const classes = useStyles();
  const legendDisplay = props?.data?.originalData?.legendDisplay || true;
  const height = props.data?.originalData?.height || undefined;
  const [isPublicShow, setIsPublicShow] = useState(false);
  const [isPrivateShow, setIsPrivateShow] = useState(false);
  const selectedTheme = props?.selectedTheme ? props?.selectedTheme : DEFAULT_SELECTED_THEME;
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={classes.tooltip}>
          <p>{label}</p>
          <p
            className={classes.tooltipLabel}
            style={{
              color: payload?.[0]?.color,
            }}
          >{`${labels[payload?.[0]?.name]} : ${payload[0]?.value}`}</p>
          {payload?.[1] && <p
            className={classes.tooltipLabel}
            style={{
              color: payload?.[1]?.color,
            }}
          >{`${labels[payload?.[1]?.name]}  : ${payload[1]?.value}`}</p>}
        </div>
      );
    }

    return null;
  };

  return props?.geoDashboard ? (
    <>
      <ResponsiveContainer>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 50, right: 30, left: 5, bottom: 5 }}
        >
        {title && (
          <text
            x="50%"
            textAnchor="middle"
            fontSize={titleFontSize}
            fill="#0c5393"
            y={30}
          >
            {title}
          </text>
        )}
          {legendDisplay && <Legend
            verticalAlign="top"
            formatter={(value, entry) => {
              const { color } = entry;

              return (
                <span style={{ color, fontFamily: "sans-serif" }}>
                  {labels?.[value]}
                </span>
              );
            }}
            // height={70}
            onClick={(data, index) => {
              if (index === 0) {
                setIsPrivateShow(!data?.inactive);
              }

              if (index === 1) {
                setIsPublicShow(!data?.inactive);
              }
            }}
          />}
          <XAxis
            type="number"
            tick={{ 
              fontFamily: "sans-serif", 
              fontWeight: fontWeightXAxis ? fontWeightXAxis : "500",
              fontSize: fontSizeXAxis ? fontSizeXAxis : "15px",
              fill: textColorAxis || (props?.isDarkTheme ? "#d0d2d6" : "rgb(102, 102, 102)")
            }}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={legendWidth || 70}
            tick={{
              fontFamily: "sans-serif",
              fontWeight: fontWeightYAxis ? fontWeightYAxis : "500",
              fontSize: fontSizeYAxis ? fontSizeYAxis : "15px",
              fill: textColorAxis || (props?.isDarkTheme ? "#d0d2d6" : "rgb(102, 102, 102)")
            }}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="value1" fill={colors?.value1 || selectedTheme?.barColor1} hide={isPrivateShow} />
          {labels?.value2 && <Bar dataKey="value2" fill={colors?.value2 || selectedTheme?.barColor2} hide={isPublicShow} />}
        </BarChart>
      </ResponsiveContainer>
    </>
  ) : (
    <div
      style={{
        minHeight: `${height}px`,
        height: height || "100%",
        margin: "0px 25px",
      }}
    >
      <ResponsiveContainer>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
        >
          {legendDisplay && <Legend
            verticalAlign="top"
            formatter={(value, entry) => {
              const { color } = entry;

              return (
                <span style={{ color, fontFamily: "sans-serif" }}>
                  {labels?.[value]}
                </span>
              );
            }}
            height={36}
            onClick={(data, index) => {
              if (index === 0) {
                setIsPrivateShow(!data?.inactive);
              }

              if (index === 1) {
                setIsPublicShow(!data?.inactive);
              }
            }}
          />}
          <XAxis
            type="number"
            tick={{ 
              fontFamily: "sans-serif", 
              fontWeight: fontWeightXAxis ? fontWeightXAxis : "500",
              fontSize: fontSizeXAxis ? fontSizeXAxis : "15px",
              fill: textColorAxis || (props?.isDarkTheme ? "#d0d2d6" : "rgb(102, 102, 102)")
            }}          
          />
          <YAxis
            type="category"
            dataKey="name"
            width={legendWidth || 70}
            tick={{
              fontFamily: "sans-serif",
              fontWeight: fontWeightYAxis ? fontWeightYAxis : "500",
              fontSize: fontSizeYAxis ? fontSizeYAxis : "15px",
              fill: textColorAxis || (props?.isDarkTheme ? "#d0d2d6" : "rgb(102, 102, 102)")
            }}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="value1"
            fill={colors?.value1 || (selectedTheme ? selectedTheme?.barColor1 : undefined)}
            hide={isPrivateShow}
          />
          {labels?.value2 && <Bar
            dataKey="value2"
            fill={colors?.value2 || (selectedTheme ? selectedTheme?.barColor2 : undefined)}
            hide={isPublicShow}
          />}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VerticalBarForGeoMaps;
