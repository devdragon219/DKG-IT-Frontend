import React from "react";
import { useRef } from "react";

import BG1 from "./assets/BackgroundLogos.jpg";

export function TriangleSVG({
  links = [],
  topTriangleColor,
  lines = [],
  middeleLines = [],
  gradientColors = ["#083763", "#4483bc", "#aac9e6", "#aac9e6", "#d4e4f8"],
  isTopTriangle = false,
  svgRef,
}) {
  const topY = 5;
  const polygonRef = useRef(null);
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
      <defs>
        <pattern
          id="background1"
          patternUnits="userSpaceOnUse"
          width="100%"
          height="100%"
        >
          <image
            href={BG1}
            width="100%"
            preserveAspectRatio="xMidYMid slice"
            height="100%"
          />
        </pattern>
      </defs>
      <polygon
        fill={`url(#background1)`}
        points="50,5 5,95 95,95"
        style={{ stroke: "#083763", strokeWidth: 0.5, cursor: "pointer" }}
        ref={polygonRef}
        onClick={(event) => {
          const svgRect = polygonRef.current.getBoundingClientRect();

          const svgRects = svgRef.current.getBoundingClientRect();

          const svgY = event.clientY - svgRect.top;
          const line1 = (svgRects.height / 100) * lines[0];
          const line2 = (svgRects.height / 100) * lines[1];

          if (svgY < line1) {
            window.open(links[0], "_blank");
            return;
          }

          if (svgY > line1 && svgY < line2) {
            window.open(links[1], "_blank");
            return;
          }

          window.open(links[2], "_blank");
        }}
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
        if (index === 2) return null;
        return (
          <line
            id={`pyramid-lines-${index}`}
            key={lineHeight}
            x1={lineX1}
            y1={lineY}
            x2={lineX2}
            y2={lineY}
            style={{
              stroke: "#083763",
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
