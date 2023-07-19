import { Grid, Typography } from "@mui/material";
import RoomChat from "~/components/Room/RoomChat";
import RoomsList from "./Room/RoomsList";
import CreateRoomForm from "./Room/CreateRoomForm";
const Homepage = () => {
    return (
        <>
            <Typography variant='h2'>Witaj w Postify</Typography>
            <Typography variant='body1'>
                Stwórz wlasny chat lub dołącz do wielu innych ktore cie
                zainteresują!
            </Typography>
            <hr />
            <Grid container spacing={2} sx={{ minHeight: "80vh" }}>
                <Grid item xs={1} md={3}>
                    <RoomsList />
                </Grid>
                <Grid item xs={11} md={9}>
                    <RoomChat />
                </Grid>
            </Grid>
            <CreateRoomForm />
        </>
    );
};
export default Homepage;
