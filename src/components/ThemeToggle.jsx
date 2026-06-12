import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function ThemeToggle({ themeMode, onToggle }) {
  return (
    <IconButton color="inherit" onClick={onToggle} aria-label="toggle theme">
      {themeMode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}

export default ThemeToggle;
