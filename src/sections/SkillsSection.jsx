import { Box, Card, CardContent, Chip, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { skills } from '../data/skills';

function SkillsSection() {
  const categories = [
    { label: 'Frontend Skills', data: skills.frontend },
    { label: 'Backend Skills', data: skills.backend },
    { label: 'Database Skills', data: skills.database },
    { label: 'Cloud / Tools', data: skills.cloud }
  ];

  return (
    <Box component="section" id="skills" sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <SectionHeader title="Skills" subtitle="Technology strengths organized by area." />
        <Grid container spacing={4}>
          {categories.map((category) => (
            <Grid item xs={12} md={6} key={category.label}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <Card sx={{ p: 3, height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {category.label}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                      {category.data.map((skill) => (
                        <Chip key={skill} label={skill} color="primary" variant="outlined" />
                      ))}
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

export default SkillsSection;
