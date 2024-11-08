import React, { useEffect, useMemo } from "react";
import { Chart } from "react-google-charts";
import GaugeConfig from "./GaugeConfig";

export function GaugeDesigner({ data, isEditMode }) {
  const dataProps = data?.originalData || {};

  const chartData = useMemo(() => {
    return {
      title: dataProps?.title,
      options: {
        height: 250,
        min: +dataProps?.min,
        max: +dataProps?.max,
        minorTicks: 0,
        width: 600,
      },
      data: [
        ["Label", "Value"],
        ...(dataProps?.gauges || [])?.map(({ label, value }) => [
          label,
          +value,
        ]),
      ],
    };
  }, [dataProps]);

  const [title, setTitle] = React.useState(dataProps?.title);
  const [min, setMin] = React.useState(dataProps?.min);
  const [max, setMax] = React.useState(dataProps?.min);
  const [gauges, setGauges] = React.useState(dataProps?.gauges || []);

  useEffect(() => {
    setTitle(dataProps?.title);
  }, [dataProps?.title]);

  useEffect(() => {
    setMin(dataProps?.min);
  }, [dataProps?.min]);

  useEffect(() => {
    setMax(dataProps?.max);
  }, [dataProps?.max]);

  useEffect(() => {
    setGauges([...(dataProps?.gauges || [])]);
  }, [dataProps?.gauges]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        padding: "50px",
        fontFamily: "Montserrat, Helvetica, Arial, serif",
      }}
    >
      {isEditMode && (
        <GaugeConfig
          title={title}
          setTitle={setTitle}
          gauges={gauges}
          setGauges={setGauges}
          data={data}
          min={min}
          max={max}
          setMin={setMin}
          setMax={setMax}
        />
      )}
      <div
        style={{
          fontSize: "22px",
          maxWidth: "600px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {chartData?.title}
      </div>

      <Chart
        chartType="Gauge"
        width="100%"
        height="400px"
        data={chartData?.data}
        options={chartData?.options}
        className="gauge-chart"
      />
    </div>
  );
}

export default GaugeDesigner;
