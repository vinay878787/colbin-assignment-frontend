import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => (
  <div className="home-container">
    <h1>Welcome to the Recruitment Platform</h1>
    <div style={{ marginTop: 32 }}>
      <Link to="/register" className="btn">Register</Link>
      <Link to="/login" className="btn" style={{ marginLeft: 16 }}>Login</Link>
      <Link to="/profile" className="btn" style={{ marginLeft: 16 }}>Profile</Link>
    </div>
  </div>
);

export default Home;
