// ProtectedRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // Check if the JWT token exists in localStorage
  const token = localStorage.getItem("token");

  // If there's no token, redirect the user to the login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If the token exists, check if it's valid (you can implement further JWT validation here)
  // For simplicity, we'll assume the token is valid if it exists
  return <Outlet />;
};

export default ProtectedRoute;
