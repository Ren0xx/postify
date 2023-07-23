import { Alert, Stack, Snackbar } from "@mui/material";
type SnackbarProps = {
    open: boolean;
};

export default function ErrorSnackbar(props: SnackbarProps) {
    const { open } = props;
    return (
        <Stack spacing={2} sx={{ width: "100%" }}>
            <Snackbar
                open={open}
                autoHideDuration={1000}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
                <Alert severity='error' sx={{ width: "100%" }}>
                    Nazwa jest już zajęta.
                </Alert>
            </Snackbar>
        </Stack>
    );
}
