import { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import KeyParamForm from "./KeyParamForm";

const EditMenuItemsModal = ({
  isEditMenuItemsModalOpen,
  setIsEditMenuItemsModalOpen,
  macroPanel,
  onMacroPanelDataChange,
}) => {
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState("");

  useEffect(() => {
    setData(macroPanel?.data);
  }, [macroPanel]);

  return (
    <>
      <Modal
        title={"Edit Macro Panel"}
        width={1000}
        open={isEditMenuItemsModalOpen}
        footer={[
          <Button
            key="back"
            onClick={() => {
              setIsEditMenuItemsModalOpen(false);
            }}
            disabled={editingKey}
          >
            Cancel
          </Button>,
          <Button
            type="primary"
            onClick={() => {
              onMacroPanelDataChange(data);
              setIsEditMenuItemsModalOpen(false);
            }}
          >
            Submit
          </Button>,
        ]}
        centered
      >
        <KeyParamForm
          dataSource={data}
          setDataSource={setData}
          editingKey={editingKey}
          setEditingKey={setEditingKey}
        />
      </Modal>
    </>
  );
};

export default EditMenuItemsModal;
