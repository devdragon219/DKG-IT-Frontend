import { EditOutlined } from "@ant-design/icons";
import React from "react";
import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  getSmoothStepPath,
} from "reactflow";

export default function ButtonEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
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

  const onEdgeClick = () => {
    data.handleClick(id);
  };

  return (
    <>
      <BaseEdge
        path={data.type === "bezier" ? edgePathBezier : edgePath}
        markerEnd={markerEnd}
        style={style}
      />
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
