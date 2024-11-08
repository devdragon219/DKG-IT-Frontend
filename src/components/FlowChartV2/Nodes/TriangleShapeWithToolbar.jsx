import { InfoCircleTwoTone } from "@ant-design/icons";
import { EditOutlined } from "@mui/icons-material";
import { useState } from "react";
import { NodeToolbar, Handle, Position, NodeResizer } from "reactflow";

function TriangleShapeWithToolbar({ id, data, selected, isEditMode }) {
  const onChange = (_evt) => {
    data.handleEdit(id);
  };
  const onInfoClick = (_evt) => {
    data.handleOpenDescription(id);
  };

  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  const effectiveWidth = width - 4; // Subtract for stroke and translation margin
  const effectiveHeight = height - 4;
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
          <g transform={`translate(2, 2)`}>
            <path
              d={`M0,${effectiveHeight} L${
                effectiveWidth / 2
              },0 L${effectiveWidth},${effectiveHeight} Z`}
              fill={data?.backgroundColor || "#3F8AE2"}
              stroke={data?.backgroundColor || "#3F8AE2"}
              strokeWidth="2"
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
            width: width / 2,
            left: "25%",
            height: "60%",
            top: "42%",
          }}
        >
          {data?.label}
        </div>
      </div>
    </>
  );
}

export default TriangleShapeWithToolbar;
