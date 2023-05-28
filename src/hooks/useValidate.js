export default function useValidate() {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "El correo electrónico es requerido";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)
    ) {
      errors.email = "El correo electrónico no es válido";
    }

    if (!values.password) {
      errors.password = "La contraseña es requerida";
    } else if (values.password.length < 6) {
      errors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    return errors;
  };

  return { validate };
}
