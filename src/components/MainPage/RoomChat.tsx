import supabase from "@/utils/db/supabase";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
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
                    setMessages((prevMessages) => [
                        ...prevMessages,
                        payload.new as Message,
                    ]);
                }
            )
            .subscribe();
        return () => {
            void supabase.removeChannel(channel);
        };
    }, [rtMessages, id]);
    return (
        <div>
            <div>
                <h1>{name}</h1>
            </div>
            
            <Box>
                {rtMessages?.map((message: Message) => (
                    <MessageCard
                        key={message?.id}
                        content={message?.content ?? ""}
                        updatedAt={message?.updatedAt}
                        image={message?.creator?.image ?? userImage}
                        name={message?.creator?.name ?? userName}
                    />
                ))}
                <MessageForm roomId={id} />
            </Box>
        </div>
    );
};

export default RoomChat;
