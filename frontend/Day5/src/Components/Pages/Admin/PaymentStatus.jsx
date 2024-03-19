import { useState } from "react";
import Sidebar from "../../Utils/Sidebar";
import { MdDelete, MdModeEdit } from "react-icons/md";

const PaymentStatus = () => {

    let [userData] = useState('');
    // const [editingItem, setEditingItem] = useState(null);

  userData = [
    { id: 1, event: "Wedding Reception", venue: "MG Hall", rate: 51245, email: "john@gmail.com", status: "Complete" },
    { id: 2, event: "Corporate Party", venue: "V Plaza", rate: 45712, email: "jack@gmail.com", status: "Complete" },
    { id: 3, event: "Farewell",  venue: "Tivola Grand", rate: 45712, email: "max@gmail.com", status: "Incomplete" },
    { id: 4, event: "Product Launch", venue: "Luxera Grand", rate: 554125, email: "noah@gmail.com", status: "Incomplete" },
    { id: 5, event: "Birthday", venue: "Belle Grand", rate: 78451,  email: "abel@gmail.com", status: "Complete" },
  ];

  return (
    <div style={{backgroundColor: "#f5f5f5"}} className="flex gap-6">
      <Sidebar/>
      <div >
        <div className="admin-input-head">Payment Status</div>

      <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Event</th>
            <th>Venue</th>
            <th>Username</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {userData.map(booking => (
          <tr key={booking.id}>
            <td>{booking.id}</td>
            <td>{booking.event}</td>
            <td>{booking.venue}</td>
            <td>{booking.rate}</td>
            <td>{booking.email}</td>
            <td>{booking.status}</td>
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

export default PaymentStatus
