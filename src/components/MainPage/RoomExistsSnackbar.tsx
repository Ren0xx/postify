import { Alert, Snackbar } from "@mui/material";
type SnackbarProps = {
    open: boolean;
};

export default function ErrorSnackbar({ open }: SnackbarProps) {
    return (
        <Snackbar
            open={open}
            autoHideDuration={1000}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
            <Alert severity='error' sx={{ width: "100%" }}>
                The name is already taken.
            </Alert>
        </Snackbar>
    );
}
