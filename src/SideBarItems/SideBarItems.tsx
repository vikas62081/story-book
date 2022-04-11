import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from 'react-router-dom';
import ListItemText from '@mui/material/ListItemText';
import { useStyles } from '../global.styles';
import { ItemProps } from '../SideBar/SideBar';

export const SideBarItem = (props: any) => {
  const classes = useStyles();
  const [active, setActive] = useState(-1);
  const handleChange = (index: number) => {
    setActive(index);
  };
  return (
    <List data-testid="To-be-Active">
      {props?.SideBarItems?.map((SideBarItem: ItemProps, index: number) => (
        <ListItem
          button
          color="primary"
          key={SideBarItem.title}
          className={
            active === index ? classes.selected : classes.iconBackground
          }
          component={Link}
          onClick={() => handleChange(index)}
          to={SideBarItem.to}
          data-testid="test"
        >
          <Tooltip title={SideBarItem.title}>
            <ListItemIcon color="primary">{SideBarItem.icon}</ListItemIcon>
          </Tooltip>
          <ListItemText primary={SideBarItem.title} />
        </ListItem>
      ))}
    </List>
  );
};
