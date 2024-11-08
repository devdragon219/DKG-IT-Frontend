/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useMemo, useState } from "react";

import { Layout, Button, theme, Switch } from "antd";

import { Button as MuiButton, TextField } from "@mui/material";

import {
  LeftSquareFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  RightSquareFilled,
} from "@ant-design/icons";

import SearchTool from "./SearchTool";
import AdminPanelCustomiser from "./AdminPanelCustomiser";
import EditMenuItemsModal from "./Modals/EditMenuItems";
import SidebarBase from "./Sidebar";
import MainSection from "./MainSection";
import IconByName from "./IconByName";
import ImageToBase64Converter from "./ImageToBase64Converter";
import PasswordModal from "./Modals/PasswordModal/PasswordModal";

import { getAllLabels } from "./utils";
import AddHeaderLinksModal from "./Modals/AddHeaderLinks";
import HeaderLinks from "./HeaderLinks";
import { getUserInfo } from "../../store/user";
import { useDispatch } from "react-redux";
import Loader from "../Loader";
import { useLocation } from "react-router-dom";
import MacroPanel from "./MacroPanel";
import { Responsive, WidthProvider } from "react-grid-layout";
import { useSelector } from "react-redux";

const ResponsiveGridLayout = WidthProvider(Responsive);

const { Header, Content } = Layout;

const AdminPanelsConstructor = (props) => {
  const urlParam = new URLSearchParams(useLocation().search); // coming from the parent url iframing this panel
  let dataProps = props?.data?.originalData;
  const { isEditMode } = props;
  const [collapsed, setCollapsed] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [isFetchingUser, setIsFetchingUser] = useState(true);
  const [isEditMenuItemsModalOpen, setIsEditMenuItemsModalOpen] =
    useState(false);

  const [isEditMenuItemsModalOpenRight, setIsEditMenuItemsModalOpenRight] =
    useState(false);

  const [isAddHeaderLinkModalOpen, setIsAddHeaderLinkModalOpen] =
    useState(false);

  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const [enteredPass, setEnteredPass] = useState(false);

  const [passwordError, setPasswordError] = useState(false);
  const [password, setPassword] = useState(null);

  const [activeSectionKey, setActiveSectionKey] = useState(null);
  const [activeSidebar, setActiveSidebar] = useState("left"); // 'left' or 'right'

  const [dataSource, setDataSource] = useState(dataProps?.dataSource || []);
  const [rightDataSource, setRightDataSource] = useState(
    dataProps?.rightDataSource || []
  );
  const [contentData, setContentData] = useState(dataProps?.contentData || {});
  const [logoBase64, setLogoBase64] = useState(dataProps?.logoBase64 || "");
  const [passData, setPassData] = useState(dataProps?.passData || {});
  const [headerLinks, setHeaderLinks] = useState(dataProps?.headerLinks || []);
  const [rightSidebar, setRightSidebar] = useState(
    dataProps?.rightSidebar || false
  );
  const [showMacroPanel, setShowMacroPanel] = useState(
    dataProps?.showMacroPanel || false
  );
  const [customiseOptions, setCustomiseOptions] = useState(
    dataProps?.customiseOptions || []
  );
  const [macroPanel, setMacroPanel] = useState(
    dataProps?.macroPanel || {
      type: "macro_panel",
      data: [],
      customizeSettings: {
        iconColor: "white",
        iconBackgroundColor: "#ffffff29",
        iconTextSize: 15,
        iconInfoSize: 10,
        mainColor1: "#011628",
        mainColor2: "#011628",
      },
    }
  );

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    // as for now, do not show anything for one second untill the check for user and redirect finishes. (Can implement in different way, but as for now, no time)
    const timeoutId = setTimeout(() => {
      setIsFetchingUser(false);
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    window.onmessage = function (e) {
      if (e?.data?.originalData) {
        setContentData(e.data.originalData.contentData);
        setDataSource(e.data.originalData.dataSource);
        setLogoBase64(e.data.originalData.logoBase64);
        setPassData(e.data?.originalData?.passData);
        setHeaderLinks(e.data?.originalData?.headerLinks);
        setRightSidebar(e.data?.originalData?.rightSidebar);
        setRightDataSource(e.data?.originalData?.rightDataSource);
        setCustomiseOptions(e.data?.originalData?.customiseOptions);
        setMacroPanel(e.data?.originalData?.macroPanel);
        setShowMacroPanel(e.data?.originalData?.showMacroPanel);
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
    window.top.postMessage({ dataSource: dataSource, type: "dataSource" }, "*");
  }, [dataSource]);

  useEffect(() => {
    window.top.postMessage(
      { rightDataSource: rightDataSource, type: "rightDataSource" },
      "*"
    );
  }, [rightDataSource]);

  useEffect(() => {
    window.top.postMessage(
      { rightSidebar: rightSidebar, type: "rightSidebar" },
      "*"
    );
  }, [rightSidebar]);

  useEffect(() => {
    window.top.postMessage(
      { headerLinks: headerLinks, type: "headerLinks" },
      "*"
    );
  }, [headerLinks]);

  useEffect(() => {
    window.top.postMessage({ logoBase64: logoBase64, type: "logoBase64" }, "*");
  }, [logoBase64]);

  useEffect(() => {
    window.top.postMessage({ passData: passData, type: "passData" }, "*");
  }, [passData]);

  useEffect(() => {
    window.top.postMessage(
      { customiseOptions: customiseOptions, type: "customiseOptions" },
      "*"
    );
  }, [customiseOptions]);

  useEffect(() => {
    window.top.postMessage({ macroPanel: macroPanel, type: "macroPanel" }, "*");
  }, [macroPanel]);

  useEffect(() => {
    window.top.postMessage(
      { showMacroPanel: showMacroPanel, type: "showMacroPanel" },
      "*"
    );
  }, [showMacroPanel]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isEditMode) {
      return;
    }

    if (dataProps?.dataSource?.[0]?.key) {
      if (dataProps?.dataSource?.[0]?.hasSubItems) {
        setActiveSectionKey(dataProps?.dataSource?.[0]?.subItems?.[0].key);
      } else {
        setActiveSectionKey(dataProps?.dataSource?.[0]?.key);
      }
      setActiveSidebar("left");
    }
  }, [dataProps, isEditMode]);

  const items = useMemo(() => {
    return (
      dataSource?.map((element) => {
        return {
          key: element.key,
          icon: <IconByName iconName={element.logo} />,
          isCardsSection: element.isCardsSection,
          link: element.link,
          isLink: element.isLink,
          children: element?.hasSubItems
            ? element?.subItems.map((el) => {
                return {
                  key: el.key,
                  label: el.name,
                  isCardsSection: el.isCardsSection,
                  link: el.link,
                  isLink: el.isLink,
                };
              })
            : undefined,
          label: element.name,
        };
      }) || []
    );
  }, [dataSource]);

  const rightItems = useMemo(() => {
    return (
      rightDataSource?.map((element) => {
        return {
          key: element.key,
          icon: <IconByName iconName={element.logo} />,
          isCardsSection: element.isCardsSection,
          link: element.link,
          isLink: element.isLink,
          children: element?.hasSubItems
            ? element?.subItems.map((el) => {
                return {
                  key: el.key,
                  label: el.name,
                  isCardsSection: el.isCardsSection,
                  link: el.link,
                  isLink: el.isLink,
                };
              })
            : undefined,
          label: element.name,
        };
      }) || []
    );
  }, [rightDataSource]);

  const isPassNeeded = useMemo(() => {
    if (passData?.value?.length) {
      //! New update
      // IF password is set then we prompt the user to enter password regardless of the authentication type
      if (
        passData?.value?.includes("Entire Admin Panel") &&
        passData?.password
      ) {
        if (enteredPass === false) {
          return true;
        }
        return false;
      }
    }

    return false;
  }, [enteredPass, passData]);

  const handleSidebarToggle = (checked) => {
    if (rightDataSource === undefined) {
      setRightDataSource([]);
    }
    setRightSidebar(checked);
  };

  useEffect(() => {
    if (isEditMode) {
      if (macroPanel === undefined) {
        setMacroPanel({
          type: "macro_panel",
          data: [],
          customizeSettings: {
            iconColor: "white",
            iconBackgroundColor: "#ffffff29",
            iconTextSize: 15,
            iconInfoSize: 10,
            mainColor1: "#011628",
            mainColor2: "#011628",
          },
        });
      }
    }
  });

  const handleMacropanelToggle = (checked) => {
    setShowMacroPanel(checked);
  };

  const allLabels = useMemo(() => {
    return [...items, ...rightItems];
  }, [items, rightItems]);

  if (isFetchingUser) {
    // While user is being fetched return loader
    return <Loader />;
  }

  return (
    <div>
      {showMacroPanel === true ? (
        <div>
          <MacroPanel
            data={macroPanel.data}
            macroPanelConfig={macroPanel.customizeSettings}
            gridWidth={width}
          ></MacroPanel>
        </div>
      ) : (
        <></>
      )}
      <Layout
        style={{
          height: "100vh",
          filter: isPassNeeded ? "blur(5px)" : "",
        }}
      >
        {isEditMode ? (
          <>
            <AdminPanelCustomiser
              customiseOptions={customiseOptions}
              setCustomiseOptions={setCustomiseOptions}
              macroPanel={macroPanel}
              setMacroPanel={setMacroPanel}
            ></AdminPanelCustomiser>
          </>
        ) : (
          <></>
        )}
        <EditMenuItemsModal
          isEditMenuItemsModalOpen={isEditMenuItemsModalOpen}
          setIsEditMenuItemsModalOpen={setIsEditMenuItemsModalOpen}
          dataSource={dataSource}
          setDataSource={setDataSource}
        />
        <PasswordModal
          passData={passData}
          open={openPasswordModal}
          setOpen={setOpenPasswordModal}
          labels={getAllLabels(allLabels)}
          setPassData={setPassData}
        />
        <SidebarBase
          //collapsed={collapsed}
          items={items}
          sectionKey={activeSidebar === "left" ? activeSectionKey : null}
          setOpenPasswordModal={setOpenPasswordModal}
          setSectionKey={(key) => {
            setActiveSectionKey(key);
            setActiveSidebar("left");
          }}
          setIsEditMenuItemsModalOpen={setIsEditMenuItemsModalOpen}
          isEditMode={isEditMode}
          sidebarTheme={macroPanel}
          customiseOptions={customiseOptions}
        />
        <AddHeaderLinksModal
          isAddHeaderLinkModalOpen={isAddHeaderLinkModalOpen}
          setIsAddHeaderLinkModalOpen={setIsAddHeaderLinkModalOpen}
          headerLinks={headerLinks}
          setHeaderLinks={setHeaderLinks}
        />
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "5px",
              }}
            >
              <ImageToBase64Converter
                isEditMode={isEditMode}
                logoBase64={logoBase64}
                setLogoBase64={setLogoBase64}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
                padding: "5px",
              }}
            >
              <SearchTool contentData={contentData} />
              {isEditMode ? (
                <>
                  <MuiButton
                    style={{
                      marginRight: "10px",
                    }}
                    onClick={() => setIsAddHeaderLinkModalOpen(true)}
                  >
                    Edit Links
                  </MuiButton>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Switch
                      checkedChildren="RightSidebar"
                      unCheckedChildren="RightSidebar"
                      checked={rightSidebar}
                      onChange={handleSidebarToggle}
                    />
                    <Switch
                      checkedChildren="MacroPanel"
                      unCheckedChildren="MacroPanel"
                      checked={showMacroPanel}
                      onChange={handleMacropanelToggle}
                    />
                  </div>
                </>
              ) : (
                <></>
              )}
              {headerLinks?.length > 0 ? (
                <HeaderLinks headerLinks={headerLinks} />
              ) : (
                <></>
              )}
            </div>
            {rightSidebar === true ? (
              <Button
                type="text"
                icon={
                  collapsed ? (
                    <LeftSquareFilled style={{ fontSize: "24px" }} />
                  ) : (
                    <RightSquareFilled style={{ fontSize: "24px" }} />
                  )
                }
                onClick={() => setCollapsed(!collapsed)}
                size="large"
              />
            ) : (
              <></>
            )}
          </Header>
          <Content
            style={{
              margin: "12px 8px",
              padding: 5,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: "3px",
              overflow: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <MainSection
              sectionKey={activeSectionKey}
              items={activeSidebar === "left" ? items : rightItems}
              contentData={contentData}
              setContentData={setContentData}
              isEditMode={isEditMode}
              enteredPass={enteredPass}
              passData={passData}
              setEnteredPass={setEnteredPass}
              rightSidebar={rightSidebar}
            />
            {isEditMode ? (
              <Button
                type="primary"
                danger
                ghost
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                }}
                onClick={() => {
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSe5ifRnz939f8xLRC4HecwrnnmY9G7tsp5CseVp16tvJ_U2kg/viewform?usp=sf_link",
                    "_blank"
                  );
                }}
              >
                Feedbacks
              </Button>
            ) : (
              <></>
            )}
          </Content>
        </Layout>
        {rightSidebar === true ? (
          <>
            <EditMenuItemsModal
              isEditMenuItemsModalOpen={isEditMenuItemsModalOpenRight}
              setIsEditMenuItemsModalOpen={setIsEditMenuItemsModalOpenRight}
              dataSource={rightDataSource}
              setDataSource={setRightDataSource}
            />
            <SidebarBase
              collapsed={collapsed}
              items={rightItems}
              sectionKey={activeSidebar === "right" ? activeSectionKey : null}
              setOpenPasswordModal={setOpenPasswordModal}
              setSectionKey={(key) => {
                setActiveSectionKey(key);
                setActiveSidebar("right");
              }}
              setIsEditMenuItemsModalOpen={setIsEditMenuItemsModalOpenRight}
              isEditMode={isEditMode}
              sidebarTheme={macroPanel}
              customiseOptions={customiseOptions}
            />
          </>
        ) : (
          <></>
        )}
      </Layout>
      {isPassNeeded ? (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              width: "250px",
              height: "177px",
              borderRadius: "5px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
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
              onChange={(e) => setPassword(e.target.value)}
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
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AdminPanelsConstructor;
