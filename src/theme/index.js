// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0c4a8e',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#fff',
    },
    custompalette: {
      primary: '#000',
      secondary: 'red',
    },
  },
  typography: {   
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },   
  },
  spacing: 4,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px',
          borderRadius: '8px',
          textTransform: 'none',
          variants: [
            {
              props: { className: 'custom-btn'},
              style: {
                padding: '5px',
              },
            },
          ],
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f4f4f4', // Set body background color
          fontFamily: '"Roboto", sans-serif', // Set global font
        },
      },
    },
  },
});

export default theme;
