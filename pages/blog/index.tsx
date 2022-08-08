import { Box, SxProps, Theme, Typography } from "@mui/material";
import Container from "components/Container/Container";
import { NextPage } from "next";

const Blog: NextPage = () => {
  return <Container>
    <Box sx={classes.container}>
      <Typography sx={classes.title}>
        Blogs
      </Typography>
      <Typography sx={classes.subtitle}>
        All about tutorials, toughts, trend in technologies
      </Typography>
    </Box>;
  </Container>;
}

const classes: Record<string, SxProps<Theme>> = {
  container: {
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 10
  },
  title: {

  },
  subtitle: {

  }
};

export default Blog;