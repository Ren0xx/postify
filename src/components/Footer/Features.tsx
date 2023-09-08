import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useMemo } from "react";
import { useSession } from "next-auth/react";
const Features = () => {
    const { data: sessionData } = useSession();
    const hrefsWithNames = useMemo(
        () => [
            { name: "Strona główna", href: "/" },
            {
                name: "Wszystkie pokoje",
                href: "/allRooms/1",
            },
            {
                name: "Twój profil",
                href: `/users/${sessionData?.user.id ?? "no-user"}`,
            },
            { name: "Ustawienia", href: "/settings" },
            { name: "O Projekcie", href: "/about-project" },
        ],
        [sessionData]
    );
    return (
        <div>
            <Typography variant='h5' mb={2}>
                Funkcjonalności
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
