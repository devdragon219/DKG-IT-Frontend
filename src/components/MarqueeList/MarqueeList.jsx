import Marquee from "react-marquee-line";
import { makeStyles } from "@mui/styles";

import "./index.css";

const useStyles = makeStyles({
  wrap: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    overflow: "hidden",
    position: "relative",
    height: "50px",
    width: "100%",
    background: "#fff",
  },
  negative: {
    cursor: "pointer",
    display: "flex",
    width: "70px",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #e9e9e9",
    borderRadius: "5px",
    padding: "5px",
    borderLeftColor: "#dd1c28",
    borderLeftWidth: "5px",
    "& .number": {
      color: "#dd1c28",
    },
  },
  positive: {
    cursor: "pointer",
    display: "flex",
    width: "70px",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #e9e9e9",
    borderRadius: "5px",
    padding: "5px",
    borderLeftColor: "#00eb80",
    borderLeftWidth: "5px",
    "& .number": {
      color: "#00eb80",
    },
  },
  title: {
    fontSize: "12px",
    fontWeight: "600",
  },
  number: {
    fontSize: "10px",
    fontWeight: "100",
  },
});

const MarqueeList = (props) => {
  const classes = useStyles();
  const dataProps = props?.data.originalData.data;

  const data = dataProps.map((item) => {
    const status = Math.sign(item?.progress) === 1 ? "positive" : "negative";

    return (
      <div className={classes[status]}>
        <span className={classes.title}>{item.title}</span>
        <span className={`${classes.progress} number`}>{`${
          status === "positive" ? "+" : ""
        }${item?.progress}%`}</span>
      </div>
    );
  });

  return (
    <div className={classes.wrap}>
      <Marquee list={data} gear={0.5} style={{ height: "50px" }} />
    </div>
  );
};

export default MarqueeList;
