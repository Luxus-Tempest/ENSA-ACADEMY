import {
  Box,
  Button,
  CircularProgress,
  Container,
  Drawer,
  IconButton,
  InputBase,
} from "@mui/material";
import React, { useState } from "react";
import { comCss } from "./ComponentsCss";
import logo from "../image/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import { Spinner } from "@nextui-org/react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";


const Navbar = () => {
  const classes = comCss();
  const [openMenu, setOpenMenu] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleClick = () => {
    setLoading(true);
  };

  const [scrollNavbar, setScrollNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setScrollNavbar(true);
    } else {
      setScrollNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <Box
      className={
        scrollNavbar
          ? `${classes.navbar_section_active}`
          : `${classes.navbar_section}`
      }
    >
      <Container maxWidth="lg">
        <Box className={classes.navbar_box}>
          <Box className={classes.navbar_laft}>
            <Box className={classes.navbar_laft_logo}>
              <Link to="/">
                <span className="text-xl font-bold text-purple-700">ENSACademy </span>
                {/*<img src={logo} alt="logo" className={classes.img_responsive} />*/}
              </Link>
            </Box>
            <Box className={classes.navbar_laft_menu}>
              <Box className={classes.navbar_link_computer}>
                <Link to="/" className={`${classes.nav_link}`}>
                  Acceuil
                </Link>
                <Link to="about" className={`${classes.nav_link}`}>
                  A propos
                </Link>
                <Link to="courses" className={`${classes.nav_link}`}>
                  Cours
                </Link>
                <Link to="blog" className={`${classes.nav_link}`}>
                  Blog
                </Link>
                <Link to="contact" className={`${classes.nav_link}`}>
                  Contact
                </Link>
              </Box>

              <Box className={classes.navbar_link_mobail}>
                <IconButton onClick={() => setOpenMenu(!openMenu)}>
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor={"right"}
                  open={openMenu}
                  onClose={() => setOpenMenu(!openMenu)}
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                >
                  <IconButton
                    onClick={() => setOpenMenu(!openMenu)}
                    className={classes.clossessideNav}
                  >
                    <CloseIcon />
                  </IconButton>
                  <Link
                    to="/"
                    className={`${classes.nav_link} ${classes.nav_link_mobail}`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className={`${classes.nav_link} ${classes.nav_link_mobail}`}
                  >
                    About
                  </Link>
                  <Link
                    to="/courses"
                    className={`${classes.nav_link} ${classes.nav_link_mobail}`}
                  >
                    Courses
                  </Link>
                  <Link
                    to="/compareplan"
                    className={`${classes.nav_link} ${classes.nav_link_mobail}`}
                  >
                    Compareplan
                  </Link>
                  <Link
                    to="/pricing"
                    className={`${classes.nav_link} ${classes.nav_link_mobail}`}
                  >
                    Pricing
                  </Link>
                  <Link
                    to="/blog"
                    className={`${classes.nav_link} ${classes.nav_link_mobail}`}
                  >
                    Blog
                  </Link>
                  <Link
                    to="/contact"
                    className={`${classes.nav_link} ${classes.nav_link_mobail}`}
                  >
                    Contact
                  </Link>
                </Drawer>
              </Box>
            </Box>
            {/* searchbar nav bar */}
            <Box className={classes.navbar_laft_searchbar}>
              <SearchIcon className={classes.navbar_laft_searchbar_icon} />
              <InputBase
                placeholder="Cherchez-vous un cours ?"
                inputProps={{ "aria-label": "search" }}
              />
            </Box>
          </Box>
          {/* button left nav bar */}
          <Box className={classes.navbar_right}>
            {/*<Button
              variant="outlined"
              href="/mantor"
              sx={{ marginRight: "12px" }}
              className={`${classes.button} ${classes.button_1}`}
            >
              S'inscrire
            </Button>*/}
            {/*<Button
              href=""
              className={`${classes.button} ${classes.button_2}`}
              onClick={handleClick}
            >
              Se connecte
              {loading && <SignIn />}
            </Button>*/}
            <SignUp openButtonClassname={" p-6 text-black text-sm font-bold mr-1 border-1 bg-white "} />
            <SignIn openButtonClassname={'bg-[#754ffe] p-6 text-white text-sm font-bold'} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
