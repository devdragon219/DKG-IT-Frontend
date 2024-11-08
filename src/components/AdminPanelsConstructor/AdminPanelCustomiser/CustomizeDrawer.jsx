import React, { useEffect, useState } from "react";
import { Form, ColorPicker } from "antd";

const CustomizeDrawer = ({ customiseOptions, onColorChange }) => {
  const [form] = Form.useForm();
  // const [mainColor, setMainColor] = useState("#0c5393");
  // const [secondColor, setSecondColor] = useState("#398bbc");
  const [buttonColor, setButtonColor] = useState("#1677ff");

  useEffect(() => {
    if (customiseOptions) {
      form.setFieldsValue({
        //sidebarBackgroundColor: customiseOptions.sidebarBackgroundColor,
        buttonBackgroundColor: customiseOptions.buttonBackgroundColor,
      });
    }
  }, [customiseOptions, form]);

  const handleButtonColorChange = (color) => {
    const colorHex = color.toHexString();
    setButtonColor(color);
    onColorChange({ buttonBackgroundColor: colorHex });
  };

  // const handleMainColorChange = (color) => {
  //   const colorHex = color.toHexString();
  //   setMainColor(colorHex);
  //   transformColors(colorHex, secondColor);
  // };

  // const handleSecondColorChange = (color) => {
  //   const colorHex = color.toHexString();
  //   setSecondColor(colorHex);
  //   transformColors(mainColor, colorHex);
  // };

  // const transformColors = (mainColor, secondColor) => {
  //   const gradient = `linear-gradient(-30deg, ${mainColor} 0%, ${secondColor} 40%, ${mainColor} 50%)`;
  //   onColorChange({ sidebarBackgroundColor: gradient });
  // };

  return (
    <Form
      form={form}
      size={"small"}
      layout={"vertical"}
      style={{ maxWidth: 600 }}
    >
      {/* <Form.Item label="Sidebar Main Color">
        <ColorPicker
          showText
          value={mainColor}
          onChange={handleMainColorChange}
        />
      </Form.Item>
      <Form.Item label="Sidebar Secondary Color">
        <ColorPicker
          showText
          value={secondColor}
          onChange={handleSecondColorChange}
        />
      </Form.Item> */}
      <Form.Item label="Sidebar Buttons Color">
        <ColorPicker
          showText
          value={buttonColor}
          onChange={handleButtonColorChange}
        />
      </Form.Item>
    </Form>
  );
};

export default CustomizeDrawer;
