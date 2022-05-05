import { createTheme } from '@mui/material/styles';
import {COLORS} from './colors'
export const theme = createTheme({
  components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         '&:focus': {
  //           outlineStyle: 'solid',
  //           outlineColor: sherpa['A700'],
  //           outlineWidth: 'thin',
  //         },
  //       },
  //     },
  //   },
    MuiListItemIcon: { styleOverrides: { root: { color: '#0C2744' } } },
    MuiListItem: {
      styleOverrides: {
        root: {
          color: COLORS.FIREFLY[500],
          '&:hover': {
            background: COLORS.FIREFLY[50],
            color: COLORS.FIREFLY[500],
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: COLORS.FIREFLY[500],
    },
    secondary: {
      main: COLORS.SLATE[200],
    },
    success: {
      main: COLORS.MINT[200],
    },
    error: {
      main: COLORS.FIREFLY[200],
    },
    info: {
      main: COLORS.FIREFLY[500],
    },
    warning: {
      main: COLORS.BUTTER[500],
    },
  },
  typography: {
    fontFamily: [
      'SF Pro Text',
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
  },
});
