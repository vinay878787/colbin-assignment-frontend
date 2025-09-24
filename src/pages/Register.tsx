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
      navigate("/login");
    },
    onError: (error: unknown) => {
      toast.error(getErrorMessage(error));
    }
  });

  return (
    <Box className="max-w-md mx-auto mt-10 p-8 bg-white rounded shadow">
      <ToastContainer position="top-center" autoClose={3000} />
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Register</h2>
      <form onSubmit={handleSubmit((data) => mutation.mutate(data))} className="space-y-4">
        <Box>
          <input {...register("name", { required: true })} className="w-full p-2 border rounded" placeholder="Name" />
          {errors.name && <span className="text-red-500">Name is required</span>}
        </Box>
        <Box>
          <input {...register("email", { required: true })} className="w-full p-2 border rounded" placeholder="Email" type="email" />
          {errors.email && <span className="text-red-500">Email is required</span>}
        </Box>
        <Box>
          <input {...register("password", { required: true })} className="w-full p-2 border rounded" placeholder="Password" type="password" />
          {errors.password && <span className="text-red-500">Password is required</span>}
        </Box>
        <Button type="submit" variant="contained" color="primary" disabled={mutation.isPending} fullWidth className="bg-blue-600 hover:bg-blue-700">
          Register
        </Button>
      </form>
    </Box>
  );
};

export default Register;
