import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from "recharts";
import { scaleLinear } from "d3-scale";

import "./style.css";

const defaultSelectedTheme = {
  name: "custom",
  backgroundHeader:
    "linear-gradient(-30deg, #398bbc 0%, #0c5393 40%, #398bbc 50%)",
  backgroundFooter: "linear-gradient(90deg, #0c5393 0%, #398bbc 100%)",
  textColor: "black",
  barColor1: "#0c5393",
  barColor2: "#398bbc",
  radarSettings: {
    backgroundColor: "rgba(54, 162, 235, 0.2)",
    borderColor: "#398bbc",
    pointBackgroundColor: "#398bbc",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "#398bbc",
  },
};

export const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
  } = props;
  console.log(props);
  const midAngle = (startAngle + endAngle) / 2;

  // Calculate font size based on outerRadius
  const fontSize = outerRadius / 6;
  const nameSize = outerRadius / payload?.fontSize || 7;

  // Calculate position and size factors based on the outerRadius
  const sizeFactor = outerRadius / 20;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 6 + sizeFactor) * cos;
  const sy = cy + (outerRadius + 6 + sizeFactor) * sin;
  const mx = cx + (outerRadius + 6 + sizeFactor * 3) * cos;
  const my = cy + (outerRadius + 6 + sizeFactor * 3) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * sizeFactor * 11;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g style={{ fontFamily: "system-ui" }}>
      <foreignObject
        x={cx - innerRadius}
        y={cy - innerRadius}
        height={innerRadius * 2}
        width={innerRadius * 2}
      >
        <div
          style={{
            fontSize: nameSize,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#083763",
          }}
        >
          <span
            style={{
              paddingLeft: "2px",
              paddingRight: "2px",
            }}
          >
            {payload.name}
          </span>
        </div>
      </foreignObject>

      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * sizeFactor * 2}
        y={ey}
        textAnchor={textAnchor}
        fill="#083763"
        fontSize={fontSize}
        fontWeight="900"
      >{`${payload.label}`}</text>
    </g>
  );
};

export default function PieChartLabels(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const dataProps = props?.data?.originalData?.data;
  const height = props?.data?.originalData?.height
    ? props?.data?.originalData?.height
    : 300;
  const title = props?.data?.originalData?.title
    ? props?.data?.originalData?.title
    : "PieChart for displaying data (No title provided)";
  const selectedTheme = props?.selectedTheme
    ? props?.selectedTheme
    : defaultSelectedTheme;
  const titleFontSize = props?.data?.originalData?.titleFontSize || "1em";
  const titleFontColor = props?.data?.originalData?.titleFontColor || "#0c5393";
  function findExtremes(data) {
    if (!data || data?.length === 0) {
      return { max: null, min: null };
    }

    let max = data?.reduce((prev, current) =>
      prev.value > current.value ? prev : current
    );
    let min = data.reduce((prev, current) =>
      prev.value < current.value ? prev : current
    );

    return [min.value, max.value];
  }
  const colorScale = scaleLinear()
    .domain(findExtremes(dataProps))
    .range([
      selectedTheme ? selectedTheme.barColor1 : "#fff",
      selectedTheme ? selectedTheme.barColor2 : "#abcfe4",
    ]);

  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div
      style={{
        width: "100%",
        maxHeight: height,
        aspectRatio: "1/1",
        position: "relative",
      }}
      className="pie-label"
    >
      {title && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "15px",
            transform: "translateX(-50%)",
            fontFamily: "system-ui",
            color: titleFontColor,
            width: "90%",
            textAlign: "center",
            fontSize: `${titleFontSize}`.includes("em")
              ? titleFontSize
              : `${titleFontSize}em`,
            marginBottom: "10px",
          }}
        >
          {title}
        </div>
      )}
      <ResponsiveContainer>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={dataProps}
            cx="50%"
            cy="50%"
            innerRadius="30%"
            outerRadius="40%"
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {dataProps?.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  entry.color ||
                  (selectedTheme ? colorScale(entry.value) : undefined)
                }
                style={{ outline: "none" }}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
