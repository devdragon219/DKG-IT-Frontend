/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getUserInfo } from "../../store/user";
import "google-fonts";
import "./font.css";
import { Button, Layout, theme } from "antd";

import MainSection from "./MainSection";
import ImageToBase64Converter from "./ImageToBase64Converter";
import TitleContentSection from "./TitleContentSection";
import PasswordModal from "./Modals/PasswordModal/PasswordModal";

import { TextField } from "@mui/material";

const { Header, Content } = Layout;

const AdminPanelsBlackConstructor = (props) => {
  let dataProps = props?.data?.originalData;
  const { isEditMode } = props;
  const dispatch = useDispatch();

  const urlParam = new URLSearchParams(useLocation().search); // coming from the parent url iframing this panel
  const parentOrigin = urlParam.get("parentUrl");

  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const [enteredPass, setEnteredPass] = useState(false);

  const [passwordError, setPasswordError] = useState(false);
  const [password, setPassword] = useState(null);

  const [contentData, setContentData] = useState(dataProps?.contentData || []);
  const [gridData, setGridData] = useState(dataProps?.gridData || []);
  const [passData, setPassData] = useState(dataProps?.passData || {});
  const [logoBase64, setLogoBase64] = useState(dataProps?.logoBase64 || "");
  const [titleData, setTitleData] = useState(dataProps?.titleData || []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    window.onmessage = function (e) {
      if (e?.data?.originalData) {
        setContentData(e.data.originalData.contentData);
        setGridData(e.data.originalData.gridData);
        setLogoBase64(e.data.originalData.logoBase64);
        setTitleData(e.data.originalData.titleData);
        setPassData(e.data?.originalData?.passData);
      }
    };

  }, []);

  useEffect(() => {
    window.top.postMessage(
      { contentData: contentData, type: "contentData" },
      "*"
    );
  }, [contentData]);

  useEffect(() => {
    window.top.postMessage({ gridData: gridData, type: "gridData" }, "*");
  }, [gridData]);

  useEffect(() => {
    window.top.postMessage({ titleData: titleData, type: "titleData" }, "*");
  }, [titleData]);

  useEffect(() => {
    window.top.postMessage({ logoBase64: logoBase64, type: "logoBase64" }, "*");
  }, [logoBase64]);

  useEffect(() => {
    window.top.postMessage({ passData: passData, type: "passData" }, "*");
  }, [passData]);


  useEffect(() => {
    if (isEditMode) {
      return;
    }
  }, [dataProps, isEditMode]);

  return (
    <div>
      <Layout
        style={{
          height: "100vh",
          backgroundColor: "#171d31",
        }}
      >
        <Layout
          style={{
            backgroundColor: "#171d31",
          }}
        >
          <PasswordModal
            passData={passData}
            open={openPasswordModal}
            setOpen={setOpenPasswordModal}
            //labels={getAllLabels(allLabels)}
            setPassData={setPassData}
          />

          <Header
            style={{
              margin: "20px 30px 0px 30px",
              padding: 20,
              borderRadius: "8px",
              background: colorBgContainer,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#283045",
            }}
            className="demo"
          >
            <TitleContentSection
              titleData={titleData}
              setTitleData={setTitleData}
              isEditMode={isEditMode}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <ImageToBase64Converter
                isEditMode={isEditMode}
                logoBase64={logoBase64}
                setLogoBase64={setLogoBase64}
              />
            </div>
          </Header>
          <Content
            style={{
              margin: "12px 20px",
              padding: 15,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: "3px",
              overflowY: "scroll",
              overflowX: "hidden",
              backgroundColor: "#171d31",
            }}
          >
            <MainSection
              gridData={gridData}
              setGridData={setGridData}
              contentData={contentData}
              setContentData={setContentData}
              isEditMode={isEditMode}
              enteredPass={enteredPass}
              passData={passData}
              setEnteredPass={setEnteredPass}
            />
            {isEditMode ? (
              <Button
                style={{
                  position: "fixed",
                  right: "80px",
                  bottom: "52px",
                  backgroundColor: "#1677FF",
                  color: "white",
                }}
                onClick={setOpenPasswordModal}
              >
                Add Password
              </Button>
            ) : (
              <></>
            )}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default AdminPanelsBlackConstructor;
