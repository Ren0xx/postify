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
                        Stwórz swój pierwszy pokój już teraz!
                    </Typography>
                    <Typography mt={2}>
                        Rozmawiaj z ludźmi na całym świecie z podobnymi
                        zainteresowaniami.
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
