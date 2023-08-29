import { Box, Typography } from "@mui/material";
import { type Session } from "next-auth";
import Link from "next/link";
type NavProps = {
    sessionData: Session;
};
const Navigation = ({ sessionData }: NavProps) => {
    const hrefsWithNames = [
        { name: "Strona główna", href: "/" },
        { name: "Wszystkie pokoje", href: "/allRooms/1" },
        {
            name: "Twój profil",
            href: `/users/${sessionData?.user.id ?? "no-user"}`,
        },
        { name: "Ustawienia", href: "/settings" },
        { name: "O Projekcie", href: "/about-project" },
    ];
    return (
        <Box
            component='nav'
            sx={{
                display: "flex",
                gap: 2,
                justifyContent: "space-between",
            }}>
            {hrefsWithNames.map((obj) => (
                <Typography
                    variant='body2'
                    key={obj.href}
                    component={Link}
                    href={obj.href}>
                    {obj.name.toUpperCase()}
                </Typography>
            ))}
        </Box>
    );
};

export default Navigation;
