import { Box } from "@mui/material";
import MessageCard from "@/components/ChatRoom/MessageCard";
import { type RouterOutputs } from "@/utils/api";
import MessageForm from "@/components/ChatRoom/MessageForm";
import useRealTimeMessages from "@/hooks/useRealtimeMessages";
type Message = RouterOutputs["message"]["getOne"];
type RoomChatProps = {
    messages: Message[];
    id: string;
};
const RoomChat = (props: RoomChatProps) => {
    const { messages, id } = props;
    const { rtMessages, messagesEndRef } = useRealTimeMessages(id, messages);
    return (
        <>
            <Box
                component='ul'
                sx={{
                    height: "500px",
                    overflowY: "scroll",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "stretch",
                    flexDirection: "column",
                    padding: 1,
                }}
                ref={messagesEndRef}>
                {rtMessages?.map((message: Message) => (
                    <MessageCard
                        key={message?.id}
                        content={message?.content ?? ""}
                        updatedAt={message?.updatedAt}
                        image={message?.creatorImage ?? "No-image"}
                        name={message?.creatorName ?? "No-name"}
                        creatorId={message?.creatorId}
                        id={message?.id}
                    />
                ))}
                {!rtMessages && (
                    <h2 style={{ marginLeft: "auto", marginRight: "auto" }}>
                        Nie ma jeszcze żadnych wiadomości.
                    </h2>
                )}
            </Box>
            <MessageForm roomId={id} />
        </>
    );
};

export default RoomChat;
