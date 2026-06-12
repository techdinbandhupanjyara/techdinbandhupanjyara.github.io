import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { education } from '../data/education';

function EducationSection() {
  return (
    <Box component="section" id="education" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionHeader title="Education" subtitle="Academic achievements and qualifications." />
        <Grid container spacing={4}>
          {education.map((item) => (
            <Grid item xs={12} md={6} key={item.degree}>
              <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Card sx={{ p: 3, height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {item.degree}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {item.college}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                      {item.year}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.grade}
                    </Typography>
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

export default EducationSection;
