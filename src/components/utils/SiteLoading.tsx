import { Backdrop, CircularProgress } from "@mui/material";
import Head from "next/head";
const SiteLoading = () => {
    return (
        <>
            <Head>
                <title>Loading...</title>
            </Head>
            <Backdrop open={true}>
                <CircularProgress color='primary' />
            </Backdrop>
        </>
    );
};

export default SiteLoading;
