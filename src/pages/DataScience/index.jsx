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

import SearchTool from "./SearchTool";
import HelpSection from "./HelpSection";
import UserName from "../../components/layout/UserName";
import LogoutButton from "../../components/layout/LogoutButton";
import ToolSection from "./ToolSection";
import ShowcasesSection from "./ShowcasesSection";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoginButton } from "../../components/layout/LoginButton";
import { getName } from "../../constants/names";
import {
  TECH_ECO_FIN_SECTION,
  ALGORITHMIC_SECTION,
  PARSING_TEAM_SECTION,
  DATA_VISUALISATION_SECTION,
  DATA_MANAGEMENT_SECTION,
} from "../../constants/dataScience";
import TechEconomySection from "./TechEconomy";
import AlgorithmicTeamSection from "./AlgorithmicTeam";
import ParsingTeamSection from "./ParsingTeam";
import DataVisualizationSection from "./DataVisualization";
import DataManagementSection from "./DataManagement";

const { Header, Sider, Content } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const TechEconomySectionChildren = Object.keys(TECH_ECO_FIN_SECTION).map(
  (section) => ({
    key: section,
    href: `#${section}`,
    label: <a href={`#${section}`}>{getName(section)}</a>,
  })
);

const AlgorithmicTeamSectionChildren = Object.keys(ALGORITHMIC_SECTION).map(
  (section) => ({
    key: section,
    href: `#${section}`,
    label: <a href={`#${section}`}>{getName(section)}</a>,
  })
);

const ParsingTeamSectionChildren = Object.keys(PARSING_TEAM_SECTION).map(
  (section) => ({
    key: section,
    href: `#${section}`,
    label: <a href={`#${section}`}>{getName(section)}</a>,
  })
);

const DataVisualizationSectionChildren = Object.keys(
  DATA_VISUALISATION_SECTION
).map((section) => ({
  key: section,
  href: `#${section}`,
  label: <a href={`#${section}`}>{getName(section)}</a>,
}));

const DataManagementSectionChildren = Object.keys(DATA_MANAGEMENT_SECTION).map(
  (section) => ({
    key: section,
    href: `#${section}`,
    label: <a href={`#${section}`}>{getName(section)}</a>,
  })
);

// const toolChildren = Object.keys(TOOL_BUSINESS_SECTIONS).map((section) => ({
//   key: section,
//   href: `#${section}`,
//   label: <a href={`#${section}`}>{getName(section)}</a>,
// }));

// const showcasesChildren = Object.keys(SHOWCASES_SECTIONS).map((section) => ({
//   key: section,
//   href: `#${section}`,
//   label: <a href={`#${section}`}>{getName(section)}</a>,
// }));

const items = [
  // getItem("DKG Internal", "Internal", <HomeOutlined />),
  // getItem("DKG Operational Environment", "Dashboard", <DashboardOutlined />),
  getItem("Tech Economy & Finance Department", "TechEco", <PieChartFilled />, [
    ...TechEconomySectionChildren,
  ]),
  getItem("Algorithmic Team", "AlgoTeam", <HeatMapOutlined />, [
    ...AlgorithmicTeamSectionChildren,
  ]),
  getItem("Parsing Team", "ParsingTeam", <DashboardOutlined />, [
    ...ParsingTeamSectionChildren,
  ]),
  getItem("Data Visualization", "DataVisualization", <PieChartFilled />, [
    ...DataVisualizationSectionChildren,
  ]),
  getItem("Data Management", "DataManagement", <PieChartFilled />, [
    ...DataManagementSectionChildren,
  ]),
  // getItem("IT Tools", "Tools", <PieChartFilled />, [...toolChildren]),
  // getItem("IT Showcases", "Showcases", <HeatMapOutlined />, [
  //   ...showcasesChildren,
  // ]),
  // [...toolChildren],
];

export const DataScience = () => {
  const { permissions } = useSelector((state) => state.user);
  const location = useLocation();
  const containerRef = React.useRef(null);
  const [collapsed, setCollapsed] = useState(false);
  const [section, setSection] = useState("DataScience");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  console.log(section);
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
      case "DataManagement":
        return <DataManagementSection containerRef={containerRef} />;

      case "TechEco":
        return <TechEconomySection containerRef={containerRef} />;

      case "AlgoTeam":
        return <AlgorithmicTeamSection containerRef={containerRef} />;

      case "ParsingTeam":
        return <ParsingTeamSection containerRef={containerRef} />;

      case "DataVisualization":
        return <DataVisualizationSection containerRef={containerRef} />;

      default:
        return <TechEconomySection containerRef={containerRef} />;
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
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[section]}
          defaultOpenKeys={[
            "DataManagement",
            "TechEco",
            "AlgoTeam",
            "ParsingTeam",
            "DataVisualization",
          ]}
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
          <CurrentSection />
        </Content>
      </Layout>
      <HelpSection />
    </Layout>
  );
};
