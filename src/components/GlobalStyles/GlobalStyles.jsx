import Global from '@mui/material/GlobalStyles';
import { palette } from '@/theme/palette';

const GlobalStyles = (
  <Global
    styles={{
      '*': {
        fontFamily: `Montserrat, sans-serif`,
        boxSizing: 'border-box',
      },
      html: {
        fontSize: '24px',
        color: palette.text.white,
      },
      a: {
        color: palette.text.blue,
      },

      body: {
        background: palette.background.default,
        '.modal': {
          zIndex: 2000,
        },
      },
      '&::-webkit-scrollbar': {
        width: '3px',
        height: '3px',
      },
      '&::-webkit-scrollbar-track': {
        background: palette.background.default,
      },
      '&::-webkit-scrollbar-thumb': {
        background: palette.text.blue,
        borderRadius: '30px',
      },
    }}
  />
);

export default GlobalStyles;
