import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
];

function Navbar({ themeMode, onThemeToggle }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleToggle = () => setDrawerOpen((prev) => !prev);

  const drawerList = (
    <Box sx={{ width: 240, p: 2 }} role="presentation" onClick={handleToggle}>
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component="a" href={item.href}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Tech Portfolio
        </Typography>
        {isMobile ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeToggle themeMode={themeMode} onToggle={onThemeToggle} />
            <IconButton onClick={handleToggle} color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {navLinks.map((item) => (
              <Button key={item.label} href={item.href} color="inherit">
                {item.label}
              </Button>
            ))}
            <ThemeToggle themeMode={themeMode} onToggle={onThemeToggle} />
          </Box>
        )}
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleToggle}>
        {drawerList}
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
