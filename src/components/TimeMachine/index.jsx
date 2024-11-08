import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Carousel } from "antd";
import CustomSlider from "./CustSlider";
import Slide from "./Slide";

const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    height: "100vh",
    boxSizing: "border-box",
    position: "relative",
    border: "1px solid #ccc",
    background: "#fff",
  },
  slider: {
    background: "rgba(255,255,255, 0.4)",
    opacity: "0.7",
    borderRadius: "16px",
    position: "absolute",
    height: "24px",
    width: "70%",
    left: "0",
    right: "0",
    boxSizing: "border-box",
    margin: "0 auto",
    padding: "16px 24px 24px",
    transition: "400ms",
    zIndex: 1,
    "&:hover": {
      opacity: "1",
      background: "rgba(255,255,255, 0.9)",
      transition: "400ms",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    },
  },
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

const TimeMachine = ({ data }) => {
  const classes = useStyles();

  const [years, setYears] = useState([]);

  const slider = useRef();
  const propsData = data?.originalData?.data;
  const iFrames = data?.originalData?.iFrames;
  const config = data?.originalData?.config;
  useEffect(() => {
    const propsYears = propsData.map((el) => {
      return Number(el.year);
    });

    setYears(propsYears);
  }, [propsData]);

  return (
    <div className={classes.wrapper}>
      <div
        className={classes.slider}
        style={{
          top: config?.position === "top" ? "10px" : undefined,
          bottom: config?.position === "bottom" ? "10px" : undefined,
        }}
      >
        <CustomSlider
          years={years}
          setYear={(year) => {
            const index = years.indexOf(year);

            slider.current.goTo(index);
          }}
          config={config}
        />
      </div>
      <div>
        <Carousel
          dots={false}
          ref={(ref) => {
            slider.current = ref;
          }}
          effect="fade"
          speed="2000"
        >
          {propsData.map((slide) => {
            return <Slide link={slide.link} iFrames={iFrames} />;
          })}
        </Carousel>
      </div>
    </div>
  );
};
export default TimeMachine;
