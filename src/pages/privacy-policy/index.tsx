import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PageTransition } from "@/components/Animations/PageTransition";

export default function PrivacyPolicy() {
    return (
        <PageTransition>
            <Typography variant='h2' textAlign={"center"} my={4}>
                Privacy Policy
            </Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'>
                    <Typography>1. Introduction</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This Privacy Policy outlines how we collect, store, use,
                        and protect your personal data. Please read it carefully
                        to understand our privacy practices and principles.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel2a-content'
                    id='panel2a-header'>
                    <Typography>2. Types of Data Collected</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        2.1. Personal Data: We may collect information such as
                        your name, email address, and other contact details that
                        you provide to us for using our services.
                        <br />
                        2.2. Technical Data: While using our website, we may
                        automatically collect technical data such as IP address,
                        browser type, operating system, and other information
                        about the devices you use.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel3a-content'
                    id='panel3a-header'>
                    <Typography>3. Purpose of Data Collection</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        3.1. We collect your personal data to provide our
                        services, customize content to your needs, and analyze
                        our web traffic.
                        <br />
                        3.2. Technical data is used to ensure security,
                        diagnostics, and improvement of our services.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel4a-content'
                    id='panel4a-header'>
                    <Typography>4. Data Sharing</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        4.1. We do not share your personal data with third
                        parties without your consent unless required by law.
                        <br />
                        4.2. We may share technical data with service providers
                        to ensure the proper functioning of our website.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel5a-content'
                    id='panel5a-header'>
                    <Typography>5. Data Security</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        5.1. We strive to protect your data from unauthorized
                        access or disclosure.
                        <br />
                        5.2. We implement appropriate security measures, but
                        please note that no method of data transmission over the
                        Internet is 100% secure.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel6a-content'
                    id='panel6a-header'>
                    <Typography>6. Your Rights</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        6.1. You have the right to access your personal data,
                        correct it, delete it, or restrict its processing.
                        <br />
                        6.2. You can withdraw consent for data processing or
                        object to data processing at any time.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel7a-content'
                    id='panel7a-header'>
                    <Typography>7. Changes to the Privacy Policy</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        7.1. We may update our Privacy Policy from time to time.
                        Any changes will be posted on our website.
                        <br />
                        7.2. By using our services after changes have been made,
                        you accept the new version of the Privacy Policy.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel8a-content'
                    id='panel8a-header'>
                    <Typography>8. Contact</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        8.1. If you have any questions or comments about the
                        Privacy Policy, please contact us using our contact
                        details.
                        <br />
                        Last updated: 09/05/2024
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </PageTransition>
    );
}
