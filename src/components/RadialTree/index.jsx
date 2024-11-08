import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const RadialTree = ({ data, width = 1500, height = 1500 }) => {
  const svgRef = useRef();
  const legendData = data?.originalData?.legendData || [];
  const legendTextColor = data?.originalData?.legendTextColor || "#000000";
  const legendPlacementX = data?.originalData?.legendPlacementX || [];
  const legendPlacementY = data?.originalData?.legendPlacementY || [];

  useEffect(() => {
    const svgElement = d3.select(svgRef.current);
    svgElement.selectAll("*").remove(); // Clear previous contents

    const root = d3.hierarchy(data.originalData);
    const treeLayout = d3.tree().size([2 * Math.PI, height / 2 - 100]);
    treeLayout(root);

    const svg = svgElement
      .attr("width", width)
      .attr("height", height)
      .style("width", "100%")
      .style("height", "auto")
      .style("padding", "0")
      .style("box-sizing", "border-box")
      .style("font", "10px sans-serif");

    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const link = g
      .append("g")
      .attr("fill", "none")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", 2)
      .selectAll("line")
      .data(root.links())
      .enter()
      .append("line")
      .attr("x1", (d) => radialPoint(d.source.x, d.source.y)[0])
      .attr("y1", (d) => radialPoint(d.source.x, d.source.y)[1])
      .attr("x2", (d) => radialPoint(d.target.x, d.target.y)[0])
      .attr("y2", (d) => radialPoint(d.target.x, d.target.y)[1])
      .attr("stroke", "#ccc");

    const node = g
      .append("g")
      .attr("stroke-linejoin", "round")
      .attr("stroke-width", 3)
      .selectAll("g")
      .data(root.descendants().reverse())
      .enter()
      .append("g")
      .attr("transform", (d) => `translate(${radialPoint(d.x, d.y)})`);

    const myScale = d3
      .scaleLinear()
      .domain([
        d3.min(root.leaves().map((leaf) => leaf.data.value)),
        d3.max(root.leaves().map((leaf) => leaf.data.value)),
      ])
      .range([0.2, 1]);

    node
      .append("circle")
      .attr("fill", (d) => (d.children ? "#aec7e8" : "#ff8016"))
      .attr("stroke", "#2b85bd")
      .attr("stroke-width", 0.75)
      .attr("fill-opacity", (d) => (d.children ? 1 : myScale(d.value)))
      .attr("r", (d) => (d.children ? 5 : 5))
      .on("mouseover", function (event, data) {
        tooltip
          .html("Value: " + data.value + "<br/>" + "Name: " + name(data))
          .style("visibility", "visible");
      })
      .on("mousemove", function (event) {
        tooltip
          .style("top", event.clientY + 10 + "px")
          .style("left", event.clientX + 20 + "px")
          .style("display", "inline-block");
      })
      .on("mouseout", function () {
        tooltip.html("").style("visibility", "hidden");
      });

    // Append text for nodes
    node
      .append("text")
      .attr("dy", "0.3em")
      .attr("x", (d) => (d.x < Math.PI ? 2 : -25)) // Increased offset to avoid overlap
      .attr("text-anchor", (d) => (d.x < Math.PI ? "start" : "end"))
      .attr("transform", (d) => {
        const angle = (d.x * 180) / Math.PI - 90;
        return `rotate(${angle}) translate(${
          d.x < Math.PI ? 12 : -12
        }) rotate(${d.x >= Math.PI ? 180 : 0})`;
      })
      .text((d) => d.data.name)
      .style("font", "12px sans-serif")
      .style("text-transform", (d) => (d.children ? null : null))
      .style("font-weight", (d) => (d.children ? "bold" : "normal"))
      .attr("fill", "#161616");

    const box = g.node().getBBox();

    svg.attr("viewBox", `${box.x} ${box.y} ${box.width} ${box.height}`);

    // Define the zoom behavior
    const zoom = d3
      .zoom()
      .extent([
        [0, 0],
        [width, height],
      ])
      .scaleExtent([0.5, 8])
      .on("zoom", ({ transform }) => {
        g.attr("transform", transform);
      });

    // Apply the zoom behavior to the SVG
    svg.call(zoom);

    // Apply initial zoom
    const initialScale = 0.5; // Set your desired initial scale here
    const initialTranslateX = width / -10;
    const initialTranslateY = height / -3.5;
    svg.call(
      zoom.transform,
      d3.zoomIdentity
        .translate(initialTranslateX, initialTranslateY)
        .scale(initialScale)
    );

    // Create legend group
    const legend = svg
      .append("g")
      .attr("transform", `translate(${legendPlacementX}, ${legendPlacementY})`); // Position legend

    // Append legend items
    legend
      .selectAll("g")
      .data(legendData)
      .enter()
      .append("g")
      .attr("transform", (d, i) => `translate(0, ${i * 20})`)
      .each(function (d) {
        d3.select(this)
          .append("circle")
          .attr("cx", d.xOffsetCircle ? d.xOffsetCircle : 0)
          .attr("cy", d.yOffsetCircle ? d.yOffsetCircle : 0)
          .attr("r", d.radius ? d.radius : 5)
          .style("fill", d.color);

        d3.select(this)
          .append("text")
          .attr("x", d.xOffsetText ? d.xOffsetText : 10)
          .attr("y", d.yOffsetText ? d.yOffsetText : 5)
          .text(d.label)
          .style("font-size", d.fontSize ? d.fontSize : "14px")
          .attr("fill", legendTextColor);
      });
  }, [data, width, height]);

  const radialPoint = (x, y) => {
    return [(y = +y) * Math.cos((x -= Math.PI / 2)), y * Math.sin(x)];
  };

  return <svg ref={svgRef}></svg>;
};

const tooltip = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("visibility", "hidden");

const name = (data) => data.data.name;

export default RadialTree;
