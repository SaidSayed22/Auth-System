// src/pages/Register.tsx

import { Button, TextField } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RegisterFormData } from "../types/RegisterFormTypes";
import { EGYPTIAN_PHONE_PATTERN, EMAIL_PATTERN, PASSWORD_PATTERN } from "../utils/patterns";

import { submitRegister } from "../helpers/RegisterHelpers";


const Register: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<RegisterFormData>({
    mode: "onBlur",
  });

  const watchPassword = watch("password");

 
  const SubmitRegister: SubmitHandler<RegisterFormData> = (data) => {
    submitRegister(data, navigate, setError);
  };

  return (
    <form
      onSubmit={handleSubmit(SubmitRegister)}
      className="flex flex-col gap-4 p-4 max-w-lg mx-auto"
    >
      <h1 className="text-2xl font-bold mb-4">Register</h1>

      <TextField
        {...register("first_name", { required: "First Name is required" })}
        label="First Name"
        error={!!errors.first_name}
        helperText={errors.first_name?.message}
      />
      <TextField
        {...register("last_name", { required: "Last Name is required" })}
        label="Last Name"
        error={!!errors.last_name}
        helperText={errors.last_name?.message}
      />
      <TextField
        {...register("phone", {
          required: "Phone is required",
          pattern: {
            value: EGYPTIAN_PHONE_PATTERN,
            message:
              "Invalid Egyptian phone number (must start with 01 and contain 11 digits)",
          },
        })}
        label="Phone"
        error={!!errors.phone}
        helperText={errors.phone?.message}
      />
      <TextField
        {...register("email", {
          required: "Email is required",
          pattern: {

            value: EMAIL_PATTERN,
            message: "Invalid email address",
          },
        })}
        label="Email"
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        {...register("username", { required: "Username is required" })}
        label="Username"
        error={!!errors.username}
        helperText={errors.username?.message}
      />
      <TextField
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
          },
          pattern: {
            value:
             PASSWORD_PATTERN,
            message:
              "Password must contain at least one uppercase letter, one lowercase letter, and one special character",
          },
        })}
        type="password"
        label="Password"
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <TextField
        {...register("password_confirmation", {
          required: "Password Confirmation is required",
          validate: (value) =>
            value === watchPassword || "Passwords do not match",
        })}
        type="password"
        label="Confirm Password"
        error={!!errors.password_confirmation}
        helperText={errors.password_confirmation?.message}
      />
      <Button disabled={isSubmitting} variant="contained" type="submit">
        {isSubmitting ? "Loading..." : "Register"}
      </Button>
    </form>
  );
};

export default Register;
