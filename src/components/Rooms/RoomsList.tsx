import RoomCard from "@/components/MainPage/RoomCard";
import { Box, Pagination, PaginationItem } from "@mui/material";
import { type RouterOutputs } from "@/utils/api";
import Link from "next/link";
type Room = RouterOutputs["room"]["getRoomsPaginated"]["rooms"][0];
type RoomsListProps = {
    rooms: Room[];
    pagesCount: number;
    currentPage: number;
};
const RoomsList = (props: RoomsListProps) => {
    const { rooms, pagesCount, currentPage } = props;
    return (
        <div>
            <h1>Przeszukaj pokoje.</h1>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {rooms?.map((room: Room) => (
                    <RoomCard key={room.id} room={room} />
                ))}
            </Box>
            <Pagination
                count={pagesCount}
                page={currentPage}
                renderItem={(item) => (
                    <PaginationItem
                        component={Link}
                        href={`/allRooms/${
                            item.page !== null
                                ? parseInt(item.page.toString())
                                : 1
                        }`}
                        passHref
                        {...item}
                    />
                )}
            />
        </div>
    );
};

export default RoomsList;
