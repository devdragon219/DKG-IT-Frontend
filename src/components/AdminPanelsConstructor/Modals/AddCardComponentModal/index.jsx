import { useEffect, useState } from "react";
import { Checkbox, Form, Input, Modal, Switch } from "antd";
import FileUploadComponent from "../AddSectionTool/UploadImg";

const AddCardComponentModal = ({
  isCardComponentOpen,
  setIsCardComponentOpen,
  addItem,
  editData,
  editItem,
  setEditData,
}) => {
  const [form] = Form.useForm();
  const [imgData, setImgData] = useState(null);
  const [hasShadow, setHasShadow] = useState(true);

  useEffect(() => {
    if (editData?.key) {
      form.setFieldsValue(editData.data);
      setHasShadow(editData?.itemConfig?.shadow);
    } else {
      form.resetFields();
      setHasShadow(true);
    }
  }, [editData, form]);

  const onFinish = () => {
    const data = form.getFieldsValue(true);
    if (editData?.key) {
      editItem(
        editData?.key,
        {
          ...data,
          img: imgData,
        },
        hasShadow
      );
      setIsCardComponentOpen(false);
      form.resetFields();
      setImgData(null);
      setHasShadow(true);
      return;
    }
    addItem(
      "ToolCardComponent",
      {
        ...data,
        img: imgData,
      },
      hasShadow
    );

    setIsCardComponentOpen(false);
    setImgData(null);
    setHasShadow(true);
    form.resetFields();
  };

  const onFinishFailed = () => {};

  return (
    <>
      <Modal
        title="Card Modal"
        open={isCardComponentOpen}
        onOk={() => {
          form.submit();
        }}
        onCancel={() => {
          form.setFieldsValue({});
          setIsCardComponentOpen(false);
          setEditData(null);
        }}
        centered
        key={editData?.key || "CardModalKey"}
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
          <Form.Item label="Title" name="title">
            <Input />
          </Form.Item>
          <Form.Item label="Demo URL" name="demo">
            <Input />
          </Form.Item>
          <Form.Item name="useURL" label="Use URL for cover img">
            <Switch />
          </Form.Item>
          <Form.Item label="IMG URL" name="docUrl">
            <Input />
          </Form.Item>
          <Form.Item label="Img" name="img">
            <FileUploadComponent
              onChange={(imgData) => {
                setImgData(imgData);
              }}
            />
          </Form.Item>
          <Checkbox
            checked={hasShadow}
            onChange={() => {
              setHasShadow(!hasShadow);
            }}
          >
            Has Shadow Box
          </Checkbox>
        </Form>
      </Modal>
    </>
  );
};

export default AddCardComponentModal;
