/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useMemo } from "react";

import { makeStyles } from "@mui/styles";
import { Tooltip } from "@mui/material";
import { chunkArray, getColLength, getFontSize } from "./utils";

const useStyles = makeStyles({
  wrap: {
    width: "100%",
    height: "auto",
    aspectRatio: "2/1",
    display: "flex",
    gap: "10px",
    boxSizing: "border-box",
    padding: "2%",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  title: {
    color: "#0d5295",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    padding: "2%",
    fontSize: "2vw",
    fontWeight: "600",
  },
  item: {
    color: "#fff",
    height: "100%",
    maxHeight: "60px",
    listStyleType: "none",
    display: "flex",
    gap: "5px",
  },
  column: {
    display: "flex",
    justifyContent: "center",
    gap: "2px",
    flexDirection: "column",
    padding: 0,
    margin: 0,
    textOverflow: "ellipsis",
    height: "100%",
  },
  count: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    aspectRatio: "2/1",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(0deg, rgba(140,183,216,1) 0%, rgba(44,111,162,1) 50%, rgba(26,88,140,1) 86%)",
  },
  name: {
    fontWeight: "100",
    color: "rgb(13, 82, 149)",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    width: "-webkit-fill-available",
    display: "flex",
    alignItems: "center",
    background:
      "linear-gradient(90deg, rgba(247,247,247,1) 0%, rgba(232,232,232,1) 12%)",

    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  text: {
    width: "100%",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
});

const ListCustom = (props) => {
  const classes = useStyles();
  const dataProps = props?.data.originalData.data;
  const nameProps = props?.data.originalData.name;

  const data = useMemo(() => {
    return chunkArray(dataProps, getColLength(dataProps));
  }, [dataProps]);

  return (
    <>
      {nameProps ? <div className={classes.title}>{nameProps}</div> : null}
      <div className={classes.wrap}>
        {data.map((column, colIndex) => {
          return (
            <ul
              className={classes.column}
              style={{
                width: `${98 / data.length}%`,
              }}
            >
              {column.map((item, index) => {
                if (!item) {
                  return <li key={index} className={classes.item}></li>;
                }
                return (
                  <li
                    key={index}
                    className={classes.item}
                    style={{
                      fontSize: getFontSize(dataProps.length),
                    }}
                  >
                    <div className={classes.count}>
                      {index + 1 + data[0].length * colIndex}
                    </div>{" "}
                    <div className={classes.name}>
                      <Tooltip title={item?.name}>
                        <div className={classes.text}>{item?.name}</div>
                      </Tooltip>
                    </div>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default ListCustom;
