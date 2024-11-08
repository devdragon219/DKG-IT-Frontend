import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  CategoryScale,
  LineElement,
  BarElement,
  Filler,
  Tooltip,
  Legend,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    tooltip: {
      callbacks: {
        title: function (t) {
          return "";
        },
      },
    },
    legend: {
      display: false,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      title: {
        color: "#000",
        display: true,
        font: {
          size: 14,
        },
      },
      ticks: {
        color: "#000",
      },
    },
    x: {
      title: {
        color: "#000",
        display: true,
        font: {
          size: 14,
        },
      },
      ticks: {
        display: true,
        color: "#000",
        font: {
          size: 10,
        },
      },
    },
  },
};

function createGradient(ctx) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 150);

  gradient.addColorStop(0, "rgba(102, 72, 194, 0.7)");
  gradient.addColorStop(1, "rgba(254, 110, 234, 0.7)");

  return gradient;
}

export function ComparisonBarsDesignerExt(props) {
  const data = useMemo(() => props?.data?.originalData?.data || {}, [props?.data?.originalData?.data]);
  const dataTitle = props?.data?.originalData?.title || "";

  const heightProps = 300;

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
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        borderColor: createGradient(chart.ctx),
        backgroundColor: createGradient(chart.ctx),
        barThickness: 30,
      })),
    };

    setChartData(chartData);
  }, [data]);

  return (
    <div
      style={{
        height: `${heightProps}px`,
        width: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <div
        style={{
          fontSize: "14px",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontWeight: "bolder",
          color: "rgba(102, 72, 194, 0.7)",
        }}
      >
        {dataTitle}
      </div>
      <Bar data={chartData} options={options} ref={chartRef} />
    </div>
  );
}

export function ComparisonBarsDesigner(props) {
  const dataProps = props?.data?.originalData || [];

  return (
    <div
      style={{
        display: "flex",
        gap: "25px",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        padding: "25px 0",
      }}
    >
      {dataProps.map((data) => (
        <ComparisonBarsDesignerExt data={data} />
      ))}
    </div>
  );
}

export default ComparisonBarsDesigner;
