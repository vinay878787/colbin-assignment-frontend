import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/auth";
import type { RegisterForm } from "../interfaces/user";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getErrorMessage } from "../utils/errorHandler";

const Register: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterForm>();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success("Registration successful! Please login.");
      setTimeout(() => {
        navigate("/login");
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
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-900">Register</h2>
        <form onSubmit={handleSubmit((data) => mutation.mutate(data))} className="space-y-4">
          <Box>
            <input {...register("name", { required: true })} className="w-full p-2 sm:p-3 border rounded bg-transparent text-gray-900 font-semibold" placeholder="Name" />
            {errors.name && <span className="text-red-500 font-semibold">Name is required</span>}
          </Box>
          <Box>
            <input {...register("email", { required: true })} className="w-full p-2 sm:p-3 border rounded bg-transparent text-gray-900 font-semibold" placeholder="Email" type="email" />
            {errors.email && <span className="text-red-500 font-semibold">Email is required</span>}
          </Box>
          <Box>
            <input {...register("password", { required: true })} className="w-full p-2 sm:p-3 border rounded bg-transparent text-gray-900 font-semibold" placeholder="Password" type="password" />
            {errors.password && <span className="text-red-500 font-semibold">Password is required</span>}
          </Box>
          <Button type="submit" variant="contained" color="primary" disabled={mutation.isPending} fullWidth className="bg-gray-900 hover:bg-gray-700 text-white font-bold">
            Register
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
