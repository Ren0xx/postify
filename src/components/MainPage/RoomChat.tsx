import supabase from "@/utils/db/supabase";
import { Box } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import MessageCard from "@/components/ChatRoom/MessageCard";
import { type RouterOutputs } from "@/utils/api";
import MessageForm from "@/components/ChatRoom/MessageForm";
import useRealTimeMessages from "@/hooks/useRealtimeMessages";
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
    const { rtMessages, messagesEndRef } = useRealTimeMessages(id, messages);

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
