import RoomsList from "@/components/MainPage/RoomsList";
import Hero from "@/components/MainPage/Hero";
import CreateRoom from "@/components/MainPage/CreateRoom";
import RealtimeDisplay from "@/components/MainPage/RealtimeDisplay";
const Homepage = () => {
    return (
        <>
            <Hero />
            <CreateRoom/>
            <RoomsList />
            <RealtimeDisplay />
        </>
    );
};
export default Homepage;
