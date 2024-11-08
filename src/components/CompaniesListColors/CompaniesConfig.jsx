/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

import { makeStyles } from "@mui/styles";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import FormInput from "./../../components/FormInput";
import { useDispatch } from "react-redux";
import { setMockData } from "../../store/item";
import NewItem from "./NewItem";

const useStyles = makeStyles({
  configWrap: {
    padding: "20px",
  },
});

const CompaniesConfig = ({
  title,
  setTitle,
  rowNum,
  setRowNum,
  storeData,
  stateList,
  setStateList,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = (e, index, item, name) => {
    const tempState = [...stateList];

    if (e.target.value === null) {
      tempState.splice(index, 1);
    } else {
      tempState[index] = {
        ...item,
        [name]: e.target.value,
      };
    }

    setStateList(tempState);

    const data = {
      ...storeData,
      originalData: { ...storeData.originalData, data: tempState },
    };

    dispatch(setMockData(JSON.stringify(data)));
  };

  const handleDelete = (index) => {
    const tempState = [...stateList];

    tempState.splice(index, 1);

    setStateList(tempState);

    const data = {
      ...storeData,
      originalData: { ...storeData.originalData, data: tempState },
    };

    dispatch(setMockData(JSON.stringify(data)));
  };

  const handleTitleChange = (e) => {
    setTitle(e?.target?.value);
  };

  const handleTitleBlur = () => {
    const data = {
      ...storeData,
      originalData: { ...storeData.originalData, title: title },
    };

    dispatch(setMockData(JSON.stringify(data)));
  };

  const handleRowNumChange = (e) => {
    setRowNum(e?.target?.value);
    const data = {
      ...storeData,
      originalData: { ...storeData.originalData, rowNumber: e?.target?.value },
    };

    dispatch(setMockData(JSON.stringify(data)));
  };

  return (
    <div className={classes.configWrap}>
      <div
        style={{
          display: "flex",
          paddingBottom: "20px",
          justifyContent: "space-between",
        }}
      >
        <FormInput
          value={title}
          label={"Title:"}
          style={{ width: "50%" }}
          onBlur={handleTitleBlur}
          onChange={handleTitleChange}
        />
        <FormControl>
          <InputLabel id={`row-num`}>{`Row number`}</InputLabel>
          <Select
            labelId={`row-num`}
            value={rowNum}
            label={`Row number`}
            onChange={handleRowNumChange}
            style={{ height: "100%", width: "100px" }}
          >
            {[1, 2, 3, 4, 5, 6].map((num, i) => {
              return (
                <MenuItem key={`${i}-row-num`} value={num}>
                  {num}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <Grid container spacing={2}>
        {stateList.map((item, index) => {
          return (
            <NewItem
              item={item}
              index={index}
              handleChange={handleChange}
              handleDelete={handleDelete}
            />
          );
        })}
        <Grid item xs={6} md={3} lg={2}>
          <Button
            variant="contained"
            component="label"
            color="primary"
            style={{}}
            onClick={() => {
              setStateList([
                ...stateList,
                { link: "", label: "", backgroundColor: "" },
              ]);
            }}
            className={classes.gridItem}
          >
            + Add
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CompaniesConfig;
