import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

function AppRouter({ themeMode, onThemeToggle }) {
  return (
    <Routes>
      <Route path="/*" element={<Home themeMode={themeMode} onThemeToggle={onThemeToggle} />} />
    </Routes>
  );
}

export default AppRouter;
