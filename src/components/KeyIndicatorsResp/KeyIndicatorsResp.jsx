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
    //fontSize: "0.04em",
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
    marginBottom: "5px",
  },
});

const KeyIndicatorsResp = (props) => {
  const rows = props?.data?.originalData?.rows || [[]];
  const title = props?.data?.originalData?.title || "";
  const backgroundColor = props?.data?.originalData?.backgroundColor || "";
  const titleColor = props?.data?.originalData?.titleColor || "";
  const titleFontSize = props?.data?.originalData?.titleFontSize || "0.04em";
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
        <div
          className={classes.title}
          style={{
            color: titleColor ? titleColor : "#0c5391",
            fontSize: `${titleFontSize}`.includes("em")
              ? titleFontSize
              : `${titleFontSize}em`,
          }}
        >
          {title}
        </div>
        <div className={classes.gridWraper}>
          {rows?.map((row, i) => {
            return (
              <div className={classes.grid} key={`${i}-row`}>
                {row?.map((item) => {
                  return (
                    <span
                      className={classes.gridItem}
                      style={{
                        border: `1px solid ${item.borderColor}`,
                        backgroundColor: backgroundColor
                          ? backgroundColor
                          : "white",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        color: item.textColor,
                      }}
                    >
                      <span
                        className={classes.headerItem}
                        style={{
                          fontSize: item.textFirstLineFontSize || "0.032em",
                          fontWeight: item.textFirstLineFontWeight || "100",
                        }}
                        dangerouslySetInnerHTML={{ __html: item.header }}
                      />

                      {item.header2 ? (
                        <span
                          className={classes.headerItem}
                          style={{
                            fontSize: item.textFirstLineFontSize || "0.032em",
                            fontWeight: item.textFirstLineFontWeight || "100",
                          }}
                          dangerouslySetInnerHTML={{ __html: item.header2 }}
                        />
                      ) : (
                        ""
                      )}
                      <span
                        style={{
                          fontSize: item.textSecondLineFontSize || "0.032em",
                          fontWeight: item.textSecondLineFontWeight || "600",
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

export default KeyIndicatorsResp;
