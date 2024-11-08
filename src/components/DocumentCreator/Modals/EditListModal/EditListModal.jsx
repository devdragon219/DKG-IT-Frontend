import * as React from "react";
import Box from "@mui/material/Box";

import { makeStyles } from "@mui/styles";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";

import ListItem from "./ListItem";
import { getListItemID } from "../../utils";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  overflow: "scroll",
  maxHeight: "80vh",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
  },
  bottomButtons: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    marginTop: "20px",
  },
  divider: {
    margin: "10px !important",
  },
});

export default function EditListModal({ open, setOpen, items, setItems }) {
  const classes = useStyles();
  const [editableItems, setEditableItems] = React.useState([...items]);

  React.useEffect(() => {
    setEditableItems(items);
  }, [items]);

  const handleClose = () => setOpen(false);

  const handleSave = () => {
    const newList = [];
    editableItems.forEach((el) => {
      if (el.hasSubItems) {
        newList.push(el);
      } else {
        newList.push({
          ...el,
          subItems: null,
        });
      }
    });

    setItems(newList);
    handleClose();
  };

  const addItem = () => {
    setEditableItems([
      ...editableItems,
      {
        label: "",
        nodeId: getListItemID(editableItems),
        subItems: null,
      },
    ]);
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {editableItems.map((el, index) => {
            return (
              <ListItem
                item={el}
                setEditableItems={setEditableItems}
                editableItems={editableItems}
                index={index}
              />
            );
          })}

          <Button
            style={{ width: "100%" }}
            onClick={() => {
              addItem();
            }}
          >
            + ADD MENU ITEM
          </Button>
          <div className={classes.bottomButtons}>
            <Button
              variant="outlined"
              style={{ marginRight: "5px" }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button onClick={handleSave} variant="contained">
              Save
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
