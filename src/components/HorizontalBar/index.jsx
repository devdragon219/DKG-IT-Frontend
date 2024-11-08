import React from "react";
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

const HorizontalBar = (props) => {
  const { data, labels, colors, height, title, rotateLabels } = props?.data?.originalData;
  const classes = useStyles();
  const selectedTheme = props?.selectedTheme;

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
          >{`${labels[payload?.[0]?.name] || payload?.[0]?.dataKey} : ${
            payload[0]?.value
          }`}</p>
          {payload?.[1] && (
            <p
              className={classes.tooltipLabel}
              style={{
                color: payload?.[1]?.color,
              }}
            >{`${labels[payload?.[1]?.name] || payload?.[1]?.dataKey}  : ${
              payload[1]?.value
            }`}</p>
          )}
        </div>
      );
    }

    return null;
  };

  return props?.geoDashboard ? (
    <ResponsiveContainer>
      <BarChart
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
        <XAxis dataKey="name" angle={rotateLabels ? rotateLabels : 0} />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          verticalAlign="top"
          formatter={(value, entry) => {
            const { color } = entry;

            return (
              <span style={{ color, fontFamily: "sans-serif" }}>
                {labels?.[value] || value}
              </span>
            );
          }}
        />
        {Object.keys(labels).includes("pv") ? (
          <Bar
            dataKey="pv"
            fill={
              colors?.value1 ||
              (selectedTheme ? selectedTheme.barColor1 : undefined)
            }
          />
        ) : (
          <></>
        )}
        {Object.keys(labels).includes("uv") ? (
          <Bar
            dataKey="uv"
            fill={
              colors?.value2 ||
              (selectedTheme ? selectedTheme.barColor2 : undefined)
            }
          />
        ) : (
          <></>
        )}
      </BarChart>
    </ResponsiveContainer>
  ) : (
    <div
      style={{
        minHeight: `${height}px`,
        height: "100%",
        margin: "0px 25px",
      }}
    >
      <ResponsiveContainer height={height}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            formatter={(value, entry) => {
              const { color } = entry;

              return (
                <span style={{ color, fontFamily: "sans-serif" }}>
                  {labels?.[value] || value}
                </span>
              );
            }}
          />
          <Bar
            dataKey="pv"
            fill={
              colors?.value1 ||
              (selectedTheme ? selectedTheme.barColor1 : undefined)
            }
          />
          <Bar
            dataKey="uv"
            fill={
              colors?.value2 ||
              (selectedTheme ? selectedTheme.barColor2 : undefined)
            }
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HorizontalBar;
