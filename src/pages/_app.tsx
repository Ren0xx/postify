import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@/utils/api";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import Layout from "@/components/Layout";
import Head from "next/head";
const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <SessionProvider session={session}>
            <Head>
                <title>Postify</title>
                <meta name='description' content='Generated by create-t3-app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <Layout surroundComponentName={"main"}>
                <Component {...pageProps} />
            </Layout>
            <Layout surroundComponentName={"footer"}>
                <Footer />
            </Layout>
        </SessionProvider>
    );
};

export default api.withTRPC(MyApp);
