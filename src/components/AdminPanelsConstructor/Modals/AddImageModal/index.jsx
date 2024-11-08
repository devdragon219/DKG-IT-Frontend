import { useState } from "react";

import { Modal } from "antd";

const AddImageModal = ({ isImageModalOpen, setIsImageModalOpen }) => {
  const [data, setData] = useState("");
  return (
    <>
      <Modal
        title="Basic Modal"
        open={isImageModalOpen}
        onOk={() => {
          console.log(7777);
        }}
        onCancel={() => setIsImageModalOpen(false)}
        centered
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default AddImageModal;
