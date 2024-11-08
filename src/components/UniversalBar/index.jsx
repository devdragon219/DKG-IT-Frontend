import { makeStyles } from "@mui/styles";
import { Chart as ChartJS, registerables } from "chart.js";
import React, { useEffect, useRef, useState } from "react";
import { Chart } from "react-chartjs-2";
import { Box } from "@mui/material";

ChartJS.register(...registerables);

const createGradient = (ctx, area, start, end) => {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  gradient.addColorStop(0, start);
  gradient.addColorStop(1, end);
  return gradient;
};

const useStyles = makeStyles({});

const UniversalBar = (props) => {
  const chartRef = useRef(null);
  const { data, options, containerStyle } = props?.data?.originalData;
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const classes = useStyles();

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) {
      return;
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map((d) => ({
        ...d,
        backgroundColor: d.gradient
          ? createGradient(
              chart.ctx,
              chart.chartArea,
              d.gradient.start,
              d.gradient.end
            )
          : d.backgroundColor,
      })),
    };

    setChartData(chartData);
  }, [data]);

  return (
    <Box
      sx={{ ...classes, ...containerStyle }}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        fontFamily: "system-ui",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          margin: "0 auto",
        }}
      >
        <Chart
          type="bar"
          key={options.indexAxis}
          ref={chartRef}
          data={chartData}
          options={options}
        />
      </div>
    </Box>
  );
};

export default UniversalBar;
