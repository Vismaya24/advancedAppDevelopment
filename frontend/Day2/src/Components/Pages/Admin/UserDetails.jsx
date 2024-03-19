import { useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import Sidebar from "../../Utils/Sidebar";
import { MdSave } from "react-icons/md";


const UserDetails = () => {

  let [userData, setUserData] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  userData = [
    { id: 1, name: "John", username: "john_24", email: "john@gmail.com", phone: 8598975444 },
    { id: 2, name: "Jack", username: "jack123", email: "jack@gmail.com", phone: 8545122332 },
    { id: 3, name: "Max", username: "max_max", email: "max@gmail.com", phone: 845127623 },
    { id: 4, name: "Noah", username: "noah563", email: "noah@gmail.com", phone: 98498975444 },
    { id: 5, name: "Abel", username: "abel11", email: "abel@gmail.com", phone:89754124544 },
  ];

  const updateItem = (id, newName, newUsername, newEmail, newPhone) => {
    const updatedItems = userData.map(userData => {
      if (userData.id === id) {
        return { ...userData, name: newName, username: newUsername, email: newEmail, phone: newPhone };
      }
      return userData;
    });
    setUserData(updatedItems);
    setEditingItem(null);
  };

  const deleteItem = id => {
    const filteredItems = userData.filter(userData => userData.id !== id);
    setUserData(filteredItems);
  };


  return (
    <div style={{backgroundColor: "#f5f5f5"}} className="flex gap-6">
      <Sidebar/>
      <div >
        <div className="admin-input-head">User Details</div>

      <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {editingItem === item.id ? (
                  <input
                    type="text"
                    value={item.name}
                    onChange={e => updateItem(userData.id, e.target.value, userData.username, userData.email, userData.phone)}
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
              {editingItem === item.id ? (
                  <input
                    type="text"
                    value={item.username}
                    onChange={e => updateItem(userData.id, userData.name, e.target.value, userData.email, userData.phone)}
                  />
                ) : (
                  item.username
                )}
              </td>
              <td>
              {editingItem === item.id ? (
                  <input
                    type="text"
                    value={item.email}
                    onChange={e => updateItem(userData.id, userData.name, userData.username, e.target.value, userData.phone)}
                  />
                ) : (
                  item.email
                )}
              </td>
              <td>{editingItem === item.id ? (
                  <input
                    type="text"
                    value={item.phone}
                    onChange={e => updateItem(userData.id, userData.name, userData.username, userData.email, e.target.value)}
                  />
                ) : (
                  item.phone
                )}
                </td>
              
              
              <td>
                {editingItem === item.id ? (
                  <button onClick={() => updateItem(item.id, item.name, item.username, item.email, item.phone)}><MdSave size={20} color="#1c3b70"/></button>
                ) : (
                  <>
                    <button onClick={() => setEditingItem(item.id)}><MdModeEdit size={20} color="#1c3b70" /></button>
                    <button onClick={() => deleteItem(item.id)}><MdDelete size={20} color="#1c3b70" /></button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </div>
  )
}

export default UserDetails
