import { InfoCircleOutlined, InfoCircleTwoTone } from "@ant-design/icons";
import { EditOutlined } from "@mui/icons-material";
import { NodeToolbar, Handle, Position, NodeResizer } from "reactflow";

function NodeWithToolbar({ id, type, data, selected, isEditMode }) {
  const onChange = (_evt) => {
    data.handleEdit(id);
  };

  const onInfoClick = (_evt) => {
    data.handleOpenDescription(id);
  };

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
            minWidth={100}
            minHeight={30}
          />
        </>
      ) : (
        <></>
      )}
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
        className="react-flow__custom-node"
        style={{
          color: data?.color,
        }}
      >
        {data?.label}
      </div>
    </>
  );
}

export default NodeWithToolbar;
