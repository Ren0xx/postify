import { AppBar, Toolbar } from "@mui/material";
import { useSession } from "next-auth/react";
import { Container } from "@mui/material";
import Navigation from "@/components/Navigation";
import LogoWithName from "@/components/Header/LogoWithName";

const Header = () => {
    const { data: sessionData } = useSession();
    return (
        <AppBar position='static' color='transparent'>
            <Container sx={{ flexGrow: 1 }} maxWidth='lg'>
                <Toolbar sx={{ justifyContent: "space-between", gap: 2 }}>
                    <LogoWithName />
                    {sessionData ? (
                        <Navigation sessionData={sessionData} />
                    ) : null}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
