import { useEffect, useState, useRef } from "react";
import supabase from "@/utils/db/supabase";
import { type RouterOutputs } from "@/utils/api";
type Message = RouterOutputs["message"]["getOne"];

const useRealTimeMessages = (roomId: string, messages: Message[]) => {
    const [rtMessages, setRtMessages] = useState<Message[]>(messages);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({
                behavior: "smooth",
                block: "end",
            });
        }
    };
    useEffect(() => {
        const channel = supabase
            .channel(`room_messages_${roomId}`)
            .on(
                "postgres_changes",
                {
                    event: "*",
                    schema: "public",
                    table: "Message",
                    filter: `roomId=eq.${roomId}`,
                },
                (payload) => {
                    if (payload.eventType === "DELETE") {
                        setRtMessages((prevMessages) =>
                            prevMessages.filter(
                                (message) =>
                                    message && message.id !== payload.old.id
                            )
                        );
                    } else if (payload.eventType === "INSERT") {
                        setRtMessages((prevMessages) => [
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
    }, [roomId]);

    return { rtMessages, messagesEndRef };
};

export default useRealTimeMessages;