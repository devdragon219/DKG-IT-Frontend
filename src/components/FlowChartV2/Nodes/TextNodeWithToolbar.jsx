import { EditOutlined } from "@mui/icons-material";
import { NodeToolbar, Handle, Position, NodeResizer } from "reactflow";
import "suneditor/dist/css/suneditor.min.css";

function TextNodeWithToolbar({ id, data, selected, isEditMode, type }) {
  const onChange = (_evt) => {
    data.handleEdit(id, type);
  };

  return (
    <>
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
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <div
          className="sun-editor-editable"
          style={{
            height: "100%",
          }}
          dangerouslySetInnerHTML={{ __html: data?.text }}
        ></div>
      </div>
    </>
  );
}

export default TextNodeWithToolbar;
