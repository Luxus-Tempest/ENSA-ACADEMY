import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { comCss } from './ComponentsCss'
import img from "../image/course-react.jpg"


const Mantor = () => {
    const classes = comCss();
    return (
        <Box className={classes.mantor}>
                <img src={img} alt="" className={classes.img_responsive} />
            <Typography variant="h4" component="h4" className={classes.mantor_title}>
                Nazmul Hossen
            </Typography>
            <Typography variant="h5" component="p" className={classes.mantor_subtitle}>
                Web Developer
            </Typography>
            <Box className={classes.mantor_sosial_media}>
                <Link to="/">
                <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link to="/">
                <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link to="/">
                <i className="fa-brands fa-youtube"></i>
                </Link>
                <Link to="/">
                <i className="fa-brands fa-linkedin-in"></i>
                </Link>
            </Box>
        </Box>
    )
}

export default Mantor
