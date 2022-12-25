import { Box, SxProps, Theme, Typography } from "@mui/material";
import Container from "components/Container/Container";
import { NextPage } from "next";

const Snippet: NextPage = () => {
  return <Container>
    <Box sx={classes.container}>
      <Typography sx={classes.title}>
        Snippets
      </Typography>
      <Typography sx={classes.subtitle}>
        Showcase of my works
      </Typography>
    </Box>
  </Container>;
};

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

export default Snippet;