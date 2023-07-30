import { Avatar, Box, Paper, Stack, Grid } from "@mui/material";
import { type RouterOutputs } from "@/utils/api";
import { formatted } from "@/utils/dates/helperFuncs";
type MessageProps = {
    content: string;
    updatedAt: Date | undefined;
    image?: string | null;
    name?: string | null;
};
const MessageCard = (props: MessageProps) => {
    const { content, updatedAt, image, name } = props;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid
                    item
                    xs={1}
                    sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        mt: "0.4em",
                    }}>
                    <Avatar src={image ?? ""} alt='Not found' />
                </Grid>
                <Grid item xs={11}>
                    <Stack>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "0.3em",
                                alignItems: "center",
                            }}>
                            <p>{name}</p>
                            <p>{formatted(updatedAt || new Date())}</p>
                        </Box>
                        <Box>
                            <p>{content}</p>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};
export default MessageCard;
