// mui
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import * as React from "react";
import { TreeView } from "@mui/x-tree-view/TreeView";
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
  isHeaderHide,
  setOpenPasswordModal,
}) => {
  const [expanded, setExpanded] = React.useState(["0"]);
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

  const renderSidebarItems = (items, isSubMenu = false) => {
    return items.map((el, index) => (
      <SidebarItem
        key={el.nodeId}
        label={el.label}
        nodeId={el.nodeId}
        setSelectedItem={setSelectedItem}
        isEditMode={isEditMode}
        index={index}
        isSubMenu={isSubMenu} // Determine isSubMenu based on subItems
      >
        {el.subItems && el.subItems.length > 0 && (
          <TreeView>{renderSidebarItems(el.subItems, true)}</TreeView>
        )}
      </SidebarItem>
    ));
  };

  React.useEffect(() => {
    const openedItemsIds = [];
    items.forEach((el) => {
      if (el?.isOpened) {
        openedItemsIds.push(el.nodeId);
      }
    });

    setExpanded(openedItemsIds);
  }, [items]);

  const handleDragEnd = (result) => {
    if (!result.destination) return; // Item was not dropped in a valid position

    const reorderedItems = Array.from(items);
    const [movedItem] = reorderedItems.splice(result.source.index, 1); // Remove the item from the source index
    reorderedItems.splice(result.destination.index, 0, movedItem); // Insert the item at the destination index

    setItems(reorderedItems);
  };

  return (
    <div>
      {console.log(isEditMode)}
      {isEditMode ? (
        <DragDropContext onDragEnd={handleDragEnd}>
          <div>
            {isHeaderHide ? (
              <></>
            ) : (
              <>
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
              </>
            )}

            <TreeView
              selected={selectedItem}
              aria-label="file system navigator"
              expanded={expanded}
              onNodeSelect={(event, nodeId) => {
                const index = expanded.indexOf(nodeId);
                const copyExpanded = [...expanded];
                if (index === -1) {
                  copyExpanded.push(nodeId);
                } else {
                  copyExpanded.splice(index, 1);
                }
                setExpanded(copyExpanded);
              }}
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
              sx={{
                flexGrow: 1,
                maxWidth: 400,
                overflowY: "auto",
                fontSize: "40px",
              }}
            >
              <Droppable droppableId="sidebar-items">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {renderSidebarItems(items)}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </TreeView>

            <Button
              style={{ width: "100%", display: isEditMode ? "block" : "none" }}
              onClick={() => {
                setOpen(true);
              }}
            >
              EDIT MENU LIST
            </Button>
            <Button
              style={{ width: "100%", display: isEditMode ? "block" : "none" }}
              onClick={() => {
                setOpenPasswordModal(true);
              }}
            >
              ADD PASSWORD
            </Button>
          </div>
        </DragDropContext>
      ) : (
        <div>
          {isHeaderHide ? (
            <></>
          ) : (
            <>
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
            </>
          )}
          <TreeView
            selected={selectedItem}
            aria-label="file system navigator"
            expanded={expanded}
            onNodeSelect={(event, nodeId) => {
              const index = expanded.indexOf(nodeId);
              const copyExpanded = [...expanded];
              if (index === -1) {
                copyExpanded.push(nodeId);
              } else {
                copyExpanded.splice(index, 1);
              }
              setExpanded(copyExpanded);
            }}
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
            sx={{
              flexGrow: 1,
              maxWidth: 400,
              overflowY: "auto",
              fontSize: "40px",
            }}
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
          <Button
            style={{ width: "100%", display: isEditMode ? "block" : "none" }}
            onClick={() => {
              setOpenPasswordModal(true);
            }}
          >
            ADD PASSWORD
          </Button>
        </div>
      )}
    </div>
  );
};
