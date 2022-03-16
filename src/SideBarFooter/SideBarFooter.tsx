import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from '@mui/material';
import { MycoiLogo } from '../IconCompoenent/MycoiLogo';
import { SvgIcon } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import { useStyles } from '../global.styles';

export const SideBarFooter = (props: any) => {
  const classes = useStyles();
  return (
    <div>
      <ListItem button className={classes.iconBackground}>
        <ListItemIcon>
          <SvgIcon component={MycoiLogo} />
        </ListItemIcon>
        <ListItemText secondary="Powered by myCOI" />
      </ListItem>

      <div className={props.open ? classes.footerDetails : classes.hide}>
        <Link>Privacy Policy</Link>
        <Link> Terms & conditions</Link>
      </div>

    </div>
  );
};
