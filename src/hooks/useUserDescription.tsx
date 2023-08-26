import { useState } from "react";
import { api } from "@/utils/api";

const useUserDescription = (isLogged: boolean) => {
    const [description, setDescription] = useState<string>("");

    const { isLoading, refetch, isRefetching } =
        api.user.getLoggedUserDescription.useQuery(undefined, {
            enabled: isLogged,
            onSuccess: (data) => {
                if (data !== undefined && data !== null) {
                    setDescription(data.description);
                }
            },
        });

    const update = api.user.updateLoggedUserDescription.useMutation({});
    const updateDescription = async () => {
        await update.mutateAsync({ description });
        void refetch();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    return {
        description,
        isLoading,
        isRefetching,
        updateDescription,
        handleChange,
    };
};

export default useUserDescription;
