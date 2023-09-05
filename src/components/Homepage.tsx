import RoomsList from "@/components/MainPage/RoomsList";
import Hero from "@/components/MainPage/Hero";
import CreateRoomForm from "@/components/MainPage/CreateRoomForm";
import RealtimeDisplay from "@/components/MainPage/RealtimeDisplay";
const Homepage = () => {
    return (
        <>
            <Hero />
            <RoomsList />
            <CreateRoomForm />
            <RealtimeDisplay />
        </>
    );
};
export default Homepage;
