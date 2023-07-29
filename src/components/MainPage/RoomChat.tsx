import supabase from "@/utils/db/supabase";
import { useEffect, useState } from "react";
import MessageCard from "@/components/ChatRoom/MessageCard";
import { type RouterOutputs } from "@/utils/api";
import MessageForm from "@/components/ChatRoom/MessageForm";
type Message = RouterOutputs["message"]["getOne"];
type RoomChatProps = {
    name: string;
    messages: Message[];
    id: string;
};
const RoomChat = (props: RoomChatProps) => {
    const { name, messages, id } = props;
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
                    setMessages([...rtMessages, payload.new as Message]);
                }
            )
            .subscribe();
        return () => {
            void supabase.removeChannel(channel);
        };
    }, [rtMessages, id]);

    return (
        <>
            <div>
                <h1>{name}</h1>
            </div>
            <div>
                {rtMessages?.map((message: Message) => (
                    <MessageCard
                        key={message?.id}
                        content={message?.content ?? ""}
                        userImage={message?.creator?.image || ""}
                    />
                ))}
                <MessageForm roomId={id} />
            </div>
        </>
    );
};

export default RoomChat;
