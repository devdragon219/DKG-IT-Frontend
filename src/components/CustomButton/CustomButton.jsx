import React from "react";
import {Button, Tooltip} from "@mui/material";

import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
  button: {},
});

const CustomButton = ({
  children,
  handleChange,
  size = "normal",
  className,
  handleClick,
  color = "primary",
  variant = "contained",
  tooltip = "",
  ...props
}) => {
  const classes = useStyles();

  return (
    <Tooltip title={tooltip}>
      <span>
        <Button
          variant={variant}
          onClick={handleClick}
          color={color}
          className={`${classes.button} ${className}`}
          {...props}
        >
        {children}
      </Button>
      </span>
    </Tooltip>
  );
};

export default CustomButton;
