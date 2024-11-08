import React, { useMemo, useState } from "react";
import { makeStyles } from "@mui/styles";
import * as d3 from "d3";
import { chunkArray } from "./utils";

import "./styles.css";

const useStyles = makeStyles({
  interactivePanel: {
    display: "flex",
    gap: "20px",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  interactivePanelCircle: {
    width: "60%",
  },
  interactivePanelGrid: {
    width: "40%",
  },
  header: {
    color: "#fff",
    height: "40px",
    background: "linear-gradient(0deg, #3582c5 0%, #083068 100%)",
    textAlign: "center",
    fontWeight: "550",
    fontSize: "1.2vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  interactivePanelGridBody: {
    width: "100%",
    height: "75%",
    display: "flex",
    gap: "10px",
    boxSizing: "border-box",
    padding: "2%",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  column: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: 0,
    margin: 0,
    textOverflow: "ellipsis",
    height: "100%",
    gap: "5px",
  },
  gridItemNone: {
    color: "#fff",
    listStyleType: "none",
    gap: "5px",
    display: "flex",
    borderRadius: "1px",
    height: "100%",
    alignItems: "center",
  },
  gridItem: {
    color: "#fff",
    listStyleType: "none",
    gap: "5px",
    display: "flex",
    borderRadius: "1px",
    boxShadow: "0 2px 6px black",
    height: "100%",
    alignItems: "center",
  },
  gridItemImg: {
    height: "80%",
    width: "auto",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  gridItemText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#181818",
  },
  textBody: {
    boxShadow: "0 2px 6px #c2c2c2",
    padding: "23px",
    overflow: "scroll",
    fontSize: "18px",
  },
});

// https://codesandbox.io/s/rkglv?file=/src/PieGraph.js

const Arc = ({ data, index, createArc, setTextData, setTitle }) => {
  var imgDist = 110;
  var labelDist = 155;

  data.midAngle = (data.endAngle - data.startAngle) / 2 + data.startAngle;

  var imgX = Math.sin(data.midAngle) * imgDist - 12;
  var imgY = -Math.cos(data.midAngle) * imgDist - 12;

  var labelX = Math.sin(data.midAngle) * labelDist;
  var labelY = -Math.cos(data.midAngle) * labelDist;

  const words = data?.data?.label?.split(" ");

  return (
    <g key={index} className="arc">
      <defs>
        <filter id={`shadow-${index}`}>
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="3"
            floodColor="black"
            floodOpacity="0.9"
          />
        </filter>
      </defs>

      <path
        className={data?.data?.link || data?.data?.data ? "pointer" : ""}
        d={createArc(data)}
        fill="#fff"
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
      <image
        href={data?.data?.img}
        height="24"
        width="24"
        transform={"translate(" + imgX + "," + imgY + ")"}
        className={data?.data?.link || data?.data?.data ? "pointer" : ""}
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
        transform={"translate(" + labelX + "," + labelY + ")"}
        textAnchor="middle"
        fill="black"
        fontSize="10px"
        className={data?.data?.link || data?.data?.data ? "pointer" : ""}
        onClick={() => {
          if (data?.data?.link) {
            window.open(data?.data?.link, "_blank");
          }

          if (data?.data?.data) {
            setTextData(data?.data?.data);
            setTitle(data?.data?.label);
          }
        }}
      >
        {words.map((str, index) => {
          let dy = -5;

          if (index === 0 && words.length > 2) {
            dy = -10;
          }

          if (index > 0) {
            dy = 10;
          }
          return (
            <tspan x="0" dy={dy}>
              {str}
            </tspan>
          );
        })}
      </text>
    </g>
  );
};

const Border = ({ data, index, createArc }) => (
  <g key={index} className="arc">
    <path className="arc" d={createArc(data)} fill="#20477c" />
  </g>
);

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

  const createBorder = d3
    .arc()
    .innerRadius(props.outerRadius)
    .outerRadius(props.outerRadius + 10)
    .padAngle(10 / (props.outerRadius + 10));

  const colors = d3.scaleOrdinal(d3.schemeSet3);
  const data = createPie(props.data);

  return (
    <svg viewBox="0 0 420 420" width="100%" height="auto">
      <foreignObject x="140" y="140" width="100%" height="100%">
        <div
          style={{
            background: "radial-gradient(#3582c5, #083068)",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#f2f2f2",
            fontSize: "15px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {props.name}
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
              createArc={createArc}
              colors={colors}
              setTextData={props.setTextData}
              setTitle={props.setTitle}
            />

            <Border
              key={"border" + i}
              index={i}
              data={d}
              createArc={createBorder}
            />
          </>
        ))}
      </g>
    </svg>
  );
};

function InteractivePanel(props) {
  const classes = useStyles();
  const dataProps = props?.data.originalData.data;
  const rightPanel = props?.data.originalData.rightPanel;
  const nameProps = props?.data.originalData.name;

  const [textData, setTextData] = useState(null);
  const [title, setTitle] = useState("Product Types");

  const data = useMemo(() => {
    return chunkArray(dataProps, Math.floor(dataProps?.length / 2));
  }, [dataProps]);

  const rightPanelData = useMemo(() => {
    if(rightPanel?.length){
      return chunkArray(rightPanel, Math.floor(rightPanel?.length / 2));
    }
  
  }, [rightPanel]);

  const outerRadius = 190;
  const innerRadius = 80;

  return (
    <>
      <div className={classes.interactivePanel}>
        <div className={classes.interactivePanelCircle}>
          <header className={classes.header}>Subsectors</header>
          <div style={{ position: "relative" }}>
            <Pie
              data={dataProps}
              outerRadius={outerRadius}
              innerRadius={innerRadius}
              name={nameProps}
              setTextData={setTextData}
              setTitle={setTitle}
            />
          </div>
        </div>
        <div className={classes.interactivePanelGrid}>
          <header className={classes.header}>{title}</header>

          <div className={classes.interactivePanelGridBody}>
            {rightPanelData
              ? rightPanelData.map((col, i) => {
                  return (
                    <div
                      key={"col" + i}
                      className={classes.column}
                      style={{
                        width: `${48}%`,
                      }}
                    >
                      {col.map((item, index) => {
                        if (!item?.label) {
                          return (
                            <div
                              key={`${index}-${i}`}
                              className={classes.gridItemNone}
                              style={{
                                fontSize: "1.4vw",
                                position: "relative",
                              }}
                            ></div>
                          );
                        }
                        return (
                          <div
                            key={`${index}-${i}`}
                            className={classes.gridItem}
                            style={{
                              fontSize: "1.4vw",
                              position: "relative",
                              cursor: item?.link || item?.data ? "pointer" : "",
                            }}
                            onClick={() => {
                              if (item?.link) {
                                window.open(item?.link, "_blank");
                              }

                              if (item?.data) {
                                setTextData(item?.data);
                                setTitle(item?.label);
                              }
                            }}
                          >
                            <div
                              style={{
                                height: "4.5vw",
                                width: "auto",
                                paddingLeft: "5%",
                                paddingRight: "5%",
                              }}
                            >
                              <img
                                src={item.img}
                                alt="logo"
                                style={{
                                  height: "inherit",
                                  objectFit: "contain",
                                }}
                              />
                            </div>

                            <div className={classes.gridItemText}>
                              {item.label}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })
              : data.map((col, i) => {
                  return (
                    <div
                      key={"col" + i}
                      className={classes.column}
                      style={{
                        width: `${48}%`,
                      }}
                    >
                      {col.map((item, index) => {
                        return (
                          <div
                            key={`${index}-${i}`}
                            className={classes.gridItem}
                            style={{
                              fontSize: "1.4vw",
                              position: "relative",
                              cursor: item?.link || item?.data ? "pointer" : "",
                            }}
                            onClick={() => {
                              if (item?.link) {
                                window.open(item?.link, "_blank");
                              }

                              if (item?.data) {
                                setTextData(item?.data);
                                setTitle(item?.label);
                              }
                            }}
                          >
                            <div
                              style={{
                                height: "4.5vw",
                                width: "auto",
                                paddingLeft: "5%",
                                paddingRight: "5%",
                              }}
                            >
                              <img
                                src={item.img}
                                alt="logo"
                                style={{
                                  height: "inherit",
                                  objectFit: "contain",
                                }}
                              />
                            </div>

                            <div className={classes.gridItemText}>
                              {item.label}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
}

export default InteractivePanel;
