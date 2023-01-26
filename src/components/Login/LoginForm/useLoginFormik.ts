import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .oneOf(["password"], "Passwords must match")
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

interface LoginFields {
  password: string;
}

interface UseLoginFormOptions {
  onSubmit: (
    values: LoginFields,
    formikHelpers: FormikHelpers<LoginFields>
  ) => void;
}

export const useLoginFormik = ({ onSubmit }: UseLoginFormOptions) => {
  return useFormik({
    initialValues: {
      password: "",
    },
    validateOnBlur: false,
    validateOnChange: true,
    validationSchema: LoginSchema,
    onSubmit,
  });
};
