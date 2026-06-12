import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 2, width: '100%', maxWidth: 540 }}>
      <TextField label="Name" name="name" required fullWidth />
      <TextField label="Email" name="email" type="email" required fullWidth />
      <TextField label="Message" name="message" required multiline rows={5} fullWidth />
      <Button type="submit" variant="contained" size="large">
        Send Message
      </Button>
      {submitted && (
        <Typography variant="body2" color="success.main">
          Thank you! Your message is ready to send. Use your email client to follow up.
        </Typography>
      )}
    </Box>
  );
}

export default ContactForm;
