import { useRouter } from "next/router";
import { useEffect } from "react";
import Loading from "@/components/utils/Loading";
import Head from "next/head";
import RoomsList from "@/components/Rooms/RoomsList";
import { api, type RouterOutputs } from "@/utils/api";
import useIsLogged from "@/hooks/useIsLogged";
type Room = RouterOutputs["room"]["getRoomsPaginated"][0];

export default function Rooms() {
    const isLogged = useIsLogged();

    const router = useRouter();
    const page = router.query.page as string;
    const numberOfPage = Number(page);
    useEffect(() => {
        if (Number.isNaN(numberOfPage) || numberOfPage < 1) {
            void router.push("/allRooms/1");
        }
    }, [numberOfPage, router]);
    const {
        data: rooms,
        isLoading,
        isError,
    } = api.room.getRoomsPaginated.useQuery(
        { page: numberOfPage },
        { enabled: isLogged === true }
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
                    <title>Wystąpił błąd</title>
                </Head>
                <h2>Wystąpił błąd.</h2>
            </>
        );
    }
    return (
        <>
            <h2>Lista pokoi:</h2>
            <RoomsList rooms={rooms} />
        </>
    );
}
