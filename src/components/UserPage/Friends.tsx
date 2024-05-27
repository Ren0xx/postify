import FriendCard from "./FriendCard";
import { Box, Stack, Typography } from "@mui/material";
import { type RouterOutputs } from "@/utils/api";
import { api } from "@/utils/api";
type User = RouterOutputs["user"]["getUser"];
type UserProps = {
    friends: User[] | undefined;
    refetch: () => void;
};
const Friends = (props: UserProps) => {
    const { friends, refetch } = props;
    const removeFriend = api.user.removeFriend.useMutation({
        onSuccess: () => {
            void refetch();
        },
    });

    const removeOne = (id: string) => {
        removeFriend.mutate({ id });
    };
    return (
        <Stack
            spacing={2}
            justifyContent='center'
            alignItems='center'
            sx={{ py: 4 }}>
            <Typography variant='h4' sx={{ my: 2 }}>
                Friends:
            </Typography>
            {friends && friends.length > 0 ? (
                friends?.map((friend: User) => (
                    <Box
                        key={friend?.id}
                        sx={{ borderRadius: "1.5em", mt: "0.5em" }}>
                        <FriendCard
                            userId={friend?.id}
                            userName={friend?.name}
                            userImage={friend?.image}
                            removeFriend={removeOne}
                        />
                    </Box>
                ))
            ) : (
                <Typography variant='h6'>No friends yet 😢</Typography>
            )}
        </Stack>
    );
};

export default Friends;
