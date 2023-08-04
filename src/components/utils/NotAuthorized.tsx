import { Box, Stack } from "@mui/material";
import RoomPasswordForm from "@/components/ChatRoom/RoomPasswordForm";
type AuthProps = {
    password?: string | null;
    roomId: string;
};
const NotAuthorized = (props: AuthProps) => {
    const { password, roomId } = props;
    return (
        <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'
            spacing={2}>
            <h1>Nie możesz wejść do tego pokoju.</h1>
            <h4>Podaj hasło.</h4>
            <RoomPasswordForm password={password} roomId={roomId} />
        </Stack>
    );
};

export default NotAuthorized;
