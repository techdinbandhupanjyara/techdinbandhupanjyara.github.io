import { Box, IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { profile } from '../data/profile';

function SocialLinks() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
      <Tooltip title="GitHub">
        <IconButton component="a" href={profile.github} target="_blank" rel="noreferrer">
          <GitHubIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="LinkedIn">
        <IconButton component="a" href={profile.linkedin} target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Email">
        <IconButton component="a" href={`mailto:${profile.email}`}>
          <EmailIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default SocialLinks;
