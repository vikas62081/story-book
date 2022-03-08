import React, { useState } from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
//import { Link } from 'react-router-dom';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useStyles } from './SideBar.styles';

const drawerWidth = 240;
export interface SideBarProps {
  checked: boolean;
  SideBarItems: [title: string, icon: any, to: string];
}
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export const SideBar = ({ checked, SideBarItems }: SideBarProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(checked);

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={open}>
        <List>
          {SideBarItems.map((SideBarItem) => (
            <ListItem
              // button
              key={SideBarItem.title}
              className={classes.iconBackground}
            //component={Link}
            // to={SideBarItem.to}
            >
              <Tooltip title={SideBarItem.title}>
                <ListItemIcon color="primary">{SideBarItem.icon}</ListItemIcon>
              </Tooltip>
              <ListItemText primary={SideBarItem.title} />
            </ListItem>
          ))}
        </List>
        <span className={classes.toolbar}>
          <IconButton
            className={classes.arrowstyle}
            onClick={handleDrawerClose}
          >
            {open ? (
              <ChevronRightIcon color="primary" />
            ) : (
              <ChevronLeftIcon color="primary" />
            )}
          </IconButton>
        </span>
        <Divider />
      </Drawer>
    </Box>
  );
};
