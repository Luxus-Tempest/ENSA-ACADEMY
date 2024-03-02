import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { comCss } from '../ComponentsCss'

const Filter = () => {
  const classes = comCss();
  return (
    <Box className={classes.course_filter}>
      <Typography variant="h3" component="h3" className={classes.filter_title}>
        Filter
      </Typography>
      <Box className={classes.divider}></Box>
      <Box className={classes.filter_category}>
        <Typography variant="h3" component="h3" className={classes.filter_catagory_title}>
          CATEGORY
        </Typography>
        <Box className={classes.filter_category_box}>
          <Link to="/" className={classes.filter_category_link}>All</Link>
          <Link to="/" className={classes.filter_category_link}>Angular</Link>
          <Link to="/" className={classes.filter_category_link}>Bootstrap</Link>
          <Link to="/" className={classes.filter_category_link}>CSS3</Link>
          <Link to="/" className={classes.filter_category_link}>GatsBy</Link>
          <Link to="/" className={classes.filter_category_link}>GraphQL</Link>
          <Link to="/" className={classes.filter_category_link}>Javascript</Link>
          <Link to="/" className={classes.filter_category_link}>Python</Link>
          <Link to="/" className={classes.filter_category_link}>React</Link>
          <Link to="/" className={classes.filter_category_link}>WordPress</Link>
        </Box>
      </Box>
      <Box className={classes.divider}></Box>
      <Box className={classes.filter_category}>
        <Typography variant="h3" component="h3" className={classes.filter_catagory_title}>
        LEVEL
        </Typography>
        <Box className={classes.filter_category_box}>
          <Link to="/" className={classes.filter_category_link}>Beginner</Link>
          <Link to="/" className={classes.filter_category_link}>Intermediate</Link>
          <Link to="/" className={classes.filter_category_link}>Expert</Link>
        </Box>
      </Box>

    </Box>
  )
}

export default Filter
