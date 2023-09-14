import Head from "next/head";
import { api, type RouterOutputs } from "@/utils/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Loading from "@/components/utils/Loading";
import RoomCard from "@/components/MainPage/RoomCard";
import SignIn from "@/components/SignIn";
import { Box, Typography } from "@mui/material";
import CreateRoomForm from "@/components/MainPage/CreateRoomForm";
import { PageTransition } from "@/components/Animations/PageTransition";
type Room = RouterOutputs["room"]["getTopRooms"][0];
const RoomsOwned = () => {
    const { data: sessionData } = useSession();
    const router = useRouter();
    const id = router.query.id as string;

    const {
        data: rooms,
        isLoading,
        isError,
    } = api.user.getUserRooms.useQuery(
        { id },
        { enabled: sessionData?.user !== undefined }
    );
    if (!sessionData) {
        return <SignIn />;
    }
    if (isLoading) {
        return <RoomsLoader />;
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
        <PageTransition>
            {rooms?.roomsOwned?.length === 0 ? (
                <RoomsNotFound isOwner={id === sessionData?.user.id} />
            ) : (
                rooms?.roomsOwned?.map((room: Room) => (
                    <RoomCard key={room.id} room={room} />
                ))
            )}
        </PageTransition>
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

const RoomsNotFound = ({ isOwner }: { isOwner: boolean }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                mt: 2,
            }}>
            <Typography variant='h3'>Brak posiadanych pokoi.</Typography>
            {isOwner ? (
                <>
                    <Typography>
                        <i>Stwórz jeden już teraz! </i>
                    </Typography>
                    <CreateRoomForm />
                </>
            ) : null}
        </Box>
    );
};
export default RoomsOwned;
