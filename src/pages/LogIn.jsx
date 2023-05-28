import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Formik } from "formik";
import { theme } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import * as Yup from "yup";
import useValidate from "../hooks/useValidate";

export default function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  // const { validate } = useValidate();
  const initialValues = {
    email: "",
    password: "",
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevValue) => !prevValue);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Ingresa un correo electrónico válido")
      .required("Este campo es requerido"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("Este campo es requerido"),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Lógica para manejar el envío del formulario
    console.log(values);
    resetForm();
  };

  const getInputStyles = (hasError, touched) => {
    return [
      styles.input,
      hasError && styles.inputError,
      touched && hasError && { borderBottomColor: theme.colors.error },
    ];
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <View
            style={[
              styles.inputContainer,
              errors.email && touched.email && styles.inputContainerError,
            ]}
          >
            <TextInput
              style={getInputStyles(errors.email, touched.email)}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              autoCapitalize="none"
              keyboardType="email-address"
              value={values.email}
              placeholder="Correo electrónico"
            />
          </View>
          {errors.email && touched.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}

          <View
            style={[
              styles.inputContainer,
              errors.password && touched.password && styles.inputContainerError,
            ]}
          >
            <TextInput
              style={getInputStyles(errors.password, touched.password)}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              placeholder="Contraseña"
              secureTextEntry={!showPassword}
            />
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={24}
              color={theme.colors.textSecondary}
              onPress={togglePasswordVisibility}
            />
          </View>
          {errors.password && touched.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}
            activeOpacity={0.7}
            disabled={Object.keys(errors).length !== 0}
          >
            <Ionicons
              name="lock-closed-outline"
              size={24}
              color={theme.colors.surface}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainerError: {
    borderBottomColor: theme.colors.error,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    color: "black",
  },
  inputError: {
    borderColor: theme.colors.error,
  },
  error: {
    color: theme.colors.error,
    marginBottom: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    flexDirection: "row",
  },
  buttonText: {
    color: theme.colors.surface,
    fontSize: 16,
    fontWeight: "600",
  },
  buttonIcon: {
    marginRight: 8,
  },
});
