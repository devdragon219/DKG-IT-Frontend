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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect } from "react";
import { getSubItemID } from "../../utils";

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
});

const EditListComponent = ({
  classes,
  item,
  isSubItem = false,
  editableItems,
  setEditableItems,
  index,
  childIndex,
  key,
}) => {
  const [inputValue, setInputValue] = React.useState(item.label || "");

  const saveListChanges = () => {
    const itemsTemp = JSON.parse(JSON.stringify(editableItems));

    if (isSubItem) {
      itemsTemp[index].subItems[childIndex] = {
        label: inputValue,
        nodeId: itemsTemp?.[index]?.subItems?.[childIndex]?.nodeId,
        subItems: null,
      };
    } else {
      itemsTemp[index] = {
        label: inputValue,
        nodeId: itemsTemp?.[index]?.nodeId,
        subItems: itemsTemp[index]?.subItems
          ? [...itemsTemp[index]?.subItems]
          : null,
      };
    }

    setEditableItems(itemsTemp);
  };

  const deleteListChanges = () => {
    const itemsTemp = JSON.parse(JSON.stringify(editableItems));

    if (isSubItem) {
      itemsTemp[index].subItems.splice(childIndex, 1);
    } else {
      itemsTemp.splice(index, 1);
    }

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

export default function ListItem({
  item,
  setEditableItems,
  index,
  editableItems,
}) {
  const classes = useStyles();
  const [isSubItems, setIsSubItems] = React.useState(
    item.subItems ? true : false
  );

  const addSubItem = () => {
    const itemsTemp = JSON.parse(JSON.stringify(editableItems));

    itemsTemp[index].subItems = [
      ...itemsTemp[index].subItems,
      {
        label: "",
        nodeId: getSubItemID(item?.subItems, item.nodeId),
        subItems: null,
      },
    ];

    setEditableItems(itemsTemp);
  };

  useEffect(() => {
    const itemsTemp = JSON.parse(JSON.stringify(editableItems));

    itemsTemp[index].hasSubItems = isSubItems;

    if (itemsTemp[index].subItems === null && isSubItems) {
      itemsTemp[index].subItems = [
        {
          label: "",
          nodeId: `${itemsTemp[index].nodeId}-0`,
          subItems: null,
        },
      ];
    }

    setEditableItems(itemsTemp);
  }, [isSubItems]);

  return (
    <div key={item.nodeId}>
      <EditListComponent
        editableItems={editableItems}
        classes={classes}
        item={item}
        setEditableItems={setEditableItems}
        index={index}
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={isSubItems}
              onChange={() => {
                setIsSubItems(!isSubItems);
              }}
            />
          }
          label="Has sub-items"
        />
      </FormGroup>
      {item?.subItems && isSubItems ? (
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ backgroundColor: "#d1e3f3" }}
          >
            <Typography>Sub items</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {item.subItems.map((el, childIndex) => {
              return (
                <EditListComponent
                  key={el?.nodeId}
                  editableItems={editableItems}
                  item={el}
                  setEditableItems={setEditableItems}
                  classes={classes}
                  isSubItem={true}
                  index={index}
                  childIndex={childIndex}
                />
              );
            })}
            <Button
              style={{ width: "100%", marginTop: "5px" }}
              onClick={() => {
                addSubItem();
              }}
            >
              + ADD SUB ITEM
            </Button>
          </AccordionDetails>
        </Accordion>
      ) : (
        <></>
      )}

      <Divider className={classes.divider} />
    </div>
  );
}
