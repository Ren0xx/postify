import { Box, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Loading from "@/components/utils/Loading";
import useUserName from "@/hooks/useUserName";

type UserNameProps = {
    isLogged: boolean;
};
const UserNameSection = ({ isLogged }: UserNameProps) => {
    const { name, updateUserName, handleChange, isLoading } =
        useUserName(isLogged);
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
            }}>
            <Typography variant='h4'>Zmień nick</Typography>
            {isLoading ? (
                <Loading />
            ) : (
                <TextField
                    id='outlined-multiline-static'
                    multiline
                    value={name}
                    rows={2}
                    onChange={handleChange}
                />
            )}

            <LoadingButton
                variant='contained'
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={updateUserName}
                loading={isLoading}
                loadingIndicator='Wczytywanie'>
                Zaktualizuj
            </LoadingButton>
        </Box>
    );
};

export default UserNameSection;
