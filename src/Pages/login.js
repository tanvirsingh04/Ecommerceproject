import "./login.css";

import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [userName, setUserName] = useState("");

  const [password, setPassword] = useState("");

  const [loggedInUser, setLoggedInUser] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    // Check whether username and password are empty
    if (userName.trim() === "" || password.trim() === "") {
      alert("Please enter both username and password.");
      return;
    }

    try {
      // Send username to backend
      const response = await fetch(
        `http://localhost:9000/get_user/${encodeURIComponent(userName)}`,
      );

      console.log("Response status:", response.status);
      console.log("Response OK:", response.ok);

      // Convert server response to JavaScript object
      const result = await response.json();

      console.log("Server response:", result.user.userName);

      // Check whether request was successful

      // Check whether user exists

      // Check password
      if (result.user.password !== password) {
        alert("Invalid password.");
        setLoggedIn(false);
        setPassword("");
        return;
      }

      // LOGIN SUCCESSFUL
      console.log("Login successful:", result.user);

      // Save complete user object
      localStorage.setItem("loggedInUser", JSON.stringify(result.user));

      // Store username in state
      setLoggedInUser(result.user.userName);

      // Change login state
      setLoggedIn(true);

      // Clear input fields
      setUserName("");
      setPassword("");

      // Navigate to users page
      navigate("/users");
    } catch (error) {
      console.error("Login error:", error);

      setLoggedIn(false);
      setUserName("");
      setPassword("");

      alert("Server Connection Failed.");
    }
  };

  return (
    <div className="login-page">
      <div className="logintable">
        <h1>Login</h1>

        <input
          type="text"
          placeholder="Username"
          className="inputusername"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="inputpassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="button" onClick={handleLogin}>
          Login
        </button>

        {loggedIn && <p className="welcome-message">Welcome {loggedInUser}</p>}
      </div>
    </div>
  );
}

export default Login;
