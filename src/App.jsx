import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import AppRouter from './routes/AppRouter';
import { useMemo, useState, useEffect } from 'react';
import { getTheme } from './theme/theme';

function App() {
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    const storedMode = window.localStorage.getItem('portfolio-theme');
    setMode(storedMode === 'light' ? 'light' : 'dark');
  }, []);

  const theme = useMemo(() => getTheme(mode), [mode]);

  const handleThemeToggle = () => {
    const nextMode = mode === 'light' ? 'dark' : 'light';
    setMode(nextMode);
    window.localStorage.setItem('portfolio-theme', nextMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
        <AppRouter themeMode={mode} onThemeToggle={handleThemeToggle} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
