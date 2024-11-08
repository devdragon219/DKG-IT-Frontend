/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Button, ButtonGroup, Grid, Popover } from "@mui/material";

import { makeStyles } from "@mui/styles";
import { getBorderIndex } from "./utils";
import { addNewDataField } from "../../../store/item";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  row: {
    display: "flex",
    justifyContent: "center",
    padding: "8px",
  },
  image: {
    display: "block",
    maxWidth: "100%",
    height: "auto",
    maxHeight: "40px",
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
      zIndex: "11",
      transform: "translate3D(0, -1px, 0) scale(1.5)",
      cursor: "pointer",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
      zIndex: "100",
    },
  },
  backgroundColorRow: {
    backgroundColor: "#083763",
  },
  borderBottom: {
    borderBottom: '4px solid #d7e6f4',
    marginBottom: '5px!important'
  },

  firstRow: {

  }
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
  };

  const decriseWidth = () => {
    const allRows = { ...rowRatio };
    allRows[i] = width + 0.05;
    setRowRatio(allRows);
    dispatch(addNewDataField({ field: "row_ratio", value: allRows }));
  };

  const open = Boolean(anchorEl);
  const id = open ? "row-popovers" : undefined;

  return (
    <>
      <Grid
        className={`${classes.row} ${i === 0 ? classes.firstRow : ""} ${
          getBorderIndex(i, steps, rows) ? classes.borderBottom : ""
        }`}
        key={i + "rows"}
        container
        spacing={1}
        rowSpacing={3}
        aria-describedby={id}
        justify="center"
        onClick={handleClick}
      >
        {row.map((image, j) => (
          <Grid
            item
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
              <img className={classes.image} src={image.image_data} alt="" />
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
