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
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
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
  const [ authenticationType, setAuthenticationType ] = React.useState("Email/Password");
  const [password, setPassword] = React.useState("");
  const classes = useStyles();

  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if (passData?.value?.length) {
      setValue(passData?.value);
    }
    if (passData?.authenticationType) { 
      setAuthenticationType(passData?.authenticationType);
    }
    if (passData?.password) {
      setPassword(passData?.password);
    }else {
      setPassword("DKG2024");
    }
  }, [passData]);

  const handleSave = () => {
    setPassData({
      password:password || "",
      value,
      authenticationType
    });

    handleClose();
  };
  const defaultOption = "Entire Admin Panel";

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

          {
            value?.includes(defaultOption) &&  // show this input only if it's Entire Admin Panel Permission
            <Autocomplete
            value={authenticationType}
            multiple={false}
            id="authenticationType"
            options={["Email/Password"]}
            onChange={(_event, newValue) => {
              setAuthenticationType(newValue);
            }}
            
            renderInput={(params) => (
              <div>
                <TextField
                required={false}
                {...params}
                variant="standard"
                label="Authentication Type"
                placeholder="Choose how users should authenticate"
              />
              <p>Only for Entire Admin Panel Permission. Skip this step if you prefer one time password</p>
              </div>
            )}
          />
          }
            <>
          <div>
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
          <p>One time password - less secure</p>
          </div>
            </>
          

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
