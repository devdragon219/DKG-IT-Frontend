import React, { useEffect, useState } from "react";
import { Form, Input, Modal, Switch, ColorPicker } from "antd";

const AddPageToolModal = ({
  isAddSectionToolModalOpen,
  setIsAddSectionToolModalOpen,
  addItem,
  editData,
  editItem,
  setEditData,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (editData?.key) {
      const { slug } = editData.data;
      form.setFieldsValue({ slug });
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
      setIsAddSectionToolModalOpen(false);
      form.resetFields();
      return;
    }
    addItem("iframeComponent", {
      ...data,
    });
    setIsAddSectionToolModalOpen(false);
    form.resetFields();
  };

  const onFinishFailed = () => {};

  return (
    <Modal
      title="iFrame Slug"
      open={isAddSectionToolModalOpen}
      onOk={() => form.submit()}
      onCancel={() => {
        form.setFieldsValue({});
        setIsAddSectionToolModalOpen(false);
        setEditData(null);
      }}
      centered
      key={editData?.key || "CardModalKey"}
    >
      <Form
        name="basic"
        form={form}
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Slug"
          name="slug"
          rules={[{ required: true, message: "Please input the slug!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddPageToolModal;
