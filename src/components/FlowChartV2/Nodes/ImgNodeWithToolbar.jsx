import { InfoCircleTwoTone } from "@ant-design/icons";
import { EditOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { NodeToolbar, Handle, Position, NodeResizer } from "reactflow";

function ImgNodeWithToolbar({ id, data, selected, isEditMode, type }) {
  const [imgData, setImgData] = useState(
    "https://www.viewhotels.jp/asakusa-annex/wp-content/uploads/sites/6/2020/03/test-img.jpg"
  );
  const onChange = (_evt) => {
    data.handleEdit(id, type);
  };

  const onInfoClick = (_evt) => {
    data.handleOpenDescription(id);
  };

  const getBase64FromUrl = async (url) => {
    const imageData = await fetch(url);
    const blob = await imageData.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;

        resolve(base64data);
      };
    });
  };

  useEffect(() => {
    if (data?.imglink) {
      getBase64FromUrl(data?.imglink).then((data) => {
        setImgData(data);
      });
    }
  }, [data]);

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

      <img
        className="react-flow__img-node"
        src={data?.imglink}
        alt="Logo"
        style={{ display: "block", cursor: "pointer" }}
      />
    </>
  );
}

export default ImgNodeWithToolbar;
