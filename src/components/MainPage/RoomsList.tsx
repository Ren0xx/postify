import { TextField, Typography } from "@mui/material";
import RoomCard from "./RoomCard";
import RoomChat from "./RoomChat";
import { api, type RouterOutputs } from "@/utils/api";
import Link from "next/link";
import useDebounce from "@/hooks/useDebounce";
import { useState, useMemo } from "react";
type Room = RouterOutputs["room"]["getTopRooms"][0];
const RoomsList = () => {
    const numberOfRooms = 5;
    const {
        data: rooms,
        isLoading,
        isError,
    } = api.room.getTopRooms.useQuery({
        count: numberOfRooms,
    });
    const [searchText, setSearchText] = useState<string>("");
    const debouncedSearchText = useDebounce(searchText, 500);

    const filteredRooms = useMemo(() => {
        if (!rooms) return null;

        return rooms.filter((room: Room) =>
            room.name.toLowerCase().includes(debouncedSearchText.toLowerCase())
        );
    }, [rooms, debouncedSearchText]);
    return (
        <>
            <TextField
                label='Przeszukaj pokoje'
                fullWidth
                value={searchText}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchText(e.target.value)
                }
            />
            <Typography variant='h3' sx={{ mb: 2 }}>
                Popularne pokoje:
            </Typography>
            <section>
                {filteredRooms?.length === 0 ? (
                    <p>Nie znaleziono pokoi pasujących do podanej nazwy.</p>
                ) : (
                    filteredRooms?.map((room: Room) => (
                        <RoomCard key={room.id} room={room} />
                    ))
                )}
                {isLoading && <h4>Wczytywanie...</h4>}
                {isError && <h4>Coś poszło nie tak...</h4>}
            </section>
        </>
    );
};
export default RoomsList;
