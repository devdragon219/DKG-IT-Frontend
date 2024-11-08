import React, {useRef} from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const defaultOptions = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
    legend: {
      labels: {
        font: {
          size: 24,
        },
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      ticks: {
        font: {
          size: 32,
        },
      },
      grid: {
        color: "darkgray"
      },
      backgroundColor: "white",
    },
    y: {
      stacked: true,
    },
  },
};

const generateLinearGradient = (height, opts) => {
  return (context) => {
    const { chart: {ctx} } = context;
    const { x0, y0, x1, y1 } = opts.coordinates || {x0: 0, y0: height, x1: 0, y1: 0}
    const gradient = ctx.createLinearGradient(
      x0,
      y0 || height,
      x1,
      y1,
    );
    gradient.addColorStop(0, opts.start || "darkgray");
    gradient.addColorStop(1, opts.end || "blue");
    return gradient;
  }
}

const StackedBarChartDesigner = (props) => {
  const dataProps = props?.data.originalData.data || {};
  const options = {
    ...defaultOptions,
    ... props?.data.originalData.options || {},
  };
  const height = props?.data?.originalData?.height || 700;
  const containerStyle = props?.data?.originalData?.containerStyle || {};
  const boxStyle= {
    ...containerStyle,
    height:  props?.data?.originalData?.height || 700,
    width: props?.data?.originalData?.width,
  }
  const data = {
    ...dataProps,
    datasets: dataProps.datasets.map(d => {
      return {
        ...d,
        backgroundColor: d.gradient ? generateLinearGradient(height, d.gradient) : d.backgroundColor,
      }
    }),
  }
  return (
    <div style={{ ...boxStyle }}>
      <Bar options={options} data={data} />
    </div>
  );
}

export default StackedBarChartDesigner;
