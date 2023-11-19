import { createTheme } from '@mui/material/styles';
import { palette } from '@/theme/palette';
import { breakpoints } from '@/theme/breakpoints';
import { typography } from '@/theme/typography';

const themeVariables = {
  breakpoints,
  palette,
  typography,
};

const theme = createTheme(themeVariables);

export default theme;
