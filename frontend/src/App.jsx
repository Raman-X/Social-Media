import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login"; // Your login component
import Register from "./Register"; // Your register component
import Dashboard from "./Dashboard"; // Your dashboard component
// import ProtectedLayout from "./ProtectedLayout"; // Layout for protected routes
import ProtectedRoute from "./ProtectedRoute"; // Protected route logic

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for login page */}
        <Route path="/login" element={<Login />} />

        {/* Route for register page */}
        <Route path="/register" element={<Register />} />

        {/* Protected Route - Wrap Dashboard in ProtectedRoute */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
