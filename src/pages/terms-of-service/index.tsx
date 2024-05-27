import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PageTransition } from "@/components/Animations/PageTransition";

export default function TermsOfService() {
    return (
        <PageTransition>
            <Typography variant='h4' textAlign='center' my={4}>
                Terms of Service
            </Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='term1-content'
                    id='term1-header'>
                    <Typography>General Provisions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        1.1. These Terms of Service define the rules for using
                        the website.
                        <br />
                        1.2. Using the website signifies acceptance of the terms
                        contained in these Terms of Service.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='term2-content'
                    id='term2-header'>
                    <Typography>Scope of Services</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        2.1. The website offers the following services:
                        <br />
                        - Creating themed rooms where users can discuss selected
                        topics.
                        <br />
                        - Real-time chat allowing users to have conversations in
                        real-time.
                        <br />
                        - User profile editing, which allows for personalization
                        and customization of their profile.
                        <br />
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='term3-content'
                    id='term3-header'>
                    <Typography>Terms of Use</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        3.1. The user agrees to use the website in accordance
                        with applicable laws.
                        <br />
                        3.2. The user agrees not to post content that is
                        offensive, illegal, or violates the rights of others.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='term4-content'
                    id='term4-header'>
                    <Typography>Liability</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        4.1. The website administration is not responsible for
                        content posted by users.
                        <br />
                        4.2. The website reserves the right to remove content
                        that violates the Terms of Service.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='term5-content'
                    id='term5-header'>
                    <Typography>Privacy</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        5.1. The website cares about users' privacy and
                        processes data in accordance with applicable
                        regulations.
                        <br />
                        5.2. More information about data processing can be found
                        in the Privacy Policy.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='term6-content'
                    id='term6-header'>
                    <Typography>Final Provisions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        6.1. These Terms of Service are binding for all users of
                        the website.
                        <br />
                        6.2. The website reserves the right to change the Terms
                        of Service.
                        <br />
                        6.3. All disputes are settled by the courts competent
                        for the website's registered office.
                        <br />
                        Last updated: 09/05/2024
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </PageTransition>
    );
}
