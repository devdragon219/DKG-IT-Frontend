import React from "react";
import { Card, Col, Collapse, Row } from "antd";
import { makeStyles } from "@mui/styles";
import { Padding } from "@mui/icons-material";

const { Meta } = Card;

const useStyles = makeStyles(() => ({
  card: {
    height: "calc(100% - 1.7rem)",
    paddingBottom: "1em !important",
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.2s ease",
    border: "none",
    backgroundColor: "#161d31",
    "&:hover": {
      transform: "scale(1.03)",
    },
    "& .ant-card-body": {
      padding: "12px 12px 1.5em 12px !important",
    },
  },
  customCollapse: {
    "& .ant-collapse-arrow": {
      fontSize: "16px !important",
      marginTop: "8px",
      color: "#cfd2d6 !important",
    },
    "& .ant-collapse-content": {
      backgroundColor: "#283045",
      border: "none",
    },
    "& .ant-collapse-item": {
      border: "none",
      backgroundColor: "#283045",
      borderRadius: "10px !important",
    },
  },
}));

const CardComp = ({ card }) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.card}
      onClick={() => {
        window.open(card.demo, "_blank");
      }}
    >
      <Meta
        title={
          <div
            style={{
              textAlign: "left",
              color: "#cfd2d6",
              marginBottom: "10px",
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            {card?.name}
          </div>
        }
      />
      <img
        onClick={() => {
          window.open(card.demo, "_blank");
        }}
        alt="example"
        src={card?.img?.[0]?.url}
        style={{
          maxWidth: "100%",
          height: "100%",
          //margin: "auto",
          //height: "calc(100% - 1.7rem)",
          //objectFit: "contain",
          //padding: "3px",
        }}
      />
    </Card>
  );
};

const Section = ({ tools }) => {
  const classes = useStyles();
  return (
    <Collapse
      className={classes.customCollapse}
      defaultActiveKey={["1"]}
      size="large"
      style={{
        marginBottom: "20px",
        border: "1px solid rgb(40, 48, 69)",
        boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 12px",
        borderRadius: "8px",
        backgroundColor: "rgb(40, 48, 69)",
        //boxShadow: "0 0 20px -5px white",
      }}
      items={[
        {
          key: "1",
          label: (
            <div
              style={{
                fontSize: "1.2rem",
                fontWeight: "500",
                color: "#cfd2d6",
                textAlign: "center",
              }}
            >
              {tools.title}
            </div>
          ),
          children: (
            <Row gutter={[32, 32]}>
              {tools.data.map((card) => (
                <Col
                  key={`card-col-${card?.name}`}
                  xs={24}
                  sm={24}
                  md={24}
                  lg={8}
                  xl={8}
                >
                  <CardComp card={card} />
                </Col>
              ))}
            </Row>
          ),
        },
      ]}
    />
  );
};

export default Section;
