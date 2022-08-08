import { Box, SxProps, Theme, Typography } from "@mui/material";
import React, { ReactElement } from "react";

const BlogSC = (): ReactElement => {
  return <Box sx={{
    paddingLeft: 10,
    // paddingTop: 30,
    paddingBottom: 10
  }}>
    <Typography sx={classes.title}>
      Featured Posts
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

export default BlogSC;