import * as React from "react";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import getIconComponent from "../../getIconComponent/getIconComponent"

export default function ListLogoFilterFullScreen({
  initialData,
  setLogoLists,
}) {
  const [formData, setFormData] = React.useState(initialData);

  const handleClose = () => {
    setFormData([...initialData]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogoLists(formData);
  };

  const handleCheckboxChange = (index) => {
    const updatedLogoLists = [...formData]; // Create a new array
    updatedLogoLists[index] = { ...updatedLogoLists[index] }; // Create a new object
    updatedLogoLists[index].visible = !updatedLogoLists[index].visible; // Update the visibility
    setFormData(updatedLogoLists);
  };
  return (
    <div
      style={{
        borderRadius: "5px",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        marginLeft: "5px",
      }}
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
                        icon={<Icon style={{ opacity: 0.2 }} size={40} fill={item.color || "black"}/>}
                        checkedIcon={<Icon size={40} fill={item.color || "black"} />}
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
          <Button onClick={handleClose}>Reset</Button>
          <Button type="submit" autoFocus>
            Save
          </Button>
        </DialogActions>
      </form>
    </div>
  );
}
