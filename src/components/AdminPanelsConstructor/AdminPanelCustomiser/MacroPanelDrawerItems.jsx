import React, { useState } from "react";
import { Form } from "antd";
import { getCustomizeConfigFormItemByType } from "../utils";

const MacroPanelDrawerItems = ({
  customizeSettings,
  customizeConfig,
  setCustomizeSettings,
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
        return getCustomizeConfigFormItemByType(el.type, el.name, el.data, el);
      })}
    </Form>
  );
};
export default MacroPanelDrawerItems;
