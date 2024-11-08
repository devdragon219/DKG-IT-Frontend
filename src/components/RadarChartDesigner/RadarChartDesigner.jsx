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


const DEFAULT_SELECTED_THEME = {
  "name": "custom",
  "backgroundHeader": "linear-gradient(-30deg, #398bbc 0%, #0c5393 40%, #398bbc 50%)",
  "backgroundFooter": "linear-gradient(90deg, #0c5393 0%, #398bbc 100%)",
  "textColor": "black",
  "barColor1": "#0c5393",
  "barColor2": "#398bbc",
  "radarSettings": {
      "backgroundColor": "rgba(54, 162, 235, 0.2)",
      "borderColor": "#398bbc",
      "pointBackgroundColor": "#398bbc",
      "pointBorderColor": "#fff",
      "pointHoverBackgroundColor": "#fff",
      "pointHoverBorderColor": "#398bbc"
  }
}

// const graphic2D = require('../../libs/graphic2D.min');
//
// const RadarChartDesigner = (props) => {
//     const dataProps = props?.data.originalData.data || {};
//     const heightProps = props?.data?.originalData?.height || 700;
//     const ref = React.useRef(null);
//     const cloneProps = JSON.parse(JSON.stringify(dataProps));
//
//     useEffect(() => {
//         graphic2D.radarChartFactory(ref.current, cloneProps);
//     }, []);
//
//     return (
//         <div style={{height: `${heightProps}px`}}>
//             <canvas ref={ref}/>
//         </div>
//     );
// }

export function RadarChartDesigner(props) {
  const dataProps = props?.data.originalData.data || {};
  console.log(dataProps)
  const heightProps = props?.data?.originalData?.height || "300px";
  const widthProps = props?.data?.originalData?.width || "300px";
  const title = props?.data?.originalData?.title;
  const selectedTheme = props?.selectedTheme ? props?.selectedTheme : DEFAULT_SELECTED_THEME;
  const stepSize = props?.data?.originalData?.stepSize || "";
  const beginAtZero = props?.data.originalData?.beginAtZero;
  const fontSize = props?.data?.originalData?.fontSize || "24px";

  const backgroundColor =
    dataProps?.datasets[0]?.backgroundColor ||
    (selectedTheme ? selectedTheme.radarSettings.backgroundColor : undefined);
  const borderColor =
    dataProps?.datasets[0]?.borderColor ||
    (selectedTheme ? selectedTheme.radarSettings.borderColor : undefined);
  const pointBackgroundColor =
    dataProps?.datasets[0]?.pointBackgroundColor ||
    (selectedTheme
      ? selectedTheme.radarSettings.pointBackgroundColor
      : undefined);
  const pointBorderColor =
    dataProps?.datasets[0]?.pointBorderColor ||
    (selectedTheme ? selectedTheme.radarSettings.pointBorderColor : undefined);
  const pointHoverBackgroundColor =
    dataProps?.datasets[0]?.pointHoverBackgroundColor ||
    (selectedTheme
      ? selectedTheme.radarSettings.pointHoverBackgroundColor
      : undefined);
  const pointHoverBorderColor =
    dataProps?.datasets[0]?.pointHoverBorderColor ||
    (selectedTheme
      ? selectedTheme.radarSettings.pointHoverBorderColor
      : undefined);

  const modifiedData = {
    ...dataProps,
    datasets: [
      {
        ...dataProps?.datasets[0],
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        pointBackgroundColor: pointBackgroundColor,
        pointBorderColor: pointBorderColor,
        pointHoverBackgroundColor: pointHoverBackgroundColor,
        pointHoverBorderColor: pointHoverBorderColor,
      },
    ],
  };

  const options = {
    scale: {
      min: beginAtZero ? 0 : undefined,
      stepSize: stepSize,
    },
  };

  return props?.geoDashboard ? (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {title && (
        <div style={{ margin: "10px", color: "#0c5393", fontSize: "1em" }}>
          {title}
        </div>
      )}
      <Radar height={heightProps} data={dataProps} options={options} />
    </div>
  ) : (
    <div>
      {title && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px",
            fontSize: fontSize,
            fontFamily: "Arial, Helvetica, sans-serif",
            color: "#0c5393",
          }}
        >
          {title}
        </div>
      )}
      <div
        style={{
          width: widthProps,
          height: heightProps,
          margin: "0 auto",
        }}
      >
        <Radar data={modifiedData} options={options} />
      </div>
    </div>
  );
}

export default RadarChartDesigner;
