import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ArrowProgressChart = (props) => {
  const data = props?.data?.originalData?.data;
  const heightProps = props?.data?.originalData?.height;
  const dataTitle = props?.data?.originalData?.title;
  const titleColor = props?.data?.originalData?.titleColor;
  const phasesArr = props?.data?.originalData?.phases;
  const phasesTextArr = props?.data?.originalData?.phasesText;
  const size = 0.7;
  const arrow = {
    id: "arrow",
    beforeDatasetsDraw(chart, args, options) {
      const {
        ctx,
        chartArea: { top, bottom, left, right, width, height },
        scales: { x, y },
      } = chart;
      ctx.save();
      let initalValue = 0;
      phasesArr.forEach((sumDatapoint, index) => {
        let difference = sumDatapoint - initalValue;
        let diff = difference / 2 + initalValue;
        initalValue = sumDatapoint;
        ctx.beginPath();
        ctx.strokeStyle = "#adadad";
        ctx.lineWidth = 1;
        ctx.setLineDash([6, 6]);
        ctx.moveTo(x.getPixelForValue(sumDatapoint), top);
        ctx.lineTo(x.getPixelForValue(sumDatapoint), bottom);
        ctx.stroke();
        ctx.restore();
        ctx.setLineDash([]);

        ctx.font = "bolder 12px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "#666";
        ctx.fillText(
          phasesTextArr[index],
          x.getPixelForValue(diff),
          y.getPixelForValue(data.labels.length - 1)
        );
      });
    },

    afterDatasetDraw(chart, args, options) {
      const { ctx } = chart;

      for (
        let i = 0;
        i < chart.getDatasetMeta(chart.data.datasets.length - 1).data.length;
        i++
      ) {
        const x = chart.getDatasetMeta(chart.data.datasets.length - 1).data[i]
          .x;
        const y = chart.getDatasetMeta(chart.data.datasets.length - 1).data[i]
          .y;
        const bordercolor = chart.getDatasetMeta(chart.data.datasets.length - 1)
          ._dataset.backgroundColor;

        drawArrow(x, y, bordercolor, size);
      }

      function drawArrow(xPosition, yPosition, color, size) {
        const arrowSize = (size * 100) / 2 + 1; // Size of the arrow
        const barWidth = (size * 100) / 2; // Width of the bar

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.moveTo(xPosition + barWidth, yPosition); // Move to the end of the bar
        ctx.lineTo(xPosition + barWidth - arrowSize, yPosition - arrowSize / 2); // Draw arrow part 1
        ctx.lineTo(xPosition + barWidth - arrowSize, yPosition + arrowSize / 2); // Draw arrow part 2
        ctx.lineTo(xPosition + barWidth, yPosition); // Complete arrow
        ctx.fill();
        ctx.closePath();
        ctx.restore();
      }
    },
  };

  const innerText = {
    id: "innerText",
    afterDatasetDraw(chart, args, pluginOptions) {
      const {
        ctx,
        data,
        chartArea: { left },
        scales: { x, y },
      } = chart;
      data.labels.forEach((dataPoint, index) => {
        ctx.font = "bolder 12px sans-serif";
        ctx.fillStyle = "white";
        ctx.textAlign = "left";
        ctx.fillText(
          `${data.labels[index]}`,
          left + 10,
          y.getPixelForValue(index)
        );
      });
    },
  };

  ChartJS.register(arrow);
  ChartJS.register(innerText);

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            let label = tooltipItem.formattedValue;
            if (tooltipItem.parsed.x >= 1000000000) {
              return tooltipItem.parsed.x / 1000000000 + " B";
            }
            if (tooltipItem.parsed.x > 1000000) {
              return tooltipItem.parsed.x / 1000000 + " M";
            }
            if (tooltipItem.parsed.x > 1000) {
              return tooltipItem.parsed.x / 1000 + " K";
            } else {
              return tooltipItem.parsed.x;
            }
          },
        },
      },
    },
    hover: { mode: null },
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    scales: {
      x: {
        stacked: true,
        beginAtZero: true,
        grace: 0.5,
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value) {
            // Shorten large numbers in data labels
            if (value >= 1000000000) {
              return value / 1000000000 + " B";
            }
            if (value > 1000000) {
              return value / 1000000 + " M";
            }
            if (value > 1000) {
              return value / 1000 + " K";
            } else {
              return value;
            }
          },
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      <div
        style={{
          height: `${heightProps}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "25px",
          gap: "10px",
        }}
      >
        {dataTitle && (
          <div
            style={{
              fontSize: "24px",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: "bolder",
              color: titleColor,
            }}
          >
            {dataTitle}
          </div>
        )}
        <Bar data={data} options={options}></Bar>
      </div>
    </>
  );
};

export default ArrowProgressChart;
