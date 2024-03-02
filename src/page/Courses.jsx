import { Box, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Pagebanner from '../components/Pagebanner'
import { pageCss } from './PageCss'
import Fliter from '../components/courses/Filter'
import Allcourses from '../components/courses/Allcourses'

const Courses = () => {
  const classes = pageCss();
  return (
    <>
     <Pagebanner
     title="Course"
     />
     <Box className={classes.course_section}>
      <Container maxWidth="lg">
      <Typography variant="h3" component="h3" className={classes.course_count_title}>
        Showing 1–9 of 32 courses
      </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <Fliter />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Allcourses />
          </Grid>
        </Grid>
      </Container>
     </Box>
    </>
  )
}

export default Courses
