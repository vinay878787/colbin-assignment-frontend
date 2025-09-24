import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface LoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (data: LoginForm) => {
      const res = await axios.post("http://localhost:3000/api/users/login", data);
      localStorage.setItem("token", res.data.token);
    },
    onSuccess: () => {
      alert("Login successful!");
      navigate("/profile");
    },
    onError: (error: any) => {
      alert(error?.response?.data?.error || "Login failed");
    }
  });

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit((data) => mutation.mutate(data))}>
        <input {...register("email", { required: true })} placeholder="Email" type="email" />
        {errors.email && <span>Email is required</span>}
        <input {...register("password", { required: true })} placeholder="Password" type="password" />
        {errors.password && <span>Password is required</span>}
        <button type="submit" disabled={mutation.isPending}>Login</button>
      </form>
    </div>
  );
};

export default Login;
