// import Navbar from "./navbar.js";
import "./Register.css";
import React, { useState } from "react";

function Register() {
  // const [userFirstName, setUserFirstName] = useState("");
  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [address, setAddress] = useState("");
  // const [street, setStreet] = useState("");
  // const [location, setLocation] = useState("");
  const [user, setUser] = useState({
    userFirstName: "",
    userName: "",
    email: "",
    password: "",
    address: "",
    street: "",
    location: "",
  });
  const [message, setMessage] = useState("");
  const [errors, setIsError] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      user.userFirstName.trim() === "" ||
      user.userName.trim() === "" ||
      user.email.trim() === "" ||
      user.password.trim() === "" ||
      user.address.trim() === "" ||
      user.street.trim() === "" ||
      user.location.trim() === ""
    ) {
      setMessage("All fields are required.");
      setIsError(true);
      return;
    }

    try {
      console.log(user);
      const postResponse = await fetch("http://localhost:9000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const result = await postResponse.json();

      if (postResponse.ok) {
        setMessage(result.message);
        setIsError(false);

        setUser({
          userFirstName: "",
          userName: "",
          email: "",
          password: "",
          address: "",
          street: "",
          location: "",
        });
      } else {
        setMessage(result.message);
        setIsError(true);
      }

      // Save user
    } catch (error) {
      console.error(error);
      setMessage("Server connection failed.");
      setIsError(true);
    }
  };

  return (
    <div className="register-page">
      {/* <Navbar /> */}

      <div className="registertable">
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          <input
            className="inputusername"
            type="text"
            name="userFirstName"
            placeholder="Name"
            value={user.userFirstName}
            onChange={handleChange}
          />
          <input
            className="inputusername"
            type="text"
            name="userName"
            placeholder="User Name"
            value={user.userName}
            onChange={handleChange}
          />

          <input
            className="inputemail"
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />

          <input
            className="inputpassword"
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
          <input
            className="inputaddress"
            type="text"
            name="address"
            placeholder="Address"
            value={user.address}
            onChange={handleChange}
          />
          <input
            className="inputstreet"
            type="text"
            name="street"
            placeholder="Street"
            value={user.street}
            onChange={handleChange}
          />
          <input
            className="inputlocation"
            type="text"
            name="location"
            placeholder="Location"
            value={user.location}
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
