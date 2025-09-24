import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/"></Link>
      </div>
      <div className="navbar-right">
        <Link to="/profile">
          <img
            src="/vite.svg"
            alt="Profile"
            style={{ width: 32, height: 32, borderRadius: "50%" }}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
