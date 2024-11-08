import React, { useCallback } from "react";
import { makeStyles } from "@mui/styles";
import { Layout, Drawer, Button, Tooltip } from "antd";

import "./styles.css";
import useResizeObserver from "./useResizeObserver";

const useStyles = makeStyles(() => ({
  wrap: {
    width: "100%",
    height: "100%",
    fontFamily: "Arial, Helvetica, sans-serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderRadius: "4px",
  },
}));

const HeaderButtonComponent = (props) => {
  const classes = useStyles();

  const { fontColor, backgroundColor, name, borderColor, link } = props.data;
  const [height, setHeight] = React.useState(100);
  const [width, setWidth] = React.useState(100);

  const onResize = useCallback((target) => {
    if (target) {
      setHeight(target?.offsetHeight);
      setWidth(target?.offsetWidth);
    }
  }, []);

  const ref = useResizeObserver(onResize);

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <>
      <div
        className={classes.wrap}
        ref={ref}
        style={{
          fontSize: `${height}px`,
          boxShadow: "none",
          border: "none",
        }}
      >
        <Button
          onClick={handleClick}
          style={{
            backgroundColor: backgroundColor,
            color: fontColor,
            height: `${height}px`,
            width: `${width}px`,
            borderRadius: "5px",
            textAlign: "center",
            border: `1.5px solid ${borderColor}`,
            fontSize: "16px",
            whiteSpace: "wrap",
          }}
        >
          {name}
        </Button>
      </div>
    </>
  );
};

export default HeaderButtonComponent;
