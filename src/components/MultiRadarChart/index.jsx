import React, { useState } from "react";
import { Select, MenuItem } from "@mui/material";
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

export function MultiRadarChartExt(props) {
  const heightProps = 350;

  const [selectedDataset, setSelectedDataset] = useState(
    props?.data[0].originalData
  );

  const handleDatasetChange = (event) => {
    const selectedIndex = event.target.value;
    setSelectedDataset(props?.data[selectedIndex]?.originalData);
  };

  const [Value, setValue] = useState("0");

  return (
    <div
      style={{
        height: `${heightProps}px`,
        width: "40%",
        display: "flex",
        marginTop: "40px",

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginBottom: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
        }}
      >
        <Select
          onChange={handleDatasetChange}
          displayEmpty
          style={{ minWidth: "200px" }}
          defaultValue={Value}
          variant="standard"
          sx={{ m: 1, minWidth: 120 }}
        >
          {props?.data.map((item, index) => (
            <MenuItem key={index} value={index}>
              {item.originalData.title}
            </MenuItem>
          ))}
        </Select>
        {/* <select onChange={handleDatasetChange}>
      {props?.data.map((item, index) => (
        <option key={index} value={index}>
          {item.originalData.title}
        </option>
      ))}
    </select> */}
      </div>
      <Radar data={selectedDataset.data} />
    </div>
  );
}

export function MultiRadarChart(props) {
  const dataProps = props?.data?.originalData || [];

  return (
    <div
      style={{
        display: "flex",
        gap: "25px",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {Object.values(dataProps).map((data) => (
        <MultiRadarChartExt key={data.id} data={data} />
      ))}
    </div>
  );
}

export default MultiRadarChart;
