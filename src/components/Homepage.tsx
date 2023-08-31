import { Grid } from "@mui/material";
import RoomsList from "@/components/MainPage/RoomsList";
import Hero from "@/components/MainPage/Hero";
import CreateRoomForm from "@/components/MainPage/CreateRoomForm";
const Homepage = () => {
    return (
        <>
            <Hero />
            <RoomsList />
            <CreateRoomForm />
        </>
    );
};
export default Homepage;
