import RoomsList from "@/components/MainPage/RoomsList";
import Hero from "@/components/MainPage/Hero";
import CreateRoom from "@/components/MainPage/CreateRoom";
import RealtimeDisplay from "@/components/MainPage/RealtimeDisplay";
import { PageTransition } from "@/components/Animations/PageTransition";
const Homepage = () => {
    return (
        <PageTransition>
            <Hero />
            <CreateRoom/>
            <RoomsList />
            <RealtimeDisplay />
        </PageTransition>
    );
};
export default Homepage;
