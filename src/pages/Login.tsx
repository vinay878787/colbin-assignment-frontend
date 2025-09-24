
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
      setTimeout(() => {
        navigate("/profile");
      }, 700);
    },
    onError: (error: unknown) => {
      toast.error(getErrorMessage(error));
    }
  });

  return (
    <Box className="min-h-screen flex items-center justify-center px-2 sm:px-4" style={{background: "linear-gradient(135deg, #18181b 0%, #fff 100%)"}}>
      <Box className="w-full max-w-md sm:max-w-sm md:max-w-md p-4 sm:p-8 rounded shadow-lg" style={{background: "#fff"}}>
        <ToastContainer position="top-center" autoClose={3000} />
        <Typography variant="h4" fontWeight={700} className="mb-6 text-center text-gray-900 text-xl sm:text-2xl md:text-3xl">
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
              InputProps={{ className: "text-gray-900 font-semibold" }}
              InputLabelProps={{ className: "text-gray-500" }}
            />
            <TextField
              {...register("password", { required: true })}
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              error={!!errors.password}
              helperText={errors.password ? "Password is required" : ""}
              InputProps={{ className: "text-gray-900 font-semibold" }}
              InputLabelProps={{ className: "text-gray-500" }}
            />
            <Button type="submit" variant="contained" color="primary" disabled={mutation.isPending} fullWidth className="bg-gray-900 hover:bg-gray-700 text-white font-bold">
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
