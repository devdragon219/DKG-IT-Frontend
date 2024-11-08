import React from "react";

import { makeStyles } from "@mui/styles";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const useStyles = makeStyles({
  buttonLeft: {
    cursor: "pointer",
    color: "rgb(8, 55, 99)",
    position: "absolute",
    left: "0",
    top: "50%",
    transform: "translateY(-50%)",
  },
  buttonRight: {
    cursor: "pointer",
    color: "rgb(8, 55, 99)",
    position: "absolute",
    right: "0",
    top: "50%",
    transform: "translateY(-50%)",
  },
});

const CarouselButtons = ({ rotate, setRotate, setSide, side }) => {
  const classes = useStyles();

  const getNextSide = (side) => {
    if (side === "one") return "fore";
    if (side === "two") return "one";
    if (side === "three") return "two";
    if (side === "fore") return "three";
  };

  const getPrevSide = (side) => {
    if (side === "one") return "two";
    if (side === "two") return "three";
    if (side === "three") return "fore";
    if (side === "fore") return "one";
  };

  return (
    <>
      <ArrowBackIosNewIcon
        className={classes.buttonLeft}
        fontSize="large"
        onClick={() => {
          setSide(getNextSide(side));
          setRotate(rotate + 90);
        }}
      />
      <ArrowForwardIosIcon
        className={classes.buttonRight}
        fontSize="large"
        onClick={() => {
          setSide(getPrevSide(side));
          setRotate(rotate - 90);
        }}
      />
    </>
  );
};

export default CarouselButtons;
