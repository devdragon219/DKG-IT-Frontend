import React, { useMemo, useState } from "react";
import { makeStyles } from "@mui/styles";
import * as d3 from "d3";
import UKSvg from "./UKSvg";

const useStyles = makeStyles({
  interactivePanel: {},
  interactivePanelCircle: {},
});

// https://codesandbox.io/s/rkglv?file=/src/PieGraph.js

const Arc = ({ data, index, createArc, setTextData, setTitle }) => {
  var imgDist = 120;
  var labelDist = 155;

  data.midAngle = (data.endAngle - data.startAngle) / 2 + data.startAngle;

  var imgX = Math.sin(data.midAngle) * imgDist - 12;
  var imgY = -Math.cos(data.midAngle) * imgDist - 12;

  var labelX = Math.sin(data.midAngle) * labelDist;
  var labelY = -Math.cos(data.midAngle) * labelDist;

  const words = data?.data?.label?.split(" ");

  return (
    <g key={index} className="arc">
      <filter id={`shadow-${index}`}>
        <feDropShadow
          dx="0"
          dy="2"
          stdDeviation="3"
          floodColor="black"
          floodOpacity="0.3"
        />
      </filter>

      <path
        className={data?.data?.link || data?.data?.data ? "pointer" : ""}
        d={createArc(data)}
        fill="#fff"
        transform={"translate(" + imgX + "," + imgY + ")"}
        filter={`url(#shadow-${index})`}
        onClick={() => {
          if (data?.data?.link) {
            window.open(data?.data?.link, "_blank");
          }

          if (data?.data?.data) {
            setTextData(data?.data?.data);
            setTitle(data?.data?.label);
          }
        }}
      />
      <text
        x={imgX}
        y={imgY}
        textAnchor="middle"
        dy=".3em"
        fill="black"
        fontSize="10"
      >
        {data.data.label}
      </text>
    </g>
  );
};

const Pie = (props) => {
  const createPie = d3
    .pie()
    .value((d) => d.value)
    .sort(null);

  const createArc = d3
    .arc()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius)
    .padAngle(10 / props.outerRadius);

  const createCircle = d3
    .arc()
    .innerRadius(0)
    .outerRadius(30)
    .startAngle(0)
    .endAngle(Math.PI * 2);

  const colors = d3.scaleOrdinal(d3.schemeSet3);
  const data = createPie(props.data);

  return (
    <svg viewBox="0 30 400 400" width="100%" height="100%">
      <foreignObject x="125" y="125" width="150" height="150">
        <div
          style={{
            //backgroundColor: "black",
            width: "100%",
            height: "100%",
            borderRadius: "60%",
          }}
        >
          <UKSvg />
        </div>
      </foreignObject>
      <g
        transform={`translate(${props.outerRadius + 10} ${
          props.outerRadius + 10
        })`}
      >
        {data.map((d, i) => (
          <>
            <Arc
              key={"arc" + i}
              index={i}
              data={d}
              createArc={createCircle}
              colors={colors}
              setTextData={props.setTextData}
              setTitle={props.setTitle}
            />
          </>
        ))}
      </g>
    </svg>
  );
};

function CircularInfographUK(props) {
  const classes = useStyles();
  const dataProps = props?.data.originalData.data;

  const [textData, setTextData] = useState(null);
  const [title, setTitle] = useState("Product Types");

  const outerRadius = 202;
  const innerRadius = 80;

  return (
    <>
      <div className={classes.interactivePanel}>
        <div className={classes.interactivePanelCircle}>
          <Pie
            data={dataProps}
            outerRadius={outerRadius}
            innerRadius={innerRadius}
            setTextData={setTextData}
            setTitle={setTitle}
          />
        </div>
      </div>
    </>
  );
}

export default CircularInfographUK;
