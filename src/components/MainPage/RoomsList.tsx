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

    return (
        <>
            <Typography variant='h3' sx={{ mb: 2 }}>
                Popularne pokoje:
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
