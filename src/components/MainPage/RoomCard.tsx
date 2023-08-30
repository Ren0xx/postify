import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Link,
} from "@mui/material";
import { type RouterOutputs } from "@/utils/api";
type Room = RouterOutputs["room"]["getTopRooms"][0];
type RoomCardProps = {
    room: Room;
};
export default function RoomCard(props: RoomCardProps) {
    const { name, id, tags } = props.room;
    return (
        <Card elevation={2} sx={{ my: 1, textTransform: "capitalize" }}>
            <CardContent>
                <Typography variant='h5' color='text.secondary' gutterBottom>
                    {name}
                </Typography>
                <Typography variant='body1' component='div'>
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
