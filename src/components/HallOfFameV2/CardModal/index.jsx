import React, { useState } from "react";
import { Button, Modal } from "antd";

const CardModal = ({
  open,
  title = "Title",
  content = "Content",
  handleCancel,
}) => {
  const handleOk = () => {
    console.log();
  };

  return (
    <Modal
      centered
      open={open}
      title={title}
      onCancel={handleCancel}
      footer={[]}
    >
      <p>{content}</p>
    </Modal>
  );
};

export default CardModal;
