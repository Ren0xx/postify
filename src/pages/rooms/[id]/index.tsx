import { Box, Grid } from "@mui/material";
import { type RouterOutputs, api } from "@/utils/api";
import Head from "next/head";
import RoomChat from "@/components/MainPage/RoomChat";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import Loading from "@/components/utils/Loading";
import LoadingError from "@/components/utils/Error";
import NotAuthorized from "@/components/utils/NotAuthorized";
type Room = RouterOutputs["room"]["getOne"];
export default function Room() {
    const { data: sessionData } = useSession();
    const router = useRouter();
    const roomId = router.query.id as string;

    const {
        data: room,
        isLoading,
        isError,
        refetch,
    } = api.room.getOne.useQuery(
        { id: roomId },
        { enabled: sessionData?.user !== undefined }
    );
    if (isLoading) {
        return (
            <>
                <Head>
                    <title>Wczytywanie...</title>
                </Head>
                <Loading />
            </>
        );
    }
    if (isError) {
        return (
            <>
                <Head>
                    <title>The error occured</title>
                </Head>
                <LoadingError />;
            </>
        );
    }
    const isUserAllowed = room?.allowedUsers.some(
        (user) => user.id === sessionData?.user.id
    );
    const isOwner = room?.ownerId === sessionData?.user.id; 
    if (!isUserAllowed && !isOwner) {
        return <NotAuthorized />;
    }

    return (
        <>
            <Head>
                <title>
                    Pokoj &quot;{room?.name ?? "bez nazwy"}&quot; - Postify
                </title>
            </Head>
            <Box>
                <h1>Hi from room ;room name</h1>
                <RoomChat />
            </Box>
        </>
    );
}
