import { useState } from "react";
import {
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    ListItemIcon,
    Drawer,
    Divider,
    IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { motion } from "framer-motion";
type MenuProps = {
    hrefsWithNames: Array<{ name: string; href: string; icon: JSX.Element }>;
};
const SideMenu = ({ hrefsWithNames }: MenuProps) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const bgColor = "#b7b7b7de";
    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };
    const onLogOutButtonClick = () => {
        handleDrawerClose();
        void signOut();
    };
    return (
        <>
            <IconButton
                edge='start'
                color='inherit'
                aria-label='menu'
                onClick={handleDrawerOpen}>
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor='right'
                open={isDrawerOpen}
                onClose={handleDrawerClose}>
                <List>
                    {hrefsWithNames.map((obj) => (
                        <motion.div
                            key={obj.href}
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{ scale: 0.9 }}>
                            <ListItem disablePadding>
                                <ListItemButton
                                    component={Link}
                                    href={obj.href}
                                    onClick={handleDrawerClose}>
                                    <ListItemIcon>{obj.icon}</ListItemIcon>
                                    <ListItemText
                                        primary={obj.name.toUpperCase()}
                                    />
                                </ListItemButton>
                            </ListItem>

                            <Divider sx={{ bgcolor: bgColor }} />
                        </motion.div>
                    ))}
                    <ListItem disablePadding>
                        <ListItemButton onClick={onLogOutButtonClick}>
                            <ListItemIcon onClick={() => void signOut()}>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Log out".toUpperCase()} />
                        </ListItemButton>
                    </ListItem>
                    <Divider sx={{ bgcolor: bgColor }} />
                </List>
            </Drawer>
        </>
    );
};

export default SideMenu;
