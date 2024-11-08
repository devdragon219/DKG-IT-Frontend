/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useMemo } from "react";

import { makeStyles, styled } from "@mui/styles";
import { Box, Tooltip, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { chunkArray, getColLength, getFontSize } from "./utils";

const useStyles = makeStyles({
  wrap: {
    width: "100%",
    height: "auto",
    aspectRatio: "2/1",
    display: "flex",
    gap: "10px",
    boxSizing: "border-box",
    // padding: "2%",
    justifyContent: "space-between",
    overflow: "hidden",
    flexDirection: "column",
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
    aspectRatio: "1/1",
    position: "relative",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  value: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    color: "rgb(13, 82, 149)",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
  },
  name: {
    fontWeight: "600",
    color: "rgb(13, 82, 149)",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    width: "-webkit-fill-available",
    display: "flex",
    alignItems: "center",
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

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: "100% !important",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "transparent",
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: "#0B5394",
  },
}));

const ListWithBar = (props) => {
  const classes = useStyles();
  const dataProps = props?.data.originalData.data;
  const title = props?.data.originalData.title;

  const data = useMemo(() => {
    return chunkArray(dataProps, getColLength(dataProps));
  }, [dataProps]);

  return (
    <>
      <div className={classes.wrap}>
        {title ? (
          <Box>
            <Typography
              sx={{
                color: "#0c5393",
                textAlign: "center",
                fontSize: "3vw",
                top: "0",
              }}
            >
              {title}
            </Typography>
          </Box>
        ) : (
          <></>
        )}

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
                      <img
                        src={item?.img}
                        alt="img"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          objectFit: "contain",
                          top: 0,
                          left: 0,
                        }}
                      />
                    </div>
                    <div className={classes.name}>
                      <Tooltip
                        title={item?.name}
                        style={{ width: data?.length >= 2 ? "50%" : "30%" }}
                      >
                        <div className={classes.text}>{item?.name}</div>
                      </Tooltip>
                      <div
                        style={{
                          width: data?.length >= 2 ? "50%" : "70%",
                          height: "90%",
                        }}
                      >
                        <BorderLinearProgress
                          variant="determinate"
                          value={item?.progress}
                        />
                      </div>
                    </div>
                    <div className={classes.value}>
                      {index + 1 + data[0].length * colIndex}
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

export default ListWithBar;
