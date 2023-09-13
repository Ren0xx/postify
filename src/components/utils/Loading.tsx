import { Box, CircularProgress } from "@mui/material";
const Loading = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 10,
            }}>
            <CircularProgress color='inherit' />
        </Box>
    );
};

export default Loading;
