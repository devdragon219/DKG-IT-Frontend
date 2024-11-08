import { AppBar, Box, Divider, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ROOT } from "../../constants/routes";
import { Link } from "react-router-dom";
import UserName from "../../components/layout/UserName";
import React from "react";

import Step_1 from "./assets/step_1.gif";
import Step_2 from "./assets/Step_2.gif";
import Step_2_1 from "./assets/Step_2_1.png";
import Step_3 from "./assets/Step_3.png";
import Step_3_2 from "./assets/Step_3_2.gif";
import Step_4 from "./assets/Step_4.png";
import LogoutButton from "../../components/layout/LogoutButton";
import {LoginButton} from "../../components/layout/LoginButton";

const useStyles = makeStyles(() => ({
  page: {
    background: "#fff",
  },
  wrapper: {
    width: "90%",
    minHeight: "500px",
    margin: "auto",
    position: "relative",
    boxShadow: "0 0 1px #efefef",
    background: "#f2f2f2",
  },
}));

const mainWrapper = {
  width: "100%",
};

const pageTitle = {
  fontStyle: "normal",
  fontSize: "40px",
  textAlign: "center",
  fontWeight: 600,
  color: "text.primary",
  pt: "80px",
};

const pointText = {
  fontStyle: "normal",
  fontSize: "18px",
  color: "text.primary",
  textAlign: "justify",
};

const normalText = {
  whiteSpace: "pre-line",
  fontStyle: "normal",
  fontSize: "20px",
  lineHeight: "25px",
  color: "text.primary",
  pt: "8px",
  mb: "2rem",
  wordBreak: "break-word",
};

const getPoint = ({ pointData }) => {
  return <Typography sx={pointText}> {pointData} </Typography>;
};

const Index = () => {
  const classes = useStyles();

  React.useEffect(() => {
    document.title = `User Guide | DKV Analytics`;
  }, []);

  return (
    <div className={classes.page}>
      <AppBar position="fixed" style={{ height: "50px" }}>
        <Toolbar
          style={{
            textAlign: "center",
            minHeight: "50px",
          }}
        >
          <Link to={ROOT} style={{ background: "#fff", padding: "2px 8px" }}>
            <img
              src={"/assets/Logo.webp"}
              alt="Logo"
              height={46}
              style={{ display: "block" }}
            />
          </Link>
          <div
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              marginLeft: "auto",
              textAlign: "right",
            }}
          >
            <UserName />
            <LoginButton />
            <LogoutButton/>
          </div>
        </Toolbar>
      </AppBar>
      <Box sx={mainWrapper}>
        <Typography sx={pageTitle}>User Guide</Typography>
        <Divider sx={{ margin: "30px 0" }} />
        <Box sx={{ padding: "0 50px" }}>
          <Typography sx={normalText}>
            To create any visualisation on the Benchmark Tool (aka Custom
            Diagrams Tool), follow these 4 simple steps:
          </Typography>

          {getPoint({
            pointData: (
              <>
                <b>Step 1.</b> Diagram Selection
              </>
            ),
          })}
          {getPoint({
            pointData: (
              <>
                Go to the Benchmark Tool:{" "}
                <a
                  href="https://platform.dkv.global/dashboards/custom-diagrams"
                  target="_blank" rel="noreferrer"
                >
                  https://platform.dkv.global/dashboards/custom-diagrams
                </a>{" "}
                and click on the Diagram of your interest. For example,
                radarChart:
              </>
            ),
          })}

          <img
            src={Step_1}
            alt="Step_1"
            style={{ width: "50%", margin: "15px auto", display: "block" }}
          />

          {getPoint({
            pointData: (
              <>
                <b>Step 2.</b> Data editing
              </>
            ),
          })}

          {getPoint({
            pointData: (
              <>
                Download the sample data.json for your Diagram by clicking{" "}
                <b style={{ background: "#1255cc", color: "#fff" }}>
                  DOWNLOAD EXAMPLE
                </b>
                .
              </>
            ),
          })}

          <img
            src={Step_2}
            alt="Step_2"
            style={{ width: "50%", margin: "15px auto", display: "block" }}
          />

          {getPoint({
            pointData: "And edit the data.json locally:",
          })}

          <img
            src={Step_2_1}
            alt="Step_2_1"
            style={{ width: "30%", margin: "15px auto", display: "block" }}
          />

          {getPoint({
            pointData: (
              <>
                <b>Step 3.</b> Data Upload
              </>
            ),
          })}

          {getPoint({
            pointData: (
              <>
                3.1 When you are ready, upload your just edited data.json by
                clicking{" "}
                <b style={{ background: "#1255cc", color: "#fff" }}>
                  UPLOAD JSON FILE
                </b>
                :
              </>
            ),
          })}

          <img
            src={Step_3}
            alt="Step_3"
            style={{ width: "50%", margin: "15px auto", display: "block" }}
          />

          {getPoint({
            pointData:
              "3.2 Below, you will then see the preview of your Diagram:",
          })}

          <img
            src={Step_3_2}
            alt="Step_3_2"
            style={{ width: "50%", margin: "15px auto", display: "block" }}
          />

          {getPoint({
            pointData: (
              <>
                <b>Step 4.</b> Diagram Saving
              </>
            ),
          })}

          {getPoint({
            pointData: (
              <>
                If you are happy with the newly created diagram, input the{" "}
                <b>Name</b>,<b> URL</b> and click{" "}
                <b style={{ background: "#1255cc", color: "#fff" }}>SUBMIT</b>:
              </>
            ),
          })}

          <img
            src={Step_4}
            alt="Step_4"
            style={{ width: "50%", margin: "15px auto", display: "block" }}
          />

          {getPoint({
            pointData: "That’s it, you can now use your Diagram!",
          })}

          <Divider sx={{ margin: "30px 0" }} />

          {getPoint({
            pointData: <b>Extra:</b>,
          })}
          {getPoint({
            pointData: "User Guides Video:",
          })}
          {getPoint({
            pointData: (
              <>
                <b>3D Mindmap Diagram: Benchmark Tool</b> -{" "}
                <a
                  href="https://drive.google.com/file/d/1h9kZLF-gs9yB-BQxY8C-XZRgLtthgopR/view?usp=drive_link"
                  target="_blank" rel="noreferrer"
                >
                  3D Mindmap.mov
                </a>
              </>
            ),
          })}
          {getPoint({
            pointData: (
              <>
                <b>Сompanies list: Benchmark Tool</b> -{" "}
                <a
                  href="https://drive.google.com/file/d/1Zf0fXqWHKR3chfEcR1bmMWoBC9RNfUul/view?usp=drive_link"
                  target="_blank" rel="noreferrer"
                >
                  Сompanies list
                </a>
              </>
            ),
          })}

          <div style={{ margin: "20px 0" }}></div>

          {getPoint({
            pointData: (
              <>
                Working with each diagram is the same, in essence and boils down
                to these 4 simple steps above. What is different for each
                visualisation — is the{" "}
                <pre style={{ display: "inline-block" }}>data.json</pre> file
              </>
            ),
          })}

          <div style={{ margin: "10px 0" }}></div>

          {getPoint({
            pointData: (
              <>
                Questions left? Please, contact{" "}
                <a href="mailto:rb@dkv.global">Roman Bekerskyi!</a> Thank you.
              </>
            ),
          })}

          <div style={{ margin: "10px 0" }}></div>
        </Box>
      </Box>
    </div>
  );
};

export default Index;
