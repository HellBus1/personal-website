import { Typography, Box, Button, SxProps, Theme } from "@mui/material";
import React, { ReactElement } from "react";

const AboutSC = (): ReactElement => {
  return <Box sx={{
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 20
  }}>
    <Typography sx={classes.hiText}>
      Hi!
    </Typography>

    <Typography sx={classes.name}>
      My name is Syubban Fakhriya
    </Typography>

    <Typography sx={classes.description}>
      I work in Mobile Ecosystem and occasionally write and work in personal projects to record knowledge. Hopefully, I can help you also :).
    </Typography>

    <Box>
      <Button variant='outlined' sx={{ marginRight: 2, fontSize: '1rem' }}>See my projects</Button>
      <Button variant='outlined' sx={{ fontSize: '1rem' }}>Learn more About me</Button>
    </Box>

    <Box>

    </Box>
  </Box>;
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
    marginBottom: 4
  }
};

export default AboutSC;