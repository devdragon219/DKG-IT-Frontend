import { TreeItem, treeItemClasses } from "@mui/x-tree-view";
import { makeStyles } from "@mui/styles";

import { styled } from "@mui/material/styles";

const useStyles = makeStyles({
  item: {
    "&.MuiTreeItem-label": {
      fontSize: "40px",
    },
  },
});

const MainStyledTreeItem = styled(TreeItem)(({ theme }) => ({
  color: "rgba(92,105,117,1.00)",
  [`& .${treeItemClasses.content}`]: {
    height: "50px",
  },
  [`& .${treeItemClasses.label}`]: {
    fontSize: "20px",
  },
}));

const SubStyledTreeItem = styled(TreeItem)(({ theme }) => ({
  borderLeft: "1px solid #a0adb9",
  color: "#a0adb9",
  [`& .${treeItemClasses.content}`]: {
    height: "40px",
  },
  [`& .${treeItemClasses.label}`]: {
    fontSize: "15px",
  },
}));

const SidebarItem = ({
  label,
  nodeId,
  children,
  setSelectedItem,
  isSubMenu,
}) => {
  const classes = useStyles();

  return isSubMenu ? (
    <SubStyledTreeItem
      selected={true}
      nodeId={nodeId}
      label={label}
      className={classes.item}
      onClick={() => {
        setSelectedItem(nodeId);
      }}
    >
      {children}
    </SubStyledTreeItem>
  ) : (
    <MainStyledTreeItem
      selected={true}
      nodeId={nodeId}
      label={label}
      className={classes.item}
      onClick={() => {
        setSelectedItem(nodeId);
      }}
    >
      {children}
    </MainStyledTreeItem>
  );
};

export default SidebarItem;
