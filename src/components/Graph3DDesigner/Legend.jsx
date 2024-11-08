import React from "react";
import { Card, Col, Row, Statistic } from "antd";
import { makeStyles } from "@mui/styles";
import { color } from "d3";

const useStyles = makeStyles({
  legend: {
    background: "white",
    borderRadius: "5px",
    "& .ant-card-body": {
      padding: "10px 10px", // Change this value to set the padding you want
    },
    border: "3px solid #6050e3",
    margin: "0 auto",
    transition: "400ms",
    position: "absolute",
    top: "5px",
    right: "5px",
    zIndex: 1,
    // "&:hover": {
    //   opacity: "1",
    //   background: "rgba(255,255,255, 0.9)",
    //   transition: "400ms",
    //   boxShadow:
    //     "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    // },
  },
});

const Legend = ({ legendData }) => {
  const classes = useStyles();
  const keys = Object.keys(legendData);
  
  return (
    <Card style={{ maxWidth: 400}} className={classes.legend}>
        {keys.map((item) => {
          return (
            <div>
                <sapn 
                style={{
                  fontSize: "12px",
                  color:"#2862b7",
                  fontWeight: 800,
                  fontFamily: "Sans-Serif"
                }}>{item} - </sapn>
                <sapn 
                style={{
                  color : "#2862b7",
                  fontSize: "12px",
                  fontFamily: "Sans-Serif", 
                  fontWeight: 700,
                }}>{legendData[item]}</sapn>
            </div>
           
          );
        })}
     
        
    </Card>
  );
};

export default Legend;
