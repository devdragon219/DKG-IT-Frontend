import CardsContentSection from "../CardsContentSection";
import GridContentSection from "../GridContentSection";
import { useState, useMemo } from "react";
import { findLabelByNodeId } from "../utils";
import { TextField } from "@mui/material";

const MainSection = ({
  gridData,
  setGridData,
  sectionKey,
  contentData,
  setContentData,
  isEditMode,
  enteredPass,
  passData,
  setEnteredPass,
}) => {
  const [passwordError, setPasswordError] = useState(false);
  const [password, setPassword] = useState(null);

  const isPassNeeded = useMemo(() => {
    const label = "Email/Password";

    if (passData?.value?.length) {
      if (passData?.value?.includes(label)) {
        if (enteredPass === false) {
          return true;
        }
        return false;
      }
    }

    return false;
  }, [sectionKey, enteredPass, passData]);
  return (
    <div
      key={sectionKey}
      style={{
        width: "100%",
        position: "relative",
        height: "100%",
        backgroundColor: "#171d31",
      }}
    >
      <div
        style={{
          filter: isPassNeeded ? "blur(5px)" : "",
        }}
      >
        <GridContentSection
          gridData={gridData}
          setGridData={setGridData}
          isEditMode={isEditMode}
        />
        <CardsContentSection
          contentData={contentData}
          setContentData={setContentData}
          isEditMode={isEditMode}
        />
      </div>

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
            backgroundColor: "white",
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
    </div>
  );
};

export default MainSection;
