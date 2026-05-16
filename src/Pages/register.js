// import './login.css';        // or your CSS file
import Navbar from './navbar.js';
import './Register.css';
// import { useRef } from 'react';
import { registerUser } from './Api.js';

import React, { useState } from 'react';

function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");

    const Validate = () => {

        let newErrors = {};

        if (!formData.username) newErrors.username = "Name is Requried"
        if (!formData.email.includes("@"))
            newErrors.email = "Invalid email";
        if (formData.password.length < 6)
            newErrors.password = "Password must be 6+ chars";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!Validate()) return;
        try {
            const res = await registerUser(formData);
            setSuccess("User registered successfully!");
            console.log(res);
        } catch (err) {
            console.error(err);
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
                        onChange={handleChange}
                    />
                    <p>{errors.name}</p>
                    <input
                    className='inputemail'
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                    />
                    <p>{errors.email}</p>
                    <input
                    className='inputpassword'
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                    />
                    <p>{errors.password}</p>
                    <button type="submit" className='button'>Register</button>
                </form>
                <p className='success'>{success}</p>
            </div>
        </div>
    );

}



export default Register;


{/* // function Register() 
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [message, setMessage] = useState("");
//     const [isError, setIsError] = useState(false)

//     const handleRegister = async () => {
//         // Basic validation
//         if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
//             setMessage("All fields are required.");
//             setIsError(true);
//             return;
//         }

//         try {
//             // 1. Fetch existing users from json-server
//             const response = await fetch("http://localhost:5500/users");
//             const existingUsers = await response.json();

//             // 2. Check if username or email already exists
//             const userExists = existingUsers.some(
//                 user => user.username === username || user.email === email
//             );

//             if (userExists) {
//                 setMessage("Username or email already exists. Please login or use different credentials.");
//                 setIsError(true);
//                 return;
//             }

//             // 3. Create new user object
//             const newUser = {
//                 id: Date.now()+ "sdf",          // simple unique id
//                 username: username,
//                 email: email,
//                 password: password       // in real app, hash before sending for eg:- ("password": "$2b$10$abcXYZrandomhash...")

//             };

//             // 4. POST new user to json-server
//             const postResponse = await fetch("http://localhost:5500/users", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(newUser)
//             });

//             if (postResponse.ok) {
//                 setMessage("Registration successful! You can now login.");
//                 setIsError(false);
//                 // Clear form
//                 setUsername("");
//                 setEmail("");
//                 setPassword("");
//             } else {
//                 setMessage("Registration failed. Please try again.");
//                 setIsError(true);
//             }
//         } catch (error) {
//             console.error("Registration error:", error);
//             setMessage("Cannot connect to server. Make sure json-server is running on port 5500.");
//             setIsError(true);
//         }
//     };


// function abc(){
//     console.log("abc")
// }
// const abc = () => console.log("abc") */}