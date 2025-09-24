import type { AxiosErrorResponse } from "../interfaces/user";

export function getErrorMessage(error: unknown): string {
  if (!error) return "Unknown error";
  if (typeof error === "string") return error;
  if (error instanceof Error) return error.message;
  if (typeof error === "object") {
    const axiosErr = error as AxiosErrorResponse;
    if (axiosErr.response?.data?.error) return axiosErr.response.data.error;
    if (axiosErr.response?.data?.message) return axiosErr.response.data.message;
    if (axiosErr.message) return axiosErr.message;
  }
  return "An unexpected error occurred.";
}
