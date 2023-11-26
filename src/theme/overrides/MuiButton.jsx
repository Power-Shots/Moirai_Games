import { palette } from '@/theme/palette';

export const MuiButton = {
  styleOverrides: {
    root: {
      color: palette.text.white,
      transition: 'all 0.2s linear',
      borderRadius: '3px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none',
      },
    },
    contained: {
      background: palette.text.black,
      border: `3px solid ${palette.background.pink}`,
      '&:hover': {
        background: palette.background.pink,
      },
      ':disabled': {
        color: palette.background.lightGrey,
        background: palette.text.black,
        border: `3px solid ${palette.background.lightGrey}`,
      },
    },

    sizeLarge: {
      height: 61,
      minWidth: 140,
      padding: '0 40px',
    },
    sizeMedium: {
      height: 41,
    },
    sizeSmall: {
      height: 33,
    },
  },
};
