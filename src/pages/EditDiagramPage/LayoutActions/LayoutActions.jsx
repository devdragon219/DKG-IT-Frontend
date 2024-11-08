import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { editItem } from "../../../store/list";
import {
  setDataFromJsonFile,
  addNewDataField,
  setField,
  getItemBySlug,
} from "../../../store/item";

import { useNavigate, useParams } from "react-router-dom";
import { SETTINGS } from "../../../constants/settings";
import { useVisibilityNotification } from "../../../components/Notifier/hooks/useVisibilityNotification";

import * as typeNotifier from "../../../constants/typeNotifications";
import EditActions from "../../../components/EditActions/EditActions";

const LayoutActions = ({ type, listItem }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { data, is_protected, accessible_by, has_password, passkey } = useSelector((state) => state.item);
  const [ isDiagramProtected, setIsDiagramProtected ] = useState(false);
  const user = useSelector((state) => state.user);
  //const [firstLoad, setFirstLoad] = useState(listItemDemo);
  const [firstLoad, setFirstLoad] = useState(true);

  //const [listSettings, setListSettings] = useState(listItemDemo);
  const [listSettings, setListSettings] = useState(listItem);
  const { statusAddItem } = useSelector((state) => state.list);
  const { diagramType, slug, name } = useParams();
  const [ slugUrl, setSlugUrl ] = useState(slug);

  const visibilityNotification = useVisibilityNotification({
    isVisibleSuccess: true,
    isVisibleError: true,
  });

  useEffect(() => {
    setIsDiagramProtected(is_protected);
  }, [is_protected]);


  const handleDropdownItem = (item) => {
    setListSettings((prevList) =>
      prevList.map((el) => {
        el.id === item.id
          ? (el.isActive = !el.isActive)
          : (el.isActive = false);
        return el;
      })
    );

    handleSettingsChange(SETTINGS?.[diagramType]?.[item.id]);
  };

  // useEffect(() => {
  //   if (statusAddItem !== "succeeded") return;
  //   dispatch(cleanUpActions());
  //   return () => dispatch(cleanUpActions());
  // }, [dispatch, statusAddItem]);



  const onSave = async () => {
    if (!slugUrl){
      return
    }
    const diagramData = {
      is_staff: user?.name ? true : false,
      title: name,
      slug: slug,
      is_protected: is_protected,
      newSlug: slugUrl,
      diagram_type: type,
      source: {
        ...data,
      },
    };
    if (!has_password && passkey) {
      diagramData.passkey = passkey
    }
    if (accessible_by?.length > 0) {
      diagramData.accessible_by = accessible_by
    }
    const resp = await dispatch(
      editItem(diagramData)
    );
    console.log(resp);

    if (resp?.meta?.requestStatus === "fulfilled") {
      console.log("success");
      navigate(`/edit/${diagramType}/${slugUrl}?`)
    } else {
      console.log("error");
    }
    // update the current url with the new slug
  };

  const handleIsProtected = (e) => {
    setIsDiagramProtected(e?.target?.checked);
    dispatch(setField({ field: "is_protected", value: e?.target?.checked }));
  };

  const handlePassKeyChange = (e) => {
    dispatch(setField({ field: "passkey", value: e?.target?.value }));
  };

  const handleAccessibleBy = (e) => {
    dispatch(
      setField({ field: "accessible_by", value: e?.target?.value })
    );
  };


  const uploadJson = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      dispatch(setDataFromJsonFile(e.target.result));
    };
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

  const checkIfCustomSettings = () => {
    const isActiveCustom = listSettings.some((el) => el.isActive === true && el.itemName === "Custom");
    return isActiveCustom;
  };

  return (
    <>
    <EditActions
      data={data}
      handleUploadJson={uploadJson}
      name={name}
      url={slugUrl}
      handleIsProtected={handleIsProtected}
      handleAccessibleBy={handleAccessibleBy}
      handlePassKeyChange={handlePassKeyChange}
      has_password={has_password}
      isProtected={isDiagramProtected}
      accessible_by={accessible_by}
      onSave={onSave}
      setSlugUrl={setSlugUrl}
      settings={data?.originalData?.settings}
      handleSettingBlur={handleSettingBlur}
      listSettings={listSettings}
      isCustomSettings={checkIfCustomSettings()}
      handleDropdownItem={handleDropdownItem}
    /></>

  );
};

export default LayoutActions;
