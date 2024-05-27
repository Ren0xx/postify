import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useMemo } from "react";
import { useSession } from "next-auth/react";
const Features = () => {
    const { data: sessionData } = useSession();
    const hrefsWithNames = useMemo(
        () => [
            { name: "Main Page", href: "/" },
            {
                name: "Rooms",
                href: "/allRooms/1",
            },
            {
                name: "Your Profile",
                href: `/users/${sessionData?.user.id ?? "no-user"}`,
            },
            { name: "Settings", href: "/settings" },
            { name: "About the Project", href: "/about-project" },
        ],
        [sessionData]
    );
    return (
        <div>
            <Typography variant='h5' mb={2} textAlign='center'>
                Functionalities
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: 1,
                }}>
                {hrefsWithNames.map((link) => (
                    <Typography
                        key={link.href}
                        component={Link}
                        href={link.href}
                        variant='body1'>
                        {link.name}
                    </Typography>
                ))}
            </Box>
        </div>
    );
};

export default Features;
