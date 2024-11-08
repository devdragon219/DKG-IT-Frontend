import React from "react";

export function TriangleSVG({
  color = "black",
  topTriangleColor,
  lines = [],
  middeleLines = [],
  gradientColors = ["#083763", "#4483bc", "#aac9e6", "#aac9e6", "#d4e4f8"],
  isTopTriangle = false,
  svgRef,
}) {
  const topY = 5;

  const bottomY = topY + lines?.[0];
  const bottomX1 = 50 - lines?.[0] / 2;
  const bottomX2 = 50 + lines?.[0] / 2;

  const gradientId = "gradient-1";
  const stops = gradientColors.map((color, index) => (
    <stop
      key={index}
      offset={`${index / (gradientColors.length - 1)}`}
      style={{ stopColor: color }}
    />
  ));

  return (
    <svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox={`0 0 100 100`}
      ref={svgRef}
    >
      <polygon
        points="50,5 5,95 95,95"
        style={{ fill: "none", stroke: color, strokeWidth: 0.5 }}
      />

      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          x1="77.281"
          y1="6.962"
          x2="77.281"
          y2="94.325"
          id={gradientId}
          spreadMethod="repeat"
        >
          {stops}
        </linearGradient>
      </defs>
      <path
        style={{
          fill: `url(#${gradientId})`,
          fillRule: "nonzero",
          paintOrder: "stroke markers",
        }}
        d="M 54.745 8.225 L 97.79 94.325 L 99.511 92.765 L 56.561 6.922 L 54.745 8.225 Z"
      />
      <path
        style={{ fill: gradientColors[0] }}
        d="M 56.601 7.044 L 57.127 6.684 L 54.098 4.276 L 54.186 8.712 L 54.905 8.236"
      />

      {isTopTriangle && (
        <polygon
          points={`50,${topY} ${bottomX1},${bottomY} ${bottomX2},${bottomY}`}
          style={{ fill: "none", stroke: topTriangleColor, strokeWidth: 0.5 }}
          key={topY}
        />
      )}

      {lines.map((lineHeight, index) => {
        const lineY = topY + lineHeight;
        const lineX1 = 50 - lineHeight / 2;
        const lineX2 = 50 + lineHeight / 2;
        if (isTopTriangle && index === 0) return null;
        return (
          <line
            id={`pyramid-lines-${index}`}
            key={lineHeight}
            x1={lineX1}
            y1={lineY}
            x2={lineX2}
            y2={lineY}
            style={{
              stroke: index === lines.length - 1 ? "transparent" : color,
              strokeWidth: 0.5,
            }}
          />
        );
      })}
      {middeleLines.map((lineHeight, index) => {
        const lineY = topY + lineHeight;
        const lineX1 = 50 - lineHeight / 2;
        const lineX2 = 50 + lineHeight / 2;
        if (isTopTriangle && index === 0) return null;
        return (
          <line
            id={`middele-pyramid-lines-${index}`}
            className="pyramid-line"
            key={lineHeight}
            x1={lineX1}
            y1={lineY}
            x2={lineX2}
            y2={lineY}
            style={{
              stroke: "transparent",
              strokeWidth: 0.5,
            }}
          />
        );
      })}
    </svg>
  );
}
