import React from "react";
import { Card, Col, Collapse, Row } from "antd";
import { makeStyles } from "@mui/styles";

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
  customCollapse: {
    "& .ant-collapse-arrow": {
      fontSize: "16px !important",
      marginTop: "8px",
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
      cover={
        <img
          onClick={() => {
            window.open(card.demo, "_blank");
          }}
          alt="example"
          src={card?.img?.[0]?.url}
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
            {card?.name}
          </div>
        }
      />
    </Card>
  );
};

const Section = ({ data }) => {
  const dataObject = data?.data;
  const classes = useStyles();
  return (
    <div>
      <Collapse
        className={classes.customCollapse}
        defaultActiveKey={["1"]}
        size="large"
        style={{
          marginBottom: "20px",
        }}
        items={[
          {
            key: "1",
            label: (
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                {dataObject.title}
              </div>
            ),
            children: (
              <Row gutter={[32, 32]}>
                {dataObject?.data.map((card) => (
                  <Col
                    key={`card-col-${card?.name}`}
                    xs={24} // 1 card per row on extra small screens
                    sm={24} // 2 cards per row on small screens
                    md={24} // 2 cards per row on medium screens
                    lg={data.rightSidebar ? 12 : 8} // 2 cards per row on large screens
                    xl={data.rightSidebar ? 12 : 8} // Still 2 cards per row to account for sidebars
                    xxl={8} // 3 cards per row only on extra-large screens with enough space
                  >
                    <CardComp card={card} />
                  </Col>
                ))}
              </Row>
            ),
          },
        ]}
      />
    </div>
  );
};

export default Section;
