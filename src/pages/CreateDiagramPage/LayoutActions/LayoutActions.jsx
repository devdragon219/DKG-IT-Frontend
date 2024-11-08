//This component handles all the actions related to uploadjsonbutton, downloadexample button and save button
//The component uses another component called actions.jsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../../../components/Actions";
import { createItem } from "../../../store/list";
import {
  setDataFromJsonFile,
  cleanUpActions,
  setField,
  addNewDataField,
} from "../../../store/item";
import { pathToLoadFile } from "../../../constants/routes";
import { useParams } from "react-router-dom";
import { SETTINGS } from "../../../constants/settings";
import { useVisibilityNotification } from "../../../components/Notifier/hooks/useVisibilityNotification";

import * as typeNotifier from "../../../constants/typeNotifications";

const LayoutActions = ({ type, listItem }) => {
  const dispatch = useDispatch();
  const { title, url, data, isLoadedData, is_protected, accessible_by, passkey } = useSelector((state) => state.item);
  const [listSettings, setListSettings] = useState(listItem);
  const { name, profile } = useSelector((state) => state.user);
  const { statusAddItem } = useSelector((state) => state.list);
  const [firstLoad, setFirstLoad] = useState(true);
  const [isProtected, setIsProtected] = useState(false);
  const { diagramType } = useParams();

  const visibilityNotification = useVisibilityNotification({
    isVisibleSuccess: true,
    isVisibleError: true,
  });

  const handleDropdownItem = (item) => {
    setListSettings((prevList) =>
      prevList.map((el) => {
        el.id === item.id
          ? (el.isActive = !el.isActive)
          : (el.isActive = false);
        return el;
      })
    );

    const id = item.id;

    handleSettingsChange(SETTINGS?.[diagramType]?.[id]);
  };

  useEffect(() => {
    if (statusAddItem !== "succeeded") return;
    dispatch(cleanUpActions());
    return () => dispatch(cleanUpActions());
  }, [dispatch, statusAddItem]);

  const onSave = () => {
    dispatch(
      createItem({
        title: title,
        slug: url,
        passkey: passkey,
        is_protected: isProtected,
        accessible_by: accessible_by,
        is_staff: name ? true : false,
        diagram_type: type,
        source: {
          ...data,
        },
      })
    );
  };

  const uploadJson = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      dispatch(setDataFromJsonFile(e.target.result));
    };
  };

  const onCheckSubmitDisabled = () => {
    if (title && url && isLoadedData) {
      return false;
    }
    return true;
  };

  const handleNameChange = (e) => {
    dispatch(setField({ field: "title", value: e?.target?.value }));
  };

  const handlePassKeyChange = (e) => {
    dispatch(setField({ field: "passkey", value: e?.target?.value }));
    
  };

  const handleIsProtected = (e) => {
    console.log("protected?", e?.target?.checked);
    setIsProtected(e?.target?.checked);
    dispatch(setField({ field: "is_protected", value: e?.target?.checked }));
  };

  const handleAccessibleBy = (e) => {
    dispatch(
      setField({ field: "accessible_by", value: e?.target?.value })
    );
  };

  const handleSettingsChange = (value) => {
    dispatch(
      addNewDataField({
        field: "settings",
        value: value,
      })
    );
  };

  useEffect(() => {
    if (SETTINGS?.[diagramType] && data?.originalData && firstLoad) {
      const id = listSettings.find((el) => el.isActive === true).id;
      setFirstLoad(false);
      handleSettingsChange(SETTINGS?.[diagramType]?.[id]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [diagramType, listSettings, firstLoad, data]);

  const handleSettingBlur = (value, key) => {
    const reg = /^#([0-9a-f]{3}){1,2}$/i;
    const settings = data?.originalData?.settings
      ? data?.originalData?.settings
      : {};

    let newSettings = { ...settings };
    if (reg.test(value) || !key.includes("olor")) {
      newSettings = { ...newSettings, [key]: value };
    } else {
      visibilityNotification({
        type: typeNotifier.ERROR,
        message: "Not HEX color",
      });
    }

    dispatch(
      addNewDataField({
        field: "settings",
        value: newSettings,
      })
    );
  };
  

  const handleUrlChange = (e) => {
    const value = e.target.value;
    const regex = /^[A-Za-z0-9_]+$/;
    if (value === "" || regex.test(value)) {
      dispatch(setField({ field: "url", value: value }));
    }
  };


  const checkIfCustomSettings = () => {
    const isActiveCustom = listSettings.some((el) => el.isActive === true && el.itemName === "Custom");
    return isActiveCustom;
  };

  return (
    <Actions
      href={pathToLoadFile(type)}
      handleUploadJson={uploadJson}
      handlePassKeyChange={handlePassKeyChange}
      handleIsProtected={handleIsProtected}
      handleAccessibleBy={handleAccessibleBy}
      isProtected={is_protected}
      name={title}
      url={url}
      onSave={onSave}
      settings={data?.originalData?.settings}
      handleSettingBlur={handleSettingBlur}
      handleNameChange={handleNameChange}
      listSettings={listSettings}
      isCustomSettings={checkIfCustomSettings()}
      handleDropdownItem={handleDropdownItem}
      handleUrlChange={handleUrlChange}
      isSubmitDisabled={onCheckSubmitDisabled}
    />
  );
};

export default LayoutActions;
