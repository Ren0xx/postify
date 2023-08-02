import { Box, Grid } from "@mui/material";
import { api, type RouterOutputs } from "@/utils/api";
import Head from "next/head";
import RoomChat from "@/components/MainPage/RoomChat";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

type Message = RouterOutputs["message"]["getOne"];
type Tag = RouterOutputs["tag"]["getOne"]
import AdminSection from "@/components/ChatRoom/AdminSection";
import TagsSection from "@/components/ChatRoom/TagsSection";
import Loading from "@/components/utils/Loading";
import RoomNotFound from "@/components/utils/RoomNotFound";
import NotAuthorized from "@/components/utils/NotAuthorized";
export default function Room() {
    const { data: sessionData } = useSession();
    const router = useRouter();
    const roomId = router.query.id as string;

    const {
        data: room,
        isLoading,
        isError,
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
    if (isError || room === null) {
        return (
            <>
                <Head>
                    <title>The error occured</title>
                </Head>
                <RoomNotFound />
            </>
        );
    }
    const isUserAllowed = room?.allowedUsers.some(
        (user) => user.id === sessionData?.user.id
    );
    const isOwner = room?.ownerId === sessionData?.user.id;
    if (!isUserAllowed && !isOwner && !isError) {
        return <NotAuthorized />;
    }
    return (
        <>
            <Head>
                <title>
                    Pokój &quot;{room?.name ?? "bez nazwy"}&quot; - Postify
                </title>
            </Head>
            {isOwner && <AdminSection />}
            <TagsSection tags={room.tags as Tag[]} />
            <RoomChat
                id={room.id}
                messages={room.messages as Message[]}
                name={room.name}
                userName={sessionData?.user.name}
                userImage={sessionData?.user.image}
            />
        </>
    );
}
