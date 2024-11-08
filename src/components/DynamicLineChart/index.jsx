import React, { useState, useEffect } from "react";

import {
  Chart as ChartJS,
  registerables,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";

import "chartjs-adapter-date-fns";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { Line } from "react-chartjs-2";

ChartJS.register(...registerables);

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  TimeScale,
  ChartDataLabels
);

const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    height: "100vh",
    position: "relative",
    fontFamily: "system-ui",
  },
});

const DynamicLineChart = (props) => {
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });
  const classes = useStyles();
  const dataTitle = props?.data?.originalData?.title;
  const titleColor = props?.data?.originalData?.titleColor;
  const titleSize = props?.data?.originalData?.titleSize || "";
  console.log(data, 777);
  //const heightProps = props?.data?.originalData?.height || 600;

  const widthProps =
    props?.data?.originalData?.width !== undefined
      ? props.data.originalData.width
      : "100%";
  const heightProps =
    props?.data?.originalData?.height !== undefined
      ? props.data.originalData.height
      : "85%";

  useEffect(() => {
    const loadChartData = () => {
      const initialLabels = [props?.data?.originalData?.labels[0]];
      const initialData = props?.data?.originalData?.datasets.map(
        (dataset) => ({
          label: dataset?.label,
          data: [dataset?.data[0]],
          fill: false,
          borderColor: dataset?.color,
          color: dataset?.color,
          borderWidth: 2,
          radius: 0,
          tension: 0.1,
        })
      );

      setData({
        labels: initialLabels,
        datasets: initialData,
      });

      let index = 0;

      const updateChart = () => {
        if (index < props?.data?.originalData?.labels.length - 1) {
          setData((prevData) => ({
            labels: [
              ...prevData.labels,
              props?.data?.originalData?.labels[index],
            ],
            datasets: prevData.datasets.map((prevDataset, i) => ({
              ...prevDataset,
              data: [
                ...prevDataset.data,
                props?.data?.originalData?.datasets[i].data[index],
              ],
            })),
          }));
          index++;
          setTimeout(updateChart, 100); // Update data every second
        }
      };

      updateChart();
    };

    loadChartData();
  }, [props]);

  const options = {
    layout: {
      padding: 20,
    },
    animation: {
      duration: 0,
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "time",
        time: {
          unit: "month",
        },
      },
    },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
        offset: 10,
        display: function (context) {
          return context.dataIndex === context.dataset.data.length - 1;
        },
      },
    },
  };

  return (
    <Box className={classes.wrapper}>
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
        <Line data={data} options={options} />
      </div>
    </Box>
  );
};

export default DynamicLineChart;
