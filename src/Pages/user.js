import './user1.css';
import Navbar from './navbar';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function User() {
    const { username } = useParams();

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3001/users")
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
        (u) => u.username.toLowerCase() === username.toLowerCase()
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
                        <h1>{registeredUser.username}</h1>
                        <p>Email: {registeredUser.email}</p>
                        <p>Address: {registeredUser.address.address}</p>
                        <p>Street: {registeredUser.address.street}</p>
                        <p>Location: {registeredUser.address.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;