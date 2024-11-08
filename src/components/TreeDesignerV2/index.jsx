import React, { useEffect, useState } from "react";
import Tree from "react-d3-tree";
import { makeStyles } from "@mui/styles";
import CustomSlider from "../CustomSlider";
import { getUniqueYears, getTreeData } from "./utils";
import { NodeComponent } from "./NodeComponent";
import { getDepth } from "./_utils";

const useStyles = makeStyles(() => ({
  "@keyframes flash": {
    "0%": {
      r: 20,
      fill: "rgb(140, 186, 232)",
      strokeWidth: "5",
      stroke: "rgb(140, 186, 232)",
      opacity: "1",
    },
    "99%": {
      r: 40,
      fill: "rgb(140, 186, 232)",
      strokeWidth: "30",
      stroke: "rgb(140, 186, 232)",
      opacity: "0.2",
    },
    "100%": {
      r: 20,
      fill: "rgb(140, 186, 232)",
      stroke: "#fff",
      opacity: "1",
    },
  },
  wrapper: {
    width: "100%",
    height: "86vh",
    boxSizing: "border-box",
    position: "relative",
    border: "1px solid #ccc",
    background: "#fff",
    backgroundColor: "transparent",
  },
  slider: {
    zIndex: 1000,
    background: "rgba(255,255,255, 0.4)",
    opacity: "0.8",
    borderRadius: "16px",
    position: "absolute",
    top: "10px",
    height: "24px",
    width: "70%",
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
      strokeWidth: "20",
    },

    "& .node__branch__current > circle": {
      animation: `$flash 500ms 1`,
      fill: "rgb(140, 186, 232)",
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
      strokeWidth: "4",
    },
    "& .custom-link_future": {
      stroke: "#C0C0C0",
      strokeWidth: "4",
    },
    "& text": {
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: "22px",
    },

    "& h3": {
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: "60px",
      fontWeight: "bold",
    },

    "& span": {
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: "40px",
      fontWeight: "bold",
    },

    "& .node__label": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
}));

export default function TreeDesignerV2(props) {
  const dataProps = props?.data.originalData.data;
  const startPoint = props?.data.originalData?.startPoint || 0;
  const [nodeSize, setNodeSize] = useState({ x: 1700, y: 60 });
  const [translate, setTranslate] = useState({ x: 10, y: 270 });
  const [zoom, setZoom] = useState(0.1);
  const [width, setWidth] = useState(window.innerWidth);
  const years = getUniqueYears(dataProps);
  const classes = useStyles();
  const [year, setYear] = useState(years[startPoint]);
  const [data, setData] = useState(getTreeData(year, dataProps));

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  React.useEffect(() => {
    setData(getTreeData(year, dataProps));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year]);

  React.useEffect(() => {
    const depth = getDepth(data);

    setNodeSize({
      ...nodeSize,
      x: 2400 - depth * 100,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (width > 2000 && width > 800) {
      setTranslate({ x: 220, y: 560 });
      setZoom(0.2);
    }
    if (width > 1000 && width < 2000) {
      setTranslate({ x: 220, y: 260 });
      setZoom(0.1);
    }
    if (width < 1000 && width > 800) {
      setTranslate({ x: 10, y: 260 });
      setZoom(0.08);
    }

    if (width < 800 && width > 500) {
      setTranslate({ x: 10, y: 260 });
      setZoom(0.07);
    }

    if (width < 500) {
      setTranslate({ x: 10, y: 260 });
      setZoom(0.04);
    }
  }, [width]);

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
            return (
              <NodeComponent
                nodeData={rd3tNodeProps?.nodeDatum}
                rd3tNodeProps={rd3tNodeProps}
                year={year}
                foreignObjectProps={{
                  width: nodeSize.x - 100,
                  height: nodeSize.y + 60,
                  x: -(nodeSize.x / 2),
                  y: -nodeSize.y - 85,
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
          zoom={zoom}
          scaleExtent={{ max: 0.3, min: 0.07 }}
          translate={translate}
        />
      </div>
      <div className={classes.slider}>
        <CustomSlider years={years} setYear={setYear} startPoint={startPoint} />
      </div>
    </div>
  );
}
