import React, { useEffect } from "react";

import { makeStyles } from "@mui/styles";
import { getRows } from "../../PyramidDesignerV2/TriangleComponent/utils";
import { Popover } from "@mui/material";
import DescriptionCardComponent from "../../PyramidDesignerV2/DescriptionCardComponent";

const useStyles = makeStyles({
  pyramidSide: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    transformOrigin: "bottom",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  labelWrapper: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    transformOrigin: "bottom",
  },
  img: {
    height: "98%",
    objectFit: "contain",
    transition: "all 0.2s ease",

    "&:hover": {
      position: "relative",
      transform: "translate3D(0, -1px, 0) scale(1.5) ",
      cursor: "pointer",
    },
  },
  one: {
    "&::before": {
      content: "''",
      zIndex: "-1",
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      clipPath: "polygon(50% 0%, 0% 100% , 100% 100%)",
      transformOrigin: "bottom",
      textAlign: "center",
      color: "#0A0A0A",
      background: "#d7e5f4",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  two: {
    "&::before": {
      content: "''",
      zIndex: "-1",
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      clipPath: "polygon(50% 0%, 0% 100% , 100% 100%)",
      transformOrigin: "bottom",
      textAlign: "center",
      color: "#0A0A0A",
      background: "#9bbde0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  three: {
    "&::before": {
      content: "''",
      zIndex: "-1",
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      clipPath: "polygon(50% 0%, 0% 100% , 100% 100%)",
      transformOrigin: "bottom",
      textAlign: "center",
      color: "#0A0A0A",
      background: "#d7e5f4",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  fore: {
    "&::before": {
      content: "''",
      zIndex: "-1",
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      clipPath: "polygon(50% 0%, 0% 100% , 100% 100%)",
      transformOrigin: "bottom",
      textAlign: "center",
      color: "#0A0A0A",
      background: "#9bbde0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
});

const getBorderIndex = (rowIndex, steps, rows) => {

  if (steps.includes(rowIndex)) {
    return true;
  }

  return false;
};

const PyramidSide = ({ width, indexName, data, side }) => {
  const classes = useStyles();
  const style = {
    one: 0,
    two: 90,
    three: 180,
    fore: 270,
  };

  const [imgData, setImgData] = React.useState({});
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [numRows, setNumRows] = React.useState(0);
  const [steps, setSteps] = React.useState([]);
  const [rows, setRows] = React.useState([]);

  useEffect(() => {
    const parts = [];
    const lengths = [];
    const diapazonsLengtsTemp = [];
    let allRows = [[]];
    let lastItemLength = 1;

    data.all_compare_diapazons.forEach((diapazon, index) => {
      const arr = data.data.filter(
        (item) => item.compare_diapazon === diapazon
      );

      parts[index] = arr;
    });

    parts.forEach((item, index) => {
      const row = getRows(lastItemLength, lastItemLength, item);
      let stepLengths = index === 0 ? row.rows.length + 1 : row.rows.length;

      const borderIndex =
        lengths.length !== 0
          ? lengths[lengths.length - 1] + stepLengths
          : stepLengths;

      lengths.push(borderIndex);

      diapazonsLengtsTemp.push({
        key: item?.[0]?.compare_diapazon,
        value: row.rows.length,
      });

      allRows = [...allRows, ...row.rows];

      lastItemLength = 1 + row.lastItemLength;
    });

    setSteps(lengths);
    setRows(allRows);
    setNumRows(allRows?.length);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getWidth = (steps, index) => {
    if (index !== 0) {
      const step = (steps[index] - steps[index - 1]) / 2;

      const middleWidth = steps[index - 1] + step;

      const allWidth = (width / numRows) * middleWidth;

      return allWidth / 2 + allWidth / 8.5;
    }

    const middleHeight = steps[index] / 2;

    const allWidth = (width / numRows) * middleHeight;

    return allWidth / 2 + allWidth / 11;
  };

  const getHeight = (steps, index) => {
    if (index !== 0) {
      const step = (steps[index] - steps[index - 1]) / 2;

      const middleHeight = steps[index - 1] + step;

      return (width / numRows) * middleHeight;
    }

    const middleHeight = steps[index] / 2;

    return (width / numRows) * middleHeight;
  };

  const handleClick = (event, image) => {
    setImgData(image);
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <div
        className={`${classes.pyramidSide} ${classes[indexName]} ${indexName}-row`}
        style={{
          transform: `rotateY(${style?.[indexName]}deg) translateZ(${
            width / 2
          }px) rotateX(30deg)`,
        }}
      >
        <>
          {rows.map((el, index) => {
            return (
              <div
                key={`${indexName}-row-${index}`}
                style={{
                  height: `${1 / numRows}em`,
                  width: `${
                    width - (1 / numRows) * width * (numRows - index)
                  }px`,
                  boxSizing: "border-box",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "2%",
                  paddingTop: getBorderIndex(index, steps, rows) ? "2px" : "0",
                  borderTop: getBorderIndex(index, steps, rows)
                    ? "2px solid #083763"
                    : "none",
                }}
              >
                {el.map((el2, i) => {
                  return (
                    <img
                      src={el2.image_data}
                      onClick={(event) => {
                        handleClick(event, el2);
                      }}
                      alt="2"
                      style={{
                        width: `${100 / el.length - 2}%`,
                      }}
                      className={classes.img}
                      key={`${indexName}-col-${i}`}
                    />
                  );
                })}
              </div>
            );
          })}
        </>
      </div>
      <div
        className={classes.labelWrapper}
        style={{
          transform: `rotateY(${style?.[indexName]}deg) translateZ(${
            width / 2
          }px)`,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {steps.map((_step, i) => {
          return (
            <div
              key={`${indexName}-label-${i}`}
              style={{
                position: "absolute",
                maxWidth: "130px",
                backgroundColor: "red",
                top: `${getHeight(steps, i)}px`,
                transform: `translateY(-100%) translateX(calc(50% + ${getWidth(
                  steps,
                  i
                )}px))`,
                fontSize: "14px",
                flexDirection: "column",
                padding: "5px",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                display: "flex",
                background:
                  "linear-gradient(to bottom, #083763, #4483bc, #aac9e6)",
                backgroundSize: `100% ${steps.length * 300}px`,
                backgroundPositionY: `-${(i + 1) * 300 - 300}px`,
                borderRadius: "10px",
                boxShadow: "0 0 10px 0 rgba(0, 0, 0, 1)",
                opacity: side === indexName ? "1" : "0",
                transition: "opacity 1s ease,opacity 0.5s ease",
              }}
            >
              <span>{data?.value_description}</span>
              <span>{`${data?.all_compare_diapazons?.[i]}`}</span>
            </div>
          );
        })}
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <DescriptionCardComponent data={imgData} />
      </Popover>
    </>
  );
};

export default PyramidSide;
