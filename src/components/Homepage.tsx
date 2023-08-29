import { Grid, Typography } from "@mui/material";
import RoomsList from "@/components/MainPage/RoomsList";
import Hero from "@/components/MainPage/Hero";
import CreateRoomForm from "@/components/MainPage/CreateRoomForm";
const Homepage = () => {
    return (
        <>
           
            <Hero />
            <Grid container spacing={2} sx={{ minHeight: "80vh", my: 1 }}>
                <Grid item xs={1} md={3}>
                    <RoomsList />
                </Grid>
                <Grid item xs={11} md={9}></Grid>
            </Grid>
            <CreateRoomForm />
        </>
    );
};
export default Homepage;
