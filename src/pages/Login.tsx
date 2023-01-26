import { useLoginFormik } from "@components/Login/LoginForm/useLoginFormik";
import { Icon } from "@components/shared/Icon/Icon";

interface Props {
  onLogin: () => void;
}

export const Login = ({ onLogin }: Props) => {
  const formik = useLoginFormik({
    async onSubmit(values, formikHelpers) {
      event?.preventDefault();
      console.log(values);
      onLogin();
    },
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-36 h-36 bg-[#8EE4BA] rounded-full mb-3"></div>
      <h2 className="font-bold text-gray-500">Welcome Borthog!</h2>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={formik.handleSubmit}
      >
        <input
          className="rounded-xl bg-transparent border-2 border-solid border-black text-grey-600 placeholder-black px-2.5  mb-3 "
          type="password"
          placeholder="Password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />

        {formik.touched.password && Boolean(formik.errors.password) && (
          <p className="text-red-600 font-semibold">{formik.errors.password}</p>
        )}
        <button
          type="submit"
          className="flex items-center justify-between  type=submit bg hover:bg-green-300 text-black font-medium py-2 px-4 rounded"
        >
          Unlock {<Icon className="w-4 mx-2" icon="arrow-right" />}
        </button>
      </form>
    </div>
  );
};
