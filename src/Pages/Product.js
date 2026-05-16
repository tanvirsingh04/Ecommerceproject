import React from "react";
// import './Product.css'
import Navbar from "./navbar";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import './navbar.css';
function Product() {
const { theme, toggleTheme } = useContext(ThemeContext);
const styles = {
backgroundColor: theme === "light" ? "#fff" : "#333" ,
color: theme === "light" ? "#000" : "#fff" ,
height: "100vh" ,
textAlign: "center" ,
paddingTop: "50px"
};
return (
<div style={styles}>
<h1>{theme.toUpperCase()} MODE</h1>
<button onClick={toggleTheme}>
Switch Theme
</button>
</div>
);
}
// export default App;
export default Product;