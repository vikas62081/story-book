import { createTheme } from '@mui/material/styles';
import {  butter, firefly, flamingo, mint, sherpa,  } from './colors';

export const theme = createTheme({
  components: {
    // Name of the component
    MuiListItemIcon: { styleOverrides: { root: { color: "#0C2744" } } },
    MuiListItem: {
      styleOverrides: {
        root: {// background: "red",
          color: firefly[500],
          '&:hover': {
            background: firefly[50], color: firefly[500],
          },
        },
      },
    },
  },
  palette: {
    primary: {
      // light: '#C5EADD',
      main: mint[500], //#C5EADD
      // dark: '#58ffac',
      // contrastText: '#fff',
    },
    secondary: {
      main: sherpa[500],
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
  }, typography: {
    fontFamily: [ 'SF Pro Text',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
});
