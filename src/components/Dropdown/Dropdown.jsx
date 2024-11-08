import React, { useCallback, useState } from "react";
import { ClickAwayListener } from "@mui/base";
import SettingsIcon from "@mui/icons-material/Settings";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

/**
 * @typedef {object} className
 * @property {String} [MuiList-root]
 * @property {String} [MuiCollapse-root]
 * @property {String} [MuiListItemButton-root]
 */

import useStyles from "./styles";

export const Dropdown = ({
  renderItem,
  listItem,
  Icons = <SettingsIcon />,
  isShowArrow = true,
  nameDropdown,
  className = "",
  disabled = false,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickAway = () => setOpen(false);

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleItemClick = useCallback(
    (item) => {
      handleClick(!open);
      renderItem(item);
    },
    [handleClick, open, renderItem]
  );

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <List
        className={`${classes.listRoot} ${className && className}`}
        component="nav"
      >
        <ListItemButton onClick={handleClick} disabled={disabled}>
          <ListItemIcon>{Icons}</ListItemIcon>
          <ListItemText primary={nameDropdown} />
          {isShowArrow && (open ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
        <Collapse
          className={classes.collapseRoot}
          in={open}
          timeout="auto"
          unmountOnExit
        >
          {listItem.map((item) => (
            <List key={item.id} component="div" disablePadding>
              <ListItemButton
                selected={item.isActive}
                sx={{ pl: 4 }}
                onClick={() => handleItemClick(item)}
              >
                {item.IconItem && <ListItemIcon>{item.IconItem}</ListItemIcon>}
                <ListItemText primary={item.itemName} />
              </ListItemButton>
            </List>
          ))}
        </Collapse>
      </List>
    </ClickAwayListener>
  );
};
