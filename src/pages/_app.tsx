import { type Session } from "next-auth";
import { Container } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "@/theme/theme";
import { type AppType } from "next/app";
import { api } from "@/utils/api";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";
const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <SessionProvider session={session}>
            <Head>
                <title>Postify</title>
                <meta name='description' content='Realtime chat application where you can talk to people from all over the world' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <ThemeProvider theme={lightTheme}>
                <Header />
                <Container maxWidth='lg' component='main'>
                    <Component {...pageProps} />
                </Container>
                <Container maxWidth='lg' component='footer' sx={{ mt: "auto" }}>
                    <Footer />
                </Container>
            </ThemeProvider>
        </SessionProvider>
    );
};

export default api.withTRPC(MyApp);
