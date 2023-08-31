import { Card, CardContent, CardActionArea, Typography } from "@mui/material";
import { type RouterOutputs } from "@/utils/api";
type Room = RouterOutputs["room"]["getTopRooms"][0];
type RoomCardProps = {
    room: Room;
};
export default function RoomCard(props: RoomCardProps) {
    const { name, id, tags } = props.room;
    return (
        <Card
            elevation={4}
            sx={{
                textTransform: "capitalize",
                borderRadius: 4,
            }}>
            <CardActionArea href={`/rooms/${id}`}>
                <CardContent>
                    <Typography
                        variant='h4'
                        color='text.secondary'
                        gutterBottom
                        sx={{ textAlign: "center" }}>
                        {name}
                    </Typography>
                    <Typography
                        variant='body1'
                        component='div'
                        sx={{ textAlign: "center" }}>
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
            </CardActionArea>
        </Card>
    );
}
