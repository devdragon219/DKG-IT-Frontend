import React from "react";
import { Card } from "antd";
import { makeStyles } from "@mui/styles";

import "./styles.css";

const { Meta } = Card;

const useStyles = makeStyles(() => ({
  card: {
    cursor: "pointer",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  customСollapse: {
    "& .ant-collapse-arrow": {
      fontSize: "16px !important",
      marginTop: "8px",
    },
  },
}));

const ToolCardComponent = (props) => {
  const classes = useStyles();
  const card = props.data.data;

  return (
    <Card
      className={classes.card + " tool-card-component"}
      onClick={() => {
        window.open(card.demo, "_blank");
      }}
      cover={
        <img
          onClick={() => {
            window.open(card.demo, "_blank");
          }}
          alt="example"
          src={card?.useURL ? card?.docUrl : card?.img?.[0]?.url}
          style={{
            objectFit: "contain",
            padding: "3px",
            width: "100%",
            height: "100%",
          }}
        />
      }
      // actions={actions}
    >
      <Meta
        title={
          <div
            style={{
              textAlign: "center",
              marginBottom: "10px",
            }}
            onClick={() => {
              window.open(card.demo, "_blank");
            }}
          >
            {card?.title}
          </div>
        }
      />
    </Card>
  );
};

export default ToolCardComponent;
