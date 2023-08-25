import { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { api } from "@/utils/api";
import Loading from "@/components/utils/Loading";
import useIsLogged from "@/hooks/useIsLogged";
const Description = () => {
    const [description, setDescription] = useState<string>("");
    const isLogged = useIsLogged();

    const { isLoading, refetch, isRefetching } =
        api.user.getLoggedUserDescription.useQuery(undefined, {
            enabled: !!isLogged,
            onSuccess: (data) => {
                if (data !== undefined && data !== null)
                    setDescription(data.description);
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

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
            }}>
            <Typography variant='h4'>O mnie</Typography>
            {isLoading ? (
                <Loading />
            ) : (
                <TextField
                    id='outlined-multiline-static'
                    multiline
                    value={description}
                    rows={4}
                    onChange={handleChange}
                />
            )}

            <LoadingButton
                variant='contained'
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={updateDescription}
                loading={isLoading || isRefetching}
                loadingIndicator='Wczytywanie'>
                Zaktualizuj
            </LoadingButton>
        </Box>
    );
};

export default Description;
