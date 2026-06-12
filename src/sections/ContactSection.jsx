import { Box, Card, CardContent, Container, Grid, Link, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import ContactForm from '../components/ContactForm';
import { profile } from '../data/profile';

function ContactSection() {
  return (
    <Box component="section" id="contact" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionHeader title="Contact" subtitle="Get in touch via email, LinkedIn, or GitHub." />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card sx={{ p: 3, height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    Contact Details
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Feel free to reach out for project inquiries, collaboration, or career opportunities.
                  </Typography>
                  <Typography variant="subtitle2" fontWeight={700} gutterBottom>
                    Email
                  </Typography>
                  <Link href={`mailto:${profile.email}`} underline="hover">
                    {profile.email}
                  </Link>
                  <Typography variant="subtitle2" fontWeight={700} gutterBottom sx={{ mt: 2 }}>
                    LinkedIn
                  </Typography>
                  <Link href={profile.linkedin} target="_blank" rel="noreferrer" underline="hover">
                    {profile.linkedin}
                  </Link>
                  <Typography variant="subtitle2" fontWeight={700} gutterBottom sx={{ mt: 2 }}>
                    GitHub
                  </Typography>
                  <Link href={profile.github} target="_blank" rel="noreferrer" underline="hover">
                    {profile.github}
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <ContactForm />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactSection;
