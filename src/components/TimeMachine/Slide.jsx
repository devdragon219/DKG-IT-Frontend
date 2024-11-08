import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Carousel } from "antd";
import CustomSlider from "./CustSlider";

const useStyles = makeStyles({
  contentStyle: {
    margin: 0,
    height: "100vh",
    overflow: "hidden",
    width: "100%",
    background: "transparent",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});

const Slide = ({ link, iFrames }) => {
  const classes = useStyles();

  return (
    <div className={classes.contentStyle}>
      {iFrames ? (
        <iframe
          title={"ifame_slide"}
          style={{ width: "100%", height: "100%", border: "none" }}
          src={link}
        />
      ) : (
        <img className={classes.img} src={link} />
      )}
    </div>
  );
};
export default Slide;
