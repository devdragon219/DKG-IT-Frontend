import { useCallback } from "react";
import {
  useStore,
  getBezierPath,
  getSmoothStepPath,
  getStraightPath,
} from "reactflow";

import { getEdgeParams } from "../utils";

function FloatingEdge({
  id,
  source,
  target,
  markerEnd,
  markerStart,
  style,
  type,
}) {
  const sourceNode = useStore(
    useCallback((store) => store.nodeInternals.get(source), [source])
  );
  const targetNode = useStore(
    useCallback((store) => store.nodeInternals.get(target), [target])
  );

  if (!sourceNode || !targetNode) {
    return null;
  }

  const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(
    sourceNode,
    targetNode
  );

  const [edgePathBezier] = getBezierPath({
    sourceX: sx,
    sourceY: sy,
    sourcePosition: sourcePos,
    targetPosition: targetPos,
    targetX: tx,
    targetY: ty,
  });

  const [edgePath] = getSmoothStepPath({
    sourceX: sx,
    sourceY: sy,
    sourcePosition: sourcePos,
    targetPosition: targetPos,
    targetX: tx,
    targetY: ty,
  });

  const [edgeStraightPath] = getStraightPath({
    sourceX: sx,
    sourceY: sy,
    sourcePosition: sourcePos,
    targetPosition: targetPos,
    targetX: tx,
    targetY: ty,
  });

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

  return (
    <path
      id={id}
      className="react-flow__edge-path"
      d={getPath(type)}
      markerEnd={markerEnd}
      markerStart={markerStart}
      style={style}
    />
  );
}

export default FloatingEdge;
