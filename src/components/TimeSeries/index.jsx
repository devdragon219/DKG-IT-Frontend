import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  TimeScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

import "chartjs-adapter-date-fns";

import {Line} from "react-chartjs-2";

ChartJS.register(
  LineElement,
  TimeScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const TimeSeries = (props) => {
  const data = props?.data?.originalData?.data;
  const dataTitle = props?.data?.originalData?.title || "Time Series Chart";
  const shadeColor = props?.data?.originalData?.shadeColor;
  const heightProps = props?.data?.originalData?.height;

  const shadingArea = {
    id: "shadingArea",
    beforeDatasetsDraw(chart, args, pluginsOptions) {
      const {
        ctx,
        chartArea: {top, bottom, left, right, width, height},
        scales: {x, y},
      } = chart;
      ctx.save();
      const tickHeight = y.height / y._valueRange;
      const datapointsLength = chart.data.labels.length;
      const datapoints = (datapointsLength - 1) * 2;

      ctx.beginPath();
      ctx.fillStyle = shadeColor;
      ctx.moveTo(
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y +
        tickHeight * chart.data.datasets[0].shadingRange[0].min
      );

      for (let i = 1; i < datapointsLength; i++) {
        ctx.bezierCurveTo(
          chart.getDatasetMeta(0).data[i - 1].x + width / datapoints,
          chart.getDatasetMeta(0).data[i - 1].y +
          tickHeight * chart.data.datasets[0].shadingRange[i - 1].min,
          chart.getDatasetMeta(0).data[i].x - width / datapoints,
          chart.getDatasetMeta(0).data[i].y +
          tickHeight * chart.data.datasets[0].shadingRange[i].min,
          chart.getDatasetMeta(0).data[i].x,
          chart.getDatasetMeta(0).data[i].y +
          tickHeight * chart.data.datasets[0].shadingRange[i].min
        );
      }

      ctx.lineTo(
        chart.getDatasetMeta(0).data[datapointsLength - 1].x,
        chart.getDatasetMeta(0).data[datapointsLength - 1].y -
        tickHeight *
        chart.data.datasets[0].shadingRange[datapointsLength - 1].max
      );

      for (let z = datapointsLength - 1; 0 < z; z--) {
        ctx.bezierCurveTo(
          chart.getDatasetMeta(0).data[z].x - width / datapoints,
          chart.getDatasetMeta(0).data[z].y -
          tickHeight * chart.data.datasets[0].shadingRange[z].max,
          chart.getDatasetMeta(0).data[z - 1].x + width / datapoints,
          chart.getDatasetMeta(0).data[z - 1].y -
          tickHeight * chart.data.datasets[0].shadingRange[z - 1].max,
          chart.getDatasetMeta(0).data[z - 1].x,
          chart.getDatasetMeta(0).data[z - 1].y -
          tickHeight * chart.data.datasets[0].shadingRange[z - 1].max
        );
      }

      ctx.closePath();
      ctx.fill();
    },
  };

  ChartJS.register(shadingArea);

  const options = {
    plugins: {
      datalabels: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: (context) => {
            const d = new Date(context[0].parsed.x);
            const formattedDate = d.toLocaleString([], {
              day: "2-digit",
              month: "short",
            });
            return formattedDate;
          },
        },
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
        },
      },
      y: {
        suggestedMin: props?.data?.originalData?.min || null,
        suggestedMax: props?.data?.originalData?.max || null,
        //stepSize: 10,
        //beginAtZero: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <>
      <div
        style={{
          height: `${heightProps}px`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "25px",
          gap: "10px",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: "bolder",
            color: "#5CCCE4",
          }}
        >
          {dataTitle}
        </div>
        <Line data={data} options={options}></Line>
      </div>
    </>
  );
};

export default TimeSeries;
