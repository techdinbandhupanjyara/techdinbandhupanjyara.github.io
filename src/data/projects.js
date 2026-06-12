import projectApp from '../assets/project-app.svg';
import projectDashboard from '../assets/project-dashboard.svg';

export const projects = [
  {
    image: projectApp,
    name: 'Project Tracker',
    description: 'A task management dashboard with interactive charts, filters, and collaborative features.',
    technologies: ['React', 'TypeScript', 'MUI', 'ASP.NET Core', 'SQL Server'],
    github: 'https://github.com/techdinbandhupanjyara/project-tracker',
    live: 'https://techdinbandhupanjyara.github.io/portfolio'
  },
  {
    image: projectDashboard,
    name: 'Cloud Portfolio',
    description: 'A modern portfolio website with theme support, smooth navigation, and responsive project cards.',
    technologies: ['React', 'MUI', 'Framer Motion', 'Azure'],
    github: 'https://github.com/techdinbandhupanjyara/cloud-portfolio',
    live: 'https://techdinbandhupanjyara.github.io/portfolio'
  }
];
