import * as React from "react";
import Box from "@mui/material/Box";

import { makeStyles } from "@mui/styles";
import Modal from "@mui/material/Modal";
import { Autocomplete, Button, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  overflow: "scroll",
  maxHeight: "80vh",
  transform: "translate(-50%, -50%)",
  width: 580,
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

export default function PasswordModal({
  open,
  setOpen,
  labels,
  setPassData,
  passData,
}) {
  const [value, setValue] = React.useState([]);
  const [password, setPassword] = React.useState("");
  const classes = useStyles();

  const defaultOption = "Entire Document Creator";

  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if (passData?.value?.length) {
      setValue(passData?.value);
    }
    if (passData?.password) {
      setPassword(passData?.password);
    }
  }, [passData]);

  const handleSave = () => {
    setPassData({
      password,
      value,
    });

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
          <Autocomplete
            value={value}
            multiple
            id="tags-standard"
            options={[defaultOption, ...labels]}
            onChange={(_event, newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Names"
                placeholder="Name"
              />
            )}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            style={{ width: "100%", marginTop: "20px" }}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
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
            <Button onClick={handleSave} variant={"contained"}>
              Save
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
