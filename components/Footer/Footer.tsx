import { Box, SxProps, Theme, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconPopover from './IconPopover';

const Footer = (): ReactElement => {
  const icons = [
    <EmailIcon sx={classes.icon} />,
    <GitHubIcon sx={classes.smallIcon} />,
    <LinkedInIcon sx={classes.icon} />,
    <InstagramIcon sx={classes.icon} />,
  ];

  return <footer style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15
  }}>
    <Typography sx={classes.title}>
      Reach me out
    </Typography>
    <Box sx={classes.socials}>
      {icons.map((item, index) => {
        return <Box key={index} sx={{ mx: 1 }}>
          <IconPopover>
            {item}
          </IconPopover>
        </Box>;
      })}
    </Box>
    <Typography sx={classes.copyright}>
      Syubban Fakhriya 2022
    </Typography>
  </footer>;
};

const classes: Record<string, SxProps<Theme>> = {
  icon: {
    width: 32,
    height: 32,
    "&:hover": { color: "blue" }
  },
  smallIcon: {
    width: 28,
    height: 28,
    "&:hover": { color: "blue" }
  },
  title: {
    fontSize: 17,
    fontWeight: 600
  },
  copyright: {
    fontSize: 16
  },
  socials: {
    display: 'flex',
    alignItems: 'center',
    mb: 1.5,
    mt: 0.5
  }
};

export default Footer;