/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from "react";
import {Popover} from "@mui/material";

import {getRows, getWidth} from "./utils";
import {TriangleRow} from "./TriangleRow";
import DescriptionCardComponent from "../DescriptionCardComponent";
import {useDispatch} from "react-redux";
import {addNewDataField} from "../../../store/item";

const TriangleComponent = ({data, allDiapazons, viewMode, dataRowRatio}) => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [imgData, setImgData] = React.useState({});
    const [numRows, setNumRows] = React.useState(0);
    const [steps, setSteps] = React.useState([]);
    const [rows, setRows] = React.useState([]);
    const [rowRatio, setRowRatio] = React.useState(dataRowRatio);

    useEffect(() => {
        const parts = [];
        const lengths = [];
        let allRows = [];
        let lastItemLength = 1;

        allDiapazons.forEach((diapazon, index) => {
            const arr = data.filter((item) => item.compare_diapazon === diapazon);

            parts[index] = arr;
        });

        parts.forEach((item, index) => {
            const row = getRows(lastItemLength, lastItemLength, item);
            let stepIndex = index === 0 ? row.rows.length - 1 : row.rows.length;
            lengths.forEach((length) => {
                stepIndex += length;
            });
            lengths.push(stepIndex);

            allRows = [...allRows, ...row.rows];

            lastItemLength = 1 + row.lastItemLength;
        });

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
        const newRowRatio = {...rowRatio};

        rows.forEach((row, i) => {
            if (newRowRatio && newRowRatio[i]) {
                return;
            }
            const width = getWidth(row, i, rows, numRows);
            newRowRatio[i] = width;
        });

        dispatch(addNewDataField({field: "row_ratio", value: newRowRatio}));
        setRowRatio(newRowRatio);
    }, [rows, numRows]);


    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <div>
            {rows.map((row, i) => (
                <TriangleRow
                    key={i}
                    row={row}
                    i={i}
                    steps={steps}
                    handleImgClick={handleClick}
                    rows={rows}
                    rowRatio={rowRatio}
                    setRowRatio={setRowRatio}
                    viewMode={viewMode}
                />
            ))}
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
                <DescriptionCardComponent data={imgData}/>
            </Popover>
        </div>
    );
};

export default TriangleComponent;
