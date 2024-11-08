import { Layout, Menu, Button } from "antd";
import "./styles.css";

const { Sider } = Layout;

const SidebarBase = ({
  collapsed,
  items,
  sectionKey,
  setSectionKey,
  setIsEditMenuItemsModalOpen,
  setOpenPasswordModal,
  isEditMode,
  sidebarTheme,
  customiseOptions,
}) => {
  const mainColor1 = sidebarTheme?.customizeSettings?.mainColor1 ?? "#001628";
  const mainColor2 = sidebarTheme?.customizeSettings?.mainColor2 ?? "#001628";
  //const { mainColor1, mainColor2 } = sidebarTheme?.customizeSettings;

  // Apply styles through CSS variables
  const rootStyle = {
    "--ant-menu-item-selected":
      customiseOptions?.buttonBackgroundColor || "#1677ff",
    // "--ant-menu-submenu-title": customiseOptions?.fontColor || "#fff",
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={271}
      style={{
        overflow: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        //background: customiseOptions?.sidebarBackgroundColor || "#001628",
        background: `linear-gradient(-30deg, ${mainColor1} 0%, ${mainColor2} 40%, ${mainColor1} 50%)`,
        ...rootStyle,
      }}
    >
      <Menu
        theme="dark"
        defaultOpenKeys={items?.map((el) => el?.key) || []}
        selectedKeys={sectionKey ? [sectionKey] : []}
        mode="inline"
        items={items}
        onClick={(data) => {
          const item = items
            .flatMap((el) => [el, ...(el.children || [])])
            .find((el) => el.key === data.key);
          if (item?.isLink) {
            window.open(item.link, "_blank");
          } else if (data?.key) {
            if (sectionKey !== data?.key) {
              setSectionKey(data?.key);
            }
          }
        }}
        style={{
          background: "transparent",
        }}
      />
      {isEditMode ? (
        <>
          <div
            style={{
              height: "50px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              style={{
                width: "90%",
              }}
              type="primary"
              onClick={() => {
                setIsEditMenuItemsModalOpen(true);
              }}
            >
              {collapsed ? "EDIT" : "EDIT MENU"}
            </Button>
          </div>
          <div
            style={{
              height: "50px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              style={{
                width: "90%",
              }}
              type="primary"
              onClick={() => {
                setOpenPasswordModal(true);
              }}
            >
              {collapsed ? "ADD" : " ADD PASSWORD"}
            </Button>
          </div>
        </>
      ) : (
        <></>
      )}
    </Sider>
  );
};

export default SidebarBase;
