import { EditOutlined } from "@ant-design/icons";
import React from "react";
import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  getSmoothStepPath,
  getStraightPath,
} from "reactflow";
import FloatingEdge from "./FloatingEdge";

export default function ButtonEdge({
  id,
  source,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  target,
  style = {},
  markerEnd,
  markerStart,
  data,
  isEditMode,
}) {
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const [edgePathBezier] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const [edgeStraightPath] = getStraightPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const onEdgeClick = () => {
    console.log("11111");
    data.handleClick(id);
  };

  const getPath = (type) => {
    switch (type) {
      case "bezier":
        return edgePathBezier;
        break;
      case "step":
        return edgePath;
        break;
      case "straight":
        return edgeStraightPath;
        break;
    }
  };
  console.log(data.floating, 121212);
  return (
    <>
      {data.floating ? (
        <FloatingEdge
          id={id}
          source={source}
          target={target}
          markerEnd={markerEnd}
          markerStart={markerStart}
          style={style}
          type={data.type}
        />
      ) : (
        <BaseEdge
          path={getPath(data.type)}
          markerEnd={markerEnd}
          markerStart={markerStart}
          style={style}
        />
      )}

      {isEditMode ? (
        <EdgeLabelRenderer>
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              fontSize: 12,
              pointerEvents: "all",
            }}
            className="nodrag nopan"
          >
            <EditOutlined
              style={{
                backgroundColor: "#ffffff",
                zIndex: 1003,
                cursor: "pointer",
              }}
              onClick={onEdgeClick}
            />
          </div>
        </EdgeLabelRenderer>
      ) : (
        <></>
      )}
    </>
  );
}
