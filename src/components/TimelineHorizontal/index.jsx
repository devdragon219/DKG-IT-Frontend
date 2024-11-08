import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { makeStyles } from "@mui/styles";

import { ModalComponent } from "./ModalComponent";

const useStyles = makeStyles({
  main: {
    fontFamily: "Roboto",
  },
  text: {
    fontWeight: 600,
    padding: "5px",
    border: (props) => `1px solid ${props.borderInfoColor || "#3069a0"}`,
    borderRadius: "5px",
  },
  textContainer: {
    color: (props) => props.textInfoColor || "#3069a0",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    textAlign: "center",
    fontSize: "10px",
    fontWeight: 600,
    cursor: "pointer",
    position: "relative",
  },
  alignEnd: {
    alignItems: "end",
  },
  alignStart: {
    alignItems: "start",
  },
  rect: {
    pointerEvents: "none",
    fill: "transparent",
  },
  label: {
    fontSize: "15px",
    fontWeight: 900,
  },
  labelFirst: {
    width: "46%",
  },
});

function TimelineHorizontal(props) {
  const data = props?.data?.originalData?.data;
  const startY = props?.data?.originalData?.startY;
  const height = props?.data?.originalData?.height;
  const title = props?.data?.originalData?.title;

  const titleColor = props?.data?.originalData?.titleColor || "#0c5393";
  const titleFontSize = props?.data?.originalData?.titleFontSize || "1em";
  const horizMainLineColor =
    props?.data?.originalData?.horizMainLineColor || "#165894";

  const yearColor = props?.data?.originalData?.yearColor || "#3069a0";
  const verticalLineColor =
    props?.data?.originalData?.verticalLineColor || "#165894";
  const dotColor = props?.data?.originalData?.dotColor || "red";

  const classes = useStyles({
    borderInfoColor: props?.data?.originalData?.borderInfoColor,
    textInfoColor: props?.data?.originalData?.textInfoColor,
  });

  const divRef = useRef(null);
  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({
    title: "",
    description: "",
  });

  const [dimensions, setDimensions] = React.useState({
    width: 1000,
    height: 400,
    margin: {
      top: 70,
      bottom: 50,
      left: 100,
      right: 100,
    },
    ctrWidth: 800,
    ctrHeight: 300,
    startY: 140,
  });

  useEffect(() => {
    setDimensions({
      ...dimensions,
      ctrHeight: height - dimensions.margin.bottom - dimensions.margin.top,
      height,
      startY,
      title,
    });
  }, [height, startY, title]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    d3.selectAll("#svg").remove();
    const segmentWidth = dimensions.ctrWidth / (data.length - 1);

    const svg = d3
      .select(divRef.current)
      .append("svg")
      .attr("id", "svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("fill", "transparent")
      .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`);

    const ctr = svg
      .append("g")
      .classed(classes.main, true)
      .attr(
        "transform",
        `translate(${dimensions.margin.left}, ${dimensions.margin.top})`
      );

    ctr
      .append("text")
      .attr("x", dimensions.ctrWidth / 2)
      .attr("y", -35)
      .attr("text-anchor", "middle")
      .attr("fill", titleColor)
      .attr("font-size", titleFontSize)
      .text(dimensions.title);

    ctr
      .append("line")
      .attr("x1", 0)
      .attr("y1", dimensions.startY)
      .attr("x2", dimensions.ctrWidth)
      .attr("y2", dimensions.startY)
      .attr("stroke", horizMainLineColor)
      .attr("stroke-width", 3);

    data.map((row, rowIndex) => {
      const labelY = dimensions.startY + (rowIndex % 2 === 0 ? 30 : -20);
      const getY2 =
        dimensions.startY +
        (rowIndex % 2 === 0
          ? rowIndex % 4 === 0
            ? -50
            : -120
          : rowIndex % 4 === 1
          ? 50
          : 120);
      const isOdd = rowIndex % 2 === 0;
      const maxWidth = segmentWidth * 2 - 10;

      const group = ctr.append("g");

      group
        .append("text")
        .classed(classes.label, true)
        .attr("x", segmentWidth * rowIndex)
        .attr("y", labelY)
        .attr("text-anchor", "middle")
        .attr("fill", yearColor)
        .text(row.year);

      group
        .append("line")
        .attr("x1", segmentWidth * rowIndex)
        .attr("y1", dimensions.startY)
        .attr("x2", segmentWidth * rowIndex)
        .attr("y2", getY2)
        .attr("stroke", verticalLineColor)
        .attr("stroke-width", 1);

      group
        .append("circle")
        .attr("cx", segmentWidth * rowIndex)
        .attr("cy", dimensions.startY)
        .attr("r", 5)
        .attr("fill", dotColor);

      group
        .append("rect")
        .attr("width", maxWidth)
        .attr("height", 100)
        .classed(`${classes.rect}`, true)
        .attr("x", segmentWidth * rowIndex - maxWidth / 2)
        .attr("y", getY2 - (rowIndex % 2 === 0 ? 100 : 0));

      group
        .append("foreignObject")
        .attr("width", maxWidth)
        .attr("height", 100)
        .attr("x", segmentWidth * rowIndex - maxWidth / 2)
        .attr("y", getY2 - (rowIndex % 2 === 0 ? 100 : 0))
        .html(
          `
          <div class="${classes.textContainer} ${
            isOdd ? classes.alignEnd : classes.alignStart
          }">
            <span class="${classes.text} ${
            rowIndex === 0 ? classes.labelFirst : ""
          }">${row.text}</span>
          </div>
        `
        )
        .on("click", function () {
          if (row?.data) {
            setModalData(row?.data);
            handleOpen();
          }
        });

      return null;
    });
  }, [dimensions]);

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "transparent",
      }}
      ref={divRef}
    >
      <ModalComponent
        handleClose={handleClose}
        open={open}
        modalData={modalData}
      />
    </div>
  );
}

export default TimelineHorizontal;
