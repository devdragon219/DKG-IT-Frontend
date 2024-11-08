import { DesktopOutlined, MobileOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Segmented } from "antd";

const SubHeader = ({
  setCurrentBreakpoint,
  currentBreakpoint,
  published,
  onSave,
  setOpenName,
  slug,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Dashboard Constructor Creation Page.</Breadcrumb.Item>
      </Breadcrumb>
      <Segmented
        onChange={(value) => {
          setCurrentBreakpoint(value);
        }}
        value={currentBreakpoint}
        options={[
          {
            label: "Desktop",
            value: "lg",
            icon: <DesktopOutlined />,
          },
          {
            label: "Mobile",
            value: "sm",
            icon: <MobileOutlined />,
          },
        ]}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div>
        <Button
          variant="contained"
          component="label"
          color="primary"
          onClick={() => {
            if (slug || published) {
              onSave();
              return;
            }
            setOpenName(true);
          }}
        >
          PUBLISH
        </Button>
      </div>
    </div>
  );
};

export default SubHeader;
