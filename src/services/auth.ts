import axios from "axios";
import { API_BASE_URL } from "../constants/api";
import type { RegisterForm, LoginForm } from "../interfaces/user";

export const registerUser = async (data: RegisterForm) => {
  return axios.post(`${API_BASE_URL}/register`, data);
};

export const loginUser = async (data: LoginForm) => {
  return axios.post(`${API_BASE_URL}/login`, data);
};

export const getProfile = async (token: string) => {
  return axios.get(`${API_BASE_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};
