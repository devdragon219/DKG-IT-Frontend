/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useMemo } from "react";

import { makeStyles } from "@mui/styles";
import CompaniesConfig from "./CompaniesConfig";

const useStyles = makeStyles({
  wrap: {
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  companiesWraper: {
    width: "100%",
    aspectRatio: "3/1.2",
    borderRadius: "5px",
    border: "3px solid white",
    backgroundColor: "#0f4e85",
    boxSizing: "border-box",
    color: "white",
  },
  title: {
    fontSize: "2.5vw !important",
    height: "15%",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  gridWraper: {
    width: "100%",
    height: "85%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    // padding: "3vw 9vw 7vw 9vw",
    position: "relative",
    gap: "3vw",
  },
  grid: {
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    height: "100%",
    gap: "3vw",
  },
  gridItem: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    color: "white",
    width: "100%",
    height: "100%",
    border: "2px solid white",
    borderRadius: "5px",
    display: "flex",
    fontSize: "2vw",
    fontWeight: "100",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 1vw",
    textAlign: "center",
    cursor: "pointer",
    textDecoration: "none",
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.05)",
      color: "white",
    },
  },
});

const CompaniesListColors = (props) => {
  const dataProps = props?.data?.originalData;
  const classes = useStyles();

  const [stateList, setStateList] = React.useState(dataProps?.data);
  const [listData] = React.useState(dataProps?.companies);
  const [rowNum, setRowNum] = React.useState(dataProps?.rowNumber || 2);
  const [title, setTitle] = React.useState(dataProps?.title);

  const data = useMemo(() => {
    const smallerArrays = [];
    const tempArray = [...stateList];
    const rowLength = Math.ceil(tempArray.length / rowNum);
    while (tempArray.length) {
      smallerArrays.push(tempArray.splice(0, rowLength));
    }

    return smallerArrays;
  }, [stateList, rowNum]);

  return (
    <div className={classes.wrap}>
      {props.isEditMode && (
        <CompaniesConfig
          listData={listData}
          setTitle={setTitle}
          title={title}
          rowNum={rowNum}
          setRowNum={setRowNum}
          storeData={props?.data}
          stateList={stateList}
          setStateList={setStateList}
        />
      )}

      <div
        className={classes.companiesWraper}
        style={{
          ...dataProps?.settings,
          border: `3px solid ${dataProps?.settings?.color}`,
        }}
      >
        <div className={classes.title}>{title}</div>
        <div
          className={classes.gridWraper}
          style={{
            paddingTop: dataProps?.settings?.paddingTop
              ? `${dataProps?.settings?.paddingTop}vw`
              : "3vw",
            paddingRight: dataProps?.settings?.paddingRight
              ? `${dataProps?.settings?.paddingRight}vw`
              : "9vw",
            paddingBottom: dataProps?.settings?.paddingBottom
              ? `${dataProps?.settings?.paddingBottom}vw`
              : "7vw",
            paddingLeft: dataProps?.settings?.paddingLeft
              ? `${dataProps?.settings?.paddingLeft}vw`
              : "9vw",
          }}
        >
          {data.map((row, i) => {
            return (
              <div className={classes.grid} key={`${i}-row`}>
                {row?.map((item, index) => {
                  return (
                    <a
                      className={classes.gridItem}
                      style={{
                        ...dataProps?.settings,
                        border: `2px solid ${
                          item?.backgroundColor || dataProps?.settings?.color
                        }`,
                        backgroundColor: item?.backgroundColor || "transparent",
                      }}
                      key={`${index}-${i}-col`}
                      href={item?.link}
                      rel="noreferrer"
                      target="_blank"
                      dangerouslySetInnerHTML={{ __html: item?.label }}
                    ></a>
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

export default CompaniesListColors;
