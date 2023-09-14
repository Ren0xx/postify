import { Box, Typography } from "@mui/material";
import Head from "next/head";
const UserNotFound = () => {
    return (
        <>
            <Head>
                <title>Użytkownik nieznaleziony</title>
            </Head>
            <Box
                id='user-not-found'
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 8,
                }}>
                <Typography variant='h3'>User not found</Typography>
            </Box>
        </>
    );
};

export default UserNotFound;
