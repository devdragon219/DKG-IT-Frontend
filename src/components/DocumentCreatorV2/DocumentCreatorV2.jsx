/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState, useMemo } from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  CssBaseline,
  FormControlLabel,
  FormGroup,
  Switch,
  Toolbar,
  TextField,
  Button,
} from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import EditListModal from "./Modals/EditListModal/EditListModal";
import ContentSection from "./ContentSection";
import GoogleFormSection from "./GoogleFormSection";
import PasswordModal from "./Modals/PasswordModal/PasswordModal";

import { findIsGoogleFormByNodeId, getAllLabels } from "./utils";

const drawerWidth = 300;

const useStyles = makeStyles({
  wrap: {},
  notEditMode: { display: "none" },
  actionButtons: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: "30px",
  },
});

const DocumentCreatorV2 = (props) => {
  let dataProps = props?.data?.originalData;
  const { isEditMode } = props;
  const [selectedItem, setSelectedItem] = React.useState(
    dataProps?.items?.[0]?.nodeId ? dataProps?.items?.[0]?.nodeId : null
  );

  const [items, setItems] = React.useState(dataProps?.items || []);

  const [isHeaderHide, setIsHeaderHide] = React.useState(
    dataProps?.isHeaderHide || false
  );

  const [logoBase64, setLogoBase64] = React.useState(
    dataProps?.logoBase64 || ""
  );

  const [companyInfo, setCompanyInfo] = React.useState(
    dataProps?.companyInfo || {}
  );

  const [passData, setPassData] = React.useState(dataProps?.passData || {});

  const [introductionData, setIntroductionData] = useState(
    dataProps?.introductionData || {}
  );

  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [enteredPass, setEnteredPass] = useState(false);
  const [open, setOpen] = useState(false);
  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    if (isEditMode) {
      setCompanyInfo((prev) => ({ ...prev, title: "Default Title" }));
    }

    window.onmessage = function (e) {
      if (e?.data?.originalData) {
        setItems(e.data.originalData.items);
        setCompanyInfo(e.data.originalData.companyInfo);
        setIntroductionData(e.data.originalData.introductionData);
        setLogoBase64(e.data.originalData.logoBase64);
        setPassData(e.data.originalData.passData);
        setIsHeaderHide(e.data.originalData?.isHeaderHide);
      }
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    window.top.postMessage({ items: items, type: "items" }, "*");
  }, [items]);

  useEffect(() => {
    window.top.postMessage(
      { companyInfo: companyInfo, type: "companyInfo" },
      "*"
    );
  }, [companyInfo]);

  useEffect(() => {
    window.top.postMessage(
      { introductionData: introductionData, type: "introductionData" },
      "*"
    );
  }, [introductionData]);

  useEffect(() => {
    window.top.postMessage({ logoBase64: logoBase64, type: "logoBase64" }, "*");
  }, [logoBase64]);

  useEffect(() => {
    window.top.postMessage({ passData: passData, type: "passData" }, "*");
  }, [passData]);

  useEffect(() => {
    window.top.postMessage(
      { isHeaderHide: isHeaderHide, type: "isHeaderHide" },
      "*"
    );
  }, [isHeaderHide]);

  const isPassNeeded = useMemo(() => {
    if (passData?.value?.length) {
      if (passData?.value?.includes("Entire Document Creator")) {
        if (enteredPass === false) {
          return true;
        }
        return false;
      }
    }

    return false;
  }, [enteredPass, passData]);

  return (
    <>
      <div
        className={classes.wrap}
        style={{ filter: isPassNeeded ? "blur(5px)" : "" }}
      >
        <EditListModal
          open={open}
          setOpen={setOpen}
          items={items}
          setItems={setItems}
        />
        <PasswordModal
          passData={passData}
          open={openPasswordModal}
          setOpen={setOpenPasswordModal}
          labels={getAllLabels(items)}
          setPassData={setPassData}
        />

        <Box sx={{ display: "flex" }}>
          {isEditMode ? (
            <FormGroup
              style={{ position: "absolute", zIndex: 2000, top: 0, right: 0 }}
            >
              <FormControlLabel
                control={
                  <Switch
                    checked={isHeaderHide}
                    onChange={() => {
                      setIsHeaderHide(!isHeaderHide);
                    }}
                  />
                }
                label="Hide Header"
              />
            </FormGroup>
          ) : (
            <></>
          )}

          <CssBaseline />
          {isHeaderHide ? (
            <></>
          ) : (
            <Header
              drawerWidth={drawerWidth}
              onDrawerToggled={handleDrawerToggle}
              setCompanyInfo={setCompanyInfo}
              companyInfo={companyInfo}
              isEditMode={isEditMode}
            />
          )}

          <Sidebar
            drawerWidth={drawerWidth}
            onDrawerToggeled={handleDrawerToggle}
            mobileOpen={mobileOpen}
            items={items}
            setItems={setItems}
            setSelectedItem={setSelectedItem}
            setOpen={setOpen}
            setOpenPasswordModal={setOpenPasswordModal}
            selectedItem={selectedItem}
            isEditMode={isEditMode}
            logoBase64={logoBase64}
            setLogoBase64={setLogoBase64}
            isHeaderHide={isHeaderHide}
          />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: "100%",
              position: "relative",
              height: "100vh",
            }}
          >
            {isHeaderHide ? <></> : <Toolbar />}
            {selectedItem && findIsGoogleFormByNodeId(items, selectedItem) ? (
              <div key={`content-${selectedItem}`}>
                <GoogleFormSection
                  selectedIntroductionData={introductionData[selectedItem]}
                  introductionData={introductionData}
                  selectedItem={selectedItem}
                  setIntroductionData={setIntroductionData}
                  isEditMode={isEditMode}
                  enteredPass={enteredPass}
                  setEnteredPass={setEnteredPass}
                  passData={passData}
                  selectedItemData={items?.[selectedItem]}
                />
              </div>
            ) : (
              <></>
            )}

            {selectedItem && !findIsGoogleFormByNodeId(items, selectedItem) ? (
              <div key={`content-${selectedItem}`}>
                <ContentSection
                  selectedIntroductionData={introductionData[selectedItem]}
                  introductionData={introductionData}
                  selectedItem={selectedItem}
                  setIntroductionData={setIntroductionData}
                  isEditMode={isEditMode}
                  enteredPass={enteredPass}
                  setEnteredPass={setEnteredPass}
                  passData={passData}
                  selectedItemData={items?.[selectedItem]}
                  items={items}
                />
              </div>
            ) : (
              <></>
            )}
          </Box>
        </Box>
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
    </>
  );
};

export default DocumentCreatorV2;
