import { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import NavForm from "../../NavForm";

const EditMenuItemsModal = ({
  isEditMenuItemsModalOpen,
  setIsEditMenuItemsModalOpen,
  dataSource,
  setDataSource,
}) => {
  const [data, setData] = useState(dataSource);
  const [editingKey, setEditingKey] = useState("");

  useEffect(() => {
    setData(JSON.parse(JSON.stringify(dataSource)));
  }, [dataSource]);
  //console.log(data, 5555);
  return (
    <>
      <Modal
        title="Edit Menu Items"
        width={1000}
        open={isEditMenuItemsModalOpen}
        destroyOnClose={true}
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
              setDataSource(data);
              setIsEditMenuItemsModalOpen(false);
            }}
          >
            Submit
          </Button>,
        ]}
        centered
      >
        <NavForm
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
