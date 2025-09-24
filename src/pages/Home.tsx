
import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Home: React.FC = () => (
  <Box
    className="w-full min-h-[80vh] flex flex-col items-center justify-center bg-[#f5f7fa] border border-red-900"
  >
    <Typography variant="h3" fontWeight={700} color="primary" gutterBottom>
      Welcome to the Recruitment Platform
    </Typography>
    <Typography variant="subtitle1" color="text.secondary" mb={4}>
      Find your dream job or the perfect candidate.
    </Typography>
    <Stack direction="row" spacing={3}>
      <Button component={Link} to="/register" variant="contained" color="primary" size="large">
        Register
      </Button>
      <Button component={Link} to="/login" variant="outlined" color="primary" size="large">
        Login
      </Button>
      <Button component={Link} to="/profile" variant="text" color="secondary" size="large">
        Profile
      </Button>
    </Stack>
  </Box>
);

export default Home;
