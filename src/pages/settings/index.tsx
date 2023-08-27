import { Box, Button, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import Head from "next/head";
import ProfilePicture from "@/components/UserPage/ProfilePicture";
import Description from "@/components/Settings/Description";
import UserNameSection from "@/components/Settings/UserNameSection";
export default function Settings() {
    const { data: sessionData } = useSession();
    const [profPictureWidth, profPictureHeight] = [50, 50];

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
                    gap: 2,
                    mt: 1,
                }}>
                <Typography variant='h3'>Ustawienia</Typography>
                <ProfilePicture
                    height={profPictureHeight}
                    width={profPictureWidth}
                />
                <UserNameSection isLogged={!sessionData} />
                <Description isLogged={!sessionData} />
            </Box>
        </>
    );
}
