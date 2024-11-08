import React, { useCallback, useEffect, useState } from "react";
import { Layout, Menu, Button, theme } from "antd";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  PieChartFilled,
  HomeOutlined,
  HeatMapOutlined,
} from "@ant-design/icons";

import { Card } from "@mui/material";

import SearchTool from "./SearchTool";
import HelpSection from "./HelpSection";
import UserName from "../../components/layout/UserName";
import LogoutButton from "../../components/layout/LogoutButton";
import ToolSection from "./ToolSection";
import ShowcasesSection from "./ShowcasesSection";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoginButton } from "../../components/layout/LoginButton";
import { getName } from "../../constants/names.js";
import { TOOL_SECTIONS } from "../../constants/tools.js";
import { SHOWCASES_SECTIONS } from "../../constants/showcases.js";

const { Header, Sider, Content } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const toolChildren = Object.keys(TOOL_SECTIONS).map((section) => ({
  key: section,
  href: `#${section}`,
  label: <a href={`#${section}`}>{getName(section)}</a>,
}));

const showcasesChildren = Object.keys(SHOWCASES_SECTIONS).map((section) => ({
  key: section,
  href: `#${section}`,
  label: <a href={`#${section}`}>{getName(section)}</a>,
}));

const items = [
  // getItem("DKG Internal", "Internal", <HomeOutlined />),
  // getItem("DKG Operational Environment", "Dashboard", <DashboardOutlined />),
  getItem("IT Tools", "Tools", <PieChartFilled />, [...toolChildren]),
  getItem("IT Showcases", "Showcases", <HeatMapOutlined />, [
    ...showcasesChildren,
  ]),
  [...toolChildren],
];

const App = () => {
  const { permissions } = useSelector((state) => state.user);
  const location = useLocation();
  const containerRef = React.useRef(null);
  const [collapsed, setCollapsed] = useState(false);
  const [section, setSection] = useState("Tools");
  const isMobile = window.outerWidth < 700;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    if (location.hash) {
      try {
        const section = document.getElementById(location.hash.replace("#", ""));
        section.scrollIntoView({ behavior: "instant", block: "start" });
      } catch (e) {
        console.error(e);
      }
    }
  }, [location]);

  const CurrentSection = useCallback(() => {
    switch (section) {
      case "Tools":
        return <ToolSection containerRef={containerRef} />;

      case "Showcases":
        return <ShowcasesSection containerRef={containerRef} />;

      default:
        return <ToolSection containerRef={containerRef} />;
    }
  }, [section]);

  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={271}
        style={{
          overflow: "scroll",
          display: "block",
        }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          if (broken) {
            setCollapsed(true);
          }
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[section]}
          defaultOpenKeys={["Tools", "Showcases"]}
          mode="inline"
          items={items}
          onClick={(data) => {
            if (data.keyPath.length > 1) {
              if (section !== data.keyPath[1]) {
                setSection(data.keyPath[1]);
              }
            }
          }}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <img
              src={"/assets/Logo.webp"}
              alt="Logo"
              height={54}
              style={{ display: "block", cursor: "pointer" }}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <SearchTool />
            <UserName />
            <LoginButton color={"#1677ff"} />
            <LogoutButton color={"#1677ff"} />
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: "scroll",
          }}
          ref={containerRef}
        >
          {!isMobile && (
            <Card
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto",
                padding: "20px",
                flexDirection: "column",
                marginBottom: "20px",
                boxShadow:
                  "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              }}
            >
              <iframe
                style={{
                  width: "100%",
                  height: 900,
                  margin: "auto",
                }}
                title="mmcounts"
                src={"https://tools.dkv.global/product/macroparameters"}
                frameBorder="0"
              />
            </Card>
          )}
          <CurrentSection />
        </Content>
      </Layout>
      <HelpSection />
    </Layout>
  );
};

export default App;
