import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import getIconComponent from "../getIconComponent/getIconComponent"

export default function ListLogoFilter({
  open,
  initialData,
  setLogoLists,
  setOpen,
}) {
  const [formData, setFormData] = React.useState(initialData);

  const handleClose = () => {
    setOpen(false);
    setFormData([...initialData]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogoLists(formData, 8888);
    setOpen(false);
  };

  const handleCheckboxChange = (index) => {
    const updatedLogoLists = [...formData]; // Create a new array
    updatedLogoLists[index] = { ...updatedLogoLists[index] }; // Create a new object
    updatedLogoLists[index].visible = !updatedLogoLists[index].visible; // Update the visibility
    setFormData(updatedLogoLists);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle
            id="alert-dialog-title"
            style={{ textAlign: "center", color: "#083763", fontWeight: 900 }}
          >
            {"Map Legend Filter"}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              {formData.map((item, index) => {
                const Icon = getIconComponent(item.name);
                return (
                  <Grid item xs={12} sm={6} md={6} key={item.name}>
                    <FormControlLabel
                      key={item.name}
                      control={
                        <Checkbox
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 50 } }}
                          checked={item.visible}
                          onChange={() => handleCheckboxChange(index)}
                          name={item.name}
                          icon={<Icon style={{ opacity: 0.2 }} size={40} fill={item?.color || "black"} />}
                          checkedIcon={<Icon size={40} fill={item?.color || "black"}/>}
                        />
                      }
                      label={
                        <span
                          style={{
                            opacity: item.visible ? 1 : 0.3,
                            color: "#083763",
                          }}
                        >
                          {item?.label}
                        </span>
                      }
                    />
                  </Grid>
                );
              })}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" autoFocus>
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
