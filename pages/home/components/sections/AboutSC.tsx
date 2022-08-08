import { Grid, Typography, Box, Button, SxProps, Theme } from "@mui/material";
import React, { ReactElement } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FeedIcon from '@mui/icons-material/Feed';
import Link from "next/link";

const AboutSC = (): ReactElement => {
  const icons = [
    {
      'title': 'Resume',
      'icon': <FeedIcon sx={{
        width: 32,
        height: 32,
      }} />
    },
    {
      'title': 'HellBus1',
      'icon': <GitHubIcon sx={classes.smallIcon} />
    },
    {
      'title': 'syubban',
      'icon': <LinkedInIcon sx={classes.icon} />
    },
  ];

  return <Box sx={{
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 10
  }}>
    <Typography sx={classes.hiText}>
      Hi!
    </Typography>

    <Typography sx={classes.name}>
      My name is Syubban Fakhriya
    </Typography>

    <Grid container>
      <Grid item xs={8}>
        <Typography sx={classes.description}>
          I work in Mobile Ecosystem and occasionally write and work in personal projects to record my knowledge.
        </Typography>
      </Grid>
    </Grid>

    <Box>
      <Button variant='outlined' sx={{ marginRight: 2, fontSize: '1rem' }}>See my projects</Button>
      <Button variant='outlined' sx={{ fontSize: '1rem' }}>Learn more About me</Button>
    </Box>

    <Box sx={{ display: 'flex', mt: 3 }}>
      {icons.map((item, index) => {
        return <Link href={''}>
          <Box sx={{
            display: 'flex',
            mx: (index == 1) ? 2.5 : 0,
            alignItems: 'center',
            "&:hover": { color: 'blue', cursor: 'default' }
          }}>
            {item['icon']}
            <Typography sx={{ ml: 0.5 }}>
              {item['title']}
            </Typography>
          </Box>
        </Link>
      })}
    </Box>
  </Box>
};

const classes: Record<string, SxProps<Theme>> = {
  hiText: {
    fontWeight: 600,
    fontSize: '2rem',
    lineHeight: 1
  },
  name: {
    fontWeight: 700,
    fontSize: '2.2rem',
    lineHeight: 1
  },
  description: {
    fontWeight: 400,
    fontSize: '1.3rem',
    marginTop: 2,
    marginBottom: 4,
  },
};

export default AboutSC;