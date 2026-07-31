import './UserData.css';
import Navbar from './navbar';
// import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function User() {
    // const { username } = useParams();

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const userName = localStorage.getItem("loggedInUser");  

    useEffect(() => {
        fetch("http://localhost:8000/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    const registeredUser = users.find(
        (u) => u.userName &&
        userName &&
        u.userName.toLowerCase()=== userName.toLowerCase()
    );

    if (!registeredUser) {
        return <h2>User Not Found</h2>;
    }

    return (
        <div>
            <Navbar />

            <div className="Main">
                <div className="greetings">
                    <div>
                        <h1>Name : {registeredUser.userFirstName}</h1>
                        <h2>User Name: {registeredUser.userName}</h2>
                        <p>Email: {registeredUser.email}</p>
                        <p>Address: {registeredUser.address}</p>
                        <p>Street: {registeredUser.street}</p>
                        <p>Location: {registeredUser.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;