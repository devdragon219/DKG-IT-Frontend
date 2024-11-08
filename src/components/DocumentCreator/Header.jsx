import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import EditTitle from "./Modals/EditTitle";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

const Header = ({
  drawerWidth,
  onDrawerToggled,
  setCompanyInfo,
  companyInfo,
  isEditMode,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar
        style={{
          minHeight: "80px",
        }}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "white",
          color: "black",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onDrawerToggled}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "20px",
            fontWeight: "400",
          }}
        >
          {companyInfo?.title}
          {""}
          {isEditMode && (
            <EditIcon
              style={{ cursor: "pointer" }}
              onClick={() => setOpen(true)}
            />
          )}
        </Typography>
      </Toolbar>
      <EditTitle
        open={open}
        setOpen={setOpen}
        setCompanyInfo={setCompanyInfo}
        companyInfo={companyInfo}
      />
    </AppBar>
  );
};

export default Header;
