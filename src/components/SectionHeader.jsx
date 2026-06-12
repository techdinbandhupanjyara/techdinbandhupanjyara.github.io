import { Box, Divider, Typography } from '@mui/material';

function SectionHeader({ title, subtitle, sx }) {
  return (
    <Box sx={{ mb: 4, ...sx }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body1" color="text.secondary" paragraph>
          {subtitle}
        </Typography>
      )}
      <Divider sx={{ width: 80, borderBottomWidth: 3, bgcolor: 'primary.main', mb: 1 }} />
    </Box>
  );
}

export default SectionHeader;
