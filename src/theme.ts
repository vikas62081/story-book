import { createTheme } from '@mui/material/styles';
import {  butter, firefly, flamingo, mint,  } from './colors';

export const theme = createTheme({
  components: {
    // Name of the component
    MuiListItemIcon: { styleOverrides: { root: { color: "#0C2744" } } },
    MuiListItem: {
      styleOverrides: {
        root: {// background: "red",
          color: "#0C2744",
          '&:hover': {
            background: "#E2E5E9"
          },
        },
      },
    },
  },
  palette: {
    primary: {
      light: '#C5EADD',
      main: '#35b183', //#C5EADD
      dark: '#58ffac',
      contrastText: '#fff',
    },
    secondary: {
      light: '#66e0ff',
      main: '#005065',
      dark: '#08a3ff',
      contrastText: '#fff',
    },
    success: {
      main: mint[500],
    },
    error: {
      main:flamingo[500]
    },
    info: {
      main: firefly[500]
    },
    warning: {
      main:butter[500]
    }
  },
});
