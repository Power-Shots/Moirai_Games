import { createTheme } from '@mui/material/styles';
import { palette } from '@/theme/palette';
import { breakpoints } from '@/theme/breakpoints';

const themeVariables = {
  breakpoints,
  palette,
};

const theme = createTheme(themeVariables);

export default theme;
