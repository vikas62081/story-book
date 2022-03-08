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
      '&:hover': {
        background: 'rgba(63, 186, 141, 0.3)',
      },
    },
    iconBackground: {
      background: '#FFFFFF',
      '&:hover': {
        background: 'rgba(63, 186, 141, 0.3)',
      },
    },
  })
);
