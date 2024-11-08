import React, { useCallback } from "react";
import useResizeObserver from "./useResizeObserver";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrap: {
    width: "100%",
    height: "100%",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  companiesWraper: {
    width: "100%",
    height: "100%",
    borderRadius: "5px",
    border: "3px solid white",
    boxSizing: "border-box",
    color: "white",
  },
  title: {
    height: "15%",
    fontSize: "0.04em",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gridWraper: {
    width: "100%",
    height: "85%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    padding: "0.01em 0.02em 0.03em 0.02em",
    position: "relative",
    gap: "0.02em",
  },
  grid: {
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    height: "100%",
    gap: "0.02em",
  },
  gridItem: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    width: "100%",
    height: "100%",
    border: "1px solid white",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    cursor: "pointer",
    textDecoration: "none",
  },
  headerItem: {
    fontSize: "0.032em",
    fontWeight: "100",
    marginBottom: "5px",
  },
  valueItem: {
    fontWeight: "600",
    fontSize: "0.04em",
  },
});

const RectColorResp = (props) => {
  const {
    shadowColor,
    title,
    backgroundColor,
    isEditMode,
    link,
    titleColor,
    key,
    ...restProps
  } = props;

  const classes = useStyles();

  const [width, setWidth] = React.useState(500);

  const onResize = useCallback((target) => {
    if (target) {
      setWidth(target?.offsetWidth);
    }
  }, []);

  const ref = useResizeObserver(onResize);

  return (
    <div
      className={classes.wrap}
      ref={ref}
      key={key}
      onClick={() => {
        if (link && !isEditMode) {
          window.open(link, "_blank");
        }
      }}
      style={{
        width: "100%",
        height: "100%",
        fontSize: `${width}px`,
        color: titleColor,
        backgroundColor: backgroundColor,
        borderRadius: "5px",
        boxShadow: `0px 0px 12px 0px ${shadowColor}`,
        cursor: link ? "pointer" : "",
      }}
      {...restProps}
    >
      <div
        style={{
          fontSize: "0.1em",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default RectColorResp;
