import React, { useState, useEffect } from "react";
import { Select } from "antd";
import * as allIcons from "@ant-design/icons";

const { Option } = Select;

const IconSelect = ({ onChange }) => {
  const [icons, setIcons] = useState([]);
  const [selectedIcon, setselectedIcon] = useState(null);

  useEffect(() => {
    const iconList = Object.keys(allIcons)
      .filter((key) => key.endsWith("Outlined")) // Filter only outlined icons
      .map((iconName) => {
        const IconComponent = allIcons[iconName];
        return {
          name: iconName,
          component: <IconComponent />,
        };
      });
    setIcons(iconList);
  }, []);

  const handleChange = (value) => {
    const element = icons.find((icon) => icon.name === value);
    setselectedIcon(value);
    onChange(value);
  };

  return (
    <Select
      value={selectedIcon}
      showSearch
      placeholder="Select an icon"
      optionFilterProp="children"
      onChange={handleChange}
      filterOption={(input, option) =>
        option.key.toLowerCase().includes(input.toLowerCase())
      }
      style={{ width: 200 }}
    >
      {icons.map((icon) => (
        <Option key={icon.name} value={icon.name}>
          {icon.component}
          <span style={{ marginLeft: 8 }}>{icon.name}</span>
        </Option>
      ))}
    </Select>
  );
};

export default IconSelect;
