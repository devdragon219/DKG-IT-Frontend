import { EditOutlined } from "@mui/icons-material";
import { NodeToolbar, Handle, Position, NodeResizer } from "reactflow";

function NodeWithToolbar({ id, type, data, selected, isEditMode, ...props }) {
  const onChange = (_evt) => {
    data.handleEdit(id);
  };
  // console.log(props);
  return (
    <>
      {type === "custom-end" || type === "custom-middle" ? (
        <Handle
          type="target"
          position={Position.Top}
          style={{ background: "#555" }}
          isConnectable={true}
        />
      ) : (
        <></>
      )}
      {type === "custom-start" || type === "custom-middle" ? (
        <Handle
          type="source"
          position={Position.Bottom}
          style={{ background: "#555" }}
          isConnectable={true}
        />
      ) : (
        <></>
      )}
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

      <div className="react-flow__custom-node">{data?.label}</div>
    </>
  );
}

export default NodeWithToolbar;
