import { createTheme } from '@mui/material/styles';

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#4f46e5'
      },
      secondary: {
        main: '#22c55e'
      },
      background: {
        default: mode === 'light' ? '#f4f6ff' : '#090b16',
        paper: mode === 'light' ? '#ffffff' : '#121827'
      }
    },
    typography: {
      fontFamily: ['Inter', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(',')
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 20
          }
        }
      }
    }
  });

export { getTheme };
