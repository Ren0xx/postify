import { Grid, Typography } from "@mui/material";
import RoomCard from "@/components/MainPage/RoomCard";
import { api, type RouterOutputs } from "@/utils/api";
import RoomCardSkeleton from "@/components/Loadings/RoomCardSkeleton";
type Room = RouterOutputs["room"]["getTopRooms"][0];
const RoomsList = () => {
    const numberOfRooms = 6;
    const {
        data: rooms,
        isLoading,
        isError,
    } = api.room.getTopRooms.useQuery({
        numberOfRooms,
    });

    return (
        <section>
            <Typography variant='h4' m={6} textAlign='center'>
                Rooms that you might find interesting:
            </Typography>
            <Grid container spacing={4}>
                {isLoading
                    ? Array.from({ length: numberOfRooms }, (_, index) => (
                          <Grid key={index} item xs={12} md={6} lg={4}>
                              <RoomCardSkeleton />
                          </Grid>
                      ))
                    : rooms?.map((room: Room) => (
                          <Grid key={room.id} item xs={12} md={6} lg={4}>
                              <RoomCard room={room} />
                          </Grid>
                      ))}
                {isError && <h4>Something went wrong...</h4>}
            </Grid>
        </section>
    );
};
export default RoomsList;
