import { useEffect, useState } from "react";
import { Form, Input, Modal, ColorPicker } from "antd";
import FileUploadComponent from "./UploadImg";

const ImgEditComponentModal = ({
  isImgNodeEditOpen,
  editedID,
  setEditedID,
  nodes,
  handlNodeChange,
}) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    const data = form.getFieldsValue(true);

    handlNodeChange({
      newData: { ...data },
      nodeId: editedID,
    });
    form.resetFields();
    setEditedID(null);
  };

  useEffect(() => {
    const node = nodes.find((el) => el.id === editedID);
    if (node?.id) {
      const { data } = node;

      form.setFieldsValue({ imglink: data.imglink });
    } else {
      form.resetFields();
    }
  }, [nodes, editedID, form]);

  const onFinishFailed = () => {};

  return (
    <>
      <Modal
        title="Img Node Edit"
        open={isImgNodeEditOpen}
        onOk={() => {
          form.submit();
        }}
        onCancel={() => {
          form.setFieldsValue({});
          setEditedID(null);
        }}
        centered
        key={"CardModalKey"}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          form={form}
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Link" name="imglink">
            <Input />
          </Form.Item>
          <FileUploadComponent
            onChange={(imgData) => {
              form.setFieldsValue({ imglink: imgData?.[0]?.url });
            }}
          />
        </Form>
      </Modal>
    </>
  );
};

export default ImgEditComponentModal;
