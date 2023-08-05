import { api } from "@/utils/api";
import { useState } from "react";
const useAddTag = () => {
    const [open, setOpen] = useState<boolean>(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const createOne = api.tag.createOne.useMutation({});

    return {
        open,
        handleClose,
        handleOpen,
        createOne,
    };
};

export default useAddTag;
