import logo from './logo.svg';
// import './App.css';
import Navbar from './Pages/navbar';
import Cards from './Pages/card';  
// import ProductList from './productlist';
import Loader from './Pages/loader';
import { ThemeContext } from "./Pages/ThemeContext";
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import Register from './Pages/register';
import Login from './Pages/login';
import About from "./Pages/About";
// import Contact from "./Pages/Contact";
function App() {
  return (
  <BrowserRouter>
  <nav> 



  {/* <Link to="/contact">Contact</Link> */}
  </nav>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/product" element={<Navbar />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  
  {/* <Route path="/contact" element={<Contact />} /> */}
  </Routes>
  </BrowserRouter>
  );
  }
export default App;
