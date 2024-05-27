import { Box, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Loading from "@/components/utils/Loading";
import useUserName from "@/hooks/useUserName";

type UserNameProps = {
    isLogged: boolean;
};
const UserNameSection = ({ isLogged }: UserNameProps) => {
    const { isLoading, formik } = useUserName(isLogged);
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
            }}>
            <Typography variant='h4'>Change your name</Typography>
            {isLoading ? (
                <Loading />
            ) : (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                    }}
                    component='form'
                    onSubmit={formik.handleSubmit}>
                    <TextField
                        id='name'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.name && Boolean(formik.errors.name)
                        }
                        helperText={formik.touched.name && formik.errors.name}
                    />

                    <LoadingButton
                        type='submit'
                        variant='contained'
                        // eslint-disable-next-line @typescript-eslint/no-misused-promises
                        loading={isLoading}
                        loadingIndicator='Loading'>
                        Update
                    </LoadingButton>
                </Box>
            )}
        </Box>
    );
};

export default UserNameSection;
