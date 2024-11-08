/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Button, ButtonGroup, Popover } from "@mui/material";

import { makeStyles } from "@mui/styles";
import { getBorderIndex } from "./utils";
import { addNewDataField } from "../../../store/item";
import { useDispatch } from "react-redux";

import Grid from "@mui/material/Unstable_Grid2";

const useStyles = makeStyles({
  row: {
    display: "flex",
    justifyContent: "center",
    zIndex: "10",
  },
  image: {
    display: "block",
    maxWidth: "100%",
    height: "auto",
    zIndex: "10",
  },
  imgWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    transition: "all 0.2s ease",
    "&:hover": {
      position: "relative",
      cursor: "pointer",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  firstItem: {
    position: "relative",
    "&:before": {
      content: " ",
      position: "absolute",
      backgroundColor: "black",
      with: "20px",
      height: "20px",
      top: "0",
    },
  },
  backgroundColorRow: {
    backgroundColor: "#083763",
  },
  borderBottom: {
    borderBottom: "4px solid transparent",
    marginBottom: "5px !important",
  },

  overwievItem: {
    flexDirection: "column",
    padding: "5px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    "@media (min-width:600px)": { fontWeight: 600, fontSize: "30px" },
  },
  overwievText: {
    fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
    fontWeight: "600",
    fontSize: "16px",
    "@media (max-width:700px)": { fontSize: "10px" },
  },
  overwievWrapper: {
    minWidth: "70px",
    position: "absolute",
  },

  pyramydName: {
    fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
    position: "absolute",
    color: "#25629d",
    border: "3px solid #25629d",
    display: "flex",
    minHeight: "50px",
    maxWidth: "200px",
    justifyContent: "center",
    alignItems: "center",
    padding: "2px",
    fontSize: "22px",
    fontWeight: 800,
    "@media (max-width:700px)": { fontSize: "10px" },
  },
});

export const TriangleRow = ({
  row,
  i,
  steps,
  handleImgClick,
  rows,
  rowRatio,
  setRowRatio,
  viewMode = true,
  diapazon = null,
  nextGeneration,
  allDiapazons,
  compareDiapazons,
  description,
  links = [],
  title,
  lines,
  onResize,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [width, setWidth] = React.useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (rowRatio && rowRatio[i]) {
      if (width !== rowRatio[i]) {
        setWidth(rowRatio[i]);
      }
    }
  }, [rowRatio, width]);

  const incriseWidth = () => {
    const allRows = { ...rowRatio };
    allRows[i] = width - 0.05;
    setRowRatio(allRows);
    dispatch(addNewDataField({ field: "row_ratio", value: allRows }));
    onResize();
  };

  const decriseWidth = () => {
    const allRows = { ...rowRatio };
    allRows[i] = width + 0.05;
    setRowRatio(allRows);
    dispatch(addNewDataField({ field: "row_ratio", value: allRows }));
    onResize();
  };

  const open = Boolean(anchorEl);
  const id = open ? "row-popovers" : undefined;
  const diapazonIndex = allDiapazons.indexOf(diapazon);

  const getRightTransform = () => {
    const c = lines?.[lines.length - 1]?.width / 7;

    return `translateY(calc(-50%)) translateX(calc(50% + ${
      lines?.[diapazonIndex]?.width / 2
    }px + ${c}px))`;
  };

  const getTitleTransform = () => {
    const c = lines?.[lines.length - 1]?.width / 6;

    return `translateY(calc(-50%))  translateX(calc(-50% - ${
      lines?.[diapazonIndex]?.width / 2
    }px - ${c}px))`;
  };

  const Diapason = () => {
    return (
      <div
        className={classes.overwievWrapper}
        style={{
          top: `${lines[diapazonIndex]?.height}px`,
          transform: getRightTransform(),
          cursor: links?.[diapazon] ? "pointer" : "",
        }}
        onClick={() => {
          if (links?.[diapazon]) {
            window.open(links?.[diapazon], "_blank");
          }
        }}
      >
        <div
          className={classes.overwievItem}
          style={{
            color: "#fff",
            background:
              nextGeneration && diapazonIndex === 0
                ? "red"
                : "linear-gradient(to bottom, #083763, #4483bc, #6b9ccc, #6b9ccc)",
            backgroundSize: `100% ${allDiapazons.length * 300}px`,
            backgroundPositionY: `-${(diapazonIndex + 1) * 300 - 300}px`,
            zIndex: "10",
            backgroundColor:
              nextGeneration && diapazonIndex === 0 ? "#cc0100" : "",
          }}
        >
          <span className={classes.overwievText}>{description}</span>
          <span
            className={classes.overwievText}
          >{`${compareDiapazons[diapazonIndex]}`}</span>
        </div>
      </div>
    );
  };

  return (
    <>
      <Grid
        className={`${classes.row} ${i === 0 ? classes.firstRow : ""} ${
          getBorderIndex(i, steps, rows) ? classes.borderBottom : ""
        }`}
        key={i + "rows"}
        container
        spacing={1}
        aria-describedby={id}
        justify="center"
        onClick={handleClick}
      >
        {diapazonIndex === 0 && title ? (
          <div
            className={classes.pyramydName}
            style={{
              top: `${lines[diapazonIndex]?.height}px`,
              transform: getTitleTransform(),
            }}
          >
            <span>{title}</span>
          </div>
        ) : null}
        {diapazon ? <Diapason /> : null}
        {row.map((image, j) => (
          <Grid
            key={`item-row-${j}`}
            xs={width}
            className={`${classes.item}  `}
          >
            <div
              className={classes.imgWrapper}
              onClick={(event) => {
                handleImgClick(event, image);
              }}
            >
              <img
                className={classes.image}
                src={image.image_data}
                alt=""
                style={{
                  maxHeight:
                    image.compare_diapazon === allDiapazons[0]
                      ? "60px"
                      : "40px",
                }}
              />
            </div>
          </Grid>
        ))}
      </Grid>
      {!viewMode ? (
        <Popover
          id={id}
          open={open}
          key={`Popover-row-${i}`}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={incriseWidth}>-</Button>
            <Button onClick={decriseWidth}>+</Button>
          </ButtonGroup>
        </Popover>
      ) : null}
    </>
  );
};
