import {
    Autocomplete,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
} from "@mui/material";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import useCreateRoom from "@/hooks/useCreateRoom";
import ErrorSnackbar from "@/components/MainPage/RoomExistsSnackbar";

const CreateRoomForm = () => {
    const {
        open,
        handleClose,
        handleClickOpen,
        formik,
        isRefetching,
        nameTaken,
        TagCategories,
        handleTagsChange,
    } = useCreateRoom();

    return (
        <>
            <Button
                variant='contained'
                onClick={handleClickOpen}
                id='open-create-room-form'>
                Stwórz pokój
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='room-create'
                aria-describedby='room-dialog-description'>
                <DialogTitle id='alert-dialog-title'>Stwórz pokój</DialogTitle>
                <form onSubmit={formik.handleSubmit}>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin='normal'
                            id='name'
                            label='Nazwa'
                            type='text'
                            fullWidth
                            aria-label='name-input'
                            variant='standard'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.name &&
                                Boolean(formik.errors.name)
                            }
                            helperText={
                                formik.touched.name && formik.errors.name
                            }
                        />
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        id='isPrivate'
                                        checked={formik.values.isPrivate}
                                        onChange={formik.handleChange}
                                    />
                                }
                                label='Pokój prywatny'
                            />
                        </FormGroup>
                        <TextField
                            autoFocus
                            disabled={!formik.values.isPrivate}
                            margin='normal'
                            id='password'
                            label='hasło'
                            type='password'
                            fullWidth
                            aria-label='password-input'
                            variant='standard'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.password &&
                                Boolean(formik.errors.password)
                            }
                            helperText={
                                formik.touched.password &&
                                formik.errors.password
                            }
                        />
                        <Autocomplete
                            multiple
                            id='tags'
                            options={TagCategories}
                            value={formik.values.tags}
                            onChange={handleTagsChange}
                            getOptionLabel={(option) => option.label}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label='Tagi'
                                    error={Boolean(
                                        formik.touched.tags &&
                                            formik.errors.tags
                                    )}
                                    fullWidth
                                    helperText={
                                        formik.touched.tags &&
                                        formik.errors.tags
                                    }
                                />
                            )}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={handleClose}
                            autoFocus
                            id='create-room'
                            disabled={formik.values.name === "" || isRefetching}
                            type='submit'>
                            Utwórz
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
            <ErrorSnackbar open={nameTaken} />
        </>
    );
};

export default CreateRoomForm;
