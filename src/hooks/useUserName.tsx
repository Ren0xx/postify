import { useFormik } from "formik";
import * as yup from "yup";
import { api } from "@/utils/api";
import { useRouter } from "next/router";
const useUserName = (isLogged: boolean) => {
    const router = useRouter();
    const { data, isLoading, refetch, isRefetching } =
        api.user.getLoggedUserName.useQuery(undefined, {
            enabled: isLogged,
            onSuccess: (data) => {
                if (!!data && data.hasOwnProperty("name")) {
                    handleNameChange(data.name as string);
                }
            },
        });

    const update = api.user.updateUserName.useMutation({});
    const validationSchema = yup.object({
        name: yup
            .string()
            .trim()
            .required("This field is required")
            .min(1, "Fill this field")
            .max(20, "Name cannot be longer than 20 characters"),
    });
    const formik = useFormik({
        initialValues: {
            name: data?.name as string,
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            await update.mutateAsync({ userName: values.name });
            void refetch();
            void router.reload();
        },
    });
    const handleNameChange = (newValue: string) => {
        void formik.setFieldValue("name", newValue.trim());
    };
    return {
        isLoading,
        isRefetching,
        formik,
    };
};

export default useUserName;
