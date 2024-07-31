export const authErrors = (error: string) => {
  console.log(error);
  if (error === "auth/invalid-email") {
    return "El correo ingresado no es válido";
  }
  if (error === "auth/invalid-login-credentials") {
    return "El correo o la contraseña es incorrecta";
  }
  if (error === "auth/email-already-in-use") {
    return "El correo ingresado ya esta en uso";
  }
  if (error === "auth/email-already-in-use") {
    return "El correo ingresado ya esta en uso";
  }
  if (error === "auth/too-many-requests") {
    return "Muchos intentos fallidos, intente mas tarde";
  }
  return error;
};
