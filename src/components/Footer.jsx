import { Box, Container, Grid, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { comCss } from './ComponentsCss'
import { Link } from 'react-router-dom'
import logo from '../image/logo.svg'
import playstore from '../image/playstore.webp'
import appstore from '../image/appstore.webp'
import facebook from '../image/facebook.svg'
import linkedin from '../image/linkedin.svg'
import youtube from '../image/youtube.svg'
import instagram from '../image/instagram.svg'

const Footer = () => {
  const classes = comCss();
  return (
    <Box className={classes.footer}>
      <Container maxWidth="lg">
        <Box className={classes.footer_content}>
          <Grid container spacing={{md:2,lg:4}}>
            <Grid item md={4} sm={6} xs={12}>
              <Box className={classes.footer_1}>
                <Link to="/">
                  <img src={logo} alt="logo" className={classes.footer_logo} />
                </Link>
                <Typography variant="h5" component="h5">
                  Download Our Mobile App
                </Typography>
                <Box className={classes.footer_1_app_stor}>
                  <Link to="/">
                    <img src={playstore} alt="logo" className={classes.img_responsive} />
                  </Link>
                  <Link to="/">
                    <img src={appstore} alt="logo" className={classes.img_responsive} />
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item md={2.5} sm={6} xs={12}>
              <Box className={classes.footer_2}>
                <Typography variant="h3" component="h3" className={classes.footer_title}>
                  Company
                </Typography>
                <Link to="/" className={`${classes.nav_link} ${classes.footer_link}`}>Career</Link>
                <Link to="/privacypolicy" className={`${classes.nav_link} ${classes.footer_link}`}>Privacy policy</Link>
                <Link to="/" className={`${classes.nav_link} ${classes.footer_link}`}>Become an Affiliate</Link>
                <Link to="/" className={`${classes.nav_link} ${classes.footer_link}`}>Refund policy</Link>
              </Box>
            </Grid>
            <Grid item md={2.5} sm={6} xs={12}>
              <Box className={classes.footer_3}>
                <Typography variant="h3" component="h3" className={classes.footer_title}>
                  Others
                </Typography>
                <Link to="/faq" className={`${classes.nav_link} ${classes.footer_link}`}>Faq</Link>
                <Link to="/" className={`${classes.nav_link} ${classes.footer_link}`}>Notes and Guides</Link>
                <Link to="/blog" className={`${classes.nav_link} ${classes.footer_link}`}>Blog</Link>
                <Link to="/" className={`${classes.nav_link} ${classes.footer_link}`}>Crash Courses</Link>
              </Box>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <Box className={classes.footer_4}>
                <Typography variant="h3" component="h3" className={classes.footer_title}>
                  Keep up with us at
                </Typography>
                <List className={classes.footer_4_list}>
                  <ListItem>
                    <strong>Call: &nbsp;</strong>
                    <Link to="/"> 16910</Link>&nbsp;
                    (8AM - 11PM)
                  </ListItem>
                  <ListItem>
                    <strong>SMS: &nbsp;</strong>
                    <strong>10MSHelp</strong> &nbsp;
                    to 26969
                  </ListItem>
                  <ListItem>
                    <strong>Email:</strong> &nbsp;
                    <Link to="/">support@gmail.com</Link>
                  </ListItem>
                </List>
                <Box className={classes.footer_4_sosial_media}>
                  <Link to="/">
                  <img src={facebook} alt="logo" className={classes.img_responsive} />
                  </Link>
                  <Link to="/">
                  <img src={instagram} alt="logo" className={classes.img_responsive} />
                  </Link>
                  <Link to="/">
                  <img src={youtube} alt="logo" className={classes.img_responsive} />
                  </Link>
                  <Link to="/">
                  <img src={linkedin} alt="logo" className={classes.img_responsive} />
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Typography variant="h5" component="p" >
          © 2022 Geeks. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
