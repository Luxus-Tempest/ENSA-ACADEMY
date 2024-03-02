
import { Accordion, AccordionDetails, AccordionSummary, Box,  Container, Grid, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import Pagebanner from '../components/Pagebanner'
import { pageCss } from './PageCss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CourseSidebar from '../components/courses/CourseSidebar'

const itemtabs = [
  "Introduction",
  "Understanding React Native Fundamentals",
  "Adding Stack and Bottom Tab Navigator to our react native project",
  "Overview of React Hooks",
  "Project",
  "Conclusion" ,
];
const data = [1,2,3,4];

const SingleCourse = () => {
  const classes = pageCss();
  const [tabValue, setTabvalue] = useState(0);
  const handleChange = (event, newValue) => {
    setTabvalue(newValue);
  };

  return (
    <>
      <Pagebanner
        title="Getting Started with JavaScript"
        subtitle="JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript."
        course_time="12 hours 34 minutes"
        course_enroll="5 Enrolled"
        course_rating="4"
        course_expart="Intermediate"
      />
      <Box className={classes.course_banner}></Box>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{display:"flex",flexDirection:{xs:"column-reverse",sm:"column-reverse",md:"row"}}}>
          <Grid item xs={12} sm={12} md={8}>
            <Box className={classes.single_course_tabs_section}>
              <Tabs
                value={tabValue}
                onChange={handleChange}
              >
                <Tab label="Curriculum" />
                <Tab label="Description" />
              </Tabs>
              <Box className={classes.single_course_tabs_box}>
                {tabValue === 0 && (
                  <Box className={classes.single_course_tabs}>
                  {itemtabs.map((item)=>(
                    <Box key={item} className={classes.single_course_tabs_list}>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>{item}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {data.map((item)=>(
                          <Box key={item} className={classes.single_course_tabs_content}>
                          <Typography variant="h4">
                            <LockOutlinedIcon className={classes.single_course_tabs_icon} />
                            What You’ll Get From Taking this Course
                          </Typography>
                          <Typography variant="h4">
                            9m 34s
                          </Typography>
                        </Box>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                  ))}
                  </Box>
                )}
                {tabValue === 1 && (
                  <Box className={classes.single_course_tabs_des}>
                    <Typography variant="h4" pb={3}>
                    If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
                    </Typography>
                    <Typography variant="h4">
                    Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <CourseSidebar />
          </Grid>
        </Grid>

      </Container>

    </>
  )
}

export default SingleCourse
