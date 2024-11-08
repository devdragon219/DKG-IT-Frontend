import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { pathToJSON } from "./utils";
import UploadJsonButton from "../../../UploadJsonButton";
import { pathToLoadFile } from "../../../../constants/routes";
import { useDispatch } from "react-redux";
import { setMockData } from "../../../../store/item";

export default function AddGraphModal({
  open = false,
  setOpen,
  editedGraph,
  setPagesData,
  pagesData,
  page,
}) {
  const dispatch = useDispatch();
  const [data, setData] = React.useState(null);
  const [selectedGraph, setSelectedGraph] = React.useState(null);
  const handleClose = () => {
    setData(null);
    setSelectedGraph(null);
    setOpen(false);
  };

  React.useEffect(() => {
    if (editedGraph === "macro_panel" && selectedGraph !== "KeyParameters") {
      setSelectedGraph("KeyParameters");
    }
  }, [editedGraph, selectedGraph]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = JSON.parse(JSON.stringify(pagesData));

    newData[page][editedGraph] = {
      type: selectedGraph,
      data: data,
    };

    setPagesData(newData);

    dispatch(
      setMockData(
        JSON.stringify({
          originalData: { data: newData },
        })
      )
    );

    setData(null);
    setSelectedGraph(null);

    setOpen(false);
  };

  const uploadJson = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      setData(JSON.parse(e.target.result));
    };
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <form
        onSubmit={handleSubmit}
        style={{
          minWidth: "470px",
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{ textAlign: "center", color: "#083763", fontWeight: 900 }}
        >
          {"Add graph"}
        </DialogTitle>
        <DialogContent>
          <FormControl fullWidth style={{ marginTop: "10px" }}>
            <InputLabel id="demo-simple-select-label">{editedGraph === "macro_panel" ? null : "Type"}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedGraph}
              disabled={editedGraph === "macro_panel"}
              label={editedGraph === "macro_panel" ? null : "Type"}
              onChange={(event) => {
                setSelectedGraph(event.target.value);
              }}
            >
              <MenuItem value={"MoldovaMapLegend"}>Moldova Map</MenuItem>
              <MenuItem value={"PieChartLabels"}>Pie Chart</MenuItem>
              <MenuItem value={"RadarChartDesigner"}>Radar Chart</MenuItem>
              <MenuItem value={"VerticalBarForGeoMaps"}>Vertical Bar</MenuItem>
              <MenuItem value={"HorizontalBar"}>Horizontal Bar</MenuItem>
              {editedGraph === "macro_panel" ? (
                <MenuItem value={"KeyParameters"}>Key Parameters</MenuItem>
              ) : (
                <></>
              )}
            </Select>

            {selectedGraph ? (
              <div
                style={{
                  display: "flex",
                  margin: "10px",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                <Button
                  size="normal"
                  color="primary"
                  variant="contained"
                  href={pathToLoadFile(pathToJSON[selectedGraph])}
                  download
                  target="_blank"
                >
                  Download Example
                </Button>
                <UploadJsonButton handleChange={uploadJson} />
              </div>
            ) : (
              <></>
            )}
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            type="submit"
            autoFocus
            variant="contained"
            disabled={data === null}
          >
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
