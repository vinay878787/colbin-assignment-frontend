
import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box className="min-h-screen flex items-center justify-center px-2 sm:px-4" style={{background: "linear-gradient(135deg, #18181b 0%, #fff 100%)"}}>
      <Box className="w-full max-w-xl sm:max-w-lg md:max-w-xl p-4 sm:p-8 rounded shadow-lg text-center" style={{background: "#fff"}}>
        <Typography variant="h3" fontWeight={700} className="mb-4 text-gray-900 text-2xl sm:text-3xl md:text-4xl">
          Welcome to the Recruitment Platform
        </Typography>
        <Typography variant="h6" className="mb-6 text-gray-500 font-bold text-base sm:text-lg md:text-xl">
          Register, login, and view your profile. Built with React, TypeScript, MUI, Tailwind, Node, Express, MongoDB and Vitest
        </Typography>
        <Box className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="contained" color="primary" onClick={() => navigate("/register")}
            className="bg-gray-900 hover:bg-gray-700 text-white font-bold">
            Get Started
          </Button>
          <Button variant="outlined" color="primary" onClick={() => navigate("/login")}
            className="border-gray-900 text-gray-900 font-bold">
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
