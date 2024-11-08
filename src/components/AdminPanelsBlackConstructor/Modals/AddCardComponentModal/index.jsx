import { useEffect, useState } from "react";
import { Form, Input, Modal, ColorPicker } from "antd";

import IconSelect from "./IconSelect";

const AddCardComponentModal = ({
  isCardComponentOpen,
  setIsCardComponentOpen,
  addItem,
  editData,
  editItem,
  setEditData,
}) => {
  const [form] = Form.useForm();
  const [iconName, setIconName] = useState("");
  const [iconColor, setIconColor] = useState("#7366f0");

  useEffect(() => {
    if (editData?.key) {
      const { iconName, iconColor, title, number } = editData.data;
      form.setFieldsValue({ title, number });
      setIconColor(iconColor);
      setIconName(iconName);
    } else {
      form.resetFields();
    }
  }, [editData, form]);

  const onFinish = () => {
    const data = form.getFieldsValue(true);
    if (editData?.key) {
      editItem(editData?.key, {
        ...data,
        iconColor,
        iconName,
      });
      setIsCardComponentOpen(false);
      setIconColor("#7366f0");
      setIconName("");
      form.resetFields();
      return;
    }
    addItem("KeyCardComponent", {
      ...data,
      iconColor,
      iconName,
    });
    setIconColor("#7366f0");
    setIconName("");
    setIsCardComponentOpen(false);
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
          <Form.Item label="Number" name="number">
            <Input />
          </Form.Item>
          <Form.Item label="Icon" name="iconNamess">
            <IconSelect
              onChange={(name) => {
                setIconName(name);
              }}
              iconValue={iconName}
            />
          </Form.Item>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                marginRight: "20px",
              }}
            >
              Icon Color:
            </div>
            <ColorPicker
              value={iconColor}
              onChange={(_e, d) => {
                setIconColor(d);
              }}
            />
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default AddCardComponentModal;
