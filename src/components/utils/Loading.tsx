import { Backdrop, CircularProgress } from "@mui/material";

const Loading = () => {
    return (
        <Backdrop open={true}>
            <CircularProgress color='primary' />
        </Backdrop>
    );
};

export default Loading;
