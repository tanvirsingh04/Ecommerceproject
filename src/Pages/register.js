import Navbar from './navbar.js';
import './Register.css';
import React, { useState } from 'react';

function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [street, setStreet] = useState("");
    const [location, setLocation] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setIsError] = useState(false);

    // Handle input changes
    const handleChange = (e) => {

        const { name, value } = e.target;

        if (name === "username") {
            setUsername(value);
        }

        if (name === "email") {
            setEmail(value);
        }

        if (name === "password") {
            setPassword(value);
        }
        if (name === "address") {
            setAddress(value);
        }
        if (name === "street") {
            setStreet(value);
        }
        if (name === "location") {
            setLocation(value);
        }
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (
            username.trim() === "" ||
            email.trim() === "" ||
            password.trim() === ""||
            address.trim() === "" ||
            street.trim() === "" ||
            location.trim() === ""
        ) {
            setMessage("All fields are required.");
            setIsError(true);
            return;
        }

        try {

            // Fetch existing users
            const response = await fetch("http://localhost:5000/users");
            const existingUsers = await response.json();

            // Check duplicate user
            const userExists = existingUsers.some(
                user =>
                    user.username === username ||
                    user.email === email
            );

            if (userExists) {
                setMessage("Username or email already exists.");
                setIsError(true);
                return;
            }

            // New user object
            const newUser = {
                id: Date.now().toString(),
                username,
                email,
                password,
                address:{
                    address,
                    street,
                    location
                }
                
            };

            // Save user
            const postResponse = await fetch("http://localhost:3001/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            });

            if (postResponse.ok) {

                setMessage("Registration successful!");
                setIsError(false);

                // Clear inputs
                setUsername("");
                setEmail("");
                setPassword("");
                setAddress("");
                setStreet("");
                setLocation("");

            } else {
                setMessage("Registration failed.");
                setIsError(true);
            }

        } catch (error) {

            console.error(error);

            setMessage("Server connection failed.");
            setIsError(true);
        }
    };

    return (
        <div>

            <Navbar />

            <div className='registertable'>

                <h1>Register</h1>

                <form onSubmit={handleSubmit}>

                    <input
                        className='inputusername'
                        type="text"
                        name="username"
                        placeholder="Name"
                        value={username}
                        onChange={handleChange}
                    />

                    <input
                        className='inputemail'
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                    />

                    <input
                        className='inputpassword'
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleChange}
                    />
                    <input
                        className='inputaddress'
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={address}
                        onChange={handleChange}
                    />
                    <input
                        className='inputstreet'
                        type="text"
                        name="street"
                        placeholder="Street"
                        value={street}
                        onChange={handleChange}
                    />
                    <input
                        className='inputlocation'
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={location}
                        onChange={handleChange}
                    />

                    <button
                        type="submit"
                        className='button'
                    >
                        Register
                    </button>

                </form>

                <p className={errors ? "error" : "success"}>
                    {message}
                </p>

            </div>

        </div>
    );
}

export default Register;