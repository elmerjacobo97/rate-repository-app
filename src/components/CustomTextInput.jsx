import React from "react";
import { useField, FormikConsumer } from "formik";
import { useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../theme";

const CustomTextInput = ({ label, icon, secureTextEntry, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [field, meta, helpers] = useField(props);

  const togglePasswordVisibility = () => {
    setShowPassword((prevValue) => !prevValue);
  };

  const getInputStyles = () => {
    return [
      styles.input,
      meta.error && styles.inputError,
      meta.touched && meta.error && { borderBottomColor: theme.colors.error },
    ];
  };

  return (
    <FormikConsumer>
      {({ handleSubmit }) => (
        <View style={styles.inputContainer}>
          <TextInput
            style={getInputStyles()}
            onChangeText={helpers.setValue}
            onBlur={helpers.setTouched}
            value={field.value}
            placeholder={label}
            secureTextEntry={secureTextEntry && !showPassword}
            {...props}
          />
          {icon && (
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={24}
              color={theme.colors.textSecondary}
              onPress={togglePasswordVisibility}
              style={styles.eyeIcon}
            />
          )}
          {meta.error && meta.touched && (
            <Text style={styles.error}>{meta.error}</Text>
          )}
        </View>
      )}
    </FormikConsumer>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
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
  eyeIcon: {
    marginRight: 10,
    padding: 10,
  },
});

export default CustomTextInput;
