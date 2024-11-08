import React from "react";

import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div>
        <p style={{ color: "#0281f2" }}>{`${payload[0].value}$`}</p>
      </div>
    );
  }

  return null;
};

export default function LineChartComponent({ data }) {
  return (
    <ResponsiveContainer>
      <LineChart data={data}>
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="linear"
          dot={false}
          dataKey="price"
          stroke="#0c5393"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
