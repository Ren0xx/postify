import Head from "next/head";
import { api, type RouterOutputs } from "@/utils/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Loading from "@/components/utils/Loading";
import RoomCard from "@/components/MainPage/RoomCard";
import SignIn from "@/components/SignIn";
type Room = RouterOutputs["room"]["getTopRooms"][0];
const RoomsOwned = () => {
    const { data: sessionData } = useSession();
    const router = useRouter();
    const id = router.query.id as string;

    const {
        data: rooms,
        isLoading,
        isError,
        refetch,
    } = api.user.getUserRooms.useQuery(
        { id },
        { enabled: sessionData?.user !== undefined }
    );
    if (!sessionData) {
        return <SignIn />;
    }
    if (isLoading) {
        return (
            <>
                <Head>
                    <title>Wczytywanie...</title>
                </Head>
                <RoomsLoader />
            </>
        );
    }
    if (isError) {
        return (
            <>
                <Head>
                    <title>Wystąpił błąd</title>
                </Head>
                <div>Coś poszło nie tak</div>
            </>
        );
    }
    return (
        <div>
            {rooms?.roomsOwned?.map((room: Room) => (
                <RoomCard key={room.id} room={room} />
            ))}
        </div>
    );
};
const RoomsLoader = () => {
    return (
        <>
            <Head>
                <title>Wczytywanie...</title>
            </Head>
            <Loading />
        </>
    );
};

export default RoomsOwned;
