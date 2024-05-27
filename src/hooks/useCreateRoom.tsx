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
            .required("This field is required")
            .min(1, "Fill this field")
            .max(50, "Name cannot be longer than 50 characters"),
        isPrivate: yup.boolean(),
        password: yup.string().when("isPrivate", {
            is: true,
            then: (validationSchema) =>
                validationSchema
                    .required("This field is required")
                    .min(4, "Password must be longer than 4 characters.")
                    .max(20, "Password cannot be longer than 20 characters."),
        }),
        tags: yup
            .array(
                yup.object().shape({
                    id: yup.number().required(),
                    label: yup.string().required(),
                })
            )
            .required()
            .min(1, "Choose atleast one tag."),
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
