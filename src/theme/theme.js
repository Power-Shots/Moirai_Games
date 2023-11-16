import { createTheme  } from '@mui/material/styles';
import { palette } from '@/theme/palette';


const themeVariables = {
  palette
};

const theme = createTheme(themeVariables);

export default theme;
