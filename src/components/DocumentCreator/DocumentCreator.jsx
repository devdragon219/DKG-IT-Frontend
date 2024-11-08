/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";

import EditListModal from "./Modals/EditListModal";
import ContentSection from "./ContentSection";

import "./style.css";

const drawerWidth = 360;

const useStyles = makeStyles({
  wrap: {},
  notEditMode: { display: "none" },
});

const DocumentCreator = (props) => {
  let dataProps = props?.data?.originalData;
  const { isEditMode } = props;
  const [selectedItem, setSelectedItem] = React.useState(
    dataProps?.items ? "0" : null
  );

  const [items, setItems] = React.useState(dataProps?.items || []);

  const [logoBase64, setLogoBase64] = React.useState(
    dataProps?.logoBase64 || ""
  );

  const [companyInfo, setCompanyInfo] = React.useState(
    dataProps?.companyInfo || {}
  );
  const [introductionData, setIntroductionData] = useState(
    dataProps?.introductionData || {}
  );

  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (isEditMode) {
      setCompanyInfo((prev) => ({ ...prev, title: "Default Title" }));
    }

    window.onmessage = function (e) {
      if (e.data.originalData) {
        setItems(e.data.originalData.items);
        setCompanyInfo(e.data.originalData.companyInfo);
        setIntroductionData(e.data.originalData.introductionData);
        setLogoBase64(e.data.originalData.logoBase64);
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

  return (
    <div className={classes.wrap}>
      <EditListModal
        open={open}
        setOpen={setOpen}
        items={items}
        setItems={setItems}
      />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header
          drawerWidth={drawerWidth}
          onDrawerToggled={handleDrawerToggle}
          setCompanyInfo={setCompanyInfo}
          companyInfo={companyInfo}
          isEditMode={isEditMode}
        />
        <Sidebar
          drawerWidth={drawerWidth}
          onDrawerToggeled={handleDrawerToggle}
          mobileOpen={mobileOpen}
          items={items}
          setSelectedItem={setSelectedItem}
          setOpen={setOpen}
          selectedItem={selectedItem}
          isEditMode={isEditMode}
          logoBase64={logoBase64}
          setLogoBase64={setLogoBase64}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: "100%",
          }}
        >
          <Toolbar />
          {selectedItem ? (
            <div key={`content-${selectedItem}`}>
              <ContentSection
                selectedIntroductionData={introductionData[selectedItem]}
                introductionData={introductionData}
                selectedItem={selectedItem}
                setIntroductionData={setIntroductionData}
                isEditMode={isEditMode}
              />
            </div>
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default DocumentCreator;
