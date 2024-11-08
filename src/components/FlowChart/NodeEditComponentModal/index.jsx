import { useEffect, useState } from "react";
import { Form, Input, Modal, ColorPicker } from "antd";

const NodeEditComponentModal = ({
  isNodeEditOpen,
  editedID,
  setEditedID,
  nodes,
  handlNodeChange,
}) => {
  const [form] = Form.useForm();
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

  const onFinish = () => {
    const data = form.getFieldsValue(true);

    handlNodeChange({
      newData: { ...data, backgroundColor },
      nodeId: editedID,
    });
    form.resetFields();
    setEditedID(null);
  };

  useEffect(() => {
    const node = nodes.find((el) => el.id === editedID);
    if (node?.id) {
      const { data, style } = node;

      form.setFieldsValue({ label: data.label });
      setBackgroundColor(style.backgroundColor);
    } else {
      form.resetFields();
    }
  }, [nodes, editedID, form]);

  const onFinishFailed = () => {};

  return (
    <>
      <Modal
        title="Node Edit"
        open={isNodeEditOpen}
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
          <Form.Item label="Label" name="label">
            <Input />
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
              Background Color:
            </div>
            <ColorPicker
              value={backgroundColor}
              onChange={(_e, d) => {
                setBackgroundColor(d);
              }}
            />
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default NodeEditComponentModal;
