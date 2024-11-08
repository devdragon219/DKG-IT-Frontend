import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import { TableSortLabel } from "@mui/material";
import { useMemo } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0B5394",
    color: "white",
    padding: "0 16px",
    textAlign: "center",
  },
  [`&.${tableCellClasses.body}`]: {
    padding: "2px 16px",
    fontSize: 13,
    textAlign: "center",
  },
}));

const StyledTableSortLabel = styled(TableSortLabel)(() => ({
  color: "white",
  "&.MuiTableSortLabel-icon": {
    color: "white",
  },
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "transparent",
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: "#0B5394",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  color: "#0B5394",
  padding: "0 16px",
  "&:nth-of-type(odd)": {
    backgroundColor: "rgb(212, 228, 248)",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const StyledImg = styled("img")(() => ({
  width: "20px",
  height: "20px",
  objectFit: "contain",
  marginRight: "5px",
  transition: "all 0.2s ease",
  zIndex: "10",
  "&:hover": {
    position: "relative",
    zIndex: "11",
    transform: "scale(3)",
    cursor: "pointer",
  },
}));

export default function TableWithBar(props) {
  const [order, setOrder] = React.useState("asc");

  const dataProps = props?.data?.originalData?.data;
  const headCells = props?.data.originalData.header;

  const data = useMemo(() => {
    if (order === "asc") {
      const newData = [...dataProps];
      const sortedData = newData?.sort((a, b) => {
        return a?.value - b?.value;
      });

      return sortedData;
    } else {
      const newData = [...dataProps];
      return newData?.sort((a, b) => b?.value - a?.value);
    }
  }, [order, dataProps]);

  return (
    <TableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{headCells?.[0]}</StyledTableCell>
            <StyledTableCell>
              <StyledTableSortLabel
                direction={order}
                active={true}
                style={{ color: "white" }}
                hideSortIcon={false}
                onClick={() => {
                  if (order === "asc") {
                    setOrder("desc");
                  } else {
                    setOrder("asc");
                  }
                }}
              >
                {headCells?.[1]}
              </StyledTableSortLabel>
            </StyledTableCell>
            <StyledTableCell align="right"> </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.id || row?.slug}>
              <StyledTableCell
                component="th"
                scope="row"
                style={{
                  width: "30%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#0B5394",
                  }}
                >
                  <div
                    style={{
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                    }}
                  >
                    {row.ranc} {row?.title}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <StyledImg
                      src={row?.img}
                      alt="img"
                      // style={{
                      //   width: "20px",
                      //   height: "20px",
                      //   objectFit: "contain",
                      //   marginRight: "5px",
                      //   transition: "all 0.2s ease",
                      //   zIndex: "10",
                      //   "&:hover": {
                      //     position: "relative",
                      //     zIndex: "11",
                      //     transform: "scale(1.5)",
                      //     cursor: "pointer",
                      //   },
                      // }}
                    />
                  </div>
                </div>
              </StyledTableCell>
              <StyledTableCell
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  color: "#0B5394",
                  width: "20%",
                }}
              >
                {row?.value}
              </StyledTableCell>
              <StyledTableCell align="right" style={{ width: "50%" }}>
                <BorderLinearProgress
                  variant="determinate"
                  value={row.progress}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
