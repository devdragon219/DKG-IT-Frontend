import React, { useCallback } from "react";
import { makeStyles } from "@mui/styles";

import "./styles.css";
import IconByName from "./IconByName";
import useResizeObserver from "./useResizeObserver";

const useStyles = makeStyles(() => ({
  wrap: {
    width: "100%",
    height: "85%",
    fontFamily: "Arial, Helvetica, sans-serif",
    backgroundColor: "#32375a",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderRadius: "4px",
  },
}));

const KeyCardComponent = (props) => {
  const classes = useStyles();

  const { iconName, number, title, iconColor } = props.data;
  const [height, setHeight] = React.useState(200);

  const onResize = useCallback((target) => {
    if (target) {
      setHeight(target?.offsetHeight);
    }
  }, []);

  const ref = useResizeObserver(onResize);

  return (
    <>
      <div
        className={classes.wrap}
        ref={ref}
        style={{
          fontSize: `${height}px`,
        }}
      >
        <IconByName
          iconName={iconName}
          fontSize="0.4em"
          color={iconColor || "#7366f0"}
        />
        <div
          style={{
            fontSize: "0.25em",
            fontWeight: "600",
            color: "#cfd2d6",
            marginTop: "5px",
          }}
        >
          {number}
        </div>
      </div>
      <div
        style={{
          fontSize: "0.9em",
          color: "#cfd2d6",
          marginTop: "3px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        {title}
      </div>
    </>
  );
};

export default KeyCardComponent;
