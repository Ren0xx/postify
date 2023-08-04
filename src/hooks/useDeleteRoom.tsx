import { api } from "@/utils/api";
import { useState } from "react";
import { useRouter } from "next/navigation";
const useDeleteRoom = () => {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const removeOne = api.room.removeOne.useMutation({});
    const removeRoom = async (id: string) => {
        await removeOne.mutateAsync({ id });
        router.push("/");
    };
    return {
        open,
        handleClose,
        handleOpen,
        removeRoom,
    };
};

export default useDeleteRoom;
