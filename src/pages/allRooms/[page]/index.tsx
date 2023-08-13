import Loading from "@/components/utils/Loading";
import useIsLogged from "@/hooks/useIsLogged";
import RoomsList from "@/components/Rooms/RoomsList";
import { api } from "@/utils/api";

import Head from "next/head";
import { useRouter } from "next/router";
export default function Rooms() {
    const isLogged = useIsLogged();
    const router = useRouter();

    const currentPage =
        router.query.page && !isNaN(parseInt(router.query.page as string))
            ? parseInt(router.query.page as string)
            : 1;
    const { data, isLoading, isError } = api.room.getRoomsPaginated.useQuery(
        { page: currentPage },
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
        <RoomsList
            rooms={data.rooms}
            pagesCount={data.totalPages}
            currentPage={currentPage}
        />
    );
}
