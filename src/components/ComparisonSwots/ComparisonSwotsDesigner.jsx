import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export function ComparisonSwotsDesignerExt(props) {
  const dataProps = props?.data.originalData.data || {};

  const needScales = dataProps?.needScales;
  const heightProps = 350;

  function findMaxNumber(data) {
    let maxNumber = -Infinity;
    data.forEach((item) => {
      item.data.forEach((number) => {
        if (number > maxNumber) {
          maxNumber = number;
        }
      });
    });

    return maxNumber;
  }

  const options = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: findMaxNumber(dataProps?.datasets || []),
      },
    },
  };

  return (
    <div
      style={{
        height: `${heightProps}px`,
        width: "40%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Radar data={dataProps} options={needScales ? options : {}} />
    </div>
  );
}

export function ComparisonSwotsDesigner(props) {
  const dataProps = props?.data.originalData || [];

  return (
    <div
      style={{
        display: "flex",
        gap: "25px",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {dataProps.map((data) => (
        <ComparisonSwotsDesignerExt data={data} />
      ))}
    </div>
  );
}

export default ComparisonSwotsDesigner;
