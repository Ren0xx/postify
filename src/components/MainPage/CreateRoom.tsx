import { Box, Grid, Typography } from "@mui/material";
import CreateRoomForm from "./CreateRoomForm";
const CreateRoom = () => {
    return (
        <Grid
            container
            my={8}
            justifyContent='center'
            alignItems='center'
            component='section'>
            <Grid item xs={7}>
                <Box mx={4}>
                    <Typography variant='h3'>
                        Create your first room now!
                    </Typography>
                    <Typography mt={2}>
                        Talk with people from around the world with the same
                        interests
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={5}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        my: 8,
                    }}>
                    <CreateRoomForm />
                </Box>
            </Grid>
        </Grid>
    );
};

export default CreateRoom;
