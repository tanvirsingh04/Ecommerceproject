import './login.css';
import Navbar from './navbar.js';

function Login(){
    return(

        <div>
            <Navbar/>

        <div className="logintable">
            <h1>Login</h1>
            <input type="text" placeholder="Username" className="inputusername"/>
            <input type="password" placeholder="Password" className="inputpassword"/>
            <button className="button">Login</button>
        </div>
        </div>
    )
}

export default Login;                   