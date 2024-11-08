import { TextField } from "@mui/material";
import { Button } from "antd";
import { useEffect, useState, useMemo } from "react";
import CardsContentSection from "../CardsContentSection";
import GridContentSection from "../GridContentSection";
import { findLabelByNodeId } from "../utils";

function findElementByKey(arr, keyToFind) {
  let result = null;

  // Recursive function to traverse the array of objects and their children
  function traverse(elements) {
    for (const element of elements) {
      if (element.key === keyToFind) {
        result = element;
        break;
      } else if (element.children && element.children.length) {
        traverse(element.children); // Recursive call for children
      }
    }
  }

  traverse(arr);

  return result;
}

const MainSection = ({
  sectionKey,
  items,
  contentData,
  setContentData,
  enteredPass,
  setEnteredPass,
  passData,
  isEditMode,
  rightSidebar,
}) => {
  const [isCardsSection, setIsCardsSection] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    const selectedItem = findElementByKey(items, sectionKey);
    setIsCardsSection(selectedItem?.isCardsSection);
  }, [sectionKey, items]);

  const isPassNeeded = useMemo(() => {
    const label = findLabelByNodeId(items, sectionKey);

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

  return sectionKey ? (
    <div
      key={sectionKey}
      style={{
        width: "100%",
        position: "relative",
        height: "100%",
      }}
    >
      <div
        style={{
          filter: isPassNeeded ? "blur(5px)" : "",
        }}
      >
        {isCardsSection ? (
          <CardsContentSection
            sectionKey={sectionKey}
            contentData={contentData}
            setContentData={setContentData}
            isEditMode={isEditMode}
            rightSidebar={rightSidebar}
          />
        ) : (
          <GridContentSection
            sectionKey={sectionKey}
            contentData={contentData}
            setContentData={setContentData}
            isEditMode={isEditMode}
            rightSidebar={rightSidebar}
          />
        )}
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
  ) : (
    <></>
  );
};

export default MainSection;
