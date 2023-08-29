import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "next-auth/react";
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    SvgIcon,
} from "@mui/material";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Container, Tooltip, IconButton } from "@mui/material";
import Navigation from "@/components/Navigation";
const Header = () => {
    const { data: sessionData } = useSession();
    return (
        <AppBar position='static' color='transparent'>
            <Container sx={{ flexGrow: 1 }} maxWidth='lg'>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 0.5,
                        }}>
                        <SvgIcon fontSize='large'>
                            <svg
                                viewBox='-2.4 -2.4 28.80 28.80'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                stroke='#000000'
                                transform='rotate(0)'>
                                <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                                <g
                                    id='SVGRepo_tracerCarrier'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'></g>
                                <g id='SVGRepo_iconCarrier'>
                                    <path
                                        d='M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7'
                                        stroke='#4A60A1'
                                        stroke-width='1.5'
                                        stroke-linecap='round'></path>
                                    <path
                                        d='M8 12H8.009M11.991 12H12M15.991 12H16'
                                        stroke='#4A60A1'
                                        stroke-width='2'
                                        stroke-linecap='round'
                                        stroke-linejoin='round'></path>
                                    {}
                                </g>
                            </svg>
                        </SvgIcon>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                            }}>
                            <Typography variant='h5'>
                                <Link href='/'>Postify</Link>
                            </Typography>
                            <Typography>Chat rooms</Typography>
                        </Box>
                    </Box>
                    {sessionData ? (
                        <Navigation sessionData={sessionData} />
                    ) : null}
                    {/* {sessionData?.user && (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: 2,
                            }}
                            id='authenticated'>
                            <Avatar
                                alt='Profile picture'
                                src={
                                    sessionData?.user.image ?? "Profile picture"
                                }
                                component={Link}
                                href={`/users/${sessionData?.user.id}`}
                            />
                            <Typography
                                component={Link}
                                sx={{
                                    "&:hover": {
                                        textDecoration: "underline #fff",
                                        textUnderlineOffset: "0.3em",
                                    },
                                }}
                                href={`/users/${sessionData?.user.id}`}>
                                {sessionData?.user.name ?? "Anonymous"}
                            </Typography>
                            
                            <Tooltip title='Settings'>
                                <IconButton
                                    href='/settings'
                                    aria-label='settings'
                                    color='inherit'>
                                    <SettingsIcon />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    )} */}
                    <Tooltip title='Logout'>
                        <IconButton
                            aria-label='logout'
                            color='inherit'
                            onClick={() => void signOut()}>
                            <LogoutIcon />
                        </IconButton>
                    </Tooltip> 
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
