import React from "react";
import { makeStyles } from "@mui/styles";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const useStyles = makeStyles({
  wrap: {
    width: "100%",
    paddingBottom: "30px",
    fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
  },
});

const VerticalBarDiff = (props) => {
  const classes = useStyles();

  const dataProps = props?.data.originalData.data;
  const titleProps = props?.data.originalData.title;
  const yAxisLabel = props?.data.originalData.yAxisLabel;
  const heightProps = props?.data.originalData.height || 400;


  const CustomizedLabel = (props) => {
    const element = dataProps.find((item) => item.name === props.name);
    let labelPosition = props.y - 5;
    let value = `+ ${element?.up} ▲`;
    let color = "#96c800";

    if (element?.down > 0) {
      labelPosition =
        ((heightProps - 100 - props.y) / props.value) *
          (element?.up + element?.down) +
        props.y +
        15;
      color = "#e51f40";
      value = `- ${element?.down} ▼`;
    }

    return (
      <text
        name={props.name}
        x={props.viewBox.x + props.width / 2}
        y={labelPosition}
        width="49"
        height="0"
        fill={color}
        fontSize="13"
        fontWeight={600}
        offset="5"
        class="recharts-text recharts-label"
        text-anchor="middle"
      >
        <tspan x={props.viewBox.x + props.width / 2}>{value}</tspan>
      </text>
    );
  };

  return (
    <div
      className={classes.wrap}
      style={{ height: `${heightProps}px`, maxWidth: "600px", margin: "0 25px" }}
    >
      <div style={{ fontSize: "26px", textAlign: "center", margin: "25px 0", fontWeight: "bold" }}>
        {titleProps}
      </div>
      <ResponsiveContainer>
        <BarChart data={dataProps} margin={{ top: 30 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="name"
            angle={-45}
            textAnchor="end"
            height={100}
            fontWeight={600}
          />
          <YAxis label={{ value: yAxisLabel, angle: -90, position: 'insideLeft', offset: "10" }} width={100} />
          <Bar dataKey="current" stackId="a" fill="#e8e8e8" />
          <Bar dataKey="up" stackId="a" fill="#96c800" />
          <Bar
            dataKey="down"
            stackId="a"
            fill="#e51f40"
            label={<CustomizedLabel />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VerticalBarDiff;
