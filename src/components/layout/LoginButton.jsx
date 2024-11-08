import React from "react";
import LoginIcon from '@mui/icons-material/Login';
import IconButton from "@mui/material/IconButton";
import {useSelector} from "react-redux";
import {Typography} from "@mui/material";
import {LOGIN_URL} from "../../libs/auth";

export const LoginButton = ({color}) => {
  const {userName} = useSelector((state) => state.user);
  if (userName) {
    // anonymous user
    return null;
  }
  return (
    <IconButton href={LOGIN_URL} style={{marginLeft: "0.25rem", color: color ? color : "#fff"}} variant="contained">
      <Typography style={{marginRight: "0.5rem"}}>Login</Typography>
      <LoginIcon style={{color: color ? color : "#fff"}}/>
    </IconButton>
  )
}
