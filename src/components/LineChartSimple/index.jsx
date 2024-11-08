import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  Line,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";
import "./style.css";

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

export default function LineChartSimple(props) {
  const { data = [], labels = {}, colors = {}, title = "", yMin = 0, yMax = "auto" } = props?.data?.originalData || {};
  const selectedTheme = props?.selectedTheme || DEFAULT_SELECTED_THEME;

  const lines = Object.keys(labels).map((label, index) => (
    <Line
      key={label}
      type="monotone"
      dataKey={label}
      stroke={
        colors?.[label] ||
        (selectedTheme ? selectedTheme[`barColor${index + 1}`] : undefined)
      }
      activeDot={{ r: 8 }}
    />
  ));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 50,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {title && (
          <text
            x="50%"
            textAnchor="middle"
            fontSize="1em"
            fill="#0c5393"
            y={30}
          >
            {title}
          </text>
        )}
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[yMin, yMax || "auto"]} />
        <Tooltip />

        <Legend
          height={60}
          verticalAlign="top"
          formatter={(value, entry) => {
            const { color } = entry;

            return (
              <span style={{ color, fontFamily: "sans-serif" }}>
                {labels?.[value]}
              </span>
            );
          }}
        />
        {lines}
      </LineChart>
    </ResponsiveContainer>
  );
}
