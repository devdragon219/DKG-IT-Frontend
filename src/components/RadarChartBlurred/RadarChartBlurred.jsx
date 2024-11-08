import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { findMaxNumber, transformData } from "./utils";

const useStyles = makeStyles({
  "@global": {
    ".recharts-legend-item": {
      cursor: "pointer",
    },
    ".recharts-text": {
      fill: "#a1a2ad",
    },
  },
});

const RadarChartBlurred = ({ data, isNewMode, geoDashboard }) => {
  useStyles();

  const propsData = data?.originalData;
  const configs = data?.configs;
  const dataNew = transformData(propsData);

  const [visibility, setVisibility] = useState(
    Object.keys(dataNew[0]).reduce((acc, key) => {
      if (key !== "subject") {
        acc[key] = true;
      }
      return acc;
    }, {})
  );

  const handleLegendClick = ({ payload }) => {
    const { dataKey } = payload;
    setVisibility({
      ...visibility,
      [dataKey]: !visibility[dataKey],
    });
  };

  const radarComponents = Object.keys(visibility).map((key, index) => (
    <Radar
      key={key}
      name={key}
      dataKey={key}
      stroke={propsData.datasets[index].color}
      strokeWidth={"3px"}
      fill={propsData.datasets[index].color}
      fillOpacity={0.4}
      hide={!visibility[key]}
      dot={{
        fill: propsData.datasets[index].color,
        r: 4,
        stroke: "white",
        strokeWidth: "1px",
      }}
    />
  ));

  function customTick({ payload, x, y, textAnchor, stroke, radius }) {
    return (
      <g className="recharts-layer recharts-polar-angle-axis-tick">
        <text
          radius={radius}
          stroke={stroke}
          x={x}
          y={y}
          className="recharts-text recharts-polar-angle-axis-tick-value"
          text-anchor={textAnchor}
        >
          <tspan
            dy={
              textAnchor === "middle" && payload.coordinate < 0
                ? "1em"
                : textAnchor === "middle" && payload.coordinate > 0
                ? "-1em"
                : "0em"
            }
          >
            {payload.value}
          </tspan>
        </text>
      </g>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: geoDashboard ? "100%" : "100vh",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <ResponsiveContainer
            width="100%"
            height={isNewMode || configs ? "100%" : propsData.height}
          >
            <RadarChart
              cx="50%"
              cy={propsData?.cyPosition ? propsData?.cyPosition : "56%"}
              outerRadius={propsData?.radius ? propsData?.radius : "80%"}
              data={dataNew}
              style={{
                fontFamily: "sans-serif",
                backgroundColor: propsData.backgroundColor,
                fontSize: propsData?.radarFontSize
                  ? `${propsData?.radarFontSize}${
                      isNewMode || configs ? "vw" : ""
                    }`
                  : "16px",
              }}
            >
              <PolarGrid />

              <PolarRadiusAxis
                angle={90}
                domain={[0, findMaxNumber(propsData)]}
              />

              {radarComponents}
              <PolarAngleAxis dataKey="subject" tick={customTick} />
              <Legend
                onClick={handleLegendClick}
                verticalAlign="top"
                formatter={(value, entry) => {
                  return (
                    <span
                      style={{
                        color: "#a1a2ad",
                        fontFamily: "sans-serif",
                        filter: propsData.blured ? "blur(3px)" : "",
                        fontSize: propsData?.legendFontSize
                          ? `${propsData?.legendFontSize}${
                              isNewMode || configs ? "vw" : ""
                            }`
                          : "14px",
                      }}
                      dangerouslySetInnerHTML={{ __html: value }}
                    />
                  );
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default RadarChartBlurred;
