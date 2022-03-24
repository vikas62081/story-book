import { createTheme } from '@mui/material/styles';

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
    // error: {
    //   main:"#005065",
    //   light:"#aaaaaa"
    // }
  },
});
