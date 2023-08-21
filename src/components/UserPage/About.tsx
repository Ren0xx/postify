import { Avatar, Box, Stack, Button } from "@mui/material";
import Link from "next/link";
type InfoProps = {
    userId: string;
    profilePicture: string | null;
    userName: string | null;
    description: string;
    roomsOwnedCount: number | null;
};
const About = (props: InfoProps) => {
    const { userId, profilePicture, description, userName, roomsOwnedCount } =
        props;
    return (
        <Box
            component='section'
            sx={{
                display: "flex",
                justifyContent: "center",
                flex: 1,
                my: 4,
            }}>
            <Stack
                direction='column'
                justifyContent='space-evenly'
                alignItems='center'
                spacing={2}>
                <Avatar
                    sx={{ height: 80, width: 80 }}
                    src={profilePicture ?? "Profile picture"}
                    alt='profilePicture'
                />
                <h1>{userName}</h1>
                <h3>
                    Właściciel <i>{roomsOwnedCount}</i> pokoi.
                </h3>
                <p>{description}</p>
                <Button
                    component={Link}
                    href={`/users/${userId}/friends`}
                    variant='contained'
                    sx={{ width: 300, mt: "4em !important" }}>
                    Znajomi
                </Button>
                <Button
                    component={Link}
                    href='/settings'
                    variant='contained'
                    sx={{ width: 300 }}>
                    Ustawienia
                </Button>
                <Button
                    component={Link}
                    href={`/users/${userId}/roomsOwned`}
                    variant='contained'
                    sx={{ width: 300 }}>
                    Posiadane pokoje
                </Button>
            </Stack>
        </Box>
    );
};

export default About;
