import "./UserData.css";
import Navbar from "./navbar";
// import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

function User() {
  // const { username } = useParams();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const userName = localStorage.getItem("loggedInUser");
  const [editData, setEditData] = useState({
    userFirstName: "",
    userName: "",
    email: "",
    address: "",
    street: "",
    location: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9000/users")
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
    (u) =>
      u.userName &&
      userName &&
      u.userName.toLowerCase() === userName.toLowerCase(),
  );

  if (!registeredUser) {
    return <h2>User Not Found</h2>;
  }

  const handleEdit = () => {
    setEditData({
      userFirstName: registeredUser.userFirstName,
      userName: registeredUser.userName,
      email: registeredUser.email,
      address: registeredUser.address,
      street: registeredUser.street,
      location: registeredUser.location,
    });

    setIsEditing(true);
  };

const handleSave = async () => {
  try {
    console.log(registeredUser.id);
    const response = await fetch(
      `http://localhost:9000/users/${registeredUser.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editData),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update user");
    }

    // Read the updated user returned from the server
    const data = await response.json();

    // Update local React state
    const updatedUsers = users.map((user) =>
      user.id === registeredUser.id ? data.user : user
    );

    setUsers(updatedUsers);
    setIsEditing(false);

    alert("User updated successfully!");

  } catch (error) {
    console.error("Update Error:", error);
    alert("Unable to update user.");
  }
};

  return (
    <div>
      <Navbar />

      <div className="Main">
        <div className="greetings">
          <div>
            {isEditing ? (
              <input
                value={editData.userFirstName}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    userFirstName: e.target.value,
                  })
                }
              />
            ) : (
              <h1>{registeredUser.userFirstName}</h1>
            )}
            {isEditing ? (
              <input
                value={editData.userName}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    userName: e.target.value,
                  })
                }
              />
            ) : (
              <h2>User Name: {registeredUser.userName}</h2>
            )}

            {isEditing ? (
              <input
                value={editData.email}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    email: e.target.value,
                  })
                }
              />
            ) : (
              <p>Email: {registeredUser.email}</p>
            )}

            {isEditing ? (
              <input
                value={editData.address}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    address: e.target.value,
                  })
                }
              />
            ) : (
              <p>Address: {registeredUser.address}</p>
            )}

            {isEditing ? (
              <input
                value={editData.street}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    street: e.target.value,
                  })
                }
              />
            ) : (
              <p>Street: {registeredUser.street}</p>
            )}

            {isEditing ? (
              <input
                value={editData.location}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    location: e.target.value,
                  })
                }
              />
            ) : (
              <p>Location: {registeredUser.location}</p>
            )}
          </div>
          {isEditing ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button onClick={handleEdit}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default User;
