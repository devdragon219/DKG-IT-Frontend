import React from "react";
import { Card, Col, Collapse, Row } from "antd";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { CREATE_ROUTE } from "../../../../constants/routes";
import { LINKS_CONSTS } from "../../../../constants/links";

import { getName } from "../../../../constants/names";

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
  customСollapse: {
    "& .ant-collapse-arrow": {
      fontSize: "16px !important",
      marginTop: "8px",
    },
  },
}));

const CardComp = ({ card }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const cardDetails = LINKS_CONSTS[card];

  return (
    <Card
      className={classes.card}
      cover={
        <img
          onClick={() => {
            window.open(cardDetails.demo, "_blank");
          }}
          alt="example"
          src={`/assets/${card}.webp`}
          style={{
            height: "250px",
            objectFit: "contain",
            padding: "3px",
          }}
        />
      }
      actions={[
        <a
          href={cardDetails?.demo}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Demo
        </a>,
        <a
          href={cardDetails?.link ? cardDetails?.link : `${CREATE_ROUTE}${card}`}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Create
        </a>,
      ]}
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
  const classes = useStyles();
  return (
    <Collapse
      className={classes.customСollapse}
      defaultActiveKey={["1"]}
      size="large"
      style={{
        marginBottom: "20px",
      }}
      items={[
        {
          key: "1",
          label: <div style={{
            fontSize: "20px",
            fontWeight: "700"
          }}>{getName(name)}</div>,
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
