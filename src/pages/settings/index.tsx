import { Box, Button, Typography, TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import Head from "next/head";
export default function Settings() {
    const { data: sessionData } = useSession();
    return (
        <>
            <Head>
                <title>
                    {sessionData?.user?.name ?? "Anonymous user"} - Mockbook
                </title>
            </Head>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "2em",
                    marginTop: "1.5em",
                }}>
                <Typography variant='h3'>Settings</Typography>
                <Typography variant='h4'>Profile picture</Typography>
                <Typography variant='h4'>About me</Typography>
                <Button variant='contained'> Update</Button>
            </Box>
        </>
    );
}
