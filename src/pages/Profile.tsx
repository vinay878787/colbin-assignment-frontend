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
        headers: { Authorization: `Bearer ${token}` }
      });
      return res.data;
    },
    enabled: !!token
  });

  if (!token) {
    return (
      <Box className="max-w-md mx-auto mt-10 p-8 bg-white rounded shadow text-center">
        <Typography variant="h5" color="error" fontWeight={700} gutterBottom>
          Unauthorized
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate("/login")}>Go to Login</Button>
      </Box>
    );
  }

  if (isLoading) return <Box className="text-center mt-10"><Typography>Loading...</Typography></Box>;
  if (error) return <Box className="text-center mt-10"><Typography color="error">Error loading profile.</Typography></Box>;

  return (
    <Box className="max-w-md mx-auto mt-10 p-8 bg-white rounded shadow">
      <Typography variant="h4" fontWeight={700} color="primary" className="mb-6 text-center">
        Profile
      </Typography>
      <Box className="space-y-2">
        <Typography><strong>Name:</strong> {data?.name}</Typography>
        <Typography><strong>Email:</strong> {data?.email}</Typography>
        {data?.phone && <Typography><strong>Phone:</strong> {data.phone}</Typography>}
        {data?.website && <Typography><strong>Website:</strong> {data.website}</Typography>}
        <Typography><strong>Joined:</strong> {data?.createdAt && new Date(data.createdAt).toLocaleDateString()}</Typography>
      </Box>
    </Box>
  );
};

export default Profile;
