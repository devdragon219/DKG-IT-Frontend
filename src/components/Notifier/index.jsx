import React from "react";

import { SnackbarProvider } from "notistack";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";

import Notifier from "./Notifier";

import useStyles from "./styles";

const NotifierProvider = ({ children }) => {
  const classes = useStyles();

  return (
    <SnackbarProvider
      className={classes.contentRoot}
      iconVariant={{
        success: <CheckCircleOutlinedIcon className="snackbarIcons" />,
        info: <InfoOutlinedIcon className="snackbarIcons" />,
        warning: <ReportProblemOutlinedIcon className="snackbarIcons" />,
        error: <CancelOutlinedIcon className="snackbarIcons" />,
      }}
    >
      <Notifier />
      {children}
    </SnackbarProvider>
  );
};

export default NotifierProvider;
