import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import EducationSection from '../sections/EducationSection';
import ExperienceSection from '../sections/ExperienceSection';
import ProjectsSection from '../sections/ProjectsSection';
import SkillsSection from '../sections/SkillsSection';
import ContactSection from '../sections/ContactSection';

function Home({ themeMode, onThemeToggle }) {
  return (
    <Box>
      <Navbar themeMode={themeMode} onThemeToggle={onThemeToggle} />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </Box>
  );
}

export default Home;
