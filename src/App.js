import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/navbar';
import Cards from './Pages/card';  
// import ProductList from './productlist';
import Loader from './Pages/loader';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
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
  {/* <Route path="/contact" element={<Contact />} /> */}
  </Routes>
  </BrowserRouter>
  );
  }
export default App;
