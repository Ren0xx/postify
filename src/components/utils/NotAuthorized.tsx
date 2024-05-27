import { Stack } from "@mui/material";
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
            <h1>You cannot enter this chatroom.</h1>
            <h4>Enter the password.</h4>
            <RoomPasswordForm roomPassword={password} roomId={roomId} />
        </Stack>
    );
};

export default NotAuthorized;
