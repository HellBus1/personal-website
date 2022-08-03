import Typography from '@mui/material/Typography';

import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';

import type { ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Roboto',
      'Open Sans',
      'sans-serif',
      'Segoe UI',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
    ].join(','),
    button: {
      textTransform: 'none',
    },
    h4: {
      fontSize: '2.25rem',
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: '#258F91',
    },
    secondary: {
      main: '#1D076D',
    },
    background: {
      default: '#ffffff',
    },
    error: {
      main: '#be3c3c',
    },
  },
  spacing: 8,
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        dashed: {
          backgroundImage: '',
          background: '#f2f2f2',
          animation: '',
        },
      },
    },
  },
};

export const theme = createTheme(themeOptions);

export const LinkText = styled(Typography)({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  '&:hover': {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
});
