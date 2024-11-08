import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { diagramTypeMap } from "../../API/diagramsApi";
import { pathAPIurl } from "../../constants/routes";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VerticalBarChartApi = () => {
  let [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Frontend Tools Usage",
        backgroundColor: "rgba(5, 137, 214,0.3)",
        borderColor: "rgba(5, 137, 214,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(5, 137, 214,0.4)",
        hoverBorderColor: "rgba(5, 137, 214,1)",
        data: [],
      },
    ],
  });

  let diagramsSrc = [];
  let monthList = [];
  let statsSrc = {};
  let statsArray = [];
  let datasetSrc = [];
  let newdata = {
    labels: [],
    datasets: [
      {
        label: "Frontend Tools Usage",
        backgroundColor: "rgba(5, 137, 214,0.3)",
        borderColor: "rgba(5, 137, 214,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(5, 137, 214,0.4)",
        hoverBorderColor: "rgba(5, 137, 214,1)",
        data: [],
      },
    ],
  };

  const urls = [
    `${pathAPIurl()}api/diagrams-all`,
    "https://platform.dkv.global/dashboards/api/diagrams",
  ];

  function mergeData(data) {
    const validData = data.filter((item) => item !== null);
    diagramsSrc = [].concat(...validData);
  }

  function extractMonths() {
    for (let diag of diagramsSrc) {
      let month = diag.updated_time.substr(0, 7);
      if (!monthList.includes(month)) monthList.push(month);
    }
    monthList.sort();
    monthList.reverse();
    //renderMonths();
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = urls.map(async (url) => {
          try {
            const response = await fetch(url, {
              method: "GET",
              headers: {
                Accept: "application/json",
              },
            });

            if (!response.ok) {
              throw new Error(
                `Error fetching data from ${url}. Skipping this URL.`
              );
            }

            const data = await response.json();
            return data;
          } catch (error) {
            console.error(error.message);
            return null;
          }
        });

        Promise.all(promises).then((results) => {
          mergeData(results);
          extractMonths();
          for (let diag of diagramsSrc) {
            if (!statsSrc.hasOwnProperty(diag.diagram_type)) {
              statsSrc[diag.diagram_type] = 0;
            }
            statsSrc[diag.diagram_type]++;
          }

          for (let statKey in statsSrc) {
            statsArray.push({
              type_title: diagramTypeMap.hasOwnProperty(statKey)
                ? diagramTypeMap[statKey]
                : statKey,
              type_code: statKey,
              count: statsSrc[statKey],
            });
          }
          statsArray.sort((a, b) => {
            return b.count - a.count;
          });
          if (statsArray.length > 12) {
            let otherCount = 0;
            for (let i = 0; i < statsArray.length; i++) {
              datasetSrc.push(statsArray[i]);
            }
            datasetSrc.push({ type_title: "Other", count: otherCount });
          }
          for (let datapoint of datasetSrc) {
            newdata.labels.push(datapoint.type_title);
            newdata.datasets[0].data.push(datapoint.count);
          }

          setData(newdata);
          //console.log("newdata", data);
        });
      } catch (error) {
        console.error("Error during promise execution:", error);
      }
    };

    fetchData();
  }, []);

  // const options = {
  //   indexAxis: "y",
  //   scales: {
  //     x: {
  //       ticks: {
  //         autoSkip: false,
  //       },
  //     },
  //     y: {
  //       beginAtZero: true,
  //     },
  //   },
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   plugins: {
  //     legend: {
  //       display: true,
  //     },
  //     tooltip: {
  //       enabled: true,
  //     },
  //   },
  // };

  const options = {
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div
      style={{
        overflow: "scroll",
        width: "100%",
      }}
    >
      <div style={{ height: "4000px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default VerticalBarChartApi;
