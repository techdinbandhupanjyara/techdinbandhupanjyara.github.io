import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { profile } from '../data/profile';

function ResumeButton() {
  return (
    <Button
      component="a"
      href={profile.resume}
      target="_blank"
      rel="noreferrer"
      variant="contained"
      startIcon={<DownloadIcon />}
      sx={{ borderRadius: 3 }}
    >
      Download Resume
    </Button>
  );
}

export default ResumeButton;
