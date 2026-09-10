import Navbar from './Pages/navbar';
// import Cards from './Pages/card';
// import Loader from './Pages/loader';
// import New from './Pages/card'
// import SideBar from "./Pages/new";
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/login";
import About from "./Pages/About";
import Product from "./Pages/Product";
import User from "./Pages/UserData";
import Contact from "./Pages/Contact";
import { TheamContext } from "./ThemeContext";
// import  Navbar  from "./Pages/navbar"; 
// import Website from "./Website";
// import Website from "./website";
// import Website from "./Pages/Web";
function App() {


// return(
// <Website/>)

















  const [darkMode, setDarkMode] = useState(false);
  return (
    <TheamContext.Provider value={{darkMode,setDarkMode}}>
    <BrowserRouter>
      <Routes>
        
        <Route  path="/" element={<><Navbar/><Outlet/></>} >
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/user" element={<User />} />
    
        {/* <Route path="/new" element={<SideBar/>} /> */}

        {/* <Route path="/user" element={<User />} /> */}

        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
    </TheamContext.Provider>
  );
}
export default App;
