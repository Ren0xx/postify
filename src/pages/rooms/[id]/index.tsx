import { api, type RouterOutputs } from "@/utils/api";
import Head from "next/head";
import RoomChat from "@/components/MainPage/RoomChat";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

type Message = RouterOutputs["message"]["getOne"];
type Tag = RouterOutputs["tag"]["getOne"];
import SignIn from "@/components/SignIn";
import AdminSection from "@/components/ChatRoom/AdminSection";
import TagsSection from "@/components/ChatRoom/TagsSection";
import InfoSection from "@/components/ChatRoom/InfoSection";
import SiteLoading from "@/components/utils/SiteLoading";
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
        refetch,
    } = api.room.getOne.useQuery(
        { id: roomId },
        { enabled: sessionData?.user !== undefined }
    );
    const deleteOne = api.tag.removeOne.useMutation({
        onSuccess: () => {
            void refetch();
        },
    });
    if (!sessionData) {
        return <SignIn />;
    }
    const deleteTag = (tagId: string) => {
        if (!isOwner) return;
        void deleteOne.mutateAsync({ tagId, roomId });
    };
    if (isLoading) {
        return (
            <>
                <Head>
                    <title>Wczytywanie...</title>
                </Head>
                <SiteLoading />
            </>
        );
    }
    if (isError || room === null) {
        return (
            <>
                <Head>
                    <title>Wystąpił błąd</title>
                </Head>
                <RoomNotFound />
            </>
        );
    }
    const isUserAllowed = room?.allowedUsers.some(
        (user) => user.id === sessionData?.user.id
    );
    const isOwner = room?.ownerId === sessionData?.user.id;
    if (!isUserAllowed && !isOwner && !isError && !room.isPublic) {
        return <NotAuthorized password={room.password} roomId={room.id} />;
    }
    return (
        <>
            <Head>
                <title>
                    Pokój &quot;{room?.name ?? "bez nazwy"}&quot; - Postify
                </title>
            </Head>
            <InfoSection name={room.name} />
            <TagsSection
                tags={room.tags as Tag[]}
                deleteTag={deleteTag}
                canDelete={isOwner}
            />
            {isOwner && (
                <AdminSection
                    roomId={room.id}
                    tags={room.tags as Tag[]}
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    refetch={refetch}
                />
            )}
            <RoomChat id={room.id} messages={room.messages as Message[]} />
        </>
    );
}
