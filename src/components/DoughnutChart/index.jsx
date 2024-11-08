import React, { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  Tooltip,
  ArcElement,
  RadialLinearScale,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import * as d3 from "d3";

const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    height: "100vh",
    position: "relative",
    fontFamily: "system-ui",
  },
});

ChartJS.register(ArcElement, RadialLinearScale, Tooltip, Legend);

const defaultSelectedTheme = {
  name: "custom",
  backgroundHeader:
    "linear-gradient(-30deg, #398bbc 0%, #0c5393 40%, #398bbc 50%)",
  backgroundFooter: "linear-gradient(90deg, #0c5393 0%, #398bbc 100%)",
  textColor: "black",
  barColor1: "#0c5393",
  barColor2: "#398bbc",
  radarSettings: {
    backgroundColor: "rgba(54, 162, 235, 0.2)",
    borderColor: "#398bbc",
    pointBackgroundColor: "#398bbc",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "#398bbc",
  },
};

const DoughnutChart = (props) => {
  const classes = useStyles();
  const data = props?.data?.originalData?.data;
  const dataTitle = props?.data?.originalData?.title
    ? props?.data?.originalData?.title
    : "";
  const fontTitle = props?.data?.originalData?.titleFontSize || "1em";
  const colorTitle = props?.data?.originalData?.titleFontColor || "#3993E1";
  const selectedTheme = props?.selectedTheme
    ? props?.selectedTheme
    : defaultSelectedTheme;

  const isDisplayLegend = props?.data?.originalData?.isDisplayLegend || true;
  const isDisplayDataLabels =
    props?.data?.originalData?.isDisplayDataLabels || true;
  const colorDataLabels =
    props?.data?.originalData?.colorDataLabels || "#9c9a9a";
  const bgColorDataLabels =
    props?.data?.originalData?.bgColorDataLabels || "none";
  const fontSizeDataLabels =
    props?.data?.originalData?.fontSizeDataLabels || 12;
  const borderRadiusDataLabels =
    props?.data?.originalData?.borderRadiusDataLabels || "none";

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: isDisplayLegend,
        labels: {
          color: props?.data?.originalData?.labelsColor || "#9c9a9a",
        },
      },
      datalabels: {
        display: isDisplayDataLabels,
        color: colorDataLabels,
        backgroundColor: bgColorDataLabels,
        borderRadius: borderRadiusDataLabels,
        font: {
          size: fontSizeDataLabels,
        },
      },
    },
  };

  const widthProps =
    props?.data?.originalData?.width !== undefined
      ? props.data.originalData.width
      : "100%";
  const heightProps = props?.data?.originalData?.height;

  const [computedHeight, setComputedHeight] = useState(0);

  const dataTitleRef = useRef(null);

  useEffect(() => {
    const heightTitle = dataTitleRef.current?.getBoundingClientRect().height;
    const heightBlock = "calc(100vh - " + heightTitle + "px)";
    const newHeight =
      heightProps !== undefined ? heightProps - heightTitle : heightBlock;

    setComputedHeight(newHeight);
  }, [heightProps]);

  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const colorRangeStart =
    props?.data?.originalData?.colorRangeStart !== undefined
      ? props.data.originalData.colorRangeStart
      : selectedTheme
      ? selectedTheme.barColor1
      : "#3993E1";
  const colorRangeFinish =
    props?.data?.originalData?.colorRangeFinish !== undefined
      ? props.data.originalData.colorRangeFinish
      : selectedTheme
      ? selectedTheme.barColor2
      : "#03294A";

  const generateColors = (dataLength, startColor, endColor) => {
    const color = d3
      .scaleLinear()
      .range([startColor, endColor])
      .domain([0, dataLength]);
    return Array.from({ length: dataLength }, (_, index) => color(index));
  };

  useEffect(() => {
    const chart = chartRef.current;
    const chartData = {
      ...data,
      datasets: data?.datasets?.map((dataset) => {
        const dataLength = dataset.data.length;
        const dataBackgroundColor = dataset.backgroundColor;
        const backgroundColors =
          typeof dataBackgroundColor === "undefined" ||
          !Array.isArray(dataBackgroundColor) ||
          dataBackgroundColor.length === 0
            ? generateColors(dataLength, colorRangeStart, colorRangeFinish)
            : dataBackgroundColor;
        return {
          ...dataset,
          type: "doughnut",
          backgroundColor: backgroundColors,
        };
      }),
    };

    setChartData(chartData);
  }, [data]);

  return props?.geoDashboard ? (
    <>
      <Box
        style={{
          height: `${dataTitle ? "85%" : "100%"}`,
        }}
      >
        <div
          style={{
            height: "100%",
          }}
        >
          <div ref={dataTitleRef}>
            {dataTitle && (
              <div
                style={{
                  fontSize: fontTitle,
                  fontFamily: "Arial, Helvetica, sans-serif",
                  color: colorTitle,
                  textAlign: "center",
                  margin: "15px 0 0",
                }}
              >
                {dataTitle}
              </div>
            )}
          </div>
          <Doughnut data={chartData} options={options} ref={chartRef} />
        </div>
      </Box>
    </>
  ) : (
    <Box className={classes.wrapper}>
      <div ref={dataTitleRef}>
        {dataTitle && (
          <div
            id="dataTitle"
            style={{
              fontSize: fontTitle,
              fontFamily: "Arial, Helvetica, sans-serif",
              color: colorTitle,
              textAlign: "center",
              padding: "15px 0 0",
            }}
          >
            {dataTitle}
          </div>
        )}
      </div>
      <div
        style={{
          width: widthProps,
          height: computedHeight,
          margin: "0 auto",
        }}
      >
        <Doughnut data={chartData} options={options} ref={chartRef} />
      </div>
    </Box>
  );
};

export default DoughnutChart;
