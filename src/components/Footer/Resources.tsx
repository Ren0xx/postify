import { Box, Typography } from "@mui/material";
import Link from "next/link";
const hrefsWithNames = [
    { name: "Privacy policy", href: "/privacy-policy" },
    {
        name: "Terms of Service",
        href: "/terms-of-service",
    },
];
const Resources = () => {
    return (
        <div>
            <Typography variant='h5' mb={2} textAlign='center'>
                Resources
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

export default Resources;
