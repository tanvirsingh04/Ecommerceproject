import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TheamContext } from "../ThemeContext";
import sunIcon from "./NavBar-Images/sun.png";
import moonIcon from "./NavBar-Images/moon.png";

function Navbar() {
  // console.log("hi");

  const { darkMode, setDarkMode } = useContext(TheamContext);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={darkMode ? "app dark" : "app light"}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlEJ4ZH5SSzsi3GbIu6eONpXllS3H5oQwjFQ&s"
        className="logo"
        alt="Ecommerce home"
      />

      <div className="menu">
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          {/* <li><Link to="/user">New</Link></li> */}
        </ul>
      </div>

      {/* <div className='search'> */}
      <input
        type="text"
        placeholder="Search for products, brands and more"
        className="searchbar"
      />
      <button
        className="togglebutton"
        type="button"
        onClick={toggleTheme}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <img
          src={darkMode ? sunIcon : moonIcon}
          alt=""
          style={{ width: "20px", height: "20px", margin: "5px auto" }}
        />
        {/* {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} */}
      </button>
      <div className="Login">
        <Link to="/login" className="login">
          Login
        </Link>
        <hr />
        <Link to="/register" className="register">
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
