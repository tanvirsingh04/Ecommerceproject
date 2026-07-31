import Navbar from "./navbar.js";
import "./Register.css";
import React, { useState } from "react";

function Register() {
  const [userFirstName, setUserFirstName] = useState("");
  const [userName, setUserName] = useState("");
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

    if (name === "userFirstName") {
      setUserFirstName(value);
    }

    if (name === "userName"){
      setUserName(value);
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
      userFirstName.trim()=== ""||
      userName.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      address.trim() === "" ||
      street.trim() === "" ||
      location.trim() === ""
    ) {
      setMessage("All fields are required.");
      setIsError(true);
      return;
    }

    try {
      // New user object
      const newUser = {
        userFirstName,
        userName,
        email,
        password,
        address,
        street,
        location,
      };
      console.log(newUser);
      

      // Save user
      const postResponse = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const result = await postResponse.json();

      if (postResponse.ok) {
        setMessage(result.message);
        setIsError(false);
        setUserFirstName("");
        setUserName("");
        setEmail("");
        setPassword("");
        setAddress("");
        setStreet("");
        setLocation("");
      } else {
        setMessage(result.message);
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

      <div className="registertable">
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          <input
            className="inputusername"
            type="text"
            name="userFirstName"
            placeholder="Name"
            value={userFirstName}
            onChange={handleChange}
          />
          <input
            className="inputusername"
            type="text"
            name="userName"
            placeholder="User Name"
            value={userName}
            onChange={handleChange}
          />

          <input
            className="inputemail"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />

          <input
            className="inputpassword"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
          <input
            className="inputaddress"
            type="text"
            name="address"
            placeholder="Address"
            value={address}
            onChange={handleChange}
          />
          <input
            className="inputstreet"
            type="text"
            name="street"
            placeholder="Street"
            value={street}
            onChange={handleChange}
          />
          <input
            className="inputlocation"
            type="text"
            name="location"
            placeholder="Location"
            value={location}
            onChange={handleChange}
          />

          <button type="submit" className="button">
            Register
          </button>
        </form>

        <p className={errors ? "error" : "success"}>{message}</p>
      </div>
    </div>
  );
}

export default Register;
