import { Box, Button, Card, CardContent, Container, Grid, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';
import ResumeButton from '../components/ResumeButton';
import profileIllustration from '../assets/profile.svg';
import { profile } from '../data/profile';

function HeroSection() {
  return (
    <Box component="section" id="hero" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Card sx={{ p: { xs: 3, md: 4 }, boxShadow: 8, overflow: 'hidden' }}>
          <CardContent>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <Typography variant="overline" color="primary" fontWeight={700} gutterBottom>
                    Welcome
                  </Typography>
                  <Typography variant="h3" fontWeight={800} gutterBottom>
                    {profile.name}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" paragraph>
                    {profile.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {profile.introduction}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
                    <ResumeButton />
                    <Button component="a" href={profile.github} target="_blank" rel="noreferrer" variant="outlined" sx={{ borderRadius: 3 }}>
                      View GitHub
                    </Button>
                  </Box>
                  <SocialLinks />
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Avatar
                      src={profileIllustration}
                      alt="Profile"
                      sx={{ width: 300, height: 300, boxShadow: 12, border: '4px solid', borderColor: 'primary.main' }}
                    />
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default HeroSection;
