import { createTheme } from '@mui/material/styles';
import { palette } from '@/theme/palette';
import { breakpoints } from '@/theme/breakpoints';
import { typography } from '@/theme/typography';
import { MuiButton } from '@/theme/overrides/MuiButton';

const themeVariables = {
  breakpoints,
  palette,
  typography,
  components: {
    MuiButton,
  },
};

const theme = createTheme(themeVariables);

export default theme;
