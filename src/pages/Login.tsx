
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/auth";
import type { LoginForm } from "../interfaces/user";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getErrorMessage } from "../utils/errorHandler";

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (data: LoginForm) => {
      const res = await loginUser(data);
      localStorage.setItem("token", res.data.token);
    },
    onSuccess: () => {
      toast.success("Login successful!");
      navigate("/profile");
    },
    onError: (error: unknown) => {
      toast.error(getErrorMessage(error));
    }
  });

  return (
    <Box className="max-w-md mx-auto mt-10 p-8 bg-white rounded shadow">
      <ToastContainer position="top-center" autoClose={3000} />
      <Typography variant="h4" fontWeight={700} color="primary" className="mb-6 text-center">
        Login
      </Typography>
      <form onSubmit={handleSubmit((data) => mutation.mutate(data))} className="space-y-4">
        <Stack spacing={2}>
          <TextField
            {...register("email", { required: true })}
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            error={!!errors.email}
            helperText={errors.email ? "Email is required" : ""}
          />
          <TextField
            {...register("password", { required: true })}
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            error={!!errors.password}
            helperText={errors.password ? "Password is required" : ""}
          />
          <Button type="submit" variant="contained" color="primary" disabled={mutation.isPending} fullWidth>
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Login;
