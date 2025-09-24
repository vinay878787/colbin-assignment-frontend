
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/auth";
import type { RegisterForm } from "../interfaces/user";
import Button from "@mui/material/Button";

const Register: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterForm>();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      alert("Registration successful! Please login.");
      navigate("/login");
    },
    onError: (error: any) => {
      alert(error?.response?.data?.error || "Registration failed");
    }
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      <form onSubmit={handleSubmit((data) => mutation.mutate(data))} className="space-y-4">
        <input {...register("name", { required: true })} className="w-full p-2 border rounded" placeholder="Name" />
        {errors.name && <span className="text-red-500">Name is required</span>}
        <input {...register("email", { required: true })} className="w-full p-2 border rounded" placeholder="Email" type="email" />
        {errors.email && <span className="text-red-500">Email is required</span>}
        <input {...register("password", { required: true })} className="w-full p-2 border rounded" placeholder="Password" type="password" />
        {errors.password && <span className="text-red-500">Password is required</span>}
        <Button type="submit" variant="contained" color="primary" disabled={mutation.isPending} fullWidth>
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
