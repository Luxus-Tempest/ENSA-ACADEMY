import React from 'react'
import Pagebanner from '../components/Pagebanner'
import { pageCss } from './PageCss'
import { Box, Container, Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const itemtabs = [
    "What is the cost of an online course",
    "What do I need to take a course?",
    "What do I receive for taking this course?",
    "What willI get if I subscribe to this Certificate?",
];

const Faq = () => {
    const classes = pageCss();
    return (
        <>
            <Pagebanner
                title="Frequently Asked Questions"
            />
            <Container maxWidth="lg">
                <Box className={classes.faq_tabs_box}>
                    <Box className={classes.faq_tabs}>
                        {itemtabs.map((item) => (
                            <Box key={item} className={classes.Faq_tabs_list}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography variant="h3" component="h3">{item}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Box className={classes.faq_tabs_content}>
                                            <Typography variant="h4">
                                                Create beautiful website with this Geeks UI template. Get started building a site today.
                                            </Typography>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Faq

