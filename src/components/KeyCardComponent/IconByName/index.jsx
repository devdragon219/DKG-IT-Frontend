import React from "react";
import * as allIcons from "@ant-design/icons";

const IconByName = ({ iconName, color, fontSize, ...props }) => {
  // Find icon component by name
  const IconComponent = allIcons[iconName];

  // Check if the icon exists in allIcons
  if (!IconComponent) {
    // You can return null or some default icon if the name does not match
    console.warn(`Icon with the name ${iconName} does not exist.`);
    return null;
  }

  // Render the icon component
  return (
    <IconComponent
      {...props}
      style={{
        fontSize: fontSize ? fontSize : "",
        color: color ? color : "",
      }}
    />
  );
};

export default IconByName;
