import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    Link,
} from "@mui/material";
import { api, type RouterOutputs } from "@/utils/api";
type Room = RouterOutputs["room"]["getTopRooms"][0];
type RoomCardProps = {
    room: Room;
};
export default function RoomCard(props: RoomCardProps) {
    const { name, id, tags } = props.room;
    return (
        <Card  elevation={2}>
            <CardContent>
                <Typography variant='h4' color='text.secondary' gutterBottom>
                    Pokój: {name}
                </Typography>
                <Typography variant='h5' component='div'></Typography>
                <Typography variant='body1'>
                    Tagi:{" "}
                    {tags.map((tag) => (
                        <Typography
                            variant='body2'
                            color='text.secondary'
                            key={tag.id}
                            sx={{ display: "inline-block" }}>
                            <i>{tag.name + ", "}</i>
                        </Typography>
                    ))}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={`/rooms/${id}`} underline='none'>
                    Przejdź do
                </Link>
            </CardActions>
        </Card>
    );
}
