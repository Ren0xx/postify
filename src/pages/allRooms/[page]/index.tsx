import { useState } from "react";
import SignIn from "@/components/SignIn";
import useSessionState from "@/hooks/useSessionState";
import RoomsList from "@/components/Rooms/RoomsList";
import TagsFilter from "@/components/Rooms/TagsFilter";
import ThreeDotsWave from "@/components/Animations/ThreeDotsWave";
import SiteLoading from "@/components/utils/SiteLoading";
import { api } from "@/utils/api";
import Head from "next/head";
import { useRouter } from "next/router";
import { PageTransition } from "@/components/Animations/PageTransition";
export default function Rooms() {
    const status = useSessionState();
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
        enabled: status === "authenticated",
    });
    const { data, isLoading, isError } = api.room.getRoomsPaginated.useQuery(
        { page: currentPage, tags: selectedTags },
        { enabled: status === "authenticated" }
    );
    if (status === "loading") return <SiteLoading />;
    if (status === "unauthenticated") return <SignIn />;

    if (isError) {
        return (
            <>
                <Head>
                    <title>An error occurred</title>
                </Head>
                <h2>An error occurred.</h2>
            </>
        );
    }
    return (
        <PageTransition>
            <TagsFilter
                tags={allTags}
                selectedTags={selectedTags}
                onTagClick={handleTagChange}
            />
            {isLoading ? (
                <RoomsLoader />
            ) : (
                <RoomsList
                    rooms={data.rooms}
                    pagesCount={data.totalPages}
                    currentPage={currentPage}
                />
            )}
        </PageTransition>
    );
}

const RoomsLoader = () => {
    return (
        <>
            <Head>
                <title>Loading...</title>
            </Head>
            <ThreeDotsWave />
        </>
    );
};
