import { makeStyles, createStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',

      // padding: theme.spacing(0, 1),
      // // necessary for content to be below app bar
      // ...theme.mixins.toolbar,
    },
    arrowstyle: {
      marginRight: '-20px',
      position: 'fixed',
      background: '#FFFFFF',
      border: "1px #f2f2f2 solid",
      borderRadius: 5,

    },
    footerContainer: {
      textAlign: 'center',
      position: 'absolute',
      bottom: 0,
    },
  })
);
