import React from "react";
import { Card, Col, Row, Statistic } from "antd";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  legend: {
    background: "rgba(255,255,255, 0.4)",
    borderRadius: "16px",
    border: "none",
    margin: "0 auto",
    transition: "400ms",
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
    <Card style={{ maxWidth: 400 }} className={classes.legend}>
      <Row gutter={[16, 10]}>
        {keys.map((item) => {
          return (
            <Col span={8}>
              <Statistic
                title={item}
                value={legendData[item]}
                style={{
                  fontSize: "10px",
                }}
                valueStyle={{
                  color: "#105499",
                  fontSize: "13px",
                  fontWeight: 900,
                }}
              />
            </Col>
          );
        })}
      </Row>
    </Card>
  );
};

export default Legend;
