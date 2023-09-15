import { Grid } from "@mui/material";
import Contact from "./Contact";
import Features from "./Features";
import Resources from "./Resources";
const Footer = () => {
    return (
        <Grid container spacing={2} justifyContent='center' my={4}>
            <Grid
                item
                xs={12}
                sm={4}
                sx={{ display: "flex", justifyContent: "center" }}>
                <Features />
            </Grid>
            <Grid
                item
                xs={12}
                sm={4}
                sx={{ display: "flex", justifyContent: "center" }}>
                <Resources />
            </Grid>
            <Grid
                item
                xs={12}
                sm={4}
                sx={{ display: "flex", justifyContent: "center", pr: 1 }}>
                <Contact />
            </Grid>
        </Grid>
    );
};

export default Footer;
