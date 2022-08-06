import { Box, SxProps, Theme, Typography } from "@mui/material";
import React, { ReactElement } from "react";

const ProjectSC = (): ReactElement => {
  return <Box sx={{
    paddingLeft: 10,
    paddingTop: 5
  }}>
    <Typography sx={classes.title}>
      Featured Projects
    </Typography>
  </Box>;
};

const classes: Record<string, SxProps<Theme>> = {
  title: {
    fontWeight: 600,
    fontSize: '2rem',
    lineHeight: 1
  },
};

export default ProjectSC;