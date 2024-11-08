/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";

import { makeStyles } from "@mui/styles";

import { Button, FormControl, Grid, TextField } from "@mui/material";

const useStyles = makeStyles({
  gridItem: {
    width: "100%",
    border: "1px solid black",
    padding: "5px",
    margin: "5px",
  },
});

const NewItem = ({ item, index, handleChange, handleDelete }) => {
  const [stateItem, setStateItem] = useState(item);
  const classes = useStyles();

  return (
    <Grid item xs={6} md={3} lg={2} className={classes.gridItem}>
      <FormControl fullWidth>
        <TextField
          id="standard-Label"
          label="Label"
          variant="standard"
          value={stateItem.label}
          onChange={(e) => {
            setStateItem({
              ...stateItem,
              label: e.target.value,
            });
          }}
          onBlur={(e) => {
            handleChange(e, index, stateItem, "label");
          }}
        />
        <TextField
          id="standard-link"
          label="Link"
          variant="standard"
          value={stateItem.link}
          onChange={(e) => {
            setStateItem({
              ...stateItem,
              link: e.target.value,
            });
          }}
          onBlur={(e) => {
            handleChange(e, index, stateItem, "link");
          }}
        />
        <TextField
          id="standard-backgroundColor"
          label="Color"
          variant="standard"
          value={stateItem.backgroundColor}
          onChange={(e) => {
            setStateItem({
              ...stateItem,
              backgroundColor: e.target.value,
            });
          }}
          onBlur={(e) => {
            handleChange(e, index, stateItem, "backgroundColor");
          }}
        />
        <Button onClick={() => handleDelete(index)}>Delete</Button>
      </FormControl>
    </Grid>
  );
};

export default NewItem;
