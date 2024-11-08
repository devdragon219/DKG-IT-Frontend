/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Popover } from "@mui/material";

import { getRows, getWidth } from "./utils";
import { TriangleRow } from "./TriangleRow";
import DescriptionCardComponent from "../DescriptionCardComponent";
import { useDispatch } from "react-redux";
import { addNewDataField } from "../../../store/item";

const TriangleComponent = ({
  data,
  allDiapazons,
  viewMode,
  setRowRatio,
  rowRatio,
  compareDiapazons,
  links,
  steps,
  setSteps,
  description,
  nextGeneration,
  lines,
  onResize,
  title,
}) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [imgData, setImgData] = React.useState({});
  const [numRows, setNumRows] = React.useState(0);
  const [diapasonLength, setDiapasonLength] = React.useState([]);

  const [rows, setRows] = React.useState([]);

  useEffect(() => {
    const parts = [];
    const lengths = [];
    const diapazonsLengtsTemp = [];
    let allRows = [];
    let lastItemLength = 1;

    [">500", ">200", ">100"].forEach((diapazon, index) => {
      const arr = data.filter((item) => item.compare_diapazon === diapazon);

      parts[index] = arr;
    });

    parts.forEach((item, index) => {
      const row = getRows(lastItemLength, lastItemLength, item);
      let stepLengths = index === 0 ? row.rows.length - 1 : row.rows.length;

      const borderIndex =
        lengths.length !== 0
          ? lengths[lengths.length - 1] + stepLengths
          : stepLengths;

      lengths.push(borderIndex);

      diapazonsLengtsTemp.push({
        key: item?.[0]?.compare_diapazon,
        value: row.rows.length,
      });

      allRows = [...allRows, ...row.rows];

      lastItemLength = 1 + row.lastItemLength;
    });

    setDiapasonLength(diapazonsLengtsTemp);
    setSteps(lengths);

    setRows(allRows);
    setNumRows(allRows?.length);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleClick = (event, image) => {
    setImgData(image);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const newRowRatio = { ...rowRatio };

    rows.forEach((row, i) => {
      if (newRowRatio && newRowRatio[i]) {
        return;
      }
      const width = getWidth(row, i, rows, numRows);
      newRowRatio[i] = width;
    });

    dispatch(addNewDataField({ field: "row_ratio", value: newRowRatio }));
    setRowRatio(newRowRatio);
  }, [rows, numRows]);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      {rows.map((row, i) => {
        const rowDiapazon = rows?.[i]?.[0]?.compare_diapazon;
        const prevtRowDiapazon = rows?.[i - 1]?.[0]?.compare_diapazon;

        return (
          <TriangleRow
            lines={lines}
            key={i}
            row={row}
            links={links}
            i={i}
            steps={steps}
            compareDiapazons={compareDiapazons}
            handleImgClick={handleClick}
            nextGeneration={nextGeneration}
            rows={rows}
            allDiapazons={allDiapazons}
            diapazon={
              rowDiapazon !== prevtRowDiapazon || i === 0 ? rowDiapazon : null
            }
            description={description}
            rowRatio={rowRatio}
            setRowRatio={setRowRatio}
            viewMode={viewMode}
            diapasonLength={diapasonLength}
            onResize={onResize}
            title={title}
          />
        );
      })}

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <DescriptionCardComponent data={imgData} />
      </Popover>
    </>
  );
};

export default TriangleComponent;
