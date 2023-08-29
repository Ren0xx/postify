import { Box, CircularProgress } from "@mui/material";
import { useState } from "react";
import SignIn from "@/components/SignIn";
import useIsLogged from "@/hooks/useIsLogged";
import RoomsList from "@/components/Rooms/RoomsList";
import TagsFilter from "@/components/Rooms/TagsFilter";
import Loading from "@/components/utils/Loading";
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

    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const handleTagChange = (tag: string) => {
        setSelectedTags((prevTags) => {
            if (prevTags.includes(tag)) {
                return prevTags.filter((t) => t !== tag);
            } else {
                return [...prevTags, tag];
            }
        });
    };

    const { data: allTags } = api.tag.getAll.useQuery(undefined, {
        enabled: isLogged === true,
    });
    const { data, isLoading, isError } = api.room.getRoomsPaginated.useQuery(
        { page: currentPage, tags: selectedTags },
        { enabled: isLogged === true }
    );
    if (!isLogged) {
        return <SignIn />;
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
        <div>
            <TagsFilter
                tags={allTags}
                selectedTags={selectedTags}
                onTagClick={handleTagChange}
            />
            {isLoading && <RoomsLoader />}
            {!isLoading && (
                <RoomsList
                    rooms={data.rooms}
                    pagesCount={data.totalPages}
                    currentPage={currentPage}
                />
            )}
        </div>
    );
}

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
