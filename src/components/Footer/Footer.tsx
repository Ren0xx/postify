import Box from "@mui/material/Box";
import Contact from "./Contact";
import Features from "./Features";
const Footer = () => {
    return (
        <Box
            sx={{
                display: "flex",
                // flexDirection: "column",
                // minHeight: "100vh",
            }}>
            <Box
                component='footer'
                sx={{
                    py: 3,
                    px: 2,
                    mt: "auto",
                    display: "flex",
                    flex: 1,
                    justifyContent: "space-between",
                }}>
                <Contact />
                <Features />
            </Box>
        </Box>
    );
};

export default Footer;
