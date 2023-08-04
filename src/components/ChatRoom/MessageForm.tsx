import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { api } from "@/utils/api";
type MessageProps = {
    roomId: string;
};
const MessageForm = (props: MessageProps) => {
    const [content, setContent] = useState<string>("");
    const { roomId } = props;
    const createMessage = api.message.createOne.useMutation({});
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    };
    const createOne = () => {
        if (content === "") return;
        createMessage.mutate({
            content,
            roomId,
        });
        setContent("");
    };
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            createOne();
        }
    };
    return (
        <Box>
            <TextField
                fullWidth
                value={content}
                label='Napisz coś...'
                id='message-content-field'
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
            <Button onClick={createOne} disabled={content === ""}>
                Dodaj wiadomość
            </Button>
        </Box>
    );
};
export default MessageForm;
