import * as React from "react";

import { makeStyles } from "@mui/styles";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";

const useStyles = makeStyles({
  madalWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemMain: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
  },
  divider: {
    margin: "10px !important",
  },
  checkBoxWrapper: {
    display: "flex",
    flexDirection: "row !important",
  },
});

const EditListComponent = ({
  classes,
  item,
  editableItems,
  setEditableItems,
  index,
  childIndex,
  key,
  isGoogleForm,
}) => {
  const [inputValue, setInputValue] = React.useState(item.label || "");

  const saveListChanges = () => {
    const itemsTemp = JSON.parse(JSON.stringify(editableItems));

    itemsTemp[index].subItems[childIndex] = {
      label: inputValue,
      nodeId: itemsTemp?.[index]?.subItems?.[childIndex]?.nodeId,
      isGoogleForm: isGoogleForm,
      hasSubItems: itemsTemp?.[index]?.hasSubItems,
      isOpened: itemsTemp?.[index]?.isOpened,
      subItems: null,
    };

    setEditableItems(itemsTemp);
  };

  const deleteListChanges = () => {
    const itemsTemp = JSON.parse(JSON.stringify(editableItems));

    itemsTemp[index].subItems.splice(childIndex, 1);

    setEditableItems(itemsTemp);
  };

  return (
    <div className={classes.listItemMain} key={key}>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        style={{ width: "100%" }}
        value={inputValue}
        onBlur={saveListChanges}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <IconButton aria-label="delete" onClick={deleteListChanges}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default function ListSubItem({
  element,
  item,
  setEditableItems,
  index,
  editableItems,
  childIndex,
}) {
  const classes = useStyles();

  const [isGoogleForm, setIsGoogleForm] = React.useState(
    editableItems?.[index]?.subItems?.[childIndex]?.isGoogleForm ? true : false
  );

  useEffect(() => {
    const itemsTemp = JSON.parse(JSON.stringify(editableItems));

    itemsTemp[index].subItems[childIndex].isGoogleForm = isGoogleForm;

    setEditableItems(itemsTemp);
  }, [isGoogleForm]);

  return (
    <>
      <EditListComponent
        key={`${element.nodeId}-key`}
        editableItems={editableItems}
        item={element}
        setEditableItems={setEditableItems}
        classes={classes}
        index={index}
        childIndex={childIndex}
        isGoogleForm={isGoogleForm}
      />
      <FormGroup className={classes.checkBoxWrapper}>
        <FormControlLabel
          control={
            <Checkbox
              checked={isGoogleForm}
              onChange={() => {
                setIsGoogleForm(!isGoogleForm);
              }}
            />
          }
          label="Google Form Mode"
        />
      </FormGroup>
    </>
  );
}
