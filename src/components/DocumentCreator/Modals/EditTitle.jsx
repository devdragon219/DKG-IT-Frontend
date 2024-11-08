import * as React from "react";
import Box from "@mui/material/Box";

import { makeStyles } from "@mui/styles";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";

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

export default function EditTitle({
  open,
  setOpen,
  setCompanyInfo,
  companyInfo,
}) {
  const classes = useStyles();
  const [inputValue, setInputValue] = React.useState(companyInfo?.title);

  React.useEffect(() => {
    setInputValue(companyInfo?.title);
  }, [companyInfo?.title]);

  const handleClose = () => setOpen(false);

  const handleSave = () => {
    setCompanyInfo((prev) => ({ ...prev, title: inputValue }));
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            style={{ width: "100%" }}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />

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
