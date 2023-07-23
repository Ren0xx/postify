import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { api } from "@/utils/api";
import { useRouter } from "next/navigation";
const useCreateRoom = () => {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>(false);
    const [nameTaken, setAlreadyTaken] = useState<boolean>(false);

    const handleClose = () => {
        if (Object.keys(formik.errors).length === 0) {
            setOpen(false);
            setAlreadyTaken(false);
        }
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const validationSchema = yup.object({
        name: yup
            .string()
            .required("To pole jest wymagane")
            .min(1, "Wypełnij to pole")
            .max(50, "Nazwa nie może być dłuższa niż 50 znaków"),
        isPrivate: yup.boolean(),
        password: yup.string().when("isPrivate", {
            is: true,
            then: (validationSchema) =>
                validationSchema
                    .required("Pole nie może być puste")
                    .min(4, "Hasło musi być dłuższe niż 4 znaki.")
                    .max(20, "Hasło nie może być dłuższe niż 20 znaków."),
        }),
    });
    const formik = useFormik({
        initialValues: {
            name: "",
            isPrivate: false,
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            const d = refetch();
            if ((await d).data) {
                setAlreadyTaken(true);
                handleClickOpen();
                return;
            }
            if (values.isPrivate) {
                const roomPriv = await createPrivateRoom.mutateAsync({
                    name: values.name,
                    isPublic: !values.isPrivate,
                    password: values.password,
                });
                router.push(`/rooms/${roomPriv.id}`);
                return;
            }
            const roomPub = await createPublicRoom.mutateAsync({
                name: values.name,
            });
            resetForm();
            router.push(`/rooms/${roomPub.id}`);
        },
    });
    const createPrivateRoom = api.room.createPrivate.useMutation({});
    const createPublicRoom = api.room.createPublic.useMutation({});
    const { isRefetching, refetch } = api.room.nameAlreadyTaken.useQuery(
        { name: formik.values.name },
        {
            enabled: false,
        }
    );
    return {
        open,
        isRefetching,
        nameTaken,
        handleClose,
        handleClickOpen,
        formik,
        setAlreadyTaken,
    };
};

export default useCreateRoom;
