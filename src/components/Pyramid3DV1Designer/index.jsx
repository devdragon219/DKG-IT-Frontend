import React, { useCallback } from "react";

import { makeStyles } from "@mui/styles";
import useResizeObserver from "./useResizeObserver";
import CarouselButtons from "./CarouselButtons";
import PyramidDesignerWrapper from "./PyramidDesignerWrapper";

const useStyles = makeStyles({
  wrap: {
    width: "60%",
    margin: "0 auto",
    height: "100%",
    position: "relative",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  },
  title: {
    position: "absolute",
    top: `0`,
    fontSize: "0.04em",
    padding: "5px",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "#25629d",
    display: "flex",
    border: "3px solid #25629d",
    margin: "10px",
    maxWidth: "13em",
    fontWeight: "bold",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  },
  sideTitle: {
    position: "absolute",
    margin: "5em 0 2em 2em",
    right: 0,
    top: `0`,
    fontSize: "0.03em",
    padding: "5px",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "#25629d",
    display: "flex",
    whiteSpace: "initial",
    maxWidth: "8em",
    fontWeight: "bold",
    paddingRight: "15px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  },
});

const PyramidDesignerV3D = ({ data }) => {
  const classes = useStyles();
  const dataProps = data.originalData;
  const refProps = React.useRef(null);
  const [width, setWidth] = React.useState(500);
  const [side, setSide] = React.useState("one");
  const [rotate, setRotate] = React.useState(0);

  const onResize = useCallback((target) => {
    if (target) {
      setWidth(target?.offsetWidth);
    }
  }, []);

  const ref = useResizeObserver(onResize);

  return (
    <div
      style={{
        position: "relative",
        fontSize: `${width}px`,
        fontFamily: `"Roboto","Helvetica","Arial" sanserif`,
        overflow: "hidden",
      }}
    >
      {dataProps?.title?.trim() ? (
        <div className={classes.title}>
          <span>{dataProps?.title}</span>
        </div>
      ) : null}

      {
        <div className={classes.sideTitle}>
          <span>{dataProps?.[side]?.title}</span>
        </div>
      }

      <div className={classes.wrap} ref={ref}>
        <PyramidDesignerWrapper
          data={dataProps}
          refProps={refProps}
          width={width}
          rotate={rotate}
          side={side}
        />
      </div>
      <CarouselButtons
        setRotate={setRotate}
        rotate={rotate}
        setSide={setSide}
        side={side}
      />
    </div>
  );
};

export default PyramidDesignerV3D;
