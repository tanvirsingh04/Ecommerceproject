import './register.css';
import Navbar from './navbar';

function Register() {
    return (
        <div>
            <Navbar />
            <div className='registertable'>
                <h1>Register Page</h1>
                <input type="text" placeholder="Username" className="inputusername" />
                <input type="email" placeholder="Email" className="inputemail" />
                <input type="password" placeholder="Password" className="inputpassword" />
                <button className="button">Register</button>
            </div>
        </div>
    )
}
export default Register;