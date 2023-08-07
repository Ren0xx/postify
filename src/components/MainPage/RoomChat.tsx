import supabase from "@/utils/db/supabase";
import { Box } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import MessageCard from "@/components/ChatRoom/MessageCard";
import { type RouterOutputs } from "@/utils/api";
import MessageForm from "@/components/ChatRoom/MessageForm";
type Message = RouterOutputs["message"]["getOne"];
type RoomChatProps = {
    name: string;
    messages: Message[];
    id: string;
    userName?: string | null;
    userImage?: string | null;
};
const RoomChat = (props: RoomChatProps) => {
    const { name, messages, id, userName, userImage } = props;
    const [rtMessages, setMessages] = useState<Message[]>(messages);

    //TODO Move uE and uS to diffrent hook

    useEffect(() => {
        const channel = supabase
            .channel(`room_messages_${id}`)
            .on(
                "postgres_changes",
                {
                    event: "*",
                    schema: "public",
                    table: "Message",
                    filter: `roomId=eq.${id}`,
                },
                (payload) => {
                    if (payload.eventType === "DELETE") {
                        setMessages((prevMessages) =>
                            prevMessages.filter(
                                (message) =>
                                    message && message.id !== payload.old.id
                            )
                        );
                    } else if (payload.eventType === "INSERT") {
                        setMessages((prevMessages) => [
                            ...prevMessages,
                            payload.new as Message,
                        ]);
                        scrollToBottom();
                    }
                }
            )
            .subscribe();
        return () => {
            void supabase.removeChannel(channel);
        };
    }, [rtMessages, id]);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        console.log(messagesEndRef);
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({
                behavior: "smooth",
                block: "end",
            });
        }
    };
    return (
        <>
            <Box sx={{ maxHeight: "500px", overflowY: "scroll" }}>
                {rtMessages?.map((message: Message) => (
                    <MessageCard
                        key={message?.id}
                        content={message?.content ?? ""}
                        updatedAt={message?.updatedAt}
                        image={message?.creator?.image ?? userImage}
                        name={message?.creator?.name ?? userName}
                        creatorId={message?.creator?.id}
                        id={message?.id}
                    />
                ))}
                {!rtMessages && <h2>Nie ma jeszcze żadnych wiadomości.</h2>}
                <div ref={messagesEndRef} />
            </Box>
            <MessageForm roomId={id} />
        </>
    );
};

export default RoomChat;
