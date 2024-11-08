import { useEffect, useState } from "react";
import { Checkbox, Input, Modal } from "antd";

const AddIframeModal = ({
  isIframeModalOpen,
  setIsIframeModalOpen,
  addItem,
  editData,
  editItem,
  setEditData,
}) => {
  const [data, setData] = useState("");
  const [hasShadow, setHasShadow] = useState(true);

  useEffect(() => {
    if (editData?.key) {
      setData(editData.data);
      setHasShadow(editData?.itemConfig?.shadow);
    } else {
      setData("");
      setHasShadow(true);
    }
  }, [editData]);

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isIframeModalOpen}
        onOk={() => {
          if (editData?.key) {
            editItem(editData?.key, data, hasShadow);
            setIsIframeModalOpen(false);
            setData("");
            setHasShadow(true);
            return;
          }
          addItem("IframeComponent", data, hasShadow);
          setIsIframeModalOpen(false);
          setData("");
          setHasShadow(true);
        }}
        onCancel={() => {
          setData("");
          setIsIframeModalOpen(false);
          setEditData(null);
        }}
        centered
      >
        <Input
          defaultValue={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <Checkbox
          checked={hasShadow}
          onChange={() => {
            setHasShadow(!hasShadow);
          }}
        >
          Has Shadow Box
        </Checkbox>
      </Modal>
    </>
  );
};

export default AddIframeModal;
