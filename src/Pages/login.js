import "./login.css";
import Navbar from "./navbar.js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { username } from './Register.js';
// import Home from './Home.js';
// import Aboutus from './About.js';
// import user from './user.js';

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Basic validation: fields not empty
    if (userName.trim() === "" || password.trim() === "") {
      alert("Please enter both username and password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          password,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        localStorage.setItem("loggedInUser", result.user.userName);
        setLoggedInUser(result.user.userName);
        setLoggedIn(true);
        setUserName("");
        setPassword("");
        navigate("/users");
      } else {
        alert(result.message);
        setLoggedIn(false);
        setUserName("");
        setPassword("");
      }
    } catch (error) {
      console.error(error);
      setLoggedIn(false);
      setUserName("");
      setPassword("");
      alert("Server Connection Failed");
    }
  };

  return (
    <div>
      <Navbar />

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
