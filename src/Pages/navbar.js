import './navbar.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Navbar(){
    return(
        <div className="container">
            <div className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlEJ4ZH5SSzsi3GbIu6eONpXllS3H5oQwjFQ&s" className="logo" alt=""/>
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
            </div>
            <div className='Login'>
                <h3 className='login'>Login</h3>
                <hr></hr>
                <h3 className='register'>Register</h3>
               
            </div>


        </div>
    )

    
}

export default Navbar