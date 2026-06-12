import { Box, Card, CardContent, CardMedia, Chip, Container, Grid, Link, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../data/projects';

function ProjectsSection() {
  return (
    <Box component="section" id="projects" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionHeader title="Projects" subtitle="Featured applications built using modern technologies." />
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} key={project.name}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia component="img" image={project.image} alt={project.name} sx={{ height: 220, objectFit: 'cover' }} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.technologies.map((tech) => (
                        <Chip key={tech} label={tech} variant="outlined" />
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                      <Button component={Link} href={project.github} target="_blank" rel="noreferrer" variant="outlined" size="small">
                        GitHub
                      </Button>
                      <Button component={Link} href={project.live} target="_blank" rel="noreferrer" variant="contained" size="small">
                        Live Demo
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ProjectsSection;
