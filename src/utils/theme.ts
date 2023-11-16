import { createTheme } from '@suid/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B4960',
    },
    secondary: {
      main: '#468DB5',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'underline',
        },
      },
      defaultProps: {
        sx: {
          borderRadius: 10,
        },
      },
    },
  },
});

export default theme;
