/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";

import { makeStyles } from "@mui/styles";
import { Popover } from "antd";
import { InfoCircleFilled } from "@ant-design/icons";
import { vis3d } from "../../vis3d.min";
import Legend from "./Legend";
import { get3DGraphByDiagramType } from "./utils";

const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    height: "100vh",
    boxSizing: "border-box",
    position: "relative",
    border: "1px solid #ccc",
    background: "#fff",
  },
  wrap: {
    width: "100%",
  },
  canvas: {
    width: "100%",
    height: "100%",
    margin: "0",
    padding: "0",
    display: "inline-block",
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

const Graph3DDesigner = (props) => {
  const classes = useStyles();
  const ref = React.useRef(null);
  const propsData = props?.data.originalData?.data;
  const legendData = Array.isArray(propsData) ? propsData.reduce((result, sector) => {
    const totalCompanies = sector.groups.reduce((sum, group) => sum + group.companies.length, 0);
    const sectorLabel = sector.sectorLabel || 'SectorLabel';
    if (totalCompanies > 1) {
      result[sectorLabel] = totalCompanies;
    }
    return result;
}, {}) : {};

if (!Array.isArray(propsData)) {
    console.error('propsData is not an array:', propsData);
}
  const config = props?.data?.originalData?.config || {};
  const heightProps = props?.data?.originalData?.height;
  const backgroundColor =
    props?.data?.originalData?.backgroundColor || "#211d20";
  const labelColor = props?.data?.originalData?.labelColor || "#EAF3FA";
  const isFullScreen = props?.data?.originalData?.fullscreen || false;
  const height =
    isFullScreen || props?.params?.fullscreen
      ? "100vh"
      : heightProps
      ? `${heightProps}px`
      : "100vh";
  const maxWidth =
    isFullScreen || props?.params?.fullscreen
      ? "100%"
      : heightProps
      ? `${heightProps * 1.5}px`
      : "100%";


  useEffect(() => {
    let graph = get3DGraphByDiagramType(
      ref?.current,
      propsData,
      props?.diagramType,
      backgroundColor,
      labelColor,
      config
    );
    vis3d.add(graph);
  }, []);
  // const baseURL = `${window.location.pathname}`;

  return (
    <div className={classes.wrapper}>
      <div
        className={classes.wrap}
        style={{
          height: height,
          maxWidth: maxWidth,
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
      <Legend legendData={legendData} />
        <div style={{
          position:"absolute",
          bottom:"15px", 
          left:"15px",
          fontSize: "18px",
          fontFamily: "Arial, Helvetica, sans-serif",
          background: "white",
          border: "3px solid #6050e3",
          padding: "10px",
          borderRadius: "2px",
          textAlign: "center",
          fontWeight: "bolder",
          cursor: "pointer",}}
        >
            <img style={{width: "105px", marginRight:"10px"}} src="/assets/Logo.webp" /> 
        </div>
        {/* <div style={{
          position:"absolute",
          bottom:"10px", 
          right:"10px",
          fontSize: "18px",
          fontFamily: "Arial, Helvetica, sans-serif",
          background: "linear-gradient(to bottom, #ff4a95, #ff9b59)",
           border: "3px solid #6050e3",
          padding: "15px",
          borderRadius: "2px",
          textAlign: "center",
          fontWeight: "bolder",
          cursor: "pointer",}}
        > 
            <div
              onClick={() => {
              // window.open(`${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}${baseURL}`);
            }}
              style={{
                whiteSpace: "nowrap",
                fontSize: "12px",
                  fontWeight: 700,
                  fontColor : "#ffffff",
                  fontFamily: "Sans-Serif",
                overflow:"hidden",
                
              }}
            >
              <div>View more at</div>
              {`${baseURL}`}
            </div>
          
        </div> */}
          
    </div>
  );
};

export default Graph3DDesigner;
