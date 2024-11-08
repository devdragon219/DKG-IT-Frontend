import React from "react";
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

const IconByName = ({ iconName, ...props }) => {
  // Find icon component by name in ant-design icons
  const AntIconComponent = allAntIcons[iconName];

  // Find icon component by name in react-icons
  const ReactIconComponent = allReactIcons[iconName];

  // Check if the icon exists in ant-design icons or react-icons
  if (AntIconComponent) {
    return <AntIconComponent {...props} />;
  } else if (ReactIconComponent) {
    return <ReactIconComponent {...props} />;
  } else {
    console.warn(`Icon with the name ${iconName} does not exist.`);
    return null;
  }
};

export default IconByName;
