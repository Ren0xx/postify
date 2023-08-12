import RoomCard from "@/components/MainPage/RoomCard";
import { RouterOutputs } from "@/utils/api";
type Room = RouterOutputs["room"]["getRoomsPaginated"][0];
type RoomsListProps = {
    rooms: Room[];
};
const RoomsList = (props: RoomsListProps) => {
    const { rooms } = props;
    return (
        <div>
            {rooms?.map((room: Room) => (
                <div key={room.id}>{room.name}</div>
            ))}
        </div>
    );
};

export default RoomsList;
