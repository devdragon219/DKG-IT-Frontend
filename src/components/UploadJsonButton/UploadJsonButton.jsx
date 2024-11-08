import React from "react";

import CustomButton from "../CustomButton";

const UploadJsonButton = ({ handleChange, className, style, tooltip, disabled }) => {
  return (
    <CustomButton
      variant="contained"
      component="label"
      color="primary"
      className={className}
      tooltip={tooltip}
      disabled={disabled}
      style={{ ...style }}
    >
      Upload Json
      <input
        type="file"
        id={"uploadJson"}
        accept={".json"}
        hidden
        onChange={handleChange}
      />
    </CustomButton>
  );
};

export default UploadJsonButton;
