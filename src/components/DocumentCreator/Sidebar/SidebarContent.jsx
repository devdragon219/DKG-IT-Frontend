// mui
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";

import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { Button } from "@mui/material";
import SidebarItem from "./SidebarItem";

import ImageToBase64Converter from "../ImageToBase64Converter";

export const SidebarContent = ({
  items,
  setItems,
  setOpen,
  setSelectedItem,
  selectedItem,
  isEditMode,
  logoBase64,
  setLogoBase64,
}) => {
  console.log(items);
  const getItem = (menuItem, isSubMenu = false) => {
    const subItems = menuItem?.subItems
      ? menuItem?.subItems?.map((el) => {
          return getItem(el, true);
        })
      : null;

    return (
      <SidebarItem
        setSelectedItem={setSelectedItem}
        nodeId={menuItem.nodeId}
        label={menuItem.label}
        setItems={setItems}
        isSubMenu={isSubMenu}
      >
        {subItems}
      </SidebarItem>
    );
  };
  return (
    <div>
      <Toolbar
        style={{
          boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
          minHeight: "80px",
        }}
      >
        <ImageToBase64Converter
          isEditMode={isEditMode}
          logoBase64={logoBase64}
          setLogoBase64={setLogoBase64}
        />
      </Toolbar>
      <Divider />
      <TreeView
        selected={selectedItem}
        aria-label="file system navigator"
        defaultCollapseIcon={
          <ExpandMoreIcon
            style={{ fontSize: "25px", color: "rgba(92,105,117,1.00)" }}
          />
        }
        defaultExpandIcon={
          <ChevronRightIcon
            style={{ fontSize: "25px", color: "rgba(92,105,117,1.00)" }}
          />
        }
        sx={{ flexGrow: 1, maxWidth: 400, overflowY: "auto", fontSize: "40px" }}
      >
        {items.map((el) => {
          return getItem(el);
        })}
      </TreeView>

      <Button
        style={{ width: "100%", display: isEditMode ? "block" : "none" }}
        onClick={() => {
          setOpen(true);
        }}
      >
        EDIT MENU LIST
      </Button>
    </div>
  );
};
