import React from "react";
import { FormControl, Input, InputLabel } from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  input: {},
});

const FormInput = ({
  value,
  label,
  handleChange,
  size = "normal",
  className,
  type = "text",
  ...props
}) => {
  const classes = useStyles();

  return (
    <FormControl className={`${classes.input} ${className}`} {...props}>
      <InputLabel size={size}>{label}</InputLabel>
      <Input type={type} value={value} onChange={handleChange} />
    </FormControl>
  );
};

export default FormInput;
