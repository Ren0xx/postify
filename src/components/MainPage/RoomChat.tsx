import InputBar from "@/components/ChatRoom/InputBar";
import MessageCard from "@/components/ChatRoom/MessageCard";
const RoomChat = () => {
    const b = new Array(5);
    b.fill(0);
        return (
        <div>
            {b.map((_) => (
                // eslint-disable-next-line react/jsx-key
                <MessageCard />
            ))}
            <InputBar />
        </div>
    );
};

export default RoomChat;
