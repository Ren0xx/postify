import { memo } from "react";
import { signIn } from "next-auth/react";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Head from "next/head";
const SignIn: React.FC = () => {
    return (
        <Container maxWidth='lg'>
            <Head>
                <title>Log in- Postify</title>
                <meta
                    name='description'
                    content='Realtime chat application where you can talk to people from all over the world'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
                    alignItems: "center",
                    mt: 12,
                    p: 3,
                }}>
                <Paper
                    elevation={4}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 3,
                        p: 2,
                    }}>
                    <Typography variant='h2'>Welcome to Postify!</Typography>
                    <Typography variant='h6'>
                        You have to log in to use this website.
                    </Typography>
                    <Button
                        variant='outlined'
                        startIcon={<GitHubIcon />}
                        onClick={() => void signIn()}
                        className='btn-primary btn'
                        sx={{
                            backgroundColor: "#000000",
                            color: "#fff",
                            borderColor: "#000000",
                            width: 300,
                            "&:hover": {
                                backgroundColor: "#333030",
                                borderColor: "#2a2b2d",
                                boxShadow: "none",
                            },
                        }}>
                        Log in
                    </Button>
                </Paper>
            </Box>
        </Container>
    );
};
export default memo(SignIn);
