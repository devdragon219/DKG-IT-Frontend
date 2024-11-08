import React, {useEffect, useRef} from "react";
import {Box} from "@mui/material";
import * as d3 from 'd3';
import './HeatMapGrid.css'


export const HeatMapGrid = ({data, geoDashboard, ...props}) => {
  const boxRef = useRef();
  const boxId = "heatmapgrid"
  const {width, height, cells, groups, margin, cellConfig, size, backgroundColor, axis} = data?.originalData?.data || data;

  useEffect(() => {
    const createTooltip = (root) => {
      const tooltip = root
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")

      const mouseover = function (event, d) {
        tooltip.style("opacity", 1)
        d3.select(this).style("stroke", "black");
      }
      const mousemove = function (event, d) {
        const tooltipText = d.tooltipHTML || d.group;
        const coords = d3.pointer(event);
        const yPos = coords[1] - 10;
        // this is a giant hack to display tooltip over the right set of coordinates
        // since create/view/edit move chart to the center, d3 gets confused where to put the element on the screen
        // or in other words I haven't figured this part yet
        const leftPos = geoDashboard ? coords[0] : event.offsetX + width;
        const topPos = geoDashboard ? coords[1] : yPos;
        tooltip
          .html(tooltipText)
          .style("left", leftPos + "px")
          .style("top", topPos + "px")
        if (!tooltipText) {
          tooltip.style("opacity", 0);
        }

      }
      const mouseleave = function (d) {
        tooltip.style("opacity", 0)
        d3.select(this).style("stroke", "none");
      }
      return {
        tooltip,
        mouseleave,
        mousemove,
        mouseover
      }
    }
    const defaultGroup = {color: cellConfig?.defaultColor || "lightgray"};
    const findColor = (name) => (groups.find((g) => g.name === name) || defaultGroup).color;

    const startIndex = 1;
    const xAxisLabels = Array(size.x).fill(null).map((_, i) => `${i + startIndex}`);
    const yAxisLabels = Array(size.y).fill(null).map((_, i) => `${i + startIndex}`);

    const actualWidth = width - margin.left - margin.right;
    const actualHeight = height - margin.top - margin.bottom;
    const boxD3 = d3.select(boxRef.current)
    const svg = boxD3
      .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const axisMagicAdjustment = 150;
    const {x: xConfig, y: yConfig} = axis;
    const x = d3.scaleBand()
      .range([0, actualWidth])
      .domain(xAxisLabels)
      .padding(cellConfig.padding || 0.05);
    svg.append("g")
      .attr("transform", "translate(0," + actualHeight + ")")
      .attr("color", xConfig.color || "black")
      .call(d3.axisBottom(x).tickSize(0).tickValues([]));
    if (xConfig.label) {
      svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", margin.left + axisMagicAdjustment)
        .attr("y", actualHeight + margin.top - 5)
        .attr("fill", xConfig.labelColor || "black")
        .text(xConfig.label);
    }

    const y = d3.scaleBand()
      .range([actualHeight, 0])
      .domain(yAxisLabels)
      .padding(cellConfig.padding || 0.05);
    svg.append("g")
      .attr("color", yConfig.color || "black")
      .call(d3.axisLeft(y).tickSize(0).tickValues([]));
    if (yConfig.label) {
      svg.append("text")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-90)")
        .attr("y", -margin.left+20)
        .attr("x", -margin.top*2-axisMagicAdjustment)
        .attr("fill", yConfig.labelColor || "black")
        .text(yConfig.label)
    }

    const {tooltip, mousemove, mouseover, mouseleave} = createTooltip(d3.select(boxRef.current))

    const cellsData = []
    for (let i = startIndex; i < xAxisLabels.length + startIndex; i++) {
      for (let j = startIndex; j < yAxisLabels.length + startIndex; j++) {
        const cellValue = cells.find((c) => c.x === i && c.y === j) || {x: i, y: j};
        // convert idx to label
        cellsData.push({...cellValue, x: cellValue.x.toString(), y: cellValue.y.toString()});
      }
    }

    svg.selectAll()
      .data(cellsData, function (d) {return d.x + ':' + d.y;})
      .enter()
      .append("rect")
      .attr("x", function (d) { return x(d.x) })
      .attr("y", function (d) { return y(d.y) })
      .attr("width", x.bandwidth())
      .attr("height", y.bandwidth())
      .attr("rx", cellConfig.round || 4)
      .attr("ry", cellConfig.round || 4)
      .style("fill", (d) => findColor(d.group))
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);

    // add legend
    const legendItemSize = 20
    const firstDotAppear = 30;
    const calculateNextY = (i) => firstDotAppear + i * (legendItemSize + 5) + (legendItemSize / 2)
    const legendHeight = calculateNextY(groups.length)
    const legend = boxD3.append("svg").attr("viewBox", `0 0 ${width} ${legendHeight}`)
    legend
      .selectAll("mydots")
      .data(groups)
      .enter()
      .append("rect")
      .attr("x", firstDotAppear)
      .attr("y", function (d, i) { return firstDotAppear + i * (legendItemSize + 5)})
      .attr("width", legendItemSize)
      .attr("height", legendItemSize)
      .style("fill", (d) => findColor(d.name))

    legend
      .selectAll("mylabels")
      .data(groups)
      .enter()
      .append("text")
      .attr("x", firstDotAppear + legendItemSize * 1.2)
      .attr("y", (d, i) => calculateNextY(i))
      .style("fill", (d) => findColor(d.name))
      .text((d) => d.label)
      .attr("text-anchor", "right")
      .style("alignment-baseline", "middle")
  }, [width, height, cells, groups, margin, cellConfig, size, axis, boxRef]);

  return (<Box id={boxId} ref={boxRef} style={{backgroundColor: backgroundColor || "lightgray"}} />)

}
