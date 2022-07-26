import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    h9: {
      fontSize: '2.5rem',
      fontWeight: '700'
    }
  }
  // overrides: {
  //   MuiButton: {
  //     root: {
  //       margin: '5px',
  //     },
  //   },
  // },
});

export default theme;
