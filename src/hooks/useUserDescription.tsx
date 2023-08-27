import { useFormik } from "formik";
import * as yup from "yup";
import { api } from "@/utils/api";

const useUserDescription = (isLogged: boolean) => {
    const { data, isLoading, refetch, isRefetching } =
        api.user.getLoggedUserDescription.useQuery(undefined, {
            enabled: isLogged,
            onSuccess: (data) => {
                if (data !== undefined && data !== null) {
                    handleDescChange(data.description);
                }
            },
        });

    const update = api.user.updateLoggedUserDescription.useMutation({});
    const validationSchema = yup.object({
        description: yup
            .string()
            .trim()
            .required("To pole jest wymagane")
            .min(1, "Wypełnij to pole")
            .max(120, "Opis nie może być dłuższy niż 120 znaków"),
    });
    const formik = useFormik({
        initialValues: {
            description: data?.description as string,
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            await update.mutateAsync({ description: values.description });
            void refetch();
        },
    });
    const handleDescChange = (newValue: string) => {
        void formik.setFieldValue("description", newValue.trim());
    };

    return {
        formik,
        isLoading,
        isRefetching,
    };
};

export default useUserDescription;
