import React, { useEffect, useState } from "react";
import { Form, Input, Modal, Switch, ColorPicker } from "antd";

const AddHeaderDataModal = ({
  isCardComponentOpen,
  setIsCardComponentOpen,
  addItem,
  editData,
  editItem,
  setEditData,
}) => {
  const [form] = Form.useForm();
  const [fontColor, setFontColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [borderColor, setBorderColor] = useState("#073863");
  const [link, setLink] = useState("");

  useEffect(() => {
    if (editData?.key) {
      const {
        name,
        fontColor,
        backgroundColor,
        hasSubItems,
        borderColor,
        link,
      } = editData.data;
      form.setFieldsValue({ name, hasSubItems, link });
      setFontColor(fontColor);
      setBackgroundColor(backgroundColor);
      setBorderColor(borderColor);
      setLink(link);
    } else {
      form.resetFields();
    }
  }, [editData, form]);

  const onFinish = () => {
    const data = form.getFieldsValue(true);
    if (editData?.key) {
      editItem(editData?.key, {
        ...data,
        fontColor,
        backgroundColor,
        borderColor,
        link,
      });
      setIsCardComponentOpen(false);
      setFontColor("#000000");
      setBackgroundColor("#FFFFFF");
      setBorderColor("#073863");
      setLink("");
      form.resetFields();
      return;
    }
    addItem("HeaderButtonComponent", {
      ...data,
      fontColor,
      backgroundColor,
      borderColor,
      link,
    });
    setFontColor("#000000");
    setBackgroundColor("#FFFFFF");
    setBorderColor("#073863");
    setLink("");
    setIsCardComponentOpen(false);
    form.resetFields();
  };

  const onFinishFailed = () => {};

  return (
    <Modal
      title="Header Item"
      open={isCardComponentOpen}
      onOk={() => form.submit()}
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
        form={form}
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input the name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Link" name="link">
          <Input value={link} onChange={(e) => setLink(e.target.value)} />
        </Form.Item>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "5px",
          }}
        >
          <div
            style={{
              marginRight: "20px",
            }}
          >
            Font Color:
          </div>
          <ColorPicker
            value={fontColor}
            onChange={(_e, d) => {
              setFontColor(d);
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "5px",
          }}
        >
          <div
            style={{
              marginRight: "20px",
            }}
          >
            Background Color:
          </div>
          <ColorPicker
            value={backgroundColor}
            onChange={(_e, d) => {
              setBackgroundColor(d);
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "5px",
          }}
        >
          <div
            style={{
              marginRight: "20px",
            }}
          >
            Border Color:
          </div>
          <ColorPicker
            value={borderColor}
            onChange={(_e, d) => {
              setBorderColor(d);
            }}
          />
        </div>
        <Form.Item
          label="Has Sub Items"
          name="hasSubItems"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddHeaderDataModal;
