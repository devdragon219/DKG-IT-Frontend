import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

import "./styles.css";
import { Box } from "@mui/material";

function TreeMapWithChildren(props) {
  const data = props?.data?.originalData?.data;
  const svgRef = useRef();

  useEffect(() => {
    const width = 928;
    const height = 924;

    function tile(node, x0, y0, x1, y1) {
      d3.treemapBinary(node, 0, 0, width, height);
      for (const child of node.children) {
        child.x0 = x0 + (child.x0 / width) * (x1 - x0);
        child.x1 = x0 + (child.x1 / width) * (x1 - x0);
        child.y0 = y0 + (child.y0 / height) * (y1 - y0);
        child.y1 = y0 + (child.y1 / height) * (y1 - y0);
      }
    }

    const hierarchy = d3
      .hierarchy(data)
      .sum((d) => d.value)
      .sort((a, b) => b.value - a.value);

    const root = d3.treemap().tile(tile)(hierarchy);
    const x = d3.scaleLinear().rangeRound([0, width]);
    const y = d3.scaleLinear().rangeRound([0, height]);

    const name = (d) =>
      d
        .ancestors()
        .reverse()
        .map((d) => d.data.name)
        .join("/");

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", [0.5, -60.5, width, height + 60])
      .style("margin", "3px")
      .style("overflow", "hidden");

    let group = svg.append("g").call(render, root);

    function render(group, root) {
      const node = group
        .selectAll("g")
        .data(root.children.concat(root))
        .join("g");

      node
        .filter((d) => (d === root ? d.parent : d.children))
        .attr("cursor", "pointer")
        .on("click", (event, d) => (d === root ? zoomout(root) : zoomin(d)));

      node
        .append("rect")
        .attr("id", (d) => (d.leafUid = Math.floor(Math.random() * 1000)))
        .attr("fill", (d) => {
          return d === root ? "#083763" : d.children ? "#6fa7db" : "#98c3de";
        })
        .attr("stroke", "#fff");

      node
        .append("clipPath")
        .attr("id", (d) => (d.clipUid = Math.floor(Math.random() * 100)))
        .append("use")
        .attr("xlink:href", (d) => d.leafUid.href);

      node
        .append("foreignObject")
        .attr("class", "node-foreign-object")
        .attr("x", 0)
        .attr("y", 0)
        .html((d) => {
          const title = d === root ? name(d) : d.data.name;
          const fontValue =
            `${d.data.fontValue} sans-serif` || "20px sans-serif";
          return `<div class="node-label" title="${title}" style="font: ${fontValue};"><span>${title}</span></div>`;
        });

      group.call(position, root);
    }

    function position(group, root) {
      group
        .selectAll("g")
        .attr("transform", (d) =>
          d === root ? `translate(0,-60)` : `translate(${x(d.x0)},${y(d.y0)})`
        )
        .select("rect")
        .attr("width", (d) => (d === root ? width : x(d.x1) - x(d.x0)))
        .attr("height", (d) => (d === root ? 60 : y(d.y1) - y(d.y0)));

      group
        .selectAll("foreignObject")
        .attr("width", (d) => (d === root ? width : x(d.x1) - x(d.x0)))
        .attr("height", (d) => (d === root ? 60 : y(d.y1) - y(d.y0)));
    }

    function zoomin(d) {
      const group0 = group.attr("pointer-events", "none");
      const group1 = (group = svg.append("g").call(render, d));

      x.domain([d.x0, d.x1]);
      y.domain([d.y0, d.y1]);

      svg
        .transition()
        .duration(750)
        .call((t) => group0.transition(t).remove().call(position, d.parent))
        .call((t) =>
          group1
            .transition(t)
            .attrTween("opacity", () => d3.interpolate(0, 1))
            .call(position, d)
        );
    }

    function zoomout(d) {
      const group0 = group.attr("pointer-events", "none");
      const group1 = (group = svg.insert("g", "*").call(render, d.parent));

      x.domain([d.parent.x0, d.parent.x1]);
      y.domain([d.parent.y0, d.parent.y1]);

      svg
        .transition()
        .duration(750)
        .call((t) =>
          group0
            .transition(t)
            .remove()
            .attrTween("opacity", () => d3.interpolate(1, 0))
            .call(position, d)
        )
        .call((t) => group1.transition(t).call(position, d.parent));
    }
  }, [data]);

  return (
    <Box
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        fontFamily: "system-ui",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <svg ref={svgRef}></svg>
    </Box>
  );
}

export default TreeMapWithChildren;
