import { useEffect, useState } from "react";
import { Button, Modal, Select } from "antd";
import KeyParamForm from "../KeyParamForm";

const EditMenuItemsModal = ({
  isEditMenuItemsModalOpen,
  setIsEditMenuItemsModalOpen,
  setPagesData,
  selectedPage,
  pagesData,
}) => {
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState("");

  useEffect(() => {
    setData(
      JSON.parse(
        JSON.stringify(pagesData?.[selectedPage - 1]?.macro_panel?.data)
      )
    );
  }, [pagesData, selectedPage]);

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
              setData(dataSource);
              setIsEditMenuItemsModalOpen(false);
            }}
          >
            Cancel
          </Button>,
          <Button
            type="primary"
            disabled={editingKey}
            onClick={() => {
              setPagesData((prevState) => {
                const tempState = JSON.parse(JSON.stringify(prevState));
                tempState[selectedPage - 1].macro_panel.data = data;
                
                return tempState;
              });

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
