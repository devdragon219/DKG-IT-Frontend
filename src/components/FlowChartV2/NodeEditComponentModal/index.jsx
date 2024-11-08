import { useEffect, useState } from "react";
import { Form, Input, Modal, ColorPicker, Switch, Divider } from "antd";

import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { sortedFontOptions } from "../utils";

const NodeEditComponentModal = ({
  isNodeEditOpen,
  editedID,
  setEditedID,
  nodes,
  handlNodeChange,
}) => {
  const [dataText, setData] = useState("");
  const [form] = Form.useForm();
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [textColor, setTextColor] = useState("#000000");
  const [hasDescription, setHasDescription] = useState(false);

  const onFinish = () => {
    const data = form.getFieldsValue(true);

    handlNodeChange({
      newData: {
        ...data,
        backgroundColor,
        color: textColor,
        nodeDescription: dataText,
      },
      nodeId: editedID,
    });
    form.resetFields();
    setEditedID(null);
  };

  useEffect(() => {
    const node = nodes.find((el) => el.id === editedID);
    if (node?.id) {
      const { data } = node;

      form.setFieldsValue({
        label: data.label,
        hasDescription: data.hasDescription,
      });
      setHasDescription(data.hasDescription);
      setBackgroundColor(data.backgroundColor);
      setData(data?.nodeDescription);
      setTextColor(data.color);
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
        width={"80%"}
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
          <Form.Item label="Has Description" name="hasDescription">
            <Switch
              onChange={(value) => {
                setHasDescription(value);
              }}
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
            }}
          >
            <div
              style={{
                marginRight: "20px",
              }}
            >
              Text Color:
            </div>
            <ColorPicker
              value={textColor}
              onChange={(_e, d) => {
                setTextColor(d);
              }}
            />
          </div>
        </Form>
        {hasDescription ? (
          <>
            <Divider>Details</Divider>
            <SunEditor
              setContents={dataText}
              onChange={setData}
              setOptions={{
                buttonList: [
                  ["undo", "redo"],
                  ["font", "fontSize"],
                  ["paragraphStyle", "blockquote"],
                  [
                    "bold",
                    "underline",
                    "italic",
                    "strike",
                    "subscript",
                    "superscript",
                  ],
                  ["fontColor", "hiliteColor"],
                  ["align", "list", "lineHeight"],
                  ["outdent", "indent"],

                  ["table", "horizontalRule", "link"],
                  ["showBlocks"],
                  ["removeFormat", "fullScreen"],
                ],
                defaultTag: "div",
                minHeight: "300px",
                showPathLabel: false,
                font: sortedFontOptions,
              }}
            />
          </>
        ) : (
          <></>
        )}
      </Modal>
    </>
  );
};

export default NodeEditComponentModal;
