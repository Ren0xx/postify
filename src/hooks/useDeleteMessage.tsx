import { api } from "@/utils/api";
import { useState } from "react";
const useDeleteMessage = () => {
    const [open, setOpen] = useState<boolean>(false);
    const deleteOne = api.message.deleteOne.useMutation();

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const removeMessage = async (id: string | undefined) => {
        if (id) await deleteOne.mutateAsync({ id });
    };
    return {
        open,
        handleClose,
        handleOpen,
        removeMessage,
    };
};

export default useDeleteMessage;
