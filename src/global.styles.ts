import { makeStyles, createStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    footerDetails: {
      bottom: 0,
      textAlign: 'center',
      paddingBottom: 10,
      fontSize: 'smaller',
      display: "flex",
      justifyContent: 'space-evenly',
    },
    hide: {
      visibility: "hidden"
    },
    iconBackground: {
      background: '#FFFFFF',
      '&:hover': {
        background: 'rgba(226, 229, 233, 1)',
      },
    },
    selected: {
      background: "rgba(63, 186, 141, 0.3)",
      '&:hover': {
        background: 'rgba(63, 186, 141, 0.3)',
      },
    },
    imageIcon: {
      height: '100%',
    },
    iconRoot: {
      textAlign: 'center',
    },

  })
);
