import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Popover } from "antd";
import { InfoCircleFilled } from "@ant-design/icons";
import CustomSlider from "./CustSlider";
import { vis3d, CircularMindmap3D } from "../../vis3d.min";

import Legend from "./Legend";
import { countLabels, filterByYear, getUniqueYears } from "./utils";

import "./style.css";

const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    height: "100vh",
    boxSizing: "border-box",
    position: "relative",
    border: "1px solid #ccc",
    background: "#fff",
  },
  canvas: {
    width: "100%",
    height: "100%",
    margin: "0",
    padding: "0",
    display: "inline-block",
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
    margin: "0 auto",
    padding: "16px 24px 24px",
    boxSizing: "border-box",
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

const CircularMindmap3DNoCode = ({ data }) => {
  const classes = useStyles();
  const ref = React.useRef(null);
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [legendData, setLegendData] = useState({});
  const [propsData, setPropsData] = useState(data?.originalData?.data);
  const withTimeLine = data?.originalData?.withTimeLine;
  const maindMapConfig = data?.originalData?.maindMapConfig;

  const withLegend = data?.originalData?.withLegend;

  const config = data?.originalData?.config;
  useEffect(() => {
    const propsYears = getUniqueYears(data?.originalData?.data);
    setSelectedYear(propsYears[propsYears.length - 1]);
    setYears(propsYears);
  }, [data]);

  useEffect(() => {
    const config = {
      ...maindMapConfig,
      imageLinkCallback: (entity) =>
        "https://platform.dkv.global/files/" + entity.image,
    };
    console.log(config, 9999);
    const graph = new CircularMindmap3D(ref?.current, propsData, config);
    vis3d.add(graph);

    return () => {
      vis3d.remove(graph);
    };
  }, [ref, propsData, maindMapConfig]);

  useEffect(() => {
    if (selectedYear && withTimeLine) {
      const newData = filterByYear(data?.originalData?.data, selectedYear);

      setLegendData(countLabels(newData));

      setPropsData(newData);
    }
  }, [selectedYear, data, withTimeLine]);

  return (
    <div className={classes.wrapper}>
      {withTimeLine ? (
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
              setSelectedYear(year);
            }}
            startPoint={years?.length - 1}
            config={config}
          />
        </div>
      ) : (
        <></>
      )}

      <div
        className={classes.wrap}
        style={{
          height: "100vh",
          maxWidth: "100%",
          overflow: "hidden",
        }}
      >
        <canvas
          className={classes.canvas}
          ref={ref}
          width="100%"
          height="100%"
        ></canvas>
      </div>

      {withLegend ? (
        <Popover
          content={<Legend legendData={legendData} />}
          trigger="hover"
          placement="rightTop"
        >
          <InfoCircleFilled
            style={{
              position: "absolute",
              fontSize: "20px",
              top: "10px",
              left: "10px",
              color: "white",
              cursor: "pointer",
            }}
          />
        </Popover>
      ) : (
        <></>
      )}
    </div>
  );
};
export default CircularMindmap3DNoCode;
