import { Typography } from "@mui/material";
import RoomCard from "@/components/MainPage/RoomCard";
import { api, type RouterOutputs } from "@/utils/api";
import Link from "next/link";
type Room = RouterOutputs["room"]["getTopRooms"][0];
const RoomsList = () => {
    const numberOfRooms = 3;
    const {
        data: rooms,
        isLoading,
        isError,
    } = api.room.getTopRooms.useQuery({
        numberOfRooms,
    });

    return (
        <>
            <Typography variant='h3' sx={{ mb: 2, fontSize: 28 }}>
                Pokoje które mogą cię zainteresować:
            </Typography>
            <section>
                {rooms?.map((room: Room) => (
                    <RoomCard key={room.id} room={room} />
                ))}
                {isLoading && <h4>Wczytywanie...</h4>}
                {isError && <h4>Coś poszło nie tak...</h4>}
            </section>
            <Link href='/allRooms/1'>Wszystkie pokoje</Link>
        </>
    );
};
export default RoomsList;
