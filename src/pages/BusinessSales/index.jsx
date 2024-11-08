import React, {useCallback, useEffect, useState} from "react";
import {Layout, Menu, Button, theme} from "antd";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  PieChartFilled,
  HomeOutlined,
  HeatMapOutlined,
} from "@ant-design/icons";

import SearchTool from "./SearchTool";
import HelpSection from "./HelpSection";
import UserName from "../../components/layout/UserName";
import LogoutButton from "../../components/layout/LogoutButton";
import ToolSection from "./ToolSection";
import ShowcasesSection from "./ShowcasesSection";
import {useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {LoginButton} from "../../components/layout/LoginButton";
import {getName} from "../../constants/names";
import {TOOL_BUSINESS_SECTIONS} from "../../constants/tools";
import {SHOWCASES_SECTIONS} from "../../constants/showcases";
import {BUSINESS_DEVELOPMENT_SECTIONS} from "../../constants/businessDevelopment";
import BusinessDevelopmentSection from "./BusinessDevelopmentSection";


const {Header, Sider, Content} = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const businessDevelopmentChildren = Object.keys(BUSINESS_DEVELOPMENT_SECTIONS).map((section) => ({
  key: section,
  href: `#${section}`,
  label: <a href={`#${section}`}>{getName(section)}</a>,
}));

const toolChildren = Object.keys(TOOL_BUSINESS_SECTIONS).map((section) => ({
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
  getItem("Business Development and Sales Platform", "BusinessDevelopment", <DashboardOutlined/>, [...businessDevelopmentChildren]),
  getItem("IT Tools", "Tools", <PieChartFilled/>, [...toolChildren]),
  getItem("IT Showcases", "Showcases", <HeatMapOutlined/>, [
    ...showcasesChildren,
  ]),
  [...toolChildren],
];

export const BusinessSales = () => {
  const {permissions} = useSelector((state) => state.user);
  const location = useLocation();
  const containerRef = React.useRef(null);
  const [collapsed, setCollapsed] = useState(false);
  const [section, setSection] = useState("BusinessDevelopment");
  const {
    token: {colorBgContainer, borderRadiusLG},
  } = theme.useToken();

  console.log(section)
  useEffect(() => {
    if (location.hash) {
      try {
        const section = document.getElementById(location.hash.replace("#", ""));
        section.scrollIntoView({behavior: 'instant', block: 'start'});
      } catch (e) {
        console.error(e)
      }
    }
  }, [location])

  const CurrentSection = useCallback(() => {
    switch (section) {
      case "BusinessDevelopment":
        return <BusinessDevelopmentSection containerRef={containerRef}/>;

      case "Tools":
        return <ToolSection containerRef={containerRef}/>;

      case "Showcases":
        return <ShowcasesSection containerRef={containerRef}/>;

      default:
        return <ToolSection containerRef={containerRef}/>;
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
        }}
      >
        <div className="demo-logo-vertical"/>
        <Menu
          theme="dark"
          defaultSelectedKeys={[section]}
          defaultOpenKeys={["BusinessDevelopment", "Tools", "Showcases"]}
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
              icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
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
              style={{display: "block", cursor: "pointer"}}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <SearchTool/>
            <UserName/>
            <LoginButton color={"#1677ff"}/>
            <LogoutButton color={"#1677ff"}/>
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
          <CurrentSection/>
        </Content>
      </Layout>
      <HelpSection/>
    </Layout>
  );
};
