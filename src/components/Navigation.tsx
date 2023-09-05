import { useMemo } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { type Session } from "next-auth";
import Link from "next/link";
import ChatIcon from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import dynamic from "next/dynamic";
type NavProps = {
    sessionData: Session;
};

const Navigation = ({ sessionData }: NavProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const hrefsWithNames = useMemo(
        () => [
            { name: "Strona główna", href: "/", icon: <HomeIcon /> },
            {
                name: "Wszystkie pokoje",
                href: "/allRooms/1",
                icon: <ChatIcon />,
            },
            {
                name: "Twój profil",
                href: `/users/${sessionData?.user.id ?? "no-user"}`,
                icon: <AccountBoxIcon />,
            },
            { name: "Ustawienia", href: "/settings", icon: <SettingsIcon /> },
            { name: "O Projekcie", href: "/about-project", icon: <InfoIcon /> },
        ],
        [sessionData]
    );
    return (
        <Box
            component='nav'
            sx={{
                display: "flex",
                gap: 2,
                justifyContent: "space-between",
            }}>
            {isMobile ? (
                <SideMenu hrefsWithNames={hrefsWithNames} />

            ) : (
                hrefsWithNames.map((obj) => (
                    <Typography
                        variant='body2'
                        key={obj.href}
                        href={obj.href}
                        component={Link}>
                        {obj.name.toUpperCase()}
                    </Typography>
                ))
            )}
        </Box>
    );
};
export default Navigation;

const SideMenu = dynamic(() => import("@/components/Header/SideMenu"), {
    ssr: false,
});
