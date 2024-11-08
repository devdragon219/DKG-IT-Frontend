import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { createColor } from "material-ui-color";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from "@mui/material";
import { pathToJSON } from "./utils";
import UploadJsonButton from "../../../UploadJsonButton";
import { pathToLoadFile } from "../../../../constants/routes";
import { useDispatch } from "react-redux";
import { setMockData } from "../../../../store/item";
import ColorPickerProvider from "../ColorPickerProvider";

export default function AddGraphModal({
  open = false,
  setOpen,
  editedGraph,
  setPagesData,
  pagesData,
  page,
  layout,
}) {
  const dispatch = useDispatch();
  const [data, setData] = React.useState(null);
  const [withBox, setWithBox] = React.useState(false);
  const [selectedGraph, setSelectedGraph] =
    React.useState("KeyIndicatorsFrame");
  const [blured, setBlured] = React.useState(false);
  const handleClose = () => {
    setData(null);
    // setSelectedGraph(null);
    setOpen(false);
  };

  const [shadowColor, setShadowColor] = React.useState(
    createColor("rgba(194, 194, 194, 1)")
  );

  const сhangeShadowColor = (value) => {
    if (value?.hex === undefined) {
      setShadowColor(createColor(value));
    } else {
      setShadowColor(value);
    }
  };

  React.useEffect(() => {
    if (
      pagesData?.[page]?.[editedGraph]?.type &&
      pagesData?.[page]?.[editedGraph]?.data
    ) {
      setData(pagesData?.[page]?.[editedGraph]?.data);
      setBlured(pagesData?.[page]?.[editedGraph]?.blured);
      setWithBox(pagesData?.[page]?.[editedGraph]?.withBox);
      setSelectedGraph(pagesData?.[page]?.[editedGraph]?.type);
    } else {
      setData(null);
      setBlured(false);
      setWithBox(false);
      setSelectedGraph(null);
    }
  }, [editedGraph, pagesData, page, open]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = JSON.parse(JSON.stringify(pagesData));

    newData[page][editedGraph] = {
      type: selectedGraph,
      data: data,
      blured: blured,
      shadowColor: shadowColor?.css?.backgroundColor,
      withBox,
    };

    setPagesData(newData);

    dispatch(
      setMockData(
        JSON.stringify({
          originalData: { data: newData, layout: layout },
        })
      )
    );

    setData(null);
    // setSelectedGraph(null);
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
      maxWidth={"md"}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          minWidth: "700px",
          fontFamily: "system-ui",
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{ textAlign: "center", color: "#083763", fontWeight: 900 }}
        >
          {"Add graph"}
        </DialogTitle>
        <DialogContent>
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <FormControl fullWidth style={{ marginTop: "10px" }}>
              <InputLabel id="demo-simple-select-label">
                {editedGraph === "macro_panel" ? null : "Type"}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedGraph}
                label={editedGraph === "macro_panel" ? null : "Type"}
                onChange={(event) => {
                  setSelectedGraph(event.target.value);
                }}
              >
                <MenuItem value={"KeyIndicatorsFrame"}>Frames</MenuItem>
                <MenuItem value={"TreeMapWithChildren"}>Tree Map</MenuItem>
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
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={withBox}
                      onChange={() => setWithBox(!withBox)}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label="With Box"
                />
              </FormGroup>
              {withBox ? (
                <span
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Box color:</span>

                  <ColorPickerProvider
                    setMainColor={сhangeShadowColor}
                    mainColor={shadowColor}
                  />
                </span>
              ) : (
                <></>
              )}
            </FormControl>
            {editedGraph !== "macro_panel" ? (
              <div
                style={{
                  position: "relative",
                }}
              >
                {pathToJSON?.[selectedGraph] &&
                pathToJSON?.[selectedGraph] !== "macroPanel" ? (
                  <>
                    <FormGroup
                      style={{
                        position: "absolute",
                        right: 0,
                        top: "-9px",
                        zIndex: 102,
                      }}
                    >
                      <FormControlLabel
                        control={
                          <Switch
                            checked={blured}
                            onChange={() => {
                              setBlured(!blured);
                            }}
                            inputProps={{ "aria-label": "controlled" }}
                          />
                        }
                        label="Blure"
                      />
                    </FormGroup>
                    <img
                      src={`/assets/${pathToJSON[selectedGraph]}.webp`}
                      alt="dawda"
                      style={{
                        width: "250px",
                        height: "400px",
                        borderRadius: "5px",
                        objectFit: "contain",
                        filter: blured ? "blur(3px)" : "",
                      }}
                    />
                    {blured ? (
                      <>
                        <div
                          style={{
                            width: "250px",
                            height: "400px",
                            display: "flex",
                            justifyContent: "center",
                            fontSize: "20px",
                            alignItems: "center",
                            zIndex: 101,
                            position: "absolute",
                            color: "#083763",
                            right: 0,
                            top: 0,
                          }}
                        >
                          Coming soon
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <div
                    style={{
                      width: "250px",
                      height: "400px",
                      backgroundColor: "#d6d6d6",
                      border: "1px dashed grey",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Select Graph
                  </div>
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
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
