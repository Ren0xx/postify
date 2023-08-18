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

    const addMany = api.tag.addMany.useMutation({});
    const { data: allTags } = api.tag.getAll.useQuery(undefined, {});

    return {
        allTags,
        open,
        handleClose,
        handleOpen,
        addMany,
    };
};

export default useAddTag;
