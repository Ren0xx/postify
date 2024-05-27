import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    Typography,
} from "@mui/material";
import useDeleteAccount from "@/hooks/useDeleteAccount";
const DeleteAccount = () => {
    const { open, handleClose, handleOpen, deleteAccount } = useDeleteAccount();
    const handleClick = () => {
        void deleteAccount();
    };
    return (
        <>
            <Typography variant='h4'>Account management</Typography>
            <Button onClick={handleOpen} variant='contained' color='error'>
                Delete account
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='account-delete'>
                <DialogTitle id='remove-account'>Delete account</DialogTitle>
                <DialogContent>
                    <h2>Czy jesteś pewien?</h2>
                    <h2>Are you sure?</h2>
                    <p>You cannot undo this operation.</p>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClick}
                        autoFocus
                        color='error'
                        variant='contained'>
                        Delete account
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default DeleteAccount;
