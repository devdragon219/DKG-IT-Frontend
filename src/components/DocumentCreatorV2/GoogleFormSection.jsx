/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useMemo, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, TextField } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";

import FormInput from "../../components/FormInput";

const useStyles = makeStyles({
  wrap: {},
  notEditMode: { display: "none !important" },
});

const GoogleFormSection = ({
  introductionData,
  setIntroductionData,
  selectedIntroductionData,
  selectedItem,
  isEditMode,
  enteredPass,
  setEnteredPass,
  passData,
  selectedItemData,
}) => {
  const classes = useStyles();
  const [editMode, setEditMode] = useState(
    !selectedIntroductionData && isEditMode
  );

  const [passwordError, setPasswordError] = useState(false);
  const [password, setPassword] = useState(null);

  const isPassNeeded = useMemo(() => {
    const label = selectedItemData?.label;

    if (passData?.value?.length) {
      if (passData?.value?.includes(label)) {
        if (enteredPass === false) {
          return true;
        }
        return false;
      }
    }

    return false;
  }, [selectedItemData, enteredPass]);

  return (
    <div>
      {editMode ? (
        <FormInput
          style={{
            marginTop: "20px",
          }}
          fullWidth={true}
          value={selectedIntroductionData}
          label={"Form URL:"}
          handleChange={(e) => {
            setIntroductionData({
              ...introductionData,
              [selectedItem]: e.target.value,
            });
          }}
        />
      ) : (
        <>
          <iframe
            title="DocumentCreatorIftameForm"
            style={{
              filter: isPassNeeded ? "blur(5px)" : "",
              width: "100%",
              height: "90vh",
            }}
            src={selectedIntroductionData}
          />
          {isPassNeeded ? (
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "50%",
                width: "250px",
                height: "177px",
                borderRadius: "5px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                transform: "translate(50%, -50%)",
                backgroundColor:"white"
              }}
            >
              <TextField
                error={passwordError}
                helperText={passwordError ? "Incorrect password." : ""}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                style={{ width: "100%" }}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div>
                <Button
                  onClick={() => {
                    if (password === passData?.password) {
                      setEnteredPass(true);
                      setPasswordError(false);
                    } else {
                      setPasswordError(true);
                    }
                  }}
                  variant={"contained"}
                >
                  OK
                </Button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
          marginTop: "10px",
        }}
      >
        <Button
          onClick={() => {
            setEditMode(!editMode);
          }}
          variant={editMode ? "contained" : "outlined"}
          className={isEditMode ? "" : classes.notEditMode}
        >
          {editMode ? (
            ""
          ) : (
            <EditIcon
              style={{
                fontSize: "17px",
                marginRight: "5px",
              }}
            />
          )}

          {editMode ? "SAVE" : "EDIT"}
        </Button>
      </div>
    </div>
  );
};

export default GoogleFormSection;
