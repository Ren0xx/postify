import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
const Hero = () => {
    return (
        <Box
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
                    Chatuj z innymi osobami bez ograniczeń
                </Typography>
                <Typography variant='body1'>
                    Przeszukaj chaty, aby znaleźć ciekawe tematy. Wymieniaj
                    wiadomości z osobami z kręgu twoich zainteresowań.
                </Typography>
                <Button
                    variant='contained'
                    color='primary'
                    component={Link}
                    href='/allRooms/1'
                    sx={{ width: 200, mt: 4 }}>
                    Wszystkie pokoje
                </Button>
            </Box>
        </Box>
    );
};

export default Hero;
