import * as React from "react";
import { treeItemClasses } from "@mui/x-tree-view";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { makeStyles } from "@mui/styles";
import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import SubdirectoryArrowLeftIcon from "@mui/icons-material/SubdirectoryArrowLeft";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddIcon from "@mui/icons-material/Add";
import EastIcon from "@mui/icons-material/East";
import { styled } from "@mui/material/styles";

const useStyles = makeStyles({
  item: {
    "&.MuiTreeItem-label": {
      fontSize: "40px",
    },
  },
});

const MainStyledTreeItem = styled(TreeItem)(
  ({ theme, isSelected, hasSubItems }) => ({
    [`& .${treeItemClasses.content}`]: {
      height: "40px",
      padding: "20px",
      backgroundColor: "transparent !important",
      "&:hover": {
        backgroundColor: "transparent",
      },
      "&.Mui-selected": {
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: isSelected && !hasSubItems ? "900 !important" : "normal",
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "transparent",
      },
      "&.Mui-selected": {
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },
  })
);

const SubStyledTreeItem = styled(TreeItem)(({ theme, isSelected }) => ({
  [`& .${treeItemClasses.content}`]: {
    height: "40px",
    backgroundColor: "transparent",
    "&.Mui-selected": {
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },
  [`& .${treeItemClasses.label}`]: {
    fontWeight: isSelected ? "900" : "normal",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-selected": {
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },
}));

const SidebarItem = ({
  label,
  nodeId,
  children,
  setSelectedItem,
  selectedItem,
  isSubMenu,
  index,
  isEditMode,
  hasSubItems,
}) => {
  const [hover, setHover] = React.useState(false);
  const classes = useStyles();
  const isSelected = selectedItem === nodeId;

  const labelWithIcon = (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <span>{label}</span>
      {isSelected && <EastIcon style={{ fontSize: "20px" }} />}
    </div>
  );

  return isSubMenu ? (
    <SubStyledTreeItem
      selected={true}
      nodeId={nodeId}
      label={labelWithIcon}
      isSelected={isSelected}
      hasSubItems={hasSubItems}
      className={classes.item}
      onClick={() => {
        setSelectedItem(nodeId);
      }}
    >
      {children}
    </SubStyledTreeItem>
  ) : (
    <div>
      {isEditMode ? (
        <>
          <Draggable draggableId={nodeId} index={index}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <MainStyledTreeItem
                  selected={true}
                  nodeId={nodeId}
                  label={label}
                  isSelected={isSelected}
                  hasSubItems={hasSubItems}
                  className={classes.item}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  collapseIcon={
                    hover ? (
                      <SubdirectoryArrowLeftIcon
                        style={{
                          fontSize: "25px",
                          transform: "rotate(90deg)",
                        }}
                      />
                    ) : (
                      <SouthEastIcon
                        style={{
                          fontSize: "25px",
                        }}
                      />
                    )
                  }
                  expandIcon={
                    hover ? (
                      <AddCircleOutlineIcon
                        style={{
                          fontSize: "25px",
                        }}
                      />
                    ) : (
                      <AddIcon
                        style={{
                          fontSize: "25px",
                        }}
                      />
                    )
                  }
                  onClick={() => {
                    setSelectedItem(nodeId);
                  }}
                >
                  {children}
                </MainStyledTreeItem>
              </div>
            )}
          </Draggable>
        </>
      ) : (
        <>
          <MainStyledTreeItem
            selected={true}
            nodeId={nodeId}
            label={labelWithIcon}
            isSelected={isSelected}
            hasSubItems={hasSubItems}
            className={classes.item}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            collapseIcon={
              hover ? (
                <SubdirectoryArrowLeftIcon
                  style={{
                    fontSize: "25px",
                    color: "black",
                    transform: "rotate(90deg)",
                  }}
                />
              ) : (
                <SouthEastIcon style={{ fontSize: "25px", color: "black" }} />
              )
            }
            expandIcon={
              hover ? (
                <AddCircleOutlineIcon
                  style={{
                    fontSize: "25px",
                    color: "black",
                  }}
                />
              ) : (
                <AddIcon style={{ fontSize: "25px", color: "black" }} />
              )
            }
            onClick={() => {
              setSelectedItem(nodeId);
            }}
          >
            {children}
          </MainStyledTreeItem>
        </>
      )}
    </div>
  );
};

export default SidebarItem;
