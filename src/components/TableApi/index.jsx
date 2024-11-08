import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { diagramTypeMap } from "../../API/diagramsApi";
import {pathAPIurl} from "../../constants/routes";

const TableApi = () => {
  const [statsArray, setStatsArray] = useState([]);

  const urls = [
    `${pathAPIurl()}api/diagrams-all`,
    "https://platform.dkv.global/dashboards/api/diagrams",
  ];

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

        const results = await Promise.all(promises);

        const diagramsSrc = [].concat(
          ...results.filter((item) => item !== null)
        );
        const monthList = [
          ...new Set(diagramsSrc.map((diag) => diag.updated_time.substr(0, 7))),
        ]
          .sort()
          .reverse();

        const statsSrc = {};
        for (const diag of diagramsSrc) {
          statsSrc[diag.diagram_type] = (statsSrc[diag.diagram_type] || 0) + 1;
        }

        const statsArray = Object.entries(statsSrc)
          .map(([statKey, count]) => ({
            type_title: diagramTypeMap[statKey] || statKey,
            type_code: statKey,
            count,
          }))
          .sort((a, b) => b.count - a.count);

        setStatsArray(statsArray);
      } catch (error) {
        console.error("Error during promise execution:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Paper
      style={{
        marginTop: "16px",
        marginBottom: "16px",
        padding: "16px",
        overflowX: "auto",
        border: "2px solid #1976D2",
        borderRadius: "4px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      elevation={0}
    >
      <TableContainer>
        <Table
          style={{
            border: "2px solid #e0e0e0",
            borderRadius: "4px",
            overflow: "hidden",
          }}
          size="small"
        >
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#1976D2",
                  color: "#ffffff",
                }}
              >
                Frontend Tool Leaders
              </TableCell>
              <TableCell
                align="right"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#1976D2",
                  color: "#ffffff",
                }}
              >
                Implementations
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {statsArray.map((stat, index) => (
              <TableRow
                key={index}
                style={{
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  {stat.type_title}
                </TableCell>
                <TableCell align="right">{stat.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TableApi;
