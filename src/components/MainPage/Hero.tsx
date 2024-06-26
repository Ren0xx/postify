import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
const Hero = () => {
    return (
        <Box
            component='section'
            sx={{
                position: "relative",
                backgroundImage: "url(/assets/images/people_talking.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                textAlign: "center",
            }}>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: "url(/assets/images/people_talking.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.5)",
                }}
            />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                    zIndex: 1001,
                }}>
                <Typography variant='h3'>
                    Chat with others people with ease!
                </Typography>
                <Typography variant='body1'>
                    Search chatrooms to find interesting topics. Share messages
                    with people who share your interests.
                </Typography>
                <Button
                    variant='contained'
                    color='primary'
                    component={Link}
                    href='/allRooms/1'
                    sx={{ width: 200, mt: 4 }}>
                    All rooms
                </Button>
            </Box>
        </Box>
    );
};

export default Hero;
