import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

import "./style.css";

function SerpentinePath(props) {
  const dataProps = props?.data?.originalData?.data;
  const customizeSettings = props?.data?.originalData?.customizeSettings;

  const divRef = useRef(null);

  const dimensions = {
    width: 1000,
    height: 1000,
    margin: {
      top: 20,
      bottom: 20,
      left: 20,
      right: 20,
    },
  };

  dimensions.ctrWidth =
    dimensions.width - dimensions.margin.left - dimensions.margin.right;
  dimensions.ctrHeight =
    dimensions.height - dimensions.margin.bottom - dimensions.margin.top;

  useEffect(() => {
    d3.select(divRef.current).select("svg").remove();

    const svg = d3
      .select(divRef.current)
      .append("svg")
      .attr("width", `auto`)
      .attr("height", `100%`)
      .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`);

    const ctr = svg
      .append("g")
      .classed("main", true)
      .attr(
        "transform",
        `translate(${dimensions.margin.left}, ${dimensions.margin.top})`
      );

    svg
      .append("defs")
      .append("marker")
      .attr("id", "arrowhead")
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 5)
      .attr("refY", 0)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M0,-5L10,0L0,5")
      .attr(
        "fill",
        customizeSettings?.arrowColor
          ? customizeSettings?.arrowColor
          : "#165894"
      );

    const linePoints = [];
    dataProps.forEach((_row, rowIndex) => {
      const startY = (dimensions.ctrHeight / dataProps.length) * rowIndex;
      const middleY = dimensions.ctrHeight / dataProps.length / 2 + startY;

      if ((rowIndex + 1) % 2 === 0) {
        linePoints.push({
          x: dimensions.ctrHeight,
          y: middleY,
        });
        linePoints.push({
          x: 0,
          y: middleY,
        });
      } else {
        linePoints.push({
          x: 0,
          y: middleY,
        });
        linePoints.push({
          x: dimensions.ctrHeight,
          y: middleY,
        });
      }
    });
    const curve = d3.curveCardinal.tension(0.9);
    const lineGenerator = d3
      .line()
      .x((d) => d.x)
      .y((d) => d.y)
      .curve(curve);

    ctr
      .append("path")
      .datum(linePoints)
      .attr("d", lineGenerator)
      .attr("fill", "none")
      .attr(
        "stroke",
        customizeSettings?.arrowColor
          ? customizeSettings?.arrowColor
          : "#165894"
      )
      .attr("stroke-width", 4)
      .attr("marker-end", "url(#arrowhead)");

    const data = JSON.parse(JSON.stringify(dataProps));

    data.forEach((row, rowIndex) => {
      const startY = (dimensions.ctrHeight / dataProps.length) * rowIndex;

      let sortRow = (rowIndex + 1) % 2 === 0 ? row?.reverse() : [...row];

      sortRow.forEach((d, index) => {
        const startX = (dimensions.ctrWidth / row.length) * index;
        const x = startX + (dimensions.ctrWidth / row.length - d.height) / 2;

        const y =
          startY + (dimensions.ctrHeight / dataProps.length - d.height) / 2;

        ctr
          .append("rect")
          .attr("width", d.width)
          .attr("height", d.height)
          .classed("rect", true)
          .attr("x", x)
          .attr("y", y)
          .attr("rx", 5)
          .attr(
            "stroke",
            customizeSettings.rectColor
              ? customizeSettings.rectColor
              : "#3069a0"
          );

        ctr
          .append("foreignObject")
          .attr("width", d.width)
          .attr("height", d.height)
          .attr("x", x)
          .attr("y", y).html(`
            <div class="text">
              <span style="color:${
                customizeSettings.textColor ? customizeSettings.textColor : ""
              };font-size: ${
          customizeSettings?.textSize ? customizeSettings?.textSize : 18
        }px;">${d.text}</span>
            </div>
          `);

        ctr
          .append("text")
          .classed("label", true)
          .attr("x", x + d.width / 2)
          .attr("y", y - 10)
          .attr("text-anchor", "middle")
          .attr(
            "style",
            `font-size: ${
              customizeSettings?.titleSize ? customizeSettings?.titleSize : 18
            }px;`
          )
          .attr(
            "fill",
            customizeSettings.titleColor ? customizeSettings.titleColor : ""
          )
          .text(d.title);
      });
    });
  }, [dataProps, customizeSettings]);

  return (
    <div
      style={{ width: "100%", height: props.geoDashboard ? "100%" : "100vh" }}
      ref={divRef}
    ></div>
  );
}

export default SerpentinePath;
