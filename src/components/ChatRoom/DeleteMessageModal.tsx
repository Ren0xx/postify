import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import useDeleteMessage from "@/hooks/useDeleteMessage";
import { type RefObject } from "react";
type ModalProps = {
    deleteButtonRef: RefObject<HTMLButtonElement>;
    id: string | undefined;
};
const DeleteMessageModal = (props: ModalProps) => {
    const { deleteButtonRef, id } = props;
    const { open, handleClose, handleOpen, removeMessage } = useDeleteMessage();

    const deleteMessage = () => {
        void removeMessage(id);
    };
    return (
        <>
            <IconButton
                ref={deleteButtonRef}
                sx={{
                    opacity: 0,
                    transition: "opacity 0.2s",
                    ml: "auto",
                    px: 4,
                    "&:hover": {
                        backgroundColor: "transparent",
                        color: "inherit",
                    },
                }}
                onClick={handleOpen}>
                <ClearIcon fontSize='large' />
            </IconButton>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='room-delete'>
                <DialogContent>
                    <h2>Czy jesteś pewien?</h2>
                    <p>Tej operacji nie można cofnąć.</p>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={deleteMessage}
                        autoFocus
                        color='error'
                        variant='contained'>
                        Usuń
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default DeleteMessageModal;
