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
            <Typography variant='h4'>Zarządzanie kontem</Typography>
            <Button onClick={handleOpen} variant='contained' color='error'>
                Usuń konto
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='account-delete'>
                <DialogTitle id='remove-account'>Usuń konto</DialogTitle>
                <DialogContent>
                    <h2>Czy jesteś pewien?</h2>
                    <p>Tej operacji nie można cofnąć.</p>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClick}
                        autoFocus
                        color='error'
                        variant='contained'>
                        Usuń konto
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default DeleteAccount;
