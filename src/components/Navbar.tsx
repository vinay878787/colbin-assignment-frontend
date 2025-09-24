import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full px-2 sm:px-6 py-2 bg-white shadow flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/vite.svg"
            alt="Logo"
            className="w-8 h-8 rounded-full"
          />
          <Typography component={'span'} className="text-gray-900 font-bold text-base sm:text-lg">XYZ</Typography>
        </Link>
      </div>
      <div>
        <Link to="/profile" className="flex items-center">
          <AccountCircleIcon/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
