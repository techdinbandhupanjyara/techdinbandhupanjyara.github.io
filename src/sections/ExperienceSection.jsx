import { Box, Card, CardContent, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { experience } from '../data/experience';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab';

function ExperienceSection() {
  return (
    <Box component="section" id="experience" sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <SectionHeader title="Work Experience" subtitle="Professional roles, responsibilities, and impact." />
        <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Timeline position="alternate">
            {experience.map((item, index) => (
              <TimelineItem key={item.company}>
                <TimelineOppositeContent sx={{ m: 'auto 0', display: { xs: 'none', md: 'block' } }}>
                  <Typography variant="body2" color="text.secondary">
                    {item.duration}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  {index < experience.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Card sx={{ p: 3, borderRadius: 3 }}>
                    <CardContent>
                      <Typography variant="h6" fontWeight={700} gutterBottom>
                        {item.role}
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                        {item.company}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {item.duration}
                      </Typography>
                      {item.responsibilities.map((line) => (
                        <Typography key={line} variant="body2" paragraph>
                          • {line}
                        </Typography>
                      ))}
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </Container>
    </Box>
  );
}

export default ExperienceSection;
