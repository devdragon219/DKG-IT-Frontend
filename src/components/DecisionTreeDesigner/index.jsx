import React, { useState } from "react";
import Tree from "react-d3-tree";
import { makeStyles } from "@mui/styles";
import { NodeComponent } from "./NodeComponent";

import { useCallback } from "react";

import { ModalComponent } from "./ModalComponent";
import { NodeComponentVert } from "./NodeComponentVert";

const useStyles = makeStyles(() => ({
  wrapper: {
    width: "100%",
    height: "100vh",
    boxSizing: "border-box",
    position: "relative",
    border: "1px solid #ccc",
    background: "#fff",
  },
  tree: {
    margin: "auto",
    fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
    height: "100%",
    "& .stroke-dasharray": {
      strokeDasharray: "5,5",
    },
    "& .stroke-width-4": {
      strokeWidth: "4 !important",
    },
    "& .stroke-width-3": {
      strokeWidth: "3 !important",
    },
    "& .stroke-width-2": {
      strokeWidth: "2 !important",
    },
    "& .stroke-width-1": {
      strokeWidth: "1 !important",
    },
    "& .custom-link": {
      stroke: "rgba(25, 118, 210)",
      strokeWidth: "2",
    },
    "& .custom-link_0c4aa9": {
      stroke: "#0c4aa9 !important",
      strokeDasharray: "5,5",
    },
    "& .custom-link_3901a9": {
      stroke: "#3901a9 !important",
    },
    "& .custom-link_056679": {
      stroke: "#056679 !important",
    },
    "&.custom-link_bd7316": {
      stroke: "#bd7316 !important",
    },
    "& .custom-link_7fa878": {
      stroke: "#7fa878 !important",
    },
    "& .custom-link_0870b0": {
      stroke: "#0870b0 !important",
    },
    "& .custom-link_cb403f": {
      stroke: "#cb403f !important",
    },
    "& .custom-link_b74a9a": {
      stroke: "#b74a9a !important",
    },
    "& .custom-link_626262": {
      stroke: "#626262 !important",
    },
    "& .custom-link_35c9ee": {
      stroke: "#35c9ee !important",
    },
  },
}));

export default function DecisionTreeDesigner({
  colorsJson,
  position,
  zoomJson,
  data,
  nodeSize,
  handlePositionUpdate,
  isHorisontal,
  isEditMode,
}) {
  const classes = useStyles();

  const [modalData, setModalData] = useState({});
  const [colors, setColors] = useState(
    colorsJson || [
      "0c4aa9",
      "3901a9",
      "056679",
      "7fa878",
      "bd7316",
      "0870b0",
      "cb403f",
      "b74a9a",
      "626262",
      "35c9ee",
    ]
  );

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={classes.wrapper}>
      <ModalComponent
        handleClose={handleClose}
        open={open}
        modalData={modalData}
      />
      <div className={classes.tree}>
        <Tree
          svgClassName={"tree-gr"}
          id="treeWrapper"
          data={data || {}}
          collapsible={true}
          separation={{ nonSiblings: 2, siblings: 1 }}
          nodeSize={nodeSize}
          renderCustomNodeElement={(rd3tNodeProps) => {
            return isHorisontal ? (
              <NodeComponent
                handleOpen={handleOpen}
                nodeData={rd3tNodeProps?.nodeDatum}
                rd3tNodeProps={rd3tNodeProps}
                setModalData={setModalData}
                foreignObjectProps={{
                  width: 200,
                  height: 200,
                  // x: -(nodeSize.x / 2),
                  y: 35,
                }}
              />
            ) : (
              <NodeComponentVert
                handleOpen={handleOpen}
                nodeData={rd3tNodeProps?.nodeDatum}
                rd3tNodeProps={rd3tNodeProps}
                setModalData={setModalData}
                foreignObjectProps={{
                  width: 200,
                  height: 200,
                  // x: -(nodeSize.x / 2),
                  y: 35,
                }}
              />
            );
          }}
          rootNodeClassName="node__root"
          branchNodeClassName="node__branch"
          leafNodeClassName="node__leaf"
          pathClassFunc={({ target }) => {
            let classes = "custom-link";
            if (target?.data?.color) {
              classes =
                classes + ` custom-link_${colors[target?.data?.color - 1]}`;
            }

            if (target?.data?.strokeWidth) {
              classes = classes + ` stroke-width-${target?.data?.strokeWidth}`;
            }

            if (target?.data?.dasharray) {
              classes = classes + ` stroke-dasharray`;
            }

            return classes;
          }}
          zoom={zoomJson}
          scaleExtent={
            isEditMode ? undefined : { max: zoomJson * 3, min: zoomJson }
          }
          translate={position}
          onUpdate={handlePositionUpdate}
          centerNode={true}
          orientation={isHorisontal ? "horizontal" : "vertical"}
        />
      </div>
    </div>
  );
}
