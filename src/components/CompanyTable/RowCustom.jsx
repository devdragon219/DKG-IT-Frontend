import * as React from "react";

import TableCell from "@mui/material/TableCell";

import TableRow from "@mui/material/TableRow";
import LineChart from "./LineChart";
import API from "./../../API";

// const getData = async (symbol, setData, setPrice) => {
//   try {
//     const response = await API.fetchGeSymboltHistoricInfo(symbol);
//     const result = await response.data;
//     const closeData = result?.indicators.quote[0].close || [];
//     const data = closeData?.map((item, index) => {
//       if (index === closeData.length - 1) {
//         setPrice(Math.floor(item * 100) / 100);
//       }
//       return {
//         price: Math.floor(item * 100) / 100,
//       };
//     });

//     setData(data);
//   } catch (error) {}
// };

// const getInterval = (no) => {
//   if (no < 10) {
//     return 0;
//   }
//   if (no < 20) {
//     return 2000;
//   }
//   if (no < 30) {
//     return 4000;
//   }
//   if (no < 40) {
//     return 6000;
//   }
//   if (no < 50) {
//     return 8000;
//   }
// };

export default function RowCustom({ row }) {
  const [data, setData] = React.useState([]);
  const [price, setPrice] = React.useState(undefined);
  const [formattedChartData, setFormattedChartData] = React.useState([]);

  React.useEffect(() => {
    const formattedChartData = row.chartData.map((price, index) => ({
      price: Math.floor(price * 100) / 100,
    }));
    setFormattedChartData(formattedChartData);
  }, [row]);

  // React.useEffect(() => {
  //   // setTimeout(() => {
  //   //   getData(row.symbol, setData, setPrice);
  //   // }, getInterval(row?.no));

  //   getData(
  //     Array.isArray(row?.chartData) ? row?.chartData : row.symbol,
  //     setData,
  //     setPrice
  //   );
  // }, []);

  return (
    <TableRow hover tabIndex={-1} key={row.name} sx={{ cursor: "pointer" }}>
      <TableCell align="left">{row.number}</TableCell>
      <TableCell align="left">{row.name}</TableCell>
      <TableCell align="center">
        <div
          style={{
            height: "60px",
            width: "200px",
            margin: "0 auto",
          }}
        >
          <LineChart data={formattedChartData} />
        </div>
      </TableCell>
      <TableCell align="right">{row?.price ? row?.price : ""}</TableCell>
      <TableCell align="right">{row.market_cap.toLocaleString()}</TableCell>
    </TableRow>
  );
}
