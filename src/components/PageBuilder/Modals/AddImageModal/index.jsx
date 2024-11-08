import React, { useEffect } from "react";
import { Form, Modal } from "antd";
import FileUploadComponent from "./UploadImg";

const AddImageModal = ({
  isAddImageToolModalOpen,
  setIsAddImageToolModalOpen,
  addItem,
  editData,
  editItem,
  setEditData,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (editData?.key) {
      const { image } = editData.data;
      form.setFieldsValue({ image });
    } else {
      form.resetFields();
    }
  }, [editData, form]);

  const onFinish = () => {
    const data = form.getFieldsValue(true);
    if (editData?.key) {
      editItem(editData?.key, {
        ...data,
      });
      setIsAddImageToolModalOpen(false);
      form.resetFields();
      return;
    }
    addItem("ImageSection", {
      ...data,
    });
    setIsAddImageToolModalOpen(false);
    form.resetFields();
  };

  const onFinishFailed = () => {};

  return (
    <Modal
      title="Add Image"
      open={isAddImageToolModalOpen}
      onOk={() => form.submit()}
      onCancel={() => {
        form.setFieldsValue({});
        setIsAddImageToolModalOpen(false);
        setEditData(null);
      }}
      centered
      key={editData?.key || "AddImageModalKey"}
    >
      <Form
        name="imageForm"
        form={form}
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Image"
          name="image"
          rules={[{ required: true, message: "Please upload an image!" }]}
        >
          <FileUploadComponent
            onChange={(data) => {
              form.setFieldsValue({ image: data });
            }}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddImageModal;
