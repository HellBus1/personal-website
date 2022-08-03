import { Typography, Box, Button, SxProps, Theme } from '@mui/material'
import Container from 'components/Container/Container'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Container>
      <Typography sx={classes.heading}>
        Hi!
      </Typography>

      <Typography sx={classes.name}>
        My name is syubban fakhriya
        <Typography sx={classes.description}>
          I work in Mobile Ecosystem and occasionally write and work in personal projects to record knowledge.
          <br /> Hopefully, I can help you also :).
        </Typography>
      </Typography>

      <Box>
        <Button variant='outlined'>Read the blog</Button>
        <Button variant='outlined' sx={{
          marginX: 3
        }}>See my projects</Button>
        <Button variant='outlined'>About me</Button>
      </Box>
    </Container>
  )
}

const classes: Record<string, SxProps<Theme>> = {
  heading: {
    fontWeight: 600,
    fontSize: '2rem',
  },
  name: {
    fontWeight: 500,
    fontSize: '1.5rem'
  },
  description: {
    fontWeight: 500,
    fontSize: '1.5rem'
  }
};

export default Home
