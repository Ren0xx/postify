"use client";
import {
    Button,
    Checkbox,
    FormGroup,
    FormControlLabel,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
} from "@mui/material";
import { api } from "~/utils/api";
import * as yup from "yup";
import { useState } from "react";
import { useFormik } from "formik";

const validationSchema = yup.object({
    name: yup
        .string()
        .required("To pole jest wymagane")
        .min(1, "Wypełnij to pole")
        .max(50, "Nazwa nie może byc dłuzsza niz 50 znaków"),
    isPrivate: yup.boolean(),
    password: yup.string().when("isPrivate", {
        is: true,
        then: (validationSchema) =>
            validationSchema
                .required("Pole nie moze byc puste")
                .min(4, "Hasło musi byc dluższe niż 4 znaki.")
                .max(20, "Hasło nie moze byc dluższe niz 20 znaków."),
    }),
});
const CreateRoomForm = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const formik = useFormik({
        initialValues: {
            name: "",
            isPrivate: false,
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            if (values.isPrivate) {
                createPrivateRoom.mutate({
                    name: values.name,
                    isPublic: !values.isPrivate,
                    password: values.password,
                });
                resetForm();
                return;
            }
            createPublicRoom.mutate({ name: values.name });
            resetForm();
        },
    });
    const createPrivateRoom = api.room.createPrivate.useMutation({});
    const createPublicRoom = api.room.createPublic.useMutation({});
    return (
        <>
            <Button
                variant='contained'
                onClick={handleClickOpen}
                id='open-create-room-form'>
                Stworz pokoj
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='room-create'
                aria-describedby='room-dialog-description'>
                <DialogTitle id='alert-dialog-title'>Stworz pokoj</DialogTitle>
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
                                label='Pokoj prywatny'
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
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={() => {
                                if (Object.keys(formik.errors).length === 0) {
                                    handleClose();
                                }
                            }}
                            autoFocus
                            id='create-room'
                            disabled={formik.values.name === ""}
                            type='submit'>
                            Utworz
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
};
export default CreateRoomForm;
