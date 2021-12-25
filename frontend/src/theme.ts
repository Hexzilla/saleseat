import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A lite theme for this app
export const liteTheme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

// A dark theme for this app
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
