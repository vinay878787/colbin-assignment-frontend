import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface UserProfile {
  name: string;
  email: string;
  phone?: string;
  website?: string;
  createdAt?: string;
}

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
      <div>
        <h2>Unauthorized</h2>
        <button onClick={() => navigate("/login")}>Go to Login</button>
      </div>
    );
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile.</div>;

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <p><strong>Name:</strong> {data?.name}</p>
      <p><strong>Email:</strong> {data?.email}</p>
      {data?.phone && <p><strong>Phone:</strong> {data.phone}</p>}
      {data?.website && <p><strong>Website:</strong> {data.website}</p>}
      <p><strong>Joined:</strong> {data?.createdAt && new Date(data.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default Profile;
