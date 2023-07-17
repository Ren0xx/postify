import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "next/link";
const Footer = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}>
            <Box
                component='footer'
                sx={{
                    py: 3,
                    px: 2,
                    mt: "auto",
                }}>
                <Container maxWidth='sm'>
                    <Typography variant='body1'>
                        My sticky footer can be found here.
                    </Typography>
                    <Copyright />
                </Container>
            </Box>
        </Box>
    );
};
function Copyright() {
    return (
        <Typography variant='body2' color='text.secondary'>
            {"Copyright © "}
            <Link href='https://mui.com/'>Your Website</Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export default Footer;
