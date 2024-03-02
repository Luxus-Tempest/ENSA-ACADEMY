import { Avatar, Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { comCss } from './ComponentsCss'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import img from "../image/course-react.jpg"
import avaterimg from "../image/avatar-1-100x100.jpg"


const Slidercourse = () => {
  const classes = comCss();
  return (
    <Box className={classes.Slidercourse}>
      <Link to="/singleCourse">
        <img src={img} alt="" className={classes.img_responsive} />
      </Link>
      <Typography variant="h4" component="h4" className={classes.slider_title}>
        <Link to="/singleCourse">The Python Course: build web application</Link>
      </Typography>
      <Typography variant="h5" component="p" className={classes.slider_time}>
        <AccessTimeOutlinedIcon /> 2 hours 46 minutes
      </Typography>
      <Typography variant="h5" component="p" className={classes.slider_label}>
        <SignalCellularAltOutlinedIcon />  Expert
      </Typography>
      <Box className={classes.slider_Rating}>
        <StarOutlinedIcon />
        <StarOutlinedIcon />
        <StarOutlinedIcon />
        <StarOutlinedIcon />
        <StarHalfOutlinedIcon />
        <span style={{ color: "#FFAA46", marginLeft: "5px" }}>4.8</span>
        <span style={{ color: "#85848b", marginLeft: "5px" }}>(26)</span>
      </Box>
      <Box className={classes.divider}></Box>
      <Box className={classes.slider_bottom_section}>
        <Box className={classes.slider_avater}>
          <img alt="Remy Sharp" src={avaterimg} className={classes.img_avater} />
          <span>Morris Mccoy</span>
        </Box>
        <Box className={classes.slider_bookmark}>
          <IconButton>
            <BookmarkBorderIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default Slidercourse