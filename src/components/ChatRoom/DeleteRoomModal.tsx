import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
} from "@mui/material";
import useDeleteRoom from "@/hooks/useDeleteRoom";
type ModalProps = {
    id: string;
};
const DeleteRoomModal = (props: ModalProps) => {
    const { open, handleClose, handleOpen, removeRoom } = useDeleteRoom();
    const handleClick = () => {
        void removeRoom(props.id);
    };
    return (
        <div>
            <Button onClick={handleOpen} variant='contained' color='error'>
                Usuń pokój
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='room-delete'>
                <DialogTitle id='remove-room'>Usuń pokój</DialogTitle>
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
                        Usuń pokoj
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeleteRoomModal;
