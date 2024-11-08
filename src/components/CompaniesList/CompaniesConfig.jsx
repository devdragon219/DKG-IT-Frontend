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
import FormInput from "../../components/FormInput";
import { useDispatch } from "react-redux";
import { setMockData } from "../../store/item";

const useStyles = makeStyles({
  configWrap: {
    padding: "20px",
  },
  gridItem: {
    height: "50px",
    width: "100%",
  },
});

const CompaniesConfig = ({
  state,
  setState,
  listData,
  title,
  setTitle,
  rowNum,
  setRowNum,
  storeData,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = (e, index) => {
    const tempState = [...state];

    if (e.target.value === null) {
      tempState.splice(index, 1);
    } else {
      tempState[index] = e.target.value;
    }

    setState(tempState);

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
        {state.map((item, index) => {
          return (
            <Grid item xs={6} md={3} lg={2}>
              <FormControl fullWidth className={classes.gridItem}>
                <InputLabel id={`${index + 1}-item`}>{`${
                  index + 1
                }-label`}</InputLabel>
                <Select
                  labelId={`${index + 1}-item`}
                  id={`${index}-id`}
                  value={item}
                  label={`${index + 1}-item`}
                  onChange={(e) => handleChange(e, index)}
                  style={{ width: "100%", height: "100%" }}
                >
                  <MenuItem value={null}>none</MenuItem>
                  {listData.map((listItem, i) => {
                    return (
                      <MenuItem
                        key={`${i}-${index}-list-item`}
                        value={listItem?.id}
                        disabled={state.includes(listItem?.id)}
                      >
                        {listItem?.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
          );
        })}
        <Grid item xs={6} md={3} lg={2}>
          <Button
            variant="contained"
            component="label"
            color="primary"
            style={{}}
            onClick={() => {
              setState([...state, ""]);
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
