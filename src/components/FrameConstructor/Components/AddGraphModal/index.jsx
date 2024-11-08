import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { ColorPicker, createColor } from "material-ui-color";

import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { setMockData } from "../../../../store/item";
import FormInput from "../../../../components/FormInput";
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
  const [title, setTitle] = React.useState("Title");
  const [URL, setURL] = React.useState("");
  const [titleColor, setTitleColor] = React.useState(createColor("white"));
  const [shadowColor, setShadowColor] = React.useState(
    createColor("rgba(194, 194, 194, 1)")
  );
  const [backgroundColor, setBackgroundColor] = React.useState(
    createColor("#0c5391")
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = JSON.parse(JSON.stringify(pagesData));
    newData[page][editedGraph] = {
      type: "KeyIndicatorsResp",
      data: {
        title,
        titleColor,
        shadowColor,
        backgroundColor,
        URL,
      },
    };

    setPagesData(newData);
    dispatch(
      setMockData(
        JSON.stringify({
          originalData: { data: newData, layout: layout },
        })
      )
    );

    setOpen(false);
  };

  React.useEffect(() => {
    if (pagesData?.[page]?.[editedGraph]?.data?.title) {
      setTitle(pagesData?.[page]?.[editedGraph]?.data?.title);
      setURL(pagesData?.[page]?.[editedGraph]?.data?.URL);
      setTitleColor(pagesData?.[page]?.[editedGraph]?.data?.titleColor);
      setShadowColor(pagesData?.[page]?.[editedGraph]?.data?.shadowColor);
      setBackgroundColor(
        pagesData?.[page]?.[editedGraph]?.data?.backgroundColor
      );
    } else {
      setTitle("Title");
      setURL("");
      setTitleColor(createColor("white"));
      setShadowColor(createColor("rgba(194, 194, 194, 1)"));
      setBackgroundColor(createColor("#0c5391"));
    }
  }, [editedGraph, pagesData, page, open]);

  const handleClose = () => {
    setOpen(false);
  };

  const сhangeBackgroundColor = (value) => {
    setBackgroundColor(value);
  };

  const сhangeTitleColor = (value) => {
    setTitleColor(value);
  };

  const сhangeShadowColor = (value) => {
    setShadowColor(value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleURLChange = (e) => {
    setURL(e.target.value);
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
          {"Add item"}
        </DialogTitle>
        <DialogContent>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <FormInput
                value={title}
                label={"Title:"}
                handleChange={handleTitleChange}
              />
              <FormInput
                value={URL}
                label={"URL:"}
                handleChange={handleURLChange}
                style={{ marginTop: "10px" }}
              />
              <span
                className="color-pick"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>Background:</span>

                <ColorPickerProvider
                  setMainColor={сhangeBackgroundColor}
                  mainColor={backgroundColor}
                />
              </span>
              <span
                className="color-pick"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>Title:</span>
                <ColorPickerProvider
                  setMainColor={сhangeTitleColor}
                  mainColor={titleColor}
                />
              </span>
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>Shadow:</span>
                <ColorPickerProvider
                  setMainColor={сhangeShadowColor}
                  mainColor={shadowColor}
                />
              </span>
            </div>
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <div
                style={{
                  width: "250px",
                  height: "230px",
                  backgroundColor: backgroundColor?.css?.backgroundColor,
                  color: titleColor?.css?.backgroundColor,
                  borderRadius: "5px",
                  display: "flex",
                  fontSize: "25px",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0px 0px 12px 0px ${shadowColor?.css?.backgroundColor}`,
                }}
              >
                {title}
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            type="submit"
            autoFocus
            variant="contained"
            // disabled={data === null}
          >
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
