import { Backdrop, CircularProgress } from "@mui/material";

const SiteLoading = () => {
    return (
        <Backdrop open={true}>
            <CircularProgress color='primary' />
        </Backdrop>
    );
};

export default SiteLoading;
