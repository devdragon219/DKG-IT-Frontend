import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import {
  Container,
  Button,
  Grid,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Checkbox,
  TextField,
  MenuItem,
  FormControlLabel,
  Switch,
} from "@mui/material";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";
import UploadJsonButton from "../UploadJsonButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import * as typeNotifier from "../../constants/typeNotifications";
import { useVisibilityNotification } from "../Notifier/hooks/useVisibilityNotification";
// start Import. an example of using the Dropdown component
import { Dropdown } from "../Dropdown";

import useExampleStyles from "./styles";
import { SettingFormInput } from "./SettingFormInput";
import { useParams } from "react-router-dom";
import { SETTINGS } from "../../constants/settings";
import { NotEnoughPermissionsError } from "../../constants/messages";
// end Import. an example of using the Dropdown component

const useStyles = makeStyles({
  exampleContainer: {
    display: "flex",
    justifyContent: "end",
    alignItems: "baseline",
    width: "100%",
  },
  inputsContainer: {
    display: "flex",
    // justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "end",
    width: "100%",
    marginTop: "20px",
    marginBottom: "20px",
    "@media (max-width:700px)": {
      flexDirection: "column",
      alignItems: "initial",
      gap: 10,
    },
  },
  input: {
    marginRight: "10px",
  },
});

const Actions = ({
  handleUploadJson,
  name,
  url,
  onSave,
  handleNameChange,
  handleDropdownItem,
  listSettings,
  isCustomSettings,
  settings,
  handleSettingBlur,
  handleUrlChange,
  isSubmitDisabled,
  href,
  handlePassKeyChange,
  handleIsProtected,
  handleAccessibleBy,
  isProtected
}) => {
  const classes = useStyles();

  // TODO: an example of using Notifier component
  const visibilityNotification = useVisibilityNotification({
    isVisibleError: true,
    isVisibleSuccess: true,
  });

  const { status, statusAddItem, error } = useSelector(({ list }) => list);
  const { profile } = useSelector(({ user }) => user);
  const { statusUpload } = useSelector(({ item }) => item);
  const { diagramType } = useParams();
  const permissionTooltip = profile.isEditor ? "" : NotEnoughPermissionsError;

  useEffect(() => {
    if (status === "failed") {
      const message = error?.payload?.error?.message || error?.error?.message
      console.error(message);
      visibilityNotification({
        type: typeNotifier.WARNING,
        message: message,
      });
    }
    if (statusAddItem === "succeeded") {
      visibilityNotification({
        type: typeNotifier.SUCCESS,
        message: "success",
      });
    }
  }, [status, error, visibilityNotification, statusAddItem]);

  useEffect(() => {
    if (statusUpload === "failed") {
      visibilityNotification({
        type: typeNotifier.ERROR,
        message: "Error upload Json file",
      });
    }
    if (statusUpload === "succeeded") {
      visibilityNotification({
        type: typeNotifier.INFO,
        message: "Chart has been updated. Please hit submit once ready",
      });
    }
  }, [visibilityNotification, statusUpload]);

  // TODO: an example of using Dropdown component

  const classesExample = useExampleStyles();
  return (
    <div>
      <Container maxWidth="2xl">
        <div className={classes.exampleContainer}>
          <Button
            size="normal"
            color="primary"
            variant="contained"
            href={href}
            download={diagramType}
            target="_blank"
          >
            Download Example
          </Button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', padding: '20px', width: '100%' }}>
          {/* Section 1: Configuration Selection */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
            <div style={{ flex: 2 }}>
              <Dropdown
                listItem={listSettings}
                renderItem={(item) => handleDropdownItem(item)}
                isShowArrow={false}
                className={classesExample}
                disabled={SETTINGS?.[diagramType] ? false : true}
              />
            </div>
            <div style={{ flex: 1, textAlign: 'right' }}>
              <UploadJsonButton
                handleChange={handleUploadJson}
                disabled={!!permissionTooltip}
                tooltip={permissionTooltip}
              />
            </div>
          </div>

          {/* Section 2: Basic Information */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <FormInput
              value={name}
              label={"Name:"}
              handleChange={handleNameChange}
            />
            <FormInput
              value={url}
              label={"URL:"}
              handleChange={handleUrlChange}
            />
          </div>

          {/* Section 3: Privacy Settings */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <FormControlLabel
                label="Is Private"
                control={<Switch />}
                onChange={handleIsProtected}
                labelPlacement="start"
              />
              <Typography variant="body2" style={{ flex: 1, marginLeft: '10px' }}>
                If checked, the entire diagram is protected with a password and Email/password authentication.
              </Typography>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                disabled={!isProtected}
                onChange={handlePassKeyChange}
                fullWidth
              />
              <TextField
                label="Accessible By"
                type="text"
                variant="outlined"
                margin="normal"
                disabled={!isProtected}
                onChange={handleAccessibleBy}
                helperText="user1@ex.com, user2@ex.com, user3@ex.com | Restrict access to diagram to specific users, empty means everyone with password can access"
                fullWidth
              />
            </div>
          </div>

          {/* Section 4: Submit */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <CustomButton
              handleClick={onSave}
              tooltip={permissionTooltip}
              disabled={isSubmitDisabled()}
            >
              Submit
            </CustomButton>
          </div>
        </div>

      </Container>
      {isCustomSettings && settings && (
        <Container
          maxWidth="lg"
          style={{
            marginBottom: "20px",
          }}
        >
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Custom Settings</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#eef4fc" }}>
              <Grid container spacing={2}>
                {Object.keys(settings).map((key) => {
                  return (
                    <Grid item xs={6} md={3} lg={2} key={key}>
                      <SettingFormInput
                        label={key}
                        value={settings[key]}
                        handleSettingBlur={handleSettingBlur}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Container>
      )}
    </div>
  );
};

export default Actions;
