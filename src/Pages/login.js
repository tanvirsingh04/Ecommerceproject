import './login.css';
import Navbar from './navbar.js';
import React, { useState } from 'react';
import {username} from './Register.js'
import { useNavigate } from 'react-router-dom';
import Home from './Home.js';
import Aboutus from  './About.js';
import user from './user.js';



function Login() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setegisteredUser] = useState("");
    const navigate= useNavigate()

    const handleLogin = async () => {
        // Basic validation: fields not empty
        if (username.trim() === "" || password.trim() === "") {
            alert("Please enter both username and password.");
            return;
        }

        try {
            // Fetch all users from json-server (running on port 5000)
            const response = await fetch("http://localhost:5500/users");
            const users = await response.json();

            // Check if a user with matching username and password exists
            const validUser = users.find(
                user => user.username === username && user.password === password
            );

            if (validUser) {
                localStorage.setItem('loggedInUser', username);
                navigate('/welcome', { state: { username } });
                setegisteredUser(username);
                console.log(user);
                setLoggedIn(true);
                // Optionally clear fields after successful login
                setUsername("");
                setPassword("");

                navigate("/user") //Redirect to User Page.
                
            } else {
                alert("Invalid username or password. Please try again.");
                setPassword("");   // Clear password field
                setUsername("");   // Clear username field
                setLoggedIn(false);
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Could not connect to server. Make sure json-server is running on port 5000.");
            setLoggedIn(false);
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="inputpassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="button" onClick={handleLogin}>Login</button>

                {loggedIn && <p className="welcome-message">Welcome {user}</p>}
                
            </div>
        </div>
    );
}

export default Login;