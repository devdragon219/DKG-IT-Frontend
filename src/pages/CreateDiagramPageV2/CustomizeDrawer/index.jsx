import React from "react";
import { Form } from "antd";
import { getCustomizeConfigFormItemByType } from "../utils";

const CustomizeDrawer = ({
  customizeConfig,
  customizeSettings,
  setCustomizeSettings,
  dataSettings,
  data,
}) => {
  const [form] = Form.useForm();

  const onFormLayoutChange = (_value, values) => {
    setCustomizeSettings(values);
  };

  return (
    <Form
      form={form}
      size={"small"}
      layout={"vertical"}
      initialValues={customizeSettings}
      onValuesChange={onFormLayoutChange}
      style={{
        maxWidth: 600,
      }}
    >
      {customizeConfig.map((el) => {
        if (el?.valueConected && el?.valueConectedName) {
          return dataSettings[el?.valueConectedName].map((item) => {
            return getCustomizeConfigFormItemByType(
              el.type,
              data[0][item].value,
              el.data,
              el
            );
          });
        }
        return getCustomizeConfigFormItemByType(el.type, el.name, el.data, el);
      })}
    </Form>
  );
};
export default CustomizeDrawer;
