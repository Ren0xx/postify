import { Box, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import Head from "next/head";
import ProfilePicture from "@/components/UserPage/ProfilePicture";
import Description from "@/components/Settings/Description";
import UserNameSection from "@/components/Settings/UserNameSection";
import DeleteAccount from "@/components/Settings/DeleteAccount";
import SignIn from "@/components/SignIn";
import { PageTransition } from "@/components/Animations/PageTransition";
export default function Settings() {
    const { data: sessionData } = useSession();
    const [profPictureWidth, profPictureHeight] = [50, 50];
    if (!sessionData) {
        return <SignIn />;
    }
    return (
        <>
            <Head>
                <title>
                    {sessionData?.user?.name ?? "Anonymous user"} - Postify
                </title>
            </Head>
            <PageTransition>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: 2,
                        mt: 1,
                    }}>
                    <Typography variant='h3'>Ustawienia</Typography>
                    <ProfilePicture
                        height={profPictureHeight}
                        width={profPictureWidth}
                    />
                    <UserNameSection isLogged={!!sessionData} />
                    <Description isLogged={!!sessionData} />
                    <DeleteAccount />
                </Box>
            </PageTransition>
        </>
    );
}
