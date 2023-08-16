import { Avatar, Box } from "@mui/material";
type InfoProps = {
    profilePicture: string | null;
    userName: string | null;
    description: string;
    roomsOwnedCount: number | null;
};
const Info = (props: InfoProps) => {
    const { profilePicture, description, userName, roomsOwnedCount } = props;
    return (
        <div>
            <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
                <Avatar
                    src={profilePicture ?? "Profile picture"}
                    alt='profilePicture'
                />
                <h2>{userName}</h2>
                <p>Właściciel {roomsOwnedCount} pokoi.</p>
            </Box>
            <p>{description}</p>
        </div>
    );
};

export default Info;
