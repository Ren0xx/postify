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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

const buttonVariants = {
    initial: {
        scale: 1,
    },
    hover: {
        scale: 1.1,
    },
    tap: {
        scale: 0.85,
        transition: {
            duration: 0.1,
        },
    },
};

const dialogVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 20,
        },
    },
    closed: {
        opacity: 0,
        y: -100,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 20,
        },
    },
};

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
            <CreateRoomButton handleClickOpen={handleClickOpen} />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='room-create'
                aria-describedby='room-dialog-description'>
                <motion.div
                    initial='closed'
                    animate={open ? "open" : "closed"}
                    variants={dialogVariants}
                    style={{ padding: "0.5em 0.5em 0.5em 0.5em" }}>
                    <DialogTitle
                        id='alert-dialog-title'
                        textAlign='center'
                        variant='h4'>
                        Stwórz nowy pokój
                    </DialogTitle>
                    <form onSubmit={formik.handleSubmit}>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin='normal'
                                id='name'
                                label='Nazwa pokoju'
                                type='text'
                                fullWidth
                                aria-label='name-input'
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
                                label='Hasło'
                                type='password'
                                fullWidth
                                aria-label='password-input'
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
                                disabled={
                                    Object.keys(formik.errors).length !== 0 ||
                                    isRefetching
                                }
                                type='submit'>
                                Utwórz
                            </Button>
                        </DialogActions>
                    </form>
                </motion.div>
            </Dialog>
            <ErrorSnackbar open={nameTaken} />
        </>
    );
};

export default CreateRoomForm;

const CreateRoomButton = ({
    handleClickOpen,
}: {
    handleClickOpen: () => void;
}) => {
    return (
        <Button
            color='secondary'
            sx={{
                px: 3,
                py: 2,
                borderRadius: 2,
            }}
            component={motion.button}
            variants={buttonVariants}
            initial='initial'
            whileHover='hover'
            whileTap='tap'
            variant='contained'
            endIcon={<ArrowForwardIcon />}
            onClick={handleClickOpen}
            id='open-create-room-form'>
            Stwórz pokój
        </Button>
    );
};
