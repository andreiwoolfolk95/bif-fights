"use client";
import { SpinnerLoader } from "@/components/SpinnerLoader/SpinnerLoader";
import signUp, { signIn } from "@/services/auth/auth";
import { authErrors } from "@/utilis/Errors/auth";
import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import * as YUP from "yup";

export const FormComponent = () => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = YUP.object().shape({
    email: YUP.string().required("Debe ingresar su correo"),
    password: YUP.string().required("Debe ingresar su contraseña"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      const body = {
        ...values,
      };
      const { result, error } = await signIn(values.email, values.password);
      if (error) {
        setLoading(false);
        return toast.error(authErrors(error));
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <img src="/assets/logos/logo.jpeg" alt="" />
      <h2>Inicia sesión</h2>
      <p>Que esperas para ver la pelea</p>
      <div className="login-input"></div>
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
      <a href="/register">¿No tienes cuenta? Crea una aqui.</a>
      <button className="yellow" type="submit">
        {!loading ? "Iniciar sesión" : <SpinnerLoader color="#000" size={30} />}
      </button>
    </form>
  );
};
