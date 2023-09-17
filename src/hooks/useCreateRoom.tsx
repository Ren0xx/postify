import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { api } from "@/utils/api";
import { useRouter } from "next/navigation";
import TagCategories from "@/utils/db/tagCategories";
const useCreateRoom = () => {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>(false);
    const [nameTaken, setAlreadyTaken] = useState<boolean>(false);

    const handleClose = () => {
        setOpen(false);
        setAlreadyTaken(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const validationSchema = yup.object({
        name: yup
            .string()
            .trim()
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
        tags: yup
            .array(
                yup.object().shape({
                    id: yup.number().required(),
                    label: yup.string().required(),
                })
            )
            .required()
            .min(1, "Wybierz chociaż 1 tag."),
    });
    const formik = useFormik({
        initialValues: {
            name: "",
            isPrivate: false,
            password: "",
            tags: [],
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            const d = refetch();
            if ((await d).data) {
                setAlreadyTaken(true);
                handleClickOpen();
                return;
            }
            const tagsIds = values.tags.map((tag: { id: number }) =>
                tag.id.toString()
            );
            if (values.isPrivate) {
                const room = await createRoom.mutateAsync({
                    name: values.name,
                    // isPublic: !values.isPrivate,
                    password: values.password,
                    tagsIds: tagsIds,
                });
                router.push(`/rooms/${room.id}`);
                return;
            }
            const room = await createRoom.mutateAsync({
                name: values.name,
                tagsIds: tagsIds,
            });
            resetForm();
            router.push(`/rooms/${room.id}`);
        },
    });
    const createRoom = api.room.createRoom.useMutation({});
    const { isRefetching, refetch } = api.room.nameAlreadyTaken.useQuery(
        { name: formik.values.name },
        {
            enabled: false,
        }
    );
    const handleTagsChange = (
        _event: React.ChangeEvent<object>,
        newValue: { id: number; label: string }[]
    ) => {
        void formik.setFieldValue("tags", newValue);
    };
    return {
        open,
        isRefetching,
        nameTaken,
        handleClose,
        handleClickOpen,
        formik,
        setAlreadyTaken,
        TagCategories,
        handleTagsChange,
    };
};

export default useCreateRoom;
