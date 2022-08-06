import { Typography, Box, Button, SxProps, Theme, Grid } from '@mui/material'
import Container from 'components/Container/Container'
import type { NextPage } from 'next'
import AboutSC from './components/sections/AboutSC'
import BlogSC from './components/sections/BlogSC'
import ProjectSC from './components/sections/ProjectSC'

const Home: NextPage = () => {
  return (
    <Container>
      <AboutSC />
      <ProjectSC />
      <BlogSC />
    </Container>
  )
}

export default Home
