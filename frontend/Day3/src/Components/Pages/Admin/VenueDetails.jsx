import { useState } from "react";
import Sidebar from "../../Utils/Sidebar";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdSave } from "react-icons/md";



const VenueDetails = () => {
  const [items, setItems] = useState([]);
  const [venue, setVenue] = useState('');
  const [location, setLocation] = useState('');
  const [capacity, setCapacity] = useState('');
  const [rate, setRate] = useState('');
  const [food, setFood] = useState('');
  const [editingItem, setEditingItem] = useState(null);


  // Create operation
  const addItem = () => {
    if (venue.trim() !== '' && location.trim() !== '' && capacity.trim() !== '' && rate.trim()) {
      setItems([...items, { id: Date.now(), venue: venue, location: location, capacity: capacity, rate: rate, food: food}]);
      setVenue('');
      setLocation('');
      setCapacity('');
      setRate('');
      setFood('');
    }
  };

  // Update operation
  const updateItem = (id, venue, location, capacity, rate, food) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, venue: venue, location: location, capacity: capacity, rate: rate, food: food };
      }
      return item;
    });
    setItems(updatedItems);
    setEditingItem(null);
  };

  // Delete operation
  const deleteItem = id => {
    const filteredItems = items.filter(item => item.id !== id);
    setItems(filteredItems);
  };

  return (
    <div style={{backgroundColor: "#f5f5f5"}} className="flex gap-6">
      <Sidebar/>
      <div className="admin-input-box">
        <div className="admin-input-head">Venue Details</div>
      <div className="admin-input-container">
        <div >
        <div className="admin-label">Venue</div>
        <input className="admin-input"
          type="text"
          value={venue}
          onChange={e => setVenue(e.target.value)}
          placeholder="Enter Venue"
        />
        </div>
        <div>
        <div className="admin-label">Location</div>
          <input className="admin-input"
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="Enter Location"
          />
        </div>

        <div>
        <div className="admin-label">Capacity</div>
        <input className="admin-input"
          type="text"
          value={capacity}
          onChange={e => setCapacity(e.target.value)}
          placeholder="Enter Hall Capacity"
        />
        </div>
        <div>
        <div className="admin-label">Rate</div>
        <input className="admin-input"
          type="text"
          value={rate}
          onChange={e => setRate(e.target.value)}
          placeholder="Enter  Rate"
        />
        </div>
        <div>
        <div className="admin-label">Food</div>
        <input className="admin-input"
          type="text"
          value={food}
          onChange={e => setFood(e.target.value)}
          placeholder="Enter Food Rate"
        />
        </div>
      </div>
      <div className="admin-button-container">
      <button className="admin-input-button" onClick={addItem}>Add Event</button>
      </div>


      <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Venue</th>
            <th>Location</th>
            <th>Capacity</th>
            <th>Rate</th>
            <th>Food</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {editingItem === item.id ? (
                  <input
                    type="text"
                    value={item.venue}
                    onChange={e => updateItem(item.id, e.target.venue, item.location, item.capacity, item.rate, item.food)}
                  />
                ) : (
                  item.venue
                )}
              </td>
              <td>
              {editingItem === item.id ? (
                  <input
                    type="text"
                    value={item.location}
                    onChange={e => updateItem(item.id, item.venue, e.target.value, item.capacity, item.rate, item.food)}
                  />
                ) : (
                  item.location
                )}
              </td>
              <td>
              {editingItem === item.id ? (
                  <input
                    type="text"
                    value={item.capacity}
                    onChange={e => updateItem(item.id, item.venue, item.location, e.target.value, item.rate, item.food)}
                  />
                ) : (
                  item.capacity
                )}
              </td>
              <td>{editingItem === item.id ? (
                  <input
                    type="text"
                    value={item.rate}
                    onChange={e => updateItem(item.id, item.venue, item.location, item.capacity, e.target.value, item.food)}
                  />
                ) : (
                  item.rate
                )}
                </td>
              <td>{editingItem === item.id ? (
                  <input
                    type="text"
                    value={item.food}
                    onChange={e => updateItem(item.id, item.venue, item.location, item.capacity, item.rate, e.target.food)}
                  />
                ) : (
                  item.food
                )}
                </td>
              <td>
                {editingItem === item.id ? (
                  <button onClick={() => updateItem(item.id, item.name, item.username, item.email, item.phone)}><MdSave size={20} color="#1c3b70" /></button>
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
  );
}

export default VenueDetails;
