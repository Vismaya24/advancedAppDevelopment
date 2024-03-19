import { useState } from "react";
import Sidebar from "../../Utils/Sidebar";
import { MdDelete, MdModeEdit } from "react-icons/md";

const Feedback = () => {

    let [userData] = useState('');
    // const [editingItem, setEditingItem] = useState(null);

  userData = [
    { id: 1, event: "Wedding Reception", username: "john_24", email: "john@gmail.com", message: "Awesome" },
    { id: 2, event: "Corporate Party",  username: "jack123", email: "jack@gmail.com", message: "Good" },
    { id: 3, event: "Farewell",  username: "max_max", email: "max@gmail.com", message: "The party venue was amazing! Had a great time with friends." },
    { id: 4, event: "Product Launch", username: "noah563", email: "noah@gmail.com", message: "The food was delicious, but the drinks were a bit overpriced" },
    { id: 5, event: "Birthday", username: "abel11",  email: "abel@gmail.com", message: "The music selection could be improved. Overall, it was a good experience" },
  ];

  return (
    <div style={{backgroundColor: "#f5f5f5"}} className="flex gap-6">
      <Sidebar/>
      <div >
        <div className="admin-input-head">Feedback</div>

      <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Event</th>
            <th>Username</th>
            <th>Email</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {userData.map(booking => (
          <tr key={booking.id}>
            <td>{booking.id}</td>
            <td>{booking.event}</td>
            <td>{booking.username}</td>
            <td>{booking.email}</td>
            <td>{booking.message}</td>
            <td>
            <button><MdModeEdit size={20} color="#1c3b70" /></button>
            <button><MdDelete size={20} color="#1c3b70" /></button>
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

export default Feedback;
