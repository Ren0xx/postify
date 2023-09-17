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
import Link from "next/link";
import { motion } from "framer-motion";
type MenuProps = {
    hrefsWithNames: Array<{ name: string; href: string; icon: JSX.Element }>;
};
const SideMenu = ({ hrefsWithNames }: MenuProps) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
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
                            <Divider sx={{ bgcolor: "#b7b7b7de" }} />
                        </motion.div>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default SideMenu;
