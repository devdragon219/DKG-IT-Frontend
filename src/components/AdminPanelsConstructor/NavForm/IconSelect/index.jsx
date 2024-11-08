import React, { useState, useEffect } from "react";
import { Select } from "antd";
import * as allAntIcons from "@ant-design/icons";
import * as FaIcons from "react-icons/fa";
// import * as MdIcons from "react-icons/md";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
// import * as GiIcons from "react-icons/gi";
// import * as TiIcons from "react-icons/ti";
// import * as GoIcons from "react-icons/go";
// import * as FiIcons from "react-icons/fi";
// import * as RiIcons from "react-icons/ri";
// import * as BsIcons from "react-icons/bs";
// import * as BiIcons from "react-icons/bi";
// import * as CgIcons from "react-icons/cg";
// import * as SiIcons from "react-icons/si";
// import * as VscIcons from "react-icons/vsc";
// import * as ImIcons from "react-icons/im";
// import * as GrIcons from "react-icons/gr";

const { Option } = Select;

const allReactIcons = {
  ...FaIcons,
  // ...MdIcons,
  // ...AiIcons,
  // ...IoIcons,
  // ...GiIcons,
  // ...TiIcons,
  // ...GoIcons,
  // ...FiIcons,
  // ...RiIcons,
  // ...BsIcons,
  // ...BiIcons,
  // ...CgIcons,
  // ...SiIcons,
  // ...VscIcons,
  // ...ImIcons,
  // ...GrIcons,
};

const IconSelect = ({ onChange }) => {
  const [icons, setIcons] = useState([]);
  const [selectedIcon, setSelectedIcon] = useState(null);

  useEffect(() => {
    const antIconList = Object.keys(allAntIcons)
      .filter((key) => key.endsWith("Outlined")) // Filter only outlined icons
      .map((iconName) => {
        const IconComponent = allAntIcons[iconName];
        return {
          name: iconName,
          component: <IconComponent />,
          library: "Ant Design",
        };
      });

    const reactIconList = Object.keys(allReactIcons).map((iconName) => {
      const IconComponent = allReactIcons[iconName];
      return {
        name: iconName,
        component: <IconComponent />,
        library: "React Icons",
      };
    });

    setIcons([...antIconList, ...reactIconList]);
  }, []);

  const handleChange = (value) => {
    const element = icons.find((icon) => icon.name === value);
    setSelectedIcon(value);
    onChange(value);
    console.log(`Selected ${value}`, element);
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
