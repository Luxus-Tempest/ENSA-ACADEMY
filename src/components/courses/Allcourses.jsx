import { Box, Grid, Pagination, Stack } from '@mui/material';
import React from 'react'
import Slidercourse from '../Slidercourse';
import { comCss } from '../ComponentsCss'

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Allcourses = () => {
  const classes = comCss();
  return (
    <>
      <Grid container>
        {data.map((index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Slidercourse />
          </Grid>
        ))}
        <Box className={classes.pagination}>
          <Stack spacing={2}>
            <Pagination count={6} variant="outlined" shape="rounded" />
          </Stack>
        </Box>
      </Grid>
    </>
  )
}

export default Allcourses
