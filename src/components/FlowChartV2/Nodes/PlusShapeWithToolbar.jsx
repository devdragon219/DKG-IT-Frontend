import { InfoCircleTwoTone } from "@ant-design/icons";
import { EditOutlined } from "@mui/icons-material";
import { useState } from "react";
import { NodeToolbar, Handle, Position, NodeResizer } from "reactflow";

function PlusShapeWithToolbar({ id, data, selected, isEditMode }) {
  const onChange = (_evt) => {
    data.handleEdit(id);
  };

  const onInfoClick = (_evt) => {
    data.handleOpenDescription(id);
  };

  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  const effectiveWidth = width - 4;
  const effectiveHeight = height - 4;

  const unitWidth = effectiveWidth / 3;
  const unitHeight = effectiveHeight / 3;
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
              d={`M${unitWidth},0 L${2 * unitWidth},0 L${
                2 * unitWidth
              },${unitHeight} L${3 * unitWidth},${unitHeight} L${
                3 * unitWidth
              },${2 * unitHeight} L${3 * unitWidth},${2 * unitHeight} L${
                2 * unitWidth
              },${2 * unitHeight} L${2 * unitWidth},${3 * unitHeight} L${
                2 * unitWidth
              },${3 * unitHeight} L${unitWidth},${
                3 * unitHeight
              } L${unitWidth},${2 * unitHeight} L0,${
                2 * unitHeight
              } L0,${unitHeight} L${unitWidth},${unitHeight} Z`}
              fill={data?.backgroundColor || "#CF4C2C"}
              stroke={data?.backgroundColor || "#CF4C2C"}
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
            top: 0,
          }}
        >
          {data?.label}
        </div>
      </div>
    </>
  );
}

export default PlusShapeWithToolbar;
