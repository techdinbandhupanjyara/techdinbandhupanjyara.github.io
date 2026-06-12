import { Box, Card, CardContent, Container, Grid, Typography, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/profile';

function AboutSection() {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionHeader title="About Me" subtitle="A concise snapshot of my skills, values, and professional focus." />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card sx={{ p: 3, height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    Personal Information
                  </Typography>
                  <List disablePadding>
                    <ListItem disableGutters>
                      <ListItemText primary="Location" secondary={profile.location} />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText primary="Email" secondary={profile.email} />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText primary="Phone" secondary={profile.phone} />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.12 }}>
              <Card sx={{ p: 3, height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    Career Summary
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    I deliver full stack solutions that combine polished frontends, resilient backends, and efficient cloud deployment. My approach is driven by clarity, performance, and strong collaboration.
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    I enjoy building applications that empower teams and users, with a focus on maintainable code, scalable systems, and modern UI experiences.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutSection;
