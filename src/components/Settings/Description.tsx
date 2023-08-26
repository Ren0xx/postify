import { Box, Typography, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Loading from "@/components/utils/Loading";
import useUserDescription from "@/hooks/useUserDescription";
type DescProps = {
    isLogged: boolean;
}
const Description = ({isLogged}: DescProps) => {
    const {
        description,
        isLoading,
        isRefetching,
        updateDescription,
        handleChange,
    } = useUserDescription(isLogged);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
            }}>
            <Typography variant='h4'>Twój opis</Typography>
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