import React, { useState, useCallback } from "react";
import { FloatButton, Drawer, Button } from "antd";
import { BgColorsOutlined } from "@ant-design/icons";
import CustomizeDrawer from "./CustomizeDrawer";
import MacroPanelDrawerItems from "./MacroPanelDrawerItems";
import EditMenuItemsModal from "./EditMenuItems";
import { customizeConfig } from "./constants";

const AdminPanelCustomiser = ({
  customiseOptions,
  setCustomiseOptions,
  macroPanel,
  setMacroPanel,
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isEditMenuItemsModalOpen, setIsEditMenuItemsModalOpen] =
    useState(false);

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const handleColorChange = (values) => {
    setCustomiseOptions((prevOptions) => ({
      ...prevOptions,
      ...values,
    }));
  };

  const onCustomizeSettingsChange = useCallback(
    (values) => {
      setMacroPanel((prevState) => ({
        ...prevState,
        customizeSettings: {
          ...prevState.customizeSettings,
          ...values,
        },
      }));
    },
    [setMacroPanel]
  );

  const onMacroPanelDataChange = useCallback(
    (newData) => {
      setMacroPanel((prevState) => ({
        ...prevState,
        data: newData,
      }));
    },
    [setMacroPanel]
  );

  return (
    <>
      <EditMenuItemsModal
        isEditMenuItemsModalOpen={isEditMenuItemsModalOpen}
        setIsEditMenuItemsModalOpen={setIsEditMenuItemsModalOpen}
        macroPanel={macroPanel}
        onMacroPanelDataChange={onMacroPanelDataChange}
      />
      <FloatButton
        icon={<BgColorsOutlined />}
        tooltip={<div>Open Customize</div>}
        onClick={showDrawer}
        className="create-float-button"
        style={{ right: 81 }}
      />
      <Drawer
        title="Customize"
        onClose={() => {
          setOpenDrawer(false);
        }}
        open={openDrawer}
      >
        <CustomizeDrawer
          customiseOptions={customiseOptions}
          onColorChange={handleColorChange}
        />
        <Button
          style={{
            width: "100%",
            marginBottom: "10px",
          }}
          onClick={() => {
            setOpenDrawer(false);
            setIsEditMenuItemsModalOpen(true);
          }}
        >
          Edit Macro Items
        </Button>
        <MacroPanelDrawerItems
          customizeSettings={macroPanel?.customizeSettings}
          customizeConfig={customizeConfig}
          setCustomizeSettings={onCustomizeSettingsChange}
        />
      </Drawer>
    </>
  );
};

export default AdminPanelCustomiser;
