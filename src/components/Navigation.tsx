import { useMemo } from "react";
import { Box, Typography, useMediaQuery, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { type Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";
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
            { name: "Main page", href: "/", icon: <HomeIcon /> },
            {
                name: "Chatrooms",
                href: "/allRooms/1",
                icon: <ChatIcon />,
            },
            {
                name: "Your profile",
                href: `/users/${sessionData?.user.id ?? "no-user"}`,
                icon: <AccountBoxIcon />,
            },
            { name: "Settings", href: "/settings", icon: <SettingsIcon /> },
            {
                name: "About the project",
                href: "/about-project",
                icon: <InfoIcon />,
            },
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
                <>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                            mx: 2,
                        }}>
                        {hrefsWithNames.map((obj) => (
                            <Typography
                                variant='body2'
                                key={obj.href}
                                href={obj.href}
                                component={Link}>
                                {obj.name.toUpperCase()}
                            </Typography>
                        ))}
                    </Box>
                    <IconButton
                        onClick={() => void signOut()}
                        sx={{ color: "#fff" }}>
                        <LogoutIcon />
                    </IconButton>
                </>
            )}
        </Box>
    );
};
export default Navigation;

const SideMenu = dynamic(() => import("@/components/Header/SideMenu"), {
    ssr: false,
});
