import React, { useEffect, useRef, useState } from "react";
import { Network } from "vis-network/standalone/esm/vis-network";

const NetworkDiagram = (props) => {
  const networkContainer = useRef(null);
  const network = useRef(null);
  const [nodePosition, setNodePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const nodes = props?.data?.originalData?.nodes;
    const edges = props?.data?.originalData?.edges;
    const data = { nodes, edges };

    const options = {
      nodes: {
        shape: "dot",
        size: 16,
      },
      edges: {
        color: "gray",
        smooth: {
          enabled: false,
        },
      },
      physics: {
        enabled: false,
      },
    };

    network.current = new Network(networkContainer.current, data, options);

    network.current.on("dragging", function (params) {
      if (params.nodes.length > 0) {
        const nodeId = params.nodes[0];
        const nodePosition = network.current.getPositions([nodeId]);
        const { x, y } = nodePosition[nodeId];
        setNodePosition({ x, y });
      }
    });
  }, [props.data]);

  return (
    <div
      style={{
        height: "100vh",
        position: "relative",
      }}
    >
      <div
        ref={networkContainer}
        style={{ height: "100%", paddingRight: "150px" }}
      ></div>
      {props?.isEditMode ? (
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            backgroundColor: "white",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          <p>x: {nodePosition.x}</p>
          <p>y: {nodePosition.y}</p>
        </div>
      ) : null}
      <div
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          zIndex: 10,
        }}
      >
        {props?.data?.originalData?.legendTitle && (
          <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
            {props.data.originalData.legendTitle}
          </h3>
        )}
        {props?.data?.originalData?.legendItems?.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            <div
              style={{
                width: "16px",
                height: "16px",
                backgroundColor: item.color.background,
                marginRight: "5px",
                clipPath:
                  item.shape === "dot"
                    ? "circle(50%)"
                    : item.shape === "diamond"
                    ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                    : item.shape === "triangle"
                    ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                    : item.shape === "square"
                    ? "none"
                    : item.shape === "star"
                    ? "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
                    : "none",
              }}
            />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetworkDiagram;
