import { Box, TextField } from "@mui/material";
import { api } from "@/utils/api";
import { useState } from "react";
import { useRouter } from "next/navigation";
type RoomAuthProps = {
    roomPassword?: string | null;
    roomId: string;
};
const RoomPasswordForm = (props: RoomAuthProps) => {
    const { roomPassword, roomId } = props;
    const router = useRouter();
    const [password, setPassword] = useState<string>("");
    const [isError, setError] = useState<boolean>(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setPassword(e.target.value);
    };
    const handleKeyPress = async (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter" && !isRefetching) {
            const d = refetch();
            if ((await d).data) {
                allowOne();
                return;
            }
            setError(true);
            setPassword("");
        }
    };
    const { isRefetching, refetch } = api.room.passwordMatches.useQuery(
        { password, roomPassword: roomPassword ?? "" },
        { enabled: false }
    );
    const allowUser = api.room.addToAllowedUsers.useMutation({});
    const allowOne = () => {
        void allowUser.mutateAsync({ roomId });
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
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onKeyDown={handleKeyPress}
                helperText={isError ? "Niepoprawne hasło." : ""}
            />
        </Box>
    );
};
export default RoomPasswordForm;
