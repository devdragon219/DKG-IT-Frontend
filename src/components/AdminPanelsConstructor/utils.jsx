import { ColorPicker, Form, Input, InputNumber, Select, Switch } from "antd";

const getListItemID = (items) => {
  if (items.length === 0) {
    return `0`;
  }

  return `${Math.floor(Math.random() * 1000)}`;
};

const getSubItemID = (items, parentID) => {
  if (items.length === 0) {
    return `${parentID}-0`;
  }
  const prevIdArray = items[items.length - 1].nodeId.split("-");

  return `${parentID}-${Number(prevIdArray[1]) + 1}`;
};

function getAllLabels(data) {
  let labels = [];

  function extractLabels(items) {
    items.forEach((item) => {
      labels.push(item.label); // Add the label of the current item
      if (item?.children && item?.children?.length) {
        extractLabels(item.children); // Recursively extract labels from sub-items
      }
    });
  }

  extractLabels(data);
  return labels;
}

function findLabelByNodeId(data, nodeId) {
  for (let item of data) {
    if (item.key === nodeId) {
      return item.label;
    }

    if (item.children) {
      let label = findLabelByNodeId(item.children, nodeId);
      if (label) {
        return label;
      }
    }
  }

  return null;
}

function findIsGoogleFormByNodeId(data, nodeId) {
  for (let item of data) {
    if (item.nodeId === nodeId) {
      return item.isGoogleForm;
    }

    if (item.subItems) {
      const isGoogleFormInSubItems = findIsGoogleFormByNodeId(
        item.subItems,
        nodeId
      );
      if (isGoogleFormInSubItems) {
        return true;
      }
    }
  }

  return false;
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
  getListItemID,
  getSubItemID,
  getAllLabels,
  findLabelByNodeId,
  findIsGoogleFormByNodeId,
  getCustomizeConfigFormItemByType,
};
