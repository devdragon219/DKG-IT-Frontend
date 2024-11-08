import { Segmented } from "antd";
import React, { useState } from "react";

const Nodes = ({ onDragStart }) => {
  return (
    <div>
      <div
        className="dndnode parent"
        onDragStart={(event) => onDragStart(event, "parent-node")}
        draggable
      >
        Parent Node
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "node")}
        draggable
      >
        Node
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "text-node")}
        draggable
      >
        Text Node
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "img-node")}
        draggable
      >
        Img Node
      </div>
    </div>
  );
};

const Shapes = ({ onDragStart }) => {
  return (
    <div
      style={{
        width: "110px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          class="sidebar-item"
          onDragStart={(event) => onDragStart(event, "circle-shape")}
          draggable
        >
          <svg width="28" height="28" class="shape-svg">
            <g transform="translate(1, 1)">
              <ellipse
                cx="13"
                cy="13"
                rx="13"
                ry="13"
                fill="transparent"
                stroke-width="1"
              ></ellipse>
            </g>
          </svg>
        </div>
        <div
          class="sidebar-item"
          onDragStart={(event) => onDragStart(event, "rect-shape")}
          draggable
        >
          <svg width="28" height="28" class="shape-svg">
            <g transform="translate(1, 1)">
              <rect
                x="0"
                y="0"
                width="26"
                height="26"
                fill="transparent"
                stroke-width="1"
              ></rect>
            </g>
          </svg>
        </div>
        <div
          class="sidebar-item"
          onDragStart={(event) => onDragStart(event, "hex-shape")}
          draggable
        >
          <svg width="28" height="28" class="shape-svg">
            <g transform="translate(1, 1)">
              <path
                d="M0,13 L2.6,0 L23.4,0 L26,13 L23.4,26 L2.6,26 Z"
                fill="transparent"
                stroke-width="1"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          class="sidebar-item"
          onDragStart={(event) => onDragStart(event, "diamond-shape")}
          draggable
        >
          <svg width="28" height="28" class="shape-svg">
            <g transform="translate(1, 1)">
              <path
                d="M0,13 L13,0 L26,13 L13,26 Z"
                fill="transparent"
                stroke-width="1"
              ></path>
            </g>
          </svg>
        </div>
        <div
          class="sidebar-item"
          onDragStart={(event) => onDragStart(event, "arrow-shape")}
          draggable
        >
          <svg width="28" height="28" class="shape-svg">
            <g transform="translate(1, 1)">
              <path
                d="M0,0 L23.4,0 L26,13 L23.4,26 L0,26 Z"
                fill="transparent"
                stroke-width="1"
              ></path>
            </g>
          </svg>
        </div>
        <div
          class="sidebar-item"
          onDragStart={(event) => onDragStart(event, "cylinder-shape")}
          draggable
        >
          <svg width="28" height="28" class="shape-svg">
            <g transform="translate(1, 1)">
              <path
                d="M0,3.25  L 0,22.75 A 13 3.25 0 1 0 26 22.75 L 26,3.25 A 13 3.25 0 1 1 0 3.25 A 13 3.25 0 1 1 26 3.25 A 13 3.25 0 1 1 0 3.25 z"
                fill="transparent"
                stroke-width="1"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          class="sidebar-item"
          onDragStart={(event) => onDragStart(event, "triangle-shape")}
          draggable
        >
          <svg width="28" height="28" class="shape-svg">
            <g transform="translate(1, 1)">
              <path
                d="M0,26 L13,0 L26,26 Z"
                fill="transparent"
                stroke-width="1"
              ></path>
            </g>
          </svg>
        </div>
        <div
          class="sidebar-item"
          onDragStart={(event) => onDragStart(event, "parallelogram-shape")}
          draggable
        >
          <svg width="28" height="28" class="shape-svg">
            <g transform="translate(1, 1)">
              <path
                d="M0,26 L6.5,0 L26,0 L19.5,26 Z"
                fill="transparent"
                stroke-width="1"
              ></path>
            </g>
          </svg>
        </div>
        <div
          class="sidebar-item"
          onDragStart={(event) => onDragStart(event, "plus-shape")}
          draggable
        >
          <svg width="28" height="28" class="shape-svg">
            <g transform="translate(1, 1)">
              <path
                d="M8.666666666666666,0 L17.333333333333332,0 L17.333333333333332,8.666666666666666 L26,8.666666666666666 L26,17.333333333333332 L26,17.333333333333332 L17.333333333333332,17.333333333333332 L17.333333333333332,26 L17.333333333333332,26 L8.666666666666666,26 L8.666666666666666,17.333333333333332 L0,17.333333333333332 L0,8.666666666666666 L8.666666666666666,8.666666666666666 Z"
                fill="transparent"
                stroke-width="1"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const [type, setType] = useState("Nodes");

  return (
    <aside>
      <div>
        <Segmented
          options={["Nodes", "Shapes"]}
          size="small"
          value={type}
          onChange={(value) => {
            setType(value);
          }}
        />
      </div>
      <span className="side-text">Drag {type}</span>
      {type === "Nodes" ? (
        <Nodes onDragStart={onDragStart} />
      ) : (
        <Shapes onDragStart={onDragStart} />
      )}
    </aside>
  );
};
