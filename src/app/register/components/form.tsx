"use client";
import { SpinnerLoader } from "@/components/SpinnerLoader/SpinnerLoader";
import signUp, { signIn } from "@/services/auth/auth";
import { authErrors } from "@/utilis/Errors/auth";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import * as YUP from "yup";

export const FormComponent = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const validationSchema = YUP.object().shape({
    email: YUP.string().required("Debe ingresar su correo"),
    password: YUP.string().required("Debe ingresar su contraseña"),
    name: YUP.string().required("Debe ingresar su nombre"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      const body = {
        ...values,
      };
      const { result, error } = await signUp(body);
      console.log(error);
      if (error) {
        setLoading(false);
        return toast.error(authErrors(error));
      }
      router.push("/checkout");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <img src="/assets/logos/logo.jpeg" alt="" />
      <h2>Crear una cuenta nueva</h2>
      <div className="login-input">
        <span className="input-span">
          <input
            name="name"
            placeholder="Nombre"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <label htmlFor="name">Nombre</label>
          {formik.errors.name && (
            <p className="error-text">{formik.errors.name}</p>
          )}
        </span>
      </div>
      <div className="login-input">
        <span className="input-span">
          <input
            name="email"
            placeholder="Correo"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <label htmlFor="email">Correo</label>
          {formik.errors.email && (
            <p className="error-text">{formik.errors.email}</p>
          )}
        </span>
      </div>
      <div className="login-input">
        <span className="input-span">
          <input
            name="password"
            placeholder="Contraseña"
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
          />
          <label htmlFor="password">Contraseña</label>
          {formik.errors.password && (
            <p className="error-text">{formik.errors.password}</p>
          )}
        </span>
      </div>
      <a href="/login">¿Ya tienes una cuenta? Inicia sesión.</a>
      <button className="yellow" type="submit">
        {!loading ? "Crear cuenta" : <SpinnerLoader color="#000" size={30} />}
      </button>
    </form>
  );
};
