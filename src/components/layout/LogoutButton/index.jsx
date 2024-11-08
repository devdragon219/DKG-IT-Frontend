import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/user";
import { pathAPIurl } from "../../../constants/routes";

const LogoutButton = ({ color }) => {
  const dispatch = useDispatch();
  const { userName } = useSelector((state) => state.user);
  if (!userName) {
    // anonymous user
    return null;
  }
  const handleLogout = async () => {
    await dispatch(logout());
    window.location.href = `${pathAPIurl()}login/`;
  };
  return (
    <IconButton
      style={{ marginLeft: "0.25rem" }}
      variant="contained"
      onClick={handleLogout}
    >
      <LogoutIcon style={{ color: color ? color : "#fff" }} />
    </IconButton>
  );
};

export default LogoutButton;
