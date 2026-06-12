import { Box, Container, Link, Typography } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ py: 4, borderTop: '1px solid rgba(255,255,255,0.08)', mt: 10 }}>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Built with React, Vite, MUI, and deployed with GitHub Pages.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          © {new Date().getFullYear()} Tech Dinbandhupanjyara. All rights reserved.
        </Typography>
        <Link href="#hero" underline="hover" sx={{ display: 'block', mt: 1, color: 'text.secondary' }}>
          Back to top
        </Link>
      </Container>
    </Box>
  );
}

export default Footer;
