import { createTheme } from '@mui/material/styles';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgba(255, 255, 255, 1)',
      light: 'rgba(255, 255, 255, 0.87)',
      dark: 'rgba(194, 194, 194, 1)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    secondary: {
      main: 'rgba(179, 42, 249, 1)',
      light: 'rgba(179, 42, 249, 0.87)',
      dark: 'rgba(125, 0, 197, 1)',
      contrastText: 'rgba(255, 255, 255, 0.87)',
    },
    info: {
      main: 'rgba(66, 66, 66, 1)',
      light: 'rgba(66, 66, 66, 0.87)',
      dark: 'rgba(0, 0, 0, 1)',
      contrastText: '#rgba(255, 255, 255, 0.87)',
    },
    background: {
      default: 'rgba(0, 0, 0, 1)',
      paper: 'rgba(0, 0, 0, 0.87)',
    },
    error: {
      main: '#D32F2F',
      light: '#EF5350',
      dark: '#C62828',
      contrastText: 'rgba(255, 255, 255, 0.87)',
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    htmlFontSize: 18,
    h1: {
      fontWeight: 'bold',
    },
    h2: {
      fontWeight: 'bold',
    },
    h3: {
      fontWeight: 'bold',
    },
    h4: {
      fontWeight: 'bold',
    },
    h5: {
      fontWeight: 'bold',
    },
    h6: {
      fontWeight: 'bold',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          wordWrap: 'normal',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          textTransform: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem',
        },
      },
      defaultProps: {
        variant: 'contained',
      },
    },
    MuiIconButton: {
      defaultProps: {
        color: 'inherit',
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
          borderRadius: '8px',
        },
      },
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
    },
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
        variant: 'outlined',
      },
    },
    MuiSelect: {
      defaultProps: {
        fullWidth: true,
        variant: 'outlined',
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#27c5f3',
          textDecoration: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid rgba(255, 255, 255, 0.12)`,
        },
      },
    },
  },
});

export default theme;
