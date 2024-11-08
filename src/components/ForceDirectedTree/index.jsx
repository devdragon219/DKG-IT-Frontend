import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { ModalComponent } from "./ModalComponent";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  wrapper: {
    width: "100%",
    height: "100vh",
    boxSizing: "border-box",
    position: "relative",
    border: "1px solid #ccc",
    //background: "#fff",
  },
}));

const ForceDirectedGraph = (props) => {
  const classes = useStyles();

  const svgRef = useRef();
  const legendRef = useRef();
  const data = props?.data.originalData;
  const legendData = props?.data.originalData?.data?.legendData || [];
  const backgroundColor =
    props?.data.originalData?.data?.backgroundColor || "#FFF";
  const textColor = props?.data.originalData?.data?.textColor || "#000000";
  const hoverTextColor =
    props?.data.originalData?.data?.hoverTextColor || "#000000";
  const dataProps = JSON.parse(JSON.stringify(data));

  const [modalData, setModalData] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    const legendSvg = d3
      .select(legendRef.current)
      .attr("transform", "translate(30,30)");

    const { data } = dataProps;

    legendSvg
      .selectAll(".legend-item")
      .data(legendData)
      .enter()
      .append("g")
      .attr("class", "legend-item")
      .attr("transform", (d, i) => `translate(0, ${i * 20})`)
      .each(function (d) {
        const item = d3.select(this);
        item
          .append("circle")
          .attr("cx", d.xOffsetCircle ? d.xOffsetCircle : 0)
          .attr("cy", d.yOffsetCircle ? d.yOffsetCircle : 0)
          .attr("r", d.radius ? d.radius : 5)
          .style("fill", d.color);

        item
          .append("text")
          .attr("x", d.xOffset ? d.xOffset : 10)
          .attr("y", d.yOffset ? d.yOffset : 5)
          .text(d.label)
          .style("font-size", d.fontSize ? d.fontSize : "14px")
          .attr("fill", textColor);
      });

    const simulation = d3
      .forceSimulation(data.nodes)
      .force(
        "link",
        d3.forceLink(data.links).id((d) => d.id)
      )
      .force("charge", d3.forceManyBody().strength(data.chargeStrength || -100))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force(
        "collide",
        d3
          .forceCollide()
          .radius((d) => (d.mainDot ? 15 : 10))
          .strength(1)
      );

    const drag = d3
      .drag()
      .on("start", dragStarted)
      .on("drag", dragged)
      .on("end", dragEnded);

    const link = svg
      .selectAll(".link")
      .data(data.links)
      .enter()
      .append("line")
      .attr("class", "link")
      .style("stroke", (d) => d.color)
      .style("stroke-width", 2)
      .attr("stroke-opacity", 0.9);

    const node = svg
      .selectAll(".node")
      .data(data.nodes)
      .enter()
      .append("g")
      .attr("class", "node")
      .call(drag);

    const circles = node
      .append("circle")
      .attr("r", (d) => (d.mainDot ? 10 : 5))
      .style("fill", (d) => d.color)
      .on("click", (event, d) => {
        if (d.modal == true) {
          setModalData({
            imgTop: d.imgTop,
            logo: d.logo,
            name: d.id,
            description: d.description,
          });
          handleOpen();
        }
      })
      .on("mouseover", function () {
        d3.select(this).attr("r", (d) => (d.mainDot ? 15 : 10));

        const parent = d3.select(this.parentNode);
        parent
          .select("text")
          .attr("dx", (d) => (d.mainDot ? 15 : 10))
          .attr("font-size", "20px")
          .attr("fill", hoverTextColor);

        const bbox = parent.select("text").node().getBBox();

        parent.select(".text-background").remove();

        parent
          .insert("rect", "text")
          .attr("class", "text-background")
          .attr("x", bbox.x - 3)
          .attr("y", bbox.y - 2)
          .attr("width", bbox.width + 6)
          .attr("height", bbox.height + 4)
          .attr("rx", 3)
          .style("fill", "white")
          .style("stroke", "black")
          .style("stroke-width", 0.5);
      })
      .on("mouseout", function () {
        d3.select(this).attr("r", (d) => (d.mainDot ? 10 : 5));
        d3.select(this.parentNode)
          .select("text")
          .attr("dx", (d) => (d.mainDot ? 10 : 5))
          .attr("font-size", "12px")
          .attr("fill", textColor);

        d3.select(this.parentNode).select(".text-background").remove();
      });

    node
      .append("text")
      .attr("dx", (d) => (d.mainDot ? 10 : 5))
      .attr("dy", (d) => (d.mainDot ? ".5em" : ".25em"))
      .text((d) => (d.name ? d.name : d.id))
      .attr("font-size", "12px")
      .attr("fill", textColor);

    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("transform", (d) => {
        const radius = d.mainDot ? 15 : 10;
        d.x = Math.max(radius, Math.min(width - radius, d.x));
        d.y = Math.max(radius, Math.min(height - radius, d.y));
        return `translate(${d.x},${d.y})`;
      });
    });

    function dragStarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragEnded(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <div className={classes.wrapper} style={{ background: backgroundColor }}>
      <ModalComponent
        handleClose={handleClose}
        open={open}
        modalData={modalData}
      />

      <svg ref={svgRef} style={{ width: "100%%", height: "100%" }}>
        <g ref={legendRef} />
      </svg>
    </div>
  );
};

export default ForceDirectedGraph;
