// src/pages/Login.tsx
import { Button, TextField } from "@mui/material";
import { useLogin } from "../helpers/LoginHelpers";
import { useForm } from "react-hook-form";
import { LoginFormData } from "../types/LoginFormTypes";


const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const {submitLogin} = useLogin()

  return (
      <form
        onSubmit={handleSubmit(submitLogin)}
        className="flex flex-col gap-4 p-4 max-w-lg mx-auto"
      >
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        <TextField
          {...register("username", { required: "Username is required" })}
          label="Username"
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <TextField
          {...register("password", { required: "Password is required" })}
          type="password"
          label="Password"
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button disabled={isSubmitting} variant="contained" type="submit">
          {isSubmitting ? "Loading..." : "Login"}
        </Button>
      </form>
  );
};

export default Login;
