import { useEffect, useState } from "react";
import { Form, Input, Modal, ColorPicker, Radio, Switch } from "antd";

const EdgeEditComponentModal = ({
  isEdgeEditOpen,
  setEditeEdgedID,
  editedID,
  edges,
  handlEdgeChange,
}) => {
  const [form] = Form.useForm();
  const [color, setColor] = useState("#FFFFFF");

  const onFinish = () => {
    const data = form.getFieldsValue(true);

    handlEdgeChange({
      newData: { ...data, color },
      edgeId: editedID,
    });
    form.resetFields();
    setEditeEdgedID(null);
  };

  useEffect(() => {
    const edge = edges.find((el) => el.id === editedID);
    if (edge?.id) {
      const { style, data } = edge;

      form.setFieldsValue({
        animated: edge.animated,
        width: style.strokeWidth,
        type: data.type,
        floating: data.floating,
        arrowStart: data.arrowStart,
        arrowEnd: data.arrowEnd,
      });
      setColor(style.stroke);
    } else {
      form.resetFields();
    }
  }, [edges, editedID, form]);

  const onFinishFailed = () => {};

  return (
    <>
      <Modal
        title="Edge Edit"
        open={isEdgeEditOpen}
        onOk={() => {
          form.submit();
        }}
        onCancel={() => {
          form.setFieldsValue({});
          setEditeEdgedID(null);
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
          <Form.Item label="Stroke Width" name="width">
            <Radio.Group>
              <Radio.Button value={2}>Bold</Radio.Button>
              <Radio.Button value={1}>Standart</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Path type" name="type">
            <Radio.Group>
              <Radio.Button value="step">Step</Radio.Button>
              <Radio.Button value="bezier">Bezier</Radio.Button>
              <Radio.Button value="straight">Straight</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Animated" name="animated">
            <Switch />
          </Form.Item>
          <Form.Item label="Floating" name="floating">
            <Switch />
          </Form.Item>
          <Form.Item label="Arrow Start" name="arrowStart">
            <Switch />
          </Form.Item>
          <Form.Item label="Arrow End" name="arrowEnd">
            <Switch />
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
              value={color}
              onChange={(_e, d) => {
                setColor(d);
              }}
            />
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default EdgeEditComponentModal;
