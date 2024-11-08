import { AreaChartOutlined, OrderedListOutlined } from "@ant-design/icons";
import { ROOT } from "../../../constants/routes";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header, Content } = Layout;
const MainHeader = ({ ref1, ref3, onTopNavClick, current }) => {
  const items = [
    {
      key: "preview",
      label: "Preview",
      icon: <AreaChartOutlined ref={ref1} />,
    },
    {
      key: "createdList",
      label: "Created List",
      icon: <OrderedListOutlined ref={ref3} />,
    },
  ];

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Link
        to={ROOT}
        style={{
          background: "#fff",
          padding: "2px 8px",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={"/assets/Logo.webp"}
          alt="Logo"
          height={46}
          style={{ display: "block" }}
        />
      </Link>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["preview"]}
        onClick={onTopNavClick}
        selectedKeys={[current]}
        items={items}
        style={{
          flex: 1,
          minWidth: 0,
          justifyContent: "center",
        }}
      />
    </Header>
  );
};

export default MainHeader;
