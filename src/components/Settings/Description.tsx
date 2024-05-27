import { Box, Typography, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Loading from "@/components/utils/Loading";
import useUserDescription from "@/hooks/useUserDescription";
type DescProps = {
    isLogged: boolean;
};
const Description = ({ isLogged }: DescProps) => {
    const { formik, isLoading, isRefetching } = useUserDescription(isLogged);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
            }}>
            <Typography variant='h4'>About you</Typography>
            {isLoading ? (
                <Loading />
            ) : (
                <Box
                    component='form'
                    onSubmit={formik.handleSubmit}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                    }}>
                    <TextField
                        id='description'
                        multiline
                        value={formik.values.description}
                        rows={4}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.description &&
                            Boolean(formik.errors.description)
                        }
                        helperText={
                            formik.touched.description &&
                            formik.errors.description
                        }
                    />

                    <LoadingButton
                        variant='contained'
                        type='submit'
                        // eslint-disable-next-line @typescript-eslint/no-misused-promises
                        loading={isLoading || isRefetching}
                        loadingIndicator='Loading'>
                        Update
                    </LoadingButton>
                </Box>
            )}
        </Box>
    );
};

export default Description;
