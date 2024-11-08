import React, { useMemo, useEffect } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
} from "chart.js";
import { Box } from "@mui/material";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(ArcElement, RadialLinearScale, Tooltip, Legend);

export const getDefaultDataset = ({
  labels,
  data,
  label,
  backgroundColor,
}) => ({
  labels,
  datasets: [
    {
      label,
      data,
      backgroundColor: backgroundColor || [
        "rgba(255, 99, 132, 0.9)",
        "rgba(54, 162, 235, 0.9)",
        "rgba(255, 206, 86, 0.9)",
        "rgba(75, 192, 192, 0.9)",
        "rgba(153, 102, 255, 0.9)",
        "rgba(255, 159, 64, 0.9)",
      ],
      borderWidth: 2,
      borderColor: "#fff",
    },
  ],
});

export function PolarChartDesigner(props) {
  const title = props?.data?.originalData?.title;
  const titleFontSize = props?.data?.originalData?.titleFontSize || "1.2rem";
  const titleFontColor = props?.data?.originalData?.titleFontColor || "#0c5391";
  const dataProps = props?.data?.originalData || {
    data: getDefaultDataset({
      labels: ["Red1", "Blue", "Yellow", "Green", "Purple", "Orange"],
      data: [12, 19, 3, 5, 2, 3],
      label: "# of Votes",
      backgroundColor: [
        "rgba(255, 99, 132, 0.9)",
        "rgba(54, 162, 235, 0.9)",
        "rgba(255, 206, 86, 0.9)",
        "rgba(75, 192, 192, 0.9)",
        "rgba(153, 102, 255, 0.9)",
        "rgba(255, 159, 64, 0.9)",
      ],
    }),
  };

  const options = useMemo(() => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      plugins: {
        datalabels: {
          display: false, // Disable data labels
        },
        // title: {
        //   display: true,
        //   text: props?.data?.originalData?.title,
        //   color: "#0c5391",
        //   font: {
        //     family: "Arial, Helvetica, sans-serif",
        //     weight: "100",
        //     size: "20px",
        //   },
        // },
        legend: {
          labels: {
            font: {
              size: 10,
            },
            color: "grey",
          },
        },
      },
      elements: {
        line: {
          borderWidth: 3,
        },
      },
      scales: {
        r: {
          angleLines: {
            color: "#d0d2d6",
          },
          grid: {
            color: "#d0d2d6",
            fill: "black",
          },
          pointLabels: {
            color: "#d0d2d6",
          },
          ticks: {
            color: "black",
            z: 1,
          },
        },
      },
    };
  });

  return props?.geoDashboard ? (
    <>
      <Box
        style={{
          height: `${title ? "85%" : "100%"}`,
        }}
      >
        <div
          style={{
            height: "100%",
          }}
        >
          <div
            style={{
              fontSize: titleFontSize,
              fontFamily: "Arial, Helvetica, sans-serif",
              textAlign: "center",
              color: titleFontColor,
              margin: "15px 0 0",
            }}
          >
            {title}
          </div>
          <PolarArea data={dataProps?.data} options={options} />
        </div>
      </Box>
    </>
  ) : (
    <>
      <div
        style={{
          textAlign: "center",
          padding: "0 0 25px 0",
          fontFamily: "Montserrat, Helvetica, Arial, serif",
          height: dataProps?.height || "300px",
        }}
      >
        {dataProps?.title && (
          <div
            style={{
              color: props?.isDarkTheme ? "rgb(208, 210, 214)" : "#0c5393",
              fontSize: titleFontSize,
              marginBottom: "10px",
              lineHeight: "20px",
            }}
          >
            {dataProps?.title}
          </div>
        )}
        <PolarArea data={dataProps?.data} options={options} />
      </div>
    </>
  );
}

export default PolarChartDesigner;
