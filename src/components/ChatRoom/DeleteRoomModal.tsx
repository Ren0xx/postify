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
        <>
            <Button onClick={handleOpen} variant='contained' color='error'>
                Delete room
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='room-delete'>
                <DialogTitle id='remove-room'>Usuń pokój</DialogTitle>
                <DialogContent>
                    <h2>Are you sure?</h2>
                    <p>You cannot undo this operation.</p>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClick}
                        autoFocus
                        color='error'
                        variant='contained'>
                        Delete room
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default DeleteRoomModal;
