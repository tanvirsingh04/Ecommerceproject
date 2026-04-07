import './navbar.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";

function Navbar() {

    const [container, setDarkMode] = useState(false);
    const toggleTheme = () => {
        setDarkMode(!container);
    };

    return (
        <nav className={container ? "app dark" : "app light"}>

            <div className='container'>

                <div className="logo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlEJ4ZH5SSzsi3GbIu6eONpXllS3H5oQwjFQ&s" className="logo" alt="" />
                </div>
                <div className='menu'>
                    <ul className='navbar'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>

                    </ul>
                </div>

                <div className='search'>
                    <input type="text" placeholder='Search for products, brands and more' className='searchbar'></input>
                    <button className='togglebutton' onClick={toggleTheme}>
                        {container ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    </button>
                </div>
                <div className='Login'>
                    <li><Link to="/login" className='login'>Login</Link></li>
                    <hr></hr>
                    <li><Link to="/register" className='register'>Register</Link></li>

                </div>
            </div>




        </nav>
    )


}

export default Navbar