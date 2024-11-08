import { ColorPicker, Form, Input, InputNumber, Select, Switch } from "antd";

function getAlphabetPosition(letter) {
  return letter.toLowerCase().charCodeAt(0) - 96;
}

function indexToLetter(index) {
  return String.fromCharCode(index + 96).toUpperCase();
}

function csvToJson(csvString, isGoogleDoc) {
  const rows = csvString.split("\n");

  const transformedArray = rows.map((row) => {
    const cells = row.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g) || [];

    return cells.map((cell) => {
      const cleanedCell = cell.replace(/^"|"$/g, "").trim();

      return {
        value: cleanedCell,
        readOnly: isGoogleDoc,
      };
    });
  });

  // Return the transformed array
  return transformedArray;
}

const handleCSVInputChange = (file, setData) => {
  const reader = new FileReader();

  reader.onload = (e) => {
    const csvData = e.target.result;

    const jsonData = csvToJson(csvData);

    setData(jsonData);
  };

  reader.readAsText(file);
};

const convertJsonToCsv = (json) => {
  const csvRows = [];
  json.forEach((row) => {
    const values = row.map((cell) => `"${cell.value}"`);
    csvRows.push(values.join(","));
  });
  return csvRows.join("\n");
};

const downloadCsv = (csv, filename) => {
  const blob = new Blob([csv], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.setAttribute("hidden", "");
  a.setAttribute("href", url);
  a.setAttribute("download", filename);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

function getDataSettingsFormItemByType(type, name, data) {
  switch (type) {
    case "select":
      return (
        <Form.Item name={name} label={`Please select ${name}`}>
          <Select placeholder={`Please select ${type}`}>
            {data[0].map((_el, index) => {
              return (
                <Select.Option key={`${name}-${index}`} value={index}>
                  {indexToLetter(index + 1)}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
      );
    case "multi-select":
      return (
        <Form.Item name={name} label={`Please select ${name}`}>
          <Select mode="multiple" placeholder={`Please select ${type}`}>
            {data[0].map((_el, index) => {
              return (
                <Select.Option key={`${name}-${index}`} value={index}>
                  {indexToLetter(index + 1)}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
      );
  }
}

function getCustomizeConfigFormItemByType(type, name, data, element) {
  switch (type) {
    case "color":
      return (
        <Form.Item
          name={name}
          label={`${name} Color`}
          getValueFromEvent={(color) => {
            return color.toHexString();
          }}
        >
          <ColorPicker showText />
        </Form.Item>
      );
    case "input":
      return (
        <Form.Item label={name} name={name}>
          <Input />
        </Form.Item>
      );
    case "number":
      return (
        <Form.Item label={name}>
          <Form.Item name={name} noStyle>
            <InputNumber min={element.min} max={element.max} />
          </Form.Item>
        </Form.Item>
      );

    case "boolean":
      return (
        <Form.Item name={name} label={name}>
          <Switch />
        </Form.Item>
      );

    case "select":
      return (
        <Form.Item name={name} label={`${name}`}>
          <Select placeholder={`${type}`}>
            {data.map((el, index) => {
              return (
                <Select.Option key={`${el}-${index}`} value={el}>
                  {el}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
      );
  }
}

export {
  getAlphabetPosition,
  indexToLetter,
  getDataSettingsFormItemByType,
  getCustomizeConfigFormItemByType,
  handleCSVInputChange,
  csvToJson,
  downloadCsv,
  convertJsonToCsv,
};
