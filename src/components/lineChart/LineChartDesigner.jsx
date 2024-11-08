import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Chart as ChartJS,
  registerables,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

ChartJS.register(...registerables);

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    position: "relative",
    fontFamily: "system-ui",
  },
});

const options = {
  scales: {
    y: {
      grid: {
        display: true,
        color: "#000",
      },
    },
    x: {
      grid: {
        display: true,
        color: "#000",
      },
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  hover: {
    mode: "nearest",
    intersect: false,
  },
};

function createGradient(ctx, color = "#5CCCE4") {
  const gradient = ctx.createLinearGradient(0, 0, 0, 150);

  gradient.addColorStop(0, color);
  gradient.addColorStop(1, `${color}21`);

  return gradient;
}

export function LineChartDesigner(props) {
  const data = useMemo(
    () => props?.data?.originalData?.data || {},
    [props?.data?.originalData?.data]
  );
  const dataTitle = props?.data?.originalData?.title || "";
  const titleSize = props?.data?.originalData?.titleSize || "";

  //const heightProps = props?.data?.originalData?.height || 600;
  const classes = useStyles();
  const titleColor = props?.data?.originalData?.titleColor || "#5CCBE4";

  const widthProps =
    props?.data?.originalData?.width !== undefined
      ? props.data.originalData.width
      : "100%";
  const heightProps =
    props?.data?.originalData?.height !== undefined
      ? props.data.originalData.height
      : "85%";

  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map((dataset) => {
        return {
          ...dataset,
          type: "line",
          borderColor: dataset.fill
            ? createGradient(chart.ctx, dataset.color)
            : dataset.color || "#5CCCE4",
          backgroundColor: dataset.fill
            ? createGradient(chart.ctx, dataset.color)
            : dataset.color || "#5CCCE4",
        };
      }),
    };

    setChartData(chartData);
  }, [data]);

  return (
    <Box
      className={classes.wrapper}
      style={{
        height: props?.geoDashboard ? "100%" : "100vh",
      }}
    >
      {dataTitle && (
        <div
          style={{
            fontSize: titleSize ? titleSize : "24px",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: "bolder",
            color: titleColor,
            textAlign: "center",
          }}
        >
          {dataTitle}
        </div>
      )}
      <div
        style={{
          width: widthProps,
          height: heightProps,
          margin: "0 auto",
        }}
      >
        <Line data={chartData} options={options} ref={chartRef} />
      </div>
    </Box>
  );
}

export default LineChartDesigner;
