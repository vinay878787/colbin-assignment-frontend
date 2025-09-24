import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import type { UserProfile } from "../interfaces/user";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const { data, isLoading, error } = useQuery<UserProfile>({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/api/users/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    },
    enabled: !!token,
  });

  if (!token) {
    return (
      <Box
        className="min-h-screen flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #18181b 0%, #fff 100%)" }}
      >
        <Box
          className="max-w-md w-full p-8 rounded shadow-lg text-center"
          style={{ background: "#fff" }}
        >
          <Typography
            variant="h5"
            color="error"
            fontWeight={700}
            gutterBottom
            className="text-gray-900"
          >
            Unauthorized
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/login")}
            className="bg-gray-900 hover:bg-gray-700 text-white font-bold"
          >
            Go to Login
          </Button>
        </Box>
      </Box>
    );
  }

  if (isLoading)
    return (
      <Box
        className="min-h-screen flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #18181b 0%, #fff 100%)" }}
      >
        <Typography className="text-gray-900">Loading...</Typography>
      </Box>
    );
  if (error)
    return (
      <Box
        className="min-h-screen flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #18181b 0%, #fff 100%)" }}
      >
        <Typography color="error" className="text-gray-900">
          Error loading profile.
        </Typography>
      </Box>
    );

  return (
    <Box
      className="min-h-screen flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #18181b 0%, #fff 100%)" }}
    >
      <Box
        className="max-w-md w-full p-8 rounded shadow-lg"
        style={{ background: "#fff" }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          className="mb-6 text-center text-gray-900"
        >
          Profile
        </Typography>
        <Box className="space-y-2 mb-6">
          <Typography className="text-gray-900 font-bold">
            <strong>Name:</strong> {data?.name}
          </Typography>
          <Typography className="text-gray-900 font-bold">
            <strong>Email:</strong> {data?.email}
          </Typography>
          {data?.phone && (
            <Typography className="text-gray-900 font-bold">
              <strong>Phone:</strong> {data.phone}
            </Typography>
          )}
          {data?.website && (
            <Typography className="text-gray-900 font-bold">
              <strong>Website:</strong> {data.website}
            </Typography>
          )}
          <Typography className="text-gray-500 font-semibold">
            <strong>Joined:</strong>{" "}
            {data?.createdAt && new Date(data.createdAt).toLocaleDateString()}
          </Typography>
        </Box>
        <Button
          variant="outlined"
          color="primary"
          className="w-full font-bold border-gray-900 text-gray-900"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          Sign Out
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
