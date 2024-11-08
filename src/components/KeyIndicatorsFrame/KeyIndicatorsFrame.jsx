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
    height: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    padding: "5px",
    position: "relative",
    gap: "10px",
  },
  grid: {
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    height: "100%",
    gap: "10px",
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
    textDecoration: "none",
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.02) ",
    },
  },
  headerItem: {
    fontWeight: "100",
    marginBottom: "5px",
  },
  valueItem: {
    fontWeight: "600",
    fontSize: "0.04em",
  },
});

const KeyIndicatorsFrame = (props) => {
  const rows = props?.data?.originalData.rows;
  const backgroundColor = props?.data?.originalData.backgroundColor;
  const isEditMode = props?.isEditMode;

  const classes = useStyles();

  const [width, setWidth] = React.useState(500);

  const onResize = useCallback((target) => {
    if (target) {
      setWidth(target?.offsetWidth);
    }
  }, []);

  const ref = useResizeObserver(onResize);

  return (
    <div className={classes.wrap} ref={ref}>
      <div
        className={classes.companiesWraper}
        style={{
          border: `3px solid white`,
          position: "relative",
          fontSize: `${width}px`,
          backgroundColor: backgroundColor ? backgroundColor : "white",
        }}
      >
        <div className={classes.gridWraper}>
          {rows.map((row, i) => {
            return (
              <div className={classes.grid} key={`${i}-row`}>
                {row?.map((item) => {
                  return (
                    <span
                      className={classes.gridItem}
                      style={{
                        border: `1px solid ${item.borderColor}`,
                        backgroundColor: item?.backgroundColor
                          ? item?.backgroundColor
                          : "white",
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        color: item.textColor,
                        boxShadow: `${item?.shadowColor} 0px 1px 4px`,
                        cursor: item?.link ? "pointer" : "",
                      }}
                      onClick={() => {
                        const link = item?.link ? item?.link?.trim() : "";
                        if (link && !isEditMode) {
                          window.open(item?.link, "_blank");
                        }
                      }}
                    >
                      {item?.backgroundImage && (
                        <img
                          src={item.backgroundImage}
                          alt="background"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "fill",
                            zIndex: 0,
                            borderRadius: "5px",
                          }}
                        />
                      )}
                      <span
                        className={classes.headerItem}
                        style={{
                          fontSize: item?.fontSize ? item?.fontSize : "0.032em",
                          textAlign: item?.textAlign ? item?.textAlign : "none",
                          zIndex: 1,
                        }}
                        dangerouslySetInnerHTML={{ __html: item.value }}
                      />
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KeyIndicatorsFrame;
