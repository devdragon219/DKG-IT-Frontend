import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { SidebarContent } from "./SidebarContent";

const SidebarBase = ({
  drawerWidth,
  mobileOpen,
  onDrawerToggeled,
  items,
  setItems,
  setSelectedItem,
  setOpen,
  setOpenPasswordModal,
  selectedItem,
  isEditMode,
  logoBase64,
  setLogoBase64,
  isHeaderHide,
}) => {
  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onDrawerToggeled}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <SidebarContent
          logoBase64={logoBase64}
          setLogoBase64={setLogoBase64}
          items={items}
          setItems={setItems}
          setOpen={setOpen}
          setOpenPasswordModal={setOpenPasswordModal}
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
          isEditMode={isEditMode}
          isHeaderHide={isHeaderHide}
        />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#F5F6F6",
          },
        }}
        open
      >
        <SidebarContent
          logoBase64={logoBase64}
          setLogoBase64={setLogoBase64}
          items={items}
          setItems={setItems}
          setOpen={setOpen}
          setOpenPasswordModal={setOpenPasswordModal}
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
          isEditMode={isEditMode}
          isHeaderHide={isHeaderHide}
        />
      </Drawer>
    </Box>
  );
};

export default SidebarBase;
