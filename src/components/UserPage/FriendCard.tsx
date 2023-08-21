import Link from "next/link";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonRemoveAlt1Icon from "@mui/icons-material/PersonRemoveAlt1";
import { Avatar, Card, CardContent, IconButton } from "@mui/material";
type FriendProps = {
    userId: string | undefined;
    userName: string | undefined | null;
    userImage: string | undefined | null;
    isFriend?: boolean;
    addFriend?: (id: string) => void;
    removeFriend?: (id: string) => void;
};
const FriendCard = (props: FriendProps) => {
    const { userId, userName, userImage, isFriend, addFriend, removeFriend } =
        props;
    const addOrRemoveFriend = () => {
        if (!userId) return;
        isFriend ?? true ? removeFriend?.(userId) : addFriend?.(userId);
    };
    return (
        <Card sx={{ minWidth: 275 }} key={userId}>
            <CardContent
                sx={{
                    display: "flex",
                    gap: 2,
                    alignContent: "center",
                }}>
                <Avatar
                    sx={{ alignSelf: "center" }}
                    alt='Profile picture'
                    src={userImage ?? "Profile picture"}
                    component={Link}
                    href={`/users/${userId ?? "No-user"}`}
                />
                <Link
                    style={{ alignSelf: "center" }}
                    href={`/users/${userId ?? "No-user"}`}>
                    {userName}
                </Link>
                <IconButton
                    sx={{ alignSelf: "center" }}
                    onClick={addOrRemoveFriend}>
                    {isFriend ?? true ? (
                        <PersonRemoveAlt1Icon />
                    ) : (
                        <PersonAddAlt1Icon />
                    )}
                </IconButton>
            </CardContent>
        </Card>
    );
};
export default FriendCard;
