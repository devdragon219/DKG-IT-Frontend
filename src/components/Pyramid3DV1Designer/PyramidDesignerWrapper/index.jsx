import React from "react";

import { makeStyles } from "@mui/styles";
import PyramidSide from "../PyramidSide";

const useStyles = makeStyles({
  pyramid: {
    position: "relative",
    width: "1em",
    margin: "0 auto",
    aspectRatio: "1/1",
    transformStyle: "preserve-3d",
    willChange: "transform",
  },
  pyramidSides: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
  },
});

const PyramidDesignerWrapper = ({ rotate, refProps, width, data, side }) => {
  const classes = useStyles();

  return (
    <>
      <div
        className={classes.pyramid}
        ref={refProps}
        style={{
          transform: `rotateX(-10deg) rotateY(${rotate}deg) translateY(${-10}%)`,
          transition: "transform 2s",
        }}
      >
        <div className={classes.pyramidSides}>
          {["one", "two", "three", "fore"].map((num) => (
            <PyramidSide
              key={num}
              indexName={num}
              width={width}
              data={data[num]}
              side={side}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PyramidDesignerWrapper;
