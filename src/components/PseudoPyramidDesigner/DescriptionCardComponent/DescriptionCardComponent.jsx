import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  image: {
    display: "block",
    maxWidth: "100%",
    height: "auto",
    maxHeight: "100px",
  },
  cardImgWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: "120px",
    width: "100%",
  },
});

const DescriptionCardComponent = ({ data }) => {
  const classes = useStyles();

  return (
    <Card
      sx={{ minWidth: 275 }}
      style={{
        cursor: data?.link ? "pointer" : "",
      }}
      onClick={() => {
        if (data?.link) {
          window.open(data?.link, "_blank");
        }
      }}
    >
      <CardContent>
        <div className={classes.cardImgWrapper}>
          <img src={data.image_data} alt="" className={classes.image} />
        </div>

        <Typography variant="h5" component="div">
          {data.name}
        </Typography>

        <Typography variant="body2">{data.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default DescriptionCardComponent;
