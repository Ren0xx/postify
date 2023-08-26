import { useState } from "react";
import { api } from "@/utils/api";
import { useRouter } from "next/router";
const useUserName = (isLogged: boolean) => {
    const [name, setName] = useState<string>("");
    const router = useRouter();
    const { isLoading, refetch, isRefetching } =
        api.user.getLoggedUserName.useQuery(undefined, {
            enabled: isLogged,
            onSuccess: (data) => {
                if (!!data && data.hasOwnProperty("name")) {
                    setName(data.name as string);
                }
            },
        });

    const update = api.user.updateUserName.useMutation({});
    const updateUserName = async () => {
        await update.mutateAsync({ userName: name });
        void refetch();
        void router.reload();
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    return {
        name,
        isLoading,
        isRefetching,
        updateUserName,
        handleChange,
    };
};

export default useUserName;
