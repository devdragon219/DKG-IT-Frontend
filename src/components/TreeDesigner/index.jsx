import React, { useState } from "react";
import Tree from "react-d3-tree";
import { makeStyles } from "@mui/styles";
import CustomSlider from "../CustomSlider";
import { getUniqueYears, getTreeData } from "./utils";
import { NodeComponent } from "./NodeComponent";
import { NodeComponentVert } from "./NodeComponentVert";

const useStyles = makeStyles(() => ({
  "@keyframes flash": {
    "0%": {
      r: 20,
      fill: "#e7e7e7",
      strokeWidth: "5",
      stroke: "#94519D",
      opacity: "1",
    },
    "99%": {
      r: 40,
      fill: "#d2d2d2",
      strokeWidth: "30",
      stroke: "#94519D",
      opacity: "0.2",
    },
    "100%": {
      r: 20,
      fill: "#94519D",
      stroke: "#fff",
      opacity: "1",
    },
  },
  wrapper: {
    width: "100%",
    height: "100vh",
    boxSizing: "border-box",
    position: "relative",
    border: "1px solid #ccc",
    background: "#fff",
    backgroundColor: "transparent",
  },
  slider: {
    background: "rgba(255,255,255, 0.4)",
    opacity: "0.8",
    borderRadius: "16px",
    position: "absolute",
    bottom: "24px",
    height: "24px",
    width: "60%",
    left: "0",
    right: "0",
    margin: "0 auto",
    padding: "16px 24px 24px",
    transition: "400ms",
    "&:hover": {
      opacity: "1",
      background: "rgba(255,255,255, 0.9)",
      transition: "400ms",
      boxShadow: "0 -2px 3px rgba(0,0,0, 0.2)",
    },
  },
  tree: {
    backgroundColor: "transparent",
    display: "flex",
    width: "100%",
    height: "100%",
    "& svg": {
      width: "100%",
      height: "100%",
    },
    "& .node__root > circle": {
      fill: "#fff",
      stroke: "#0c519c",
      r: "20",
      strokeWidth: "5",
    },

    "& .node__branch > circle": {
      fill: "rgb(140, 186, 232)",
      stroke: "#fff",
      r: "20",
      strokeWidth: "5",
    },

    "& .node__branch__current > circle": {
      animation: `$flash 500ms 1`,
      fill: "#94519D",
      stroke: "#fff",
      r: "20",
      strokeWidth: "5",
    },

    "& .node__branch__future > circle": {
      fill: "#e7e7e7",
      stroke: "#fff",
      r: "20",
      strokeWidth: "5",
    },

    "& .node__branch__future > g > text": {
      fill: "#e7e7e7",
    },

    "& .node__branch__future > foreignObject > div > h3": {
      color: "#e7e7e7",
    },

    "& .node__branch__future > foreignObject > div > span": {
      color: "#e7e7e7",
    },

    "& .node__leaf > circle": {
      fill: "rgb(140, 186, 232)",
      stroke: "#fff",
      r: "20",
      strokeWidth: "5",
    },

    "& .custom-link": {
      stroke: "rgba(25, 118, 210)",
      strokeWidth: "3",
    },
    "& .custom-link_future": {
      stroke: "#C0C0C0",
      strokeWidth: "1",
    },
    "& text": {
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: "22px",
    },

    "& h3": {
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: "22px",
    },

    "& span": {
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: "22px",
    },

    "& .node__label": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    "& .node__label-root": {
      display: "flex",
      justifyContent: "center",
      alignItems: "end",
      height: "100%",
    },
  },
}));

export default function TreeDesigner({
  dataProps,
  startPoint,
  isHorisontal,
  nodeSize,
  handlePositionUpdate,
  zoomJson,
  position,
}) {
  const years = getUniqueYears(dataProps);
  const classes = useStyles();
  const [year, setYear] = useState(years[startPoint]);
  const [data, setData] = useState(getTreeData(year, dataProps));

  React.useEffect(() => {
    setData(getTreeData(year, dataProps));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.tree}>
        <Tree
          data={data}
          separation={{ nonSiblings: 3, siblings: 1 }}
          nodeSize={nodeSize}
          rootNodeClassName="node__root"
          branchNodeClassName="node__branch"
          renderCustomNodeElement={(rd3tNodeProps) => {
            return isHorisontal ? (
              <NodeComponent
                nodeData={rd3tNodeProps?.nodeDatum}
                rd3tNodeProps={rd3tNodeProps}
                year={year}
                foreignObjectProps={{
                  width: nodeSize.x,
                  height: nodeSize.y,
                  x: -(nodeSize.x / 2),
                  y: -nodeSize.y - 20,
                }}
              />
            ) : (
              <NodeComponentVert
                nodeData={rd3tNodeProps?.nodeDatum}
                rd3tNodeProps={rd3tNodeProps}
                year={year}
                foreignObjectProps={{
                  width: nodeSize.x,
                  height: nodeSize.y,
                  x: -(nodeSize.x / 2),
                  y: -nodeSize.y - 20,
                }}
              />
            );
          }}
          leafNodeClassName="node__leaf"
          pathClassFunc={({ target }) => {
            if (target.data.classes === "future") {
              return "custom-link_future";
            }
            return "custom-link";
          }}
          zoom={zoomJson}
          translate={position}
          onUpdate={handlePositionUpdate}
          orientation={isHorisontal ? "horizontal" : "vertical"}
        />
      </div>
      <div className={classes.slider}>
        <CustomSlider years={years} setYear={setYear} startPoint={startPoint} />
      </div>
    </div>
  );
}
