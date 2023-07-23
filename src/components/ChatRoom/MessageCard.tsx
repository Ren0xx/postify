import { Avatar, Box, Paper, Stack, Grid } from "@mui/material";
const MessageCard = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={1}>
                    <Avatar src='' alt='' />
                </Grid>
                <Grid item xs={11}>
                    <Stack>
                        <Box sx={{ display: "flex" }}>
                            <p>Name of user</p>
                            <p>When created</p>
                        </Box>
                        <Box>
                            <p>Message</p>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};
export default MessageCard;
