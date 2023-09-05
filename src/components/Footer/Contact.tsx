import { Box, Typography, IconButton } from "@mui/material";
import LogoWithName from "@/components/Header/LogoWithName";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
const Contact = () => {
    return (
        <div>
            <LogoWithName />
            <ContactIcons />
            <Copyright />
        </div>
    );
};

function Copyright() {
    return (
        <Typography variant='body2' color='text.secondary'>
            {"Copyright © "}
            <Link href='https://portfolio-ren0xx.vercel.app/'>Ren0xx</Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}
function ContactIcons() {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <IconButton href='https://www.linkedin.com/in/adam-za%C5%82%C4%99ski-8a6430200/'>
                <LinkedInIcon />
            </IconButton>
            <IconButton href='https://github.com/Ren0xx'>
                <GithubIcon />
            </IconButton>
            <IconButton href='https://portfolio-ren0xx.vercel.app/'>
                <AccountBoxIcon />
            </IconButton>
        </Box>
    );
}
export default Contact;
