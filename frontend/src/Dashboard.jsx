// Dashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // Get user info from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // Handle logout
  const handleLogout = () => {
    // Remove token and user data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <p>Welcome, {user?.name || "User"}</p>
      <button
        onClick={handleLogout}
        className="mt-4 p-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
