import { api } from "@/utils/api";
import { useState } from "react";
import { useRouter } from "next/navigation";
const useDeleteAccount = () => {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const deleteOne = api.user.deleteOne.useMutation({});
    const deleteAccount = async () => {
        await deleteOne.mutateAsync();
        router.push("/");
    };
    return {
        open,
        handleClose,
        handleOpen,
        deleteAccount,
    };
};

export default useDeleteAccount;
