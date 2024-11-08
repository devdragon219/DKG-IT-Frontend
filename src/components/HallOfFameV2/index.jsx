import React, { useRef, useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import * as d3 from "d3";

import "./styles.css";
import CardModal from "./CardModal";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { Link, Tooltip } from "@mui/material";

const useStyles = makeStyles(() => ({
  card: {
    cursor: "pointer",
    transition: "all 0.2s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));

const HallOfFameV2 = ({
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
  imgHeight,
  initialTransform,
  setInitialTransform,
  isEditMode,
  titleSize,
  linkData,
  logoSize,
  linkSize,
  titleTopSpace,
}) => {
  const ref = useRef();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const svgRef = useRef();
  const numRows = bricksData.reduce((acc, brick) => {
    if (brick.row + 1 > acc) {
      return brick.row + 1;
    }
    return acc;
  }, 0);

  const handleCancel = () => {
    setOpen(false);
    setModalTitle("");
    setModalContent("");
  };

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    if (!isEditMode && firstRender && initialTransform) {
      svg.attr(
        "transform",
        `translate(${initialTransform.x},${initialTransform.y}) scale(${initialTransform.k})`
      );

      setFirstRender(false);
    }

    const zoom = d3
      .zoom()
      .scaleExtent([0.5, 5])
      .on("zoom", (event) => {
        if (isEditMode) {
          setInitialTransform(event.transform);

          svg.attr("transform", event.transform);
          return;
        } else {
          // if (
          //   initialTransform &&
          //   event.transform.k < initialTransform.k + 0.1
          // ) {
          //   svg.attr(
          //     "transform",
          //     `translate(${initialTransform.x},${initialTransform.y}) scale(${initialTransform.k})`
          //   );

          //   return;
          // } else {

          // }

          svg.attr("transform", event.transform);
        }
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
      .classed("brick hall-main-rect", true)
      .attr(
        "transform",
        (d) =>
          `translate(${(d.col + (d.row % 2) * 0.5) * (cellWidth + gapSize)}, ${
            d.row * (cellHeight + gapSize)
          })`
      )
      .on("click", (_event, d) => {
        // Handle the click event here, d is the datum for the clicked group
        setOpen(true);

        setModalTitle(d.name);
        setModalContent(d.description);
      });

    brickGroups
      .append("rect")
      .attr("width", cellWidth)
      .attr("height", cellHeight)
      .attr("fill", "transparent")
      .attr("stroke", "transparent");

    brickGroups
      .append("foreignObject")
      .html((d) => {
        const personRootClass = `person-root-container-${
          horisontal ? "horisontal" : "vertical"
        }`;
        const fontSizeStyle = `font-size:${fontSize}px`;
        const titleFontSizeStyle = `font-size:${fontSize + 1}px`;

        return `
          <div class="${`${personRootClass} ${classes.card}`}">
            <div class="img-container" style="height:${imgHeight}%">
              <img
                class="fit-picture"
                src="${d.logo}"
                alt="Grapefruit slice atop a pile of other slices"
                style="border:1px solid ${borderColor}"
              />
            </div>
            <div class="text-section" style="color:${textColor};${fontSizeStyle}">
              ${
                d?.name
                  ? `<div class="name-title" style="color:${textColor};${titleFontSizeStyle}">${d.name}</div>`
                  : ""
              }
              ${
                d?.field
                  ? `<div class="info" style="${fontSizeStyle}">${d.field}</div>`
                  : ""
              }
              ${
                d?.country
                  ? `<div class="info" style="${fontSizeStyle}">${d.country}</div>`
                  : ""
              }
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
    imgHeight,
    isEditMode,
    initialTransform,
  ]);

  return (
    <div
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
      className="hall-of-famev2"
    >
      <Tooltip title={"Center"}>
        <FitScreenIcon
          className="fit-screen-button"
          onClick={() => {
            if (initialTransform) {
              const svg = d3.select(svgRef.current);

              svg.attr(
                "transform",
                `translate(${initialTransform.x},${initialTransform.y}) scale(${initialTransform.k})`
              );
            }
          }}
          style={{
            position: "absolute",
            right: "10",
            top: title ? titleSize + titleTopSpace : 10,
            color: "white",
          }}
        />
      </Tooltip>
      <CardModal
        open={open}
        setOpen={setOpen}
        handleCancel={handleCancel}
        title={modalTitle}
        content={modalContent}
      />
      {title ? (
        <div
          style={{
            textAlign: "center",
            fontSize: `${titleSize}px`,
            fontFamily: "Arial, sans-serif",
            height: `${titleSize + 5}px`,
            color: textColor,
            marginTop: `${titleTopSpace}px`,
          }}
        >
          {title}
        </div>
      ) : (
        <></>
      )}

      <img
        src={"/assets/Logo.webp"}
        alt="Logo"
        height={logoSize || 0}
        style={{
          display: "block",
          position: "absolute",
          bottom: "10px",
          right: "10px",
          width: "auto",
          height: `${logoSize ? logoSize : 0}px`,
        }}
      />
      <Link
        href={linkData}
        target="_blank"
        style={{
          cursor: "pointer",
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          textDecoration: "none",
          color: "white",
          fontWeight: "bold",
          fontSize: `${linkSize}px`,
        }}
      >
        {linkData}
      </Link>
      <div
        style={{
          width: "100%",
          height: `calc(100vh - ${
            title ? titleSize + titleTopSpace + 5 : 0
          }px)`,
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

export default HallOfFameV2;
