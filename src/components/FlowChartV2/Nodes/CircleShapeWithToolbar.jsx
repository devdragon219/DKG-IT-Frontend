import { InfoCircleTwoTone } from "@ant-design/icons";
import { EditOutlined } from "@mui/icons-material";
import { useState } from "react";
import { NodeToolbar, Handle, Position, NodeResizer } from "reactflow";

function CircleShapeWithToolbar({ id, data, selected, isEditMode }) {
  const onChange = (_evt) => {
    data.handleEdit(id);
  };
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  const onInfoClick = (_evt) => {
    data.handleOpenDescription(id);
  };

  const strokeWidth = 2; // Fixed stroke width
  const translateOffset = 1; // Adjusted for the stroke width
  const rx = (width - strokeWidth * 2) / 2; // Adjust for stroke width and calculate radius x
  const ry = (height - strokeWidth * 2) / 2; // Adjust for stroke width and calculate radius y
  const cx = rx + translateOffset; // Center x adjusted for translation
  const cy = ry + translateOffset; // Center y adjusted for translation
  return (
    <>
      <Handle
        type="target"
        id="Top"
        position={Position.Top}
        style={{
          background: "#555",
          visibility: isEditMode ? undefined : "hidden",
        }}
        isConnectable={true}
      />
      <Handle
        type="source"
        id="Bottom"
        position={Position.Bottom}
        style={{
          background: "#555",
          visibility: isEditMode ? undefined : "hidden",
        }}
        isConnectable={true}
      />
      <Handle
        type="target"
        id="Left"
        position={Position.Left}
        style={{
          background: "#555",
          visibility: isEditMode ? undefined : "hidden",
        }}
        isConnectable={true}
      />
      <Handle
        type="source"
        id="Right"
        position={Position.Right}
        style={{
          background: "#555",
          visibility: isEditMode ? undefined : "hidden",
        }}
        isConnectable={true}
      />
      {isEditMode ? (
        <>
          <NodeToolbar
            isVisible={data.forceToolbarVisible || undefined}
            position={"left"}
          >
            <EditOutlined
              style={{
                cursor: "pointer",
              }}
              onClick={onChange}
            />
          </NodeToolbar>
          <NodeResizer
            color="#ff0071"
            isVisible={selected}
            minWidth={30}
            minHeight={30}
            onResize={(_a, params) => {
              setWidth(params.width);
              setHeight(params.height);
            }}
          />
        </>
      ) : (
        <></>
      )}
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <svg width={width} height={height} className="shape-svg">
          <g transform={`translate(${translateOffset}, ${translateOffset})`}>
            <ellipse
              cx={cx}
              cy={cy}
              rx={rx}
              ry={ry}
              fill={data?.backgroundColor}
              stroke={data?.backgroundColor}
              strokeWidth={strokeWidth}
              fillOpacity="0.8"
            />
          </g>
        </svg>
        {data?.hasDescription ? (
          <InfoCircleTwoTone
            onClick={onInfoClick}
            style={{
              position: "absolute",
              right: "3px",
              top: "3px",
              fontSize: "8px",
              cursor: "pointer",
              zIndex: 1000,
            }}
          />
        ) : (
          <></>
        )}
        <div
          className="react-flow__text-node"
          style={{
            color: data?.color,
            position: "absolute",
            top: 0,
          }}
        >
          {data?.label}
        </div>
      </div>
    </>
  );
}

export default CircleShapeWithToolbar;
