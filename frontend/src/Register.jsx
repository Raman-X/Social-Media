// Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = { name, username, email, password };

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to login page after successful registration
        navigate("/login");
      } else {
        setError(data.error); // Handle errors (e.g., username or email already exists)
      }
    } catch (error) {
      setError("An error occurred during registration.");
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 border rounded-lg shadow-md">
      <h2 className="text-center text-2xl mb-4">Register</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full p-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
