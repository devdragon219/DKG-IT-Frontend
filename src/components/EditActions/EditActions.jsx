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
  FormControlLabel,
  TextField,
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
import {NotEnoughPermissionsError} from "../../constants/messages";
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
    justifyContent: "space-between",
    alignItems: "end",
    width: "100%",
    marginTop: "20px",
    marginBottom: "20px",
  },
  input: {
    marginRight: "10px",
  },
});

const EditActions = ({
  handleUploadJson,
  name,
  url,
  onSave,
  handleDropdownItem,
  listSettings,
  isCustomSettings,
  settings,
  handleSettingBlur,
  setSlugUrl,
  data,
  handleIsProtected,
  handleAccessibleBy,
  isProtected,
  accessible_by,
  has_password,
  handlePassKeyChange
}) => {
  const classes = useStyles();
  console.log("isProtected", isProtected);

  const visibilityNotification = useVisibilityNotification({
    isVisibleError: true,
    isVisibleSuccess: true,
  });


  const { status, statusAddItem, error } = useSelector(({ list }) => list);
  const { profile } = useSelector(({ user }) => user);
  const { statusUpload } = useSelector(({ item }) => item);
  const { diagramType } = useParams();

  

  useEffect(() => {
    if (status === "failed") {
      visibilityNotification({
        type: typeNotifier.ERROR,
        message: `${error?.error?.message} ${error?.type}`,
      });
    }
    if (statusAddItem === "succeeded") {
      visibilityNotification({
        type: typeNotifier.SUCCESS,
        message: "success!!!",
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

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };

  const classesExample = useExampleStyles();
  const submitTooltip = profile.isEditor ? "" : NotEnoughPermissionsError;

  const handleSlugChange = (e) => {
    setSlugUrl(e.target.value);
  };

  return (
    <div>
      <Container maxWidth="2xl">
        <div className={classes.exampleContainer}>
          <Button
            size="normal"
            color="primary"
            variant="contained"
            onClick={exportData}
          >
            Download Current JSON
          </Button>
        </div>
        <div >
          <div className={classesExample.contentRoot}>
            {/* Dropdown Section */}
            <Dropdown
              listItem={listSettings}
              renderItem={(item) => handleDropdownItem(item)}
              isShowArrow={false}
              className={classesExample}
              disabled={SETTINGS?.[diagramType] ? false : true}
            />
          </div>

          <div>

            {/* Section 2: Basic Information */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: '100%' }}>
            <UploadJsonButton handleChange={handleUploadJson} disabled={!profile.isEditor} tooltip={submitTooltip} />
              <FormInput
                value={name}
                label={"Name:"}
                style={{ flex: 1 }}
                disabled
              />
              <FormInput
                value={url}
                label={"URL:"}
                style={{ flex: 1 }}
                handleChange={handleSlugChange}
              />
            </div>
          </div>

          {/* Section 3: Privacy Settings */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px', marginTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <FormControlLabel
                label="Is Private"
                control={<Switch />}
                checked={isProtected}
                onChange={handleIsProtected}
                labelPlacement="start"
              />
              <Typography variant="body2" style={{ flex: 1, marginLeft: '10px' }}>
                If checked, the entire diagram is protected with a password and Email/password authentication.
              </Typography>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {
                !has_password &&
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  margin="normal"
                  style={{ flex: 1 }}
                  disabled={!isProtected}
                  onChange={handlePassKeyChange}
                  fullWidth
                />
              }
              <TextField
                label="Accessible By"
                type="text"
                variant="outlined"
                style={{ flex: 1 }}
                margin="normal"
                value={accessible_by}
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
              style={{ width: '300px' }}
              disabled={!profile.isEditor || !url}
              tooltip={submitTooltip}
            >
              Submit
            </CustomButton>
          </div>

  <div style={{ margin: "20px" }}>
    {!url && <Typography color="error">Please enter URL</Typography>}
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

export default EditActions;
