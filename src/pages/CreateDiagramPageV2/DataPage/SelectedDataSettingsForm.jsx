import { Form } from "antd";

import { getDataSettingsFormItemByType } from "../utils";
import { useMemo } from "react";

const SelectedDataSettingsForm = ({
  data,
  dataSettingsConfig,
  setDataSettings,
  dataSettings,
  isMultiple,
  selectedKey,
}) => {
  const [form] = Form.useForm();

  const onFormLayoutChange = (_value, values) => {
    if (isMultiple && dataSettings?.[selectedKey]) {
      const datas = {
        ...dataSettings,
        [selectedKey]: values,
      };

      setDataSettings(datas);
      return;
    }

    setDataSettings(values);
  };

  const selectedDataSettingsConfig = useMemo(() => {
    if (isMultiple && selectedKey) {
      return dataSettingsConfig?.map((el) => {
        return getDataSettingsFormItemByType(
          el.type,
          el.name,
          data[selectedKey]
        );
      });
    }

    return dataSettingsConfig?.map((el) => {
      return getDataSettingsFormItemByType(el.type, el.name, data);
    });
  }, [selectedKey, isMultiple, dataSettingsConfig, data]);

  const selectedDataSettings = useMemo(() => {
    if (isMultiple && dataSettings[selectedKey]) {
      return dataSettings[selectedKey];
    }

    return dataSettings;
  }, [dataSettings, , selectedKey]);

  return (
    <Form
      layout={"vertical"}
      form={form}
      size={"small"}
      initialValues={selectedDataSettings}
      onValuesChange={onFormLayoutChange}
      style={{ maxWidth: 600 }}
    >
      {selectedDataSettingsConfig}
    </Form>
  );
};

export default SelectedDataSettingsForm;
