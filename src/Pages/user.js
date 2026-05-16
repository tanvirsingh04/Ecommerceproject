import user from './user.css';
import  Navbar from './navbar';
// import { useState } from 'react';
import { useLocation } from 'react-router-dom';





function User(){
const location = useLocation();
  const username = location.state?.username || localStorage.getItem('loggedInUser');

    return(
        <div>
            <Navbar/>
        <div className="Main">
            <div className="greetings">
                <h1>
                    Welcome, {username} ! 
                </h1>
            </div>

        </div>
        </div>
    );
    
    
}

export default User