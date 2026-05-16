import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Pages/navbar';
import Cards from './Pages/card';
import Loader from './Pages/loader';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/login';
import About from "./Pages/About";
import Product from './Pages/Product';
import User from './Pages/user';
function App() {
  return (
  <BrowserRouter>
  <nav> 



  {/* <Link to="/contact">Contact</Link> */}
  </nav>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/product" element={<Product />} />
  <Route path="/login" element={<Login />} />
  <Route path="/Register" element={<Register />} />
  <Route path="/user" element={<User/>} />
  {/* <Route path="/user" element={<User />} /> */}

  
  {/* <Route path="/contact" element={<Contact />} /> */}
  </Routes>
  </BrowserRouter>
  );
  }
export default App;
