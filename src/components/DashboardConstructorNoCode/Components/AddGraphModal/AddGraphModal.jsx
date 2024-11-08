import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import useGraphData from "./useGraphData";
import GraphSelector from "./GraphSelector";
import { useDispatch } from "react-redux";
import { setMockData } from "../../../../store/item";

const AddGraphModal = ({
  open,
  setOpen,
  editedGraph,
  setPagesData,
  pagesData,
  page,
  layout,
  macroPanel,
}) => {
  const dispatch = useDispatch();
  const [
    selectedGraph,
    setSelectedGraph,
    data,
    setData,
    blured,
    setBlured,
    handleSubmit,
    uploadJson,
    binded,
    setBinded,
    defaultKey,
    setDefaultKey,
  ] = useGraphData(
    pagesData,
    page,
    editedGraph,
    layout,
    setPagesData,
    dispatch,
    setMockData,
    setOpen
  );

  const handleClose = () => {
    setData(null);
    setBlured(false);
    setBinded(false);
    setDefaultKey(0);
    setSelectedGraph(null);
    setOpen(false);
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
        style={{ minWidth: "700px", fontFamily: "system-ui" }}
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{ textAlign: "center", color: "#083763", fontWeight: 900 }}
        >
          {"Add graph"}
        </DialogTitle>
        <DialogContent style={{"height":"fit-content"}}>  
          <GraphSelector
            selectedGraph={selectedGraph}
            setSelectedGraph={setSelectedGraph}
            editedGraph={editedGraph}
            blured={blured}
            setBlured={setBlured}
            uploadJson={uploadJson}
            macroPanel={macroPanel}
            binded={binded}
            setBinded={setBinded}
            data={data}
            defaultKey={defaultKey}
            setDefaultKey={setDefaultKey}
          />
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
};

export default AddGraphModal;
