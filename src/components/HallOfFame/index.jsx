import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

import "./styles.css";

const HallOfFame = ({
  title = "Your Title Here",
  width = 1280,
  height = 720,
  numCols = 4,
  gapSize = 0,
  backgroundColor,
  horisontal = true,
  bricksData = {},
  textColor,
  fontSize,
  borderColor,
}) => {
  const ref = useRef();
  const svgRef = useRef();
  const numRows = bricksData.reduce((acc, brick) => {
    // The row number for the current brick is higher than the current count
    if (brick.row + 1 > acc) {
      return brick.row + 1;
    }
    return acc;
  }, 0);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const zoom = d3
      .zoom()
      .scaleExtent([1, 5])
      .on("zoom", (event) => {
        svg.attr("transform", event.transform);
      });

    d3.select(ref.current).call(zoom);

    const data = bricksData;

    const cellWidth = (width - gapSize * (numCols - 1)) / numCols;
    const cellHeight = (height - gapSize * (numRows - 1)) / numRows;

    const brickGroups = svg
      .selectAll("g.brick")
      .data(data)
      .enter()
      .append("g")
      .classed("brick", true)
      .attr(
        "transform",
        (d) =>
          `translate(${(d.col + (d.row % 2) * 0.5) * (cellWidth + gapSize)}, ${
            d.row * (cellHeight + gapSize)
          })`
      );

    brickGroups
      .append("rect")
      .attr("width", cellWidth)
      .attr("height", cellHeight)
      .attr("fill", "transparent")
      .attr("stroke", "transparent");

    brickGroups
      .append("foreignObject")
      .html((d) => {
        return `
        <div class="person-root-container-${
          horisontal ? "horisontal" : "vertical"
        }">
          <div class="img-container">
            <img
              class="fit-picture"
              src="${d.logo}"
              alt="Grapefruit slice atop a pile of other slices"
              style="border:2px solid ${borderColor}"
            />
          </div>
          <div style="color:${textColor}" class="text-section">
            <div class="name-title" style="font-size:${fontSize}px">${
          d.name
        }</div>
            <div style="font-size:${fontSize - 1}px">${d.field}</div>
            <div style="font-size:${fontSize - 1}px">${d.country}</div>
          </div>
        </div>
        `;
      })
      .attr("width", cellWidth)
      .attr("height", cellHeight)
      .attr("font-size", "12px")
      .attr("fill", "black");

    // Add more text elements for other data properties as needed
  }, [
    numRows,
    numCols,
    width,
    height,
    gapSize,
    fontSize,
    bricksData,
    horisontal,
    borderColor,
    textColor,
  ]);

  return (
    <div
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "",
        height: "100vh",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: "35px",
          fontFamily: "Arial, sans-serif",
          height: "40px",
          color: textColor,
        }}
      >
        {title}
      </div>
      <div
        style={{
          width: "100%",
          height: "calc(100% - 40px)",
        }}
      >
        <svg
          ref={ref}
          width={"100%"}
          height={"100%"}
          viewBox={`0 0 ${width} ${height}`}
        >
          <g ref={svgRef} className="main-g"></g>
        </svg>
      </div>
    </div>
  );
};

export default HallOfFame;
