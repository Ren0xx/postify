import { Box, Typography } from "@mui/material";
import Head from "next/head";
const RoomNotFound = () => {
    return (
        <>
            <Head>
                <title>Room not found</title>
            </Head>
            <Box
                id='room-not-found'
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 8,
                }}>
                <Typography variant='h3'>Room not found</Typography>
            </Box>
        </>
    );
};
export default RoomNotFound;
