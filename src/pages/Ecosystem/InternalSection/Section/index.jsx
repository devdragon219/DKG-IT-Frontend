import React from "react";
import { Card, Col, Collapse, Row } from "antd";
import { makeStyles } from "@mui/styles";
import { getName } from "../../../../constants/names";
import { LINKS_CONSTS } from "../../../../constants/links";

const { Meta } = Card;

const useStyles = makeStyles(() => ({
  card: {
    cursor: "pointer",
    transition: "all 0.2s ease",
    boxShadow:
      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
    "&:hover": {
      transform: "scale(1.03)",
    },
  },
}));

const CardComp = ({ card }) => {
  const classes = useStyles();
  const cardDetails = LINKS_CONSTS[card];

  return (
    <Card
      className={classes.card}
      onClick={() => {
        window.open(cardDetails.demo, "_blank");
      }}
      cover={
        <img
          alt="example"
          src={`/assets/${card}.webp`}
          style={{
            height: "250px",
            objectFit: "contain",
            padding: "3px",
          }}
        />
      }
    >
      <Meta
        title={
          <div
            style={{
              textAlign: "center",
            }}
          >
            {getName(card)}
          </div>
        }
      />
    </Card>
  );
};

const Section = ({ tools, name }) => {
  return (
    <Collapse
      defaultActiveKey={["1"]}
      size="large"
      style={{
        marginBottom: "20px",
      }}
      items={[
        {
          key: "1",
          label: <div>{getName(name)}</div>,
          children: (
            <Row gutter={[32, 32]}>
              {tools.map((card) => {
                return (
                  <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                    <CardComp card={card} />
                  </Col>
                );
              })}
            </Row>
          ),
        },
      ]}
    />
  );
};

export default Section;
