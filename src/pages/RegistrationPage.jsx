import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import "../styles/registerPage.css";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { register, error } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(username, password);
  };

  return (
    <div className="login-box">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <button type="submit">
          Login
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
