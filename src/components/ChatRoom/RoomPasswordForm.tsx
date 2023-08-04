import { Box, TextField, Button } from "@mui/material";
import { api } from "@/utils/api";
import { useState } from "react";
import { useRouter } from "next/navigation";
type RoomAuthProps = {
    password?: string | null;
    roomId: string;
};
const RoomPasswordForm = (props: RoomAuthProps) => {
    const router = useRouter();
    const [password, setPassword] = useState<string>("");
    const [isError, setError] = useState<boolean>(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setPassword(e.target.value);
    };
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            if (password !== props.password) setError(true);
            else allowOne();
        }
    };
    const allowUser = api.room.addToAllowedUsers.useMutation({});
    const allowOne = () => {
        void allowUser.mutateAsync({ roomId: props.roomId });
        router.refresh();
    };
    return (
        <Box>
            <TextField
                error={isError}
                fullWidth
                value={password}
                label='Hasło do pokoju'
                id='message-content-field'
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                helperText={isError ? "Niepoprawne hasło." : ""}
            />
        </Box>
    );
};
export default RoomPasswordForm;
